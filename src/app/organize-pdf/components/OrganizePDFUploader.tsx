'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import Icon from '@/components/ui/AppIcon';
import { TOOL_COLORS } from '@/constants/toolColors';
import Script from 'next/script';
import { useToast } from '@/components/ui/Toast';
import { isEncryptedPDF } from '@/utils/pdf';
import UploadZone from '@/components/pdf/UploadZone';

const colors = TOOL_COLORS.organize;

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
  originalIndex: number; // Index in the original PDF
  url: string;
  rotation: number; // 0, 90, 180, 270
  deleted: boolean;
  width: number;
  height: number;
}

const MAX_SIZE = 100 * 1024 * 1024; // 100MB

export default function OrganizePDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [pages, setPages] = useState<PageThumbnail[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const { showToast } = useToast();

  /** Handle File Upload */
  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles || newFiles.length === 0) return;

      const f = newFiles[0]; // Single file for organization tool

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
          showToast('This PDF is password-protected. Please unlock it first.', 'error', {
            text: 'Unlock PDF',
            href: '/unlock-pdf',
          });
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
            deleted: false,
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

  const revertRotate = (index: number) => {
    setPages((prev) => prev.map((p, i) => (i === index ? { ...p, rotation: 0 } : p)));
  };

  const toggleDelete = (index: number) => {
    setPages((prev) => prev.map((p, i) => (i === index ? { ...p, deleted: !p.deleted } : p)));
  };

  const movePage = (index: number, direction: 'up' | 'down') => {
    setPages((prev) => {
      const arr = [...prev];
      const target = direction === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= arr.length) return arr;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      setDraggedIdx(null);
      return arr;
    });
  };

  /** Drag & Drop Reordering */
  const onDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent, index: number) => {
    if (draggedIdx === null || draggedIdx === index) return;
    e.preventDefault();
  };

  const onDropPage = (e: React.DragEvent, index: number) => {
    if (draggedIdx === null || draggedIdx === index) return;
    e.preventDefault();
    setPages((prev) => {
      const arr = [...prev];
      const item = arr.splice(draggedIdx, 1)[0];
      arr.splice(index, 0, item);
      return arr;
    });
    setDraggedIdx(null);
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
  const handleOrganize = async () => {
    if (!file || pages.length === 0) return;

    const pagesToKeep = pages.filter((p) => !p.deleted);
    if (pagesToKeep.length === 0) {
      alert('You must keep at least one page.');
      return;
    }

    try {
      setIsProcessing(true);
      setProgress(0);

      const arrayBuffer = await file.file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const targetPdf = await PDFDocument.create();

      for (let i = 0; i < pagesToKeep.length; i++) {
        const p = pagesToKeep[i];
        const [copiedPage] = await targetPdf.copyPages(sourcePdf, [p.originalIndex]);

        // Apply rotation
        if (p.rotation !== 0) {
          const currentRotation = copiedPage.getRotation().angle;
          copiedPage.setRotation(degrees(currentRotation + p.rotation));
        }

        targetPdf.addPage(copiedPage);
        setProgress(Math.round(((i + 1) / pagesToKeep.length) * 100));
      }

      const pdfBytes = await targetPdf.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `organized_${file.name}`;
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
    <div className="w-full max-w-2xl mx-auto">
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
          iconName="Squares2X2Icon"
          title="Drop PDF file here"
          subtitle="or click to browse — single file for organization"
          buttonText="Select PDF File"
          dragTitle="Drop your PDF here!"
        />
      )}

      {/* Page List View */}
      {file && !isDone && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="text-left">
              <h3 className="font-heading font-bold" style={{ fontSize: '16px', color: '#1A1A2E' }}>
                {file.name}
              </h3>
              <p style={{ fontSize: '12px', color: '#8888A8' }}>
                {file.pageCount} pages · {formatSize(file.size)}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              style={{
                color: colors.primary,
                background: colors.surface,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Icon name="ArrowPathIcon" size={14} />
              Reset
            </button>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
            {pages.length === 0
              ? Array.from({ length: file.pageCount }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-slate-50 animate-pulse border border-slate-100"
                  />
                ))
              : pages.map((page, i) => {
                  return (
                    <div
                      key={page.id}
                      draggable
                      onDragStart={(e) => onDragStart(e, i)}
                      onDragOver={(e) => onDragOver(e, i)}
                      onDrop={(e) => onDropPage(e, i)}
                      className={`relative border rounded-xl overflow-hidden transition-all duration-200 cursor-move group ${
                        draggedIdx === i ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                      }`}
                      style={{
                        borderColor: page.deleted
                          ? '#FECACA'
                          : page.rotation !== 0
                            ? colors.primary
                            : '#EEEEF5',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        borderWidth: page.rotation !== 0 ? '2px' : '1px',
                      }}
                    >
                      {/* Thumbnail Image Container */}
                      <div
                        className={`aspect-square flex items-center justify-center bg-slate-50/50 transition-transform duration-300 ${
                          page.deleted ? 'grayscale opacity-30' : ''
                        }`}
                      >
                        <img
                          src={page.url}
                          alt={`Page ${i + 1}`}
                          className="w-full h-full object-contain transition-transform duration-300"
                          style={{
                            transform: `rotate(${page.rotation}deg)`,
                            // If rotated, we might need to adjust aspect to preserve visual scale
                            // but object-contain usually handles the fit.
                          }}
                        />
                      </div>

                      {/* Page Number Badge */}
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-white/90 border border-slate-100 shadow-sm flex items-center gap-x-1.5">
                        <span className="text-[10px] font-bold text-slate-600">Page {i + 1}</span>
                        {file.pageCount > 1 && (
                          <span className="text-[9px] text-slate-400 font-medium">
                            (Orig. {page.originalIndex + 1})
                          </span>
                        )}
                        {page.rotation !== 0 && (
                          <span
                            className="text-[10px] font-extrabold ml-0.5"
                            style={{ color: colors.primary }}
                          >
                            {page.rotation}°
                          </span>
                        )}
                      </div>

                      {/* Action Overlay */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            rotatePage(i);
                          }}
                          className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:scale-110 transition-transform"
                          title="Rotate 90°"
                        >
                          <Icon name="ArrowPathIcon" size={14} />
                        </button>
                        {page.rotation !== 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              revertRotate(i);
                            }}
                            className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-slate-500 hover:scale-110 transition-transform border border-slate-100"
                            title="Revert Rotate"
                          >
                            <Icon name="ArrowUturnLeftIcon" size={12} />
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDelete(i);
                          }}
                          className={`w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 ${
                            page.deleted ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}
                          title={page.deleted ? 'Restore Page' : 'Remove Page'}
                        >
                          <Icon name={page.deleted ? 'PlusIcon' : 'XMarkIcon'} size={14} />
                        </button>
                      </div>

                      {/* Deleted Overlay */}
                      {page.deleted && (
                        <div className="absolute inset-0 bg-red-50/20 pointer-events-none flex items-center justify-center">
                          <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider bg-white px-2 py-1 rounded-md shadow-sm border border-red-100">
                            Deleted
                          </span>
                        </div>
                      )}

                      {/* Rotated Badge */}
                      {page.rotation !== 0 && !page.deleted && (
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

          {/* Organize Button */}
          {!isProcessing && (
            <button
              onClick={handleOrganize}
              className="w-full py-4 rounded-2xl font-heading font-bold text-base shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0"
              style={{
                background: colors.primary,
                color: 'white',
                boxShadow: colors.shadow,
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="Squares2X2Icon" size={20} variant="solid" />
                Organize PDF
              </div>
            </button>
          )}

          <p className="mt-4 text-center text-xs text-slate-400 font-body">
            You can reorder pages by dragging them. Click rotate to turn or x to remove.
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
            Organization Complete!
          </h3>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Your PDF has been reordered, rotated, and cleaned up exactly as you requested.
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
              Organize Another
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
