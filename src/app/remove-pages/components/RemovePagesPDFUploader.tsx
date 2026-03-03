'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import Icon from '@/components/ui/AppIcon';

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
  pageIndex: number;
  url: string;
  deleted?: boolean;
}

const MAX_SIZE = 100 * 1024 * 1024; // 100MB

export default function RemovePagesPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [thumbnails, setThumbnails] = useState<PageThumbnail[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  /** Handle File Upload (Single File Only) */
  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles || newFiles.length === 0) return;

      const f = newFiles[0];

      if (
        !(f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) ||
        f.size > MAX_SIZE
      ) {
        alert('Invalid file type or file too large (max 100MB).');
        return;
      }

      try {
        // Cleanup old thumbnails
        thumbnails.forEach((t) => URL.revokeObjectURL(t.url));
        setThumbnails([]);

        const arrayBuffer = await f.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);

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
        alert('Failed to read PDF file.');
      }
    },
    [thumbnails]
  );

  /** Drag & Drop */
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      dragCounter.current = 0;
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  /** Generate Thumbnails */

  /** Lazy thumbnail generator effect */
  useEffect(() => {
    if (!file) return;

    let cancelled = false;
    const loadedThumbs: PageThumbnail[] = [];

    const generateThumbnailsLazy = async () => {
      try {
        const bytes = await file.file.arrayBuffer();
        const pdfjsLib = (window as any).pdfjsLib;
        if (!pdfjsLib) return;

        if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
        }

        const loadingTask = pdfjsLib.getDocument({ data: bytes });
        const pdf = await loadingTask.promise;

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) break;

          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 0.5 });

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
          const thumb: PageThumbnail = { id: crypto.randomUUID(), pageIndex: i - 1, url };
          loadedThumbs.push(thumb);

          // update thumbnails progressively
          setThumbnails([...loadedThumbs]);

          // optional small delay to prevent UI freeze
          await new Promise((r) => setTimeout(r, 10));
        }
      } catch (err) {
        console.error(err);
      }
    };

    generateThumbnailsLazy();

    return () => {
      cancelled = true;
      loadedThumbs.forEach((t) => URL.revokeObjectURL(t.url));
    };
  }, [file]);

  /** Remove Single Page */
  const removePage = useCallback((pageIndex: number) => {
    setThumbnails((prev) =>
      prev.map((t) => (t.pageIndex === pageIndex ? { ...t, deleted: true } : t))
    );
  }, []);

  const restorePage = useCallback((pageIndex: number) => {
    setThumbnails((prev) =>
      prev.map((t) => (t.pageIndex === pageIndex ? { ...t, deleted: false } : t))
    );
  }, []);

  /** Remove Entire File */
  const removeFile = useCallback(() => {
    thumbnails.forEach((t) => URL.revokeObjectURL(t.url));
    setThumbnails([]);
    setFile(null);
    setIsDone(false);
  }, [thumbnails]);

  /** Generate Final PDF */
  const handleRemovePages = useCallback(async () => {
    if (!file) return;

    const mergedPdf = await PDFDocument.create();
    const bytes = await file.file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);

    const pagesToKeep = thumbnails
      .filter((t) => !t.deleted)
      .map((t) => t.pageIndex)
      .sort((a, b) => a - b);

    if (pagesToKeep.length === 0) {
      alert('No pages selected.');
      return;
    }

    const copiedPages = await mergedPdf.copyPages(pdf, pagesToKeep);
    copiedPages.forEach((page) => mergedPdf.addPage(page));

    const finalBytes: any = await mergedPdf.save();
    const blob = new Blob([finalBytes], { type: 'application/pdf' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modified.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(url), 100);
    setIsDone(true);
  }, [file, thumbnails]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Upload Zone (Styled Like Merge) */}
      {!file && (
        <div
          className={`upload-zone ${isDragging ? 'drag-over' : ''}`}
          style={{ padding: '60px 24px', textAlign: 'center' }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              fileInputRef.current?.click();
            }
          }}
          aria-label="Upload PDF file to remove pages"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300"
            style={{
              background: isDragging ? '#E8445A' : '#FFF0F2',
              transform: isDragging ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon
              name="DocumentIcon"
              size={28}
              variant="solid"
              style={
                {
                  color: isDragging ? 'white' : '#E8445A',
                } as React.CSSProperties
              }
            />
          </div>

          <h3
            className="font-heading font-bold mb-2"
            style={{ fontSize: '18px', color: '#1A1A2E' }}
          >
            {isDragging ? 'Drop your PDF here!' : 'Drop PDF file here'}
          </h3>

          <p
            style={{
              color: '#8888A8',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '20px',
            }}
          >
            or click to browse — single file only
          </p>

          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: '#E8445A',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            <Icon name="DocumentPlusIcon" size={16} variant="solid" />
            Select PDF File
          </div>

          <p
            style={{
              color: '#8888A8',
              fontSize: '12px',
              fontFamily: 'var(--font-body)',
              marginTop: '16px',
            }}
          >
            PDF only · Max 100MB
          </p>
        </div>
      )}

      {/* File Loaded */}
      {file && !isDone && (
        <div>
          {/* File Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold" style={{ fontSize: '16px', color: '#1A1A2E' }}>
              {file.name} ({file.pageCount} pages)
            </h3>

            <button
              onClick={removeFile}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: '#FFF0F2',
                color: '#E8445A',
                border: '1px solid #FFD6DB',
              }}
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-3 mb-6">
            {Array.from({ length: file.pageCount }).map((_, i) => {
              const thumb = thumbnails.find((t) => t.pageIndex === i);
              if (!thumb) {
                return (
                  <div
                    key={i}
                    className="rounded-xl animate-pulse"
                    style={{
                      width: 100,
                      height: 140,
                      background: '#F8F8FC',
                    }}
                  />
                );
              }

              return (
                <div
                  key={thumb.id}
                  className="relative border rounded-xl overflow-hidden transition-all"
                  style={{
                    width: 100,
                    height: 140,
                    opacity: thumb.deleted ? 0.4 : 1,
                  }}
                >
                  <img
                    src={thumb.url}
                    alt={`Page ${i + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay when deleted */}
                  {thumb.deleted && (
                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: '#E8445A',
                          background: 'white',
                          padding: '2px 6px',
                          borderRadius: 6,
                        }}
                      >
                        Deleted
                      </span>
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    onClick={() => (thumb.deleted ? restorePage(i) : removePage(i))}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: thumb.deleted ? '#16A34A' : '#E8445A',
                      color: 'white',
                      fontSize: '12px',
                    }}
                  >
                    {thumb.deleted ? '↺' : '×'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <button
            onClick={handleRemovePages}
            disabled={thumbnails.length === 0}
            className="w-full py-4 rounded-2xl font-heading font-bold text-base transition-all disabled:opacity-50"
            style={{
              background: thumbnails.length > 0 ? '#E8445A' : '#ccc',
              color: 'white',
              fontSize: '16px',
              border: 'none',
              boxShadow: thumbnails.length > 0 ? '0 6px 20px rgba(232,68,90,0.28)' : 'none',
            }}
          >
            Remove Selected Pages & Download
          </button>

          <p
            className="text-center mt-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: '#8888A8',
            }}
          >
            {thumbnails.length} / {file.pageCount} pages remaining
          </p>
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="text-center py-10">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: '#F0FDF4' }}
          >
            <Icon
              name="CheckIcon"
              size={28}
              variant="solid"
              style={{ color: '#16A34A' } as React.CSSProperties}
            />
          </div>

          <h3
            className="font-heading font-bold mb-2"
            style={{ fontSize: '20px', color: '#1A1A2E' }}
          >
            PDF Updated Successfully!
          </h3>

          <button
            onClick={removeFile}
            className="mt-4 px-6 py-3 rounded-full"
            style={{
              background: '#F8F8FC',
              color: '#4A4A6A',
              border: '1.5px solid #EEEEF5',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
            }}
          >
            Modify Another File
          </button>
        </div>
      )}
    </div>
  );
}
