'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import Icon from '@/components/ui/AppIcon';
import { TOOL_COLORS } from '@/constants/toolColors';
import Script from 'next/script';
import UploadZone from '@/components/pdf/UploadZone';
import { useToast } from '@/components/ui/Toast';

const colors = TOOL_COLORS.rotate;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  pageCount: number;
}

interface PageThumbnail {
  id: string;
  originalIndex: number;
  url: string;
  rotation: number; // 0, 90, 180, 270
  width: number;
  height: number;
}

const MAX_SIZE = 100 * 1024 * 1024; // 100MB

export default function RotatePDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [pages, setPages] = useState<PageThumbnail[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const { showToast } = useToast();

  /** Lightweight check: scan PDF bytes for the /Encrypt dictionary */
  const isEncryptedPDF = async (file: File): Promise<boolean> => {
    const chunkSize = Math.min(file.size, 65536);
    const tailBuffer = await file.slice(file.size - chunkSize).arrayBuffer();
    const tail = new Uint8Array(tailBuffer);

    const headBuffer = await file.slice(0, Math.min(file.size, 2048)).arrayBuffer();
    const head = new Uint8Array(headBuffer);

    const searchBytes = (buf: Uint8Array, pattern: Uint8Array): boolean => {
      outer: for (let i = 0; i <= buf.length - pattern.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
          if (buf[i + j] !== pattern[j]) continue outer;
        }
        return true;
      }
      return false;
    };

    const encryptPattern = new TextEncoder().encode('/Encrypt');
    return searchBytes(tail, encryptPattern) || searchBytes(head, encryptPattern);
  };

  /** Handle File Upload */
  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles || newFiles.length === 0) return;

      const f = newFiles[0];

      if (
        !(f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) ||
        f.size > MAX_SIZE
      ) {
        showToast('Invalid file type or file too large (max 100MB).', 'error');
        return;
      }

      try {
        // Pre-flight: check for encryption
        const alreadyEncrypted = await isEncryptedPDF(f);
        if (alreadyEncrypted) {
          showToast(
            'This PDF is password-protected. Please unlock it first.',
            'error',
            { text: 'Unlock PDF', href: '/unlock-pdf' }
          );
          return;
        }

        // Cleanup old thumbnails
        pages.forEach((p) => URL.revokeObjectURL(p.url));
        setPages([]);

        const arrayBuffer = await f.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

        setFile({
          id: crypto.randomUUID(),
          name: f.name,
          size: f.size,
          type: f.type,
          file: f,
          pageCount: pdfDoc.getPageCount(),
        });

        setIsDone(false);
      } catch (err) {
        console.error('Error reading PDF:', err);
        alert('Failed to read PDF file. It might be password protected.');
      }
    },
    [pages]
  );

  /** Lazy Thumbnail Generation */
  useEffect(() => {
    if (!file) return;

    let cancelled = false;
    const loadedPages: PageThumbnail[] = [];

    const generateThumbnails = async () => {
      try {
        const bytes = await file.file.arrayBuffer();
        const pdfjsLib = (window as any).pdfjsLib;
        if (!pdfjsLib) {
          console.error('pdfjsLib not found');
          return;
        }

        if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
        }

        const loadingTask = pdfjsLib.getDocument({ data: bytes });
        const pdf = await loadingTask.promise;

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) break;

          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 0.4 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;

          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/jpeg', 0.8)
          );
          if (!blob) continue;

          const url = URL.createObjectURL(blob);
          const p: PageThumbnail = {
            id: crypto.randomUUID(),
            originalIndex: i - 1,
            url,
            rotation: 0,
            width: viewport.width,
            height: viewport.height,
          };
          loadedPages.push(p);

          setPages([...loadedPages]);
          await new Promise((r) => setTimeout(r, 10));
        }
      } catch (err) {
        console.error('Thumbnail generation error:', err);
      }
    };

    generateThumbnails();

    return () => {
      cancelled = true;
      loadedPages.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [file]);

  /** Page Actions */
  const rotatePage = (index: number) => {
    setPages((prev) =>
      prev.map((p, i) => (i === index ? { ...p, rotation: (p.rotation + 90) % 360 } : p))
    );
  };

  const rotateAll = () => {
    setPages((prev) => prev.map((p) => ({ ...p, rotation: (p.rotation + 90) % 360 })));
  };

  const resetAll = () => {
    setPages((prev) => prev.map((p) => ({ ...p, rotation: 0 })));
  };

  /** Main Drag & Drop Handlers */
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) setIsDragging(false);
  };

  const handleDropRoot = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  /** Final PDF Processing */
  const handleRotate = async () => {
    if (!file || pages.length === 0) return;

    try {
      setIsProcessing(true);
      setProgress(0);

      const arrayBuffer = await file.file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const targetPdf = await PDFDocument.create();

      const pageCount = sourcePdf.getPageCount();
      for (let i = 0; i < pageCount; i++) {
        const [copiedPage] = await targetPdf.copyPages(sourcePdf, [i]);
        const p = pages[i];

        // Apply rotation if needed
        if (p && p.rotation !== 0) {
          const currentRotation = copiedPage.getRotation().angle;
          copiedPage.setRotation(degrees(currentRotation + p.rotation));
        }

        targetPdf.addPage(copiedPage);
        setProgress(Math.round(((i + 1) / pageCount) * 100));
      }

      const pdfBytes = await targetPdf.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rotated_${file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => URL.revokeObjectURL(url), 100);
      setIsDone(true);
    } catch (err) {
      console.error('PDF processing error:', err);
      alert('Failed to process PDF.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPages([]);
    setIsDone(false);
    setProgress(0);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs"
        type="module"
        strategy="afterInteractive"
      />

      {/* Upload Zone */}
      {!file && (
        <UploadZone
          onFilesSelected={handleFiles}
          multiple={false}
          accentColor={colors.primary}
          iconName="ArrowPathIcon"
        />
      )}

      {/* Page List View */}
      {file && !isDone && (
        <div>
          <div className="flex flex-col gap-4 mb-6">
            <div className="text-left w-full">
              <h3 className="font-heading font-bold" style={{ fontSize: '18px', color: '#1A1A2E' }}>
                {file.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#8888A8' }}>
                {file.pageCount} pages · {formatSize(file.size)}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full">
              <button
                onClick={rotateAll}
                className="flex items-center justify-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 bg-amber-500 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Icon name="ArrowPathIcon" size={15} variant="solid" />
                Rotate All
              </button>
              <button
                onClick={resetAll}
                className="flex items-center justify-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 border border-slate-200 bg-white text-slate-600"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Icon name="ArrowUturnLeftIcon" size={14} />
                Reset All
              </button>
              <div className="hidden xs:block w-[1px] h-6 bg-slate-200 mx-1"></div>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-all hover:bg-red-50 text-red-500 active:scale-95"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Icon name="TrashIcon" size={15} />
                Clear
              </button>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
            {pages.length === 0
              ? Array.from({ length: file.pageCount }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-xl bg-slate-50 animate-pulse border border-slate-100"
                />
              ))
              : pages.map((page, i) => {
                return (
                  <div
                    key={page.id}
                    className="relative border rounded-xl overflow-hidden transition-all duration-200 group bg-white"
                    style={{
                      borderColor: page.rotation !== 0 ? colors.primary : '#EEEEF5',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      borderWidth: page.rotation !== 0 ? '2px' : '1px',
                    }}
                  >
                    {/* Thumbnail Image Container */}
                    <div className="aspect-[3/4] flex items-center justify-center bg-slate-50/50 p-2">
                      <img
                        src={page.url}
                        alt={`Page ${i + 1}`}
                        className="w-full h-full object-contain transition-transform duration-300"
                        style={{
                          transform: `rotate(${page.rotation}deg)`,
                        }}
                      />
                    </div>

                    {/* Page Number & Orientation Badge */}
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-white/95 border border-slate-100 shadow-sm flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-slate-600">Page {i + 1}</span>
                      <div className="w-[1px] h-3 bg-slate-200" />
                      <div
                        className="flex items-center gap-1"
                        title={
                          page.width > page.height ? 'Original: Landscape' : 'Original: Portrait'
                        }
                      >
                        <Icon
                          name={
                            page.width > page.height ? 'RectangleGroupIcon' : 'RectangleStackIcon'
                          }
                          size={10}
                          className="text-slate-400"
                        />
                      </div>
                      {page.rotation !== 0 && (
                        <span
                          className="text-[10px] font-extrabold"
                          style={{ color: colors.primary }}
                        >
                          {page.rotation}°
                        </span>
                      )}
                    </div>

                    {/* Action Overlay */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => rotatePage(i)}
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:scale-110 transition-transform active:rotate-45"
                        title="Rotate 90°"
                      >
                        <Icon name="ArrowPathIcon" size={14} />
                      </button>
                    </div>

                    {/* Rotated Badge */}
                    {page.rotation !== 0 && (
                      <div className="absolute top-2 left-2 pointer-events-none">
                        <div
                          className="text-[9px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm"
                          style={{ background: colors.primary }}
                        >
                          Rotated
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Processing PDF...</span>
                <span className="text-sm font-bold" style={{ color: colors.primary }}>
                  {progress}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{ width: `${progress}%`, background: colors.primary }}
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          {!isProcessing && (
            <button
              onClick={handleRotate}
              className="w-full py-4 rounded-2xl font-heading font-bold text-base shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0"
              style={{
                background: colors.primary,
                color: 'white',
                boxShadow: colors.shadow,
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="ArrowPathIcon" size={20} variant="solid" />
                Rotate PDF
              </div>
            </button>
          )}

          <p className="mt-4 text-center text-xs text-slate-400 font-body">
            You can rotate all pages at once or click individual pages to rotate them 90° clockwise.
          </p>
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="text-center py-12">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: '#F0FDF4' }}
          >
            <Icon
              name="CheckIcon"
              size={32}
              variant="solid"
              style={{ color: '#16A34A' } as React.CSSProperties}
            />
          </div>

          <h3 className="font-heading font-extrabold text-2xl mb-3 text-slate-900">
            Rotation Complete!
          </h3>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Your PDF pages have been rotated exactly as you requested.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm transition-all"
              style={{
                background: colors.surface,
                color: colors.primary,
                border: `1.5px solid ${colors.border}`,
              }}
            >
              Rotate Another
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-all font-heading"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
