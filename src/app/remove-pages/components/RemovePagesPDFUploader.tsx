'use client';

import React, { useState, useRef, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import Icon from '@/components/ui/AppIcon';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
}

const MAX_SIZE = 100 * 1024 * 1024; // 100MB

async function mergePDF(
  files: UploadedFile[],
  setProgress: (value: number) => void
): Promise<Blob> {
  const mergedPdf = await PDFDocument.create();

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    try {
      const bytes = await item.file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));

      setProgress(Math.round(((i + 1) / files.length) * 100));
    } catch (error) {
      console.error(`Failed to load ${item.name}`, error);
      throw new Error(`The file "${item.name}" is encrypted or corrupted and cannot be merged.`);
    }
  }

  const mergedBytes: any = await mergedPdf.save();
  return new Blob([mergedBytes], { type: 'application/pdf' });
}

export default function RemovePagesPDFUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isMerging, setIsMerging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [mergedBlob, setMergedBlob] = useState<Blob | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles = Array.from(newFiles).filter(
      (f) =>
        (f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) &&
        f.size <= MAX_SIZE
    );

    if (validFiles.length < newFiles.length) {
      alert(`${newFiles.length - validFiles.length} file(s) skipped (invalid type or size).`);
    }

    if (validFiles.length === 0) return;

    const uniqueFiles = validFiles.filter(
      (f) => !files.some((existing) => existing.name === f.name)
    );

    if (uniqueFiles.length === 0) return;

    const mapped: UploadedFile[] = uniqueFiles.map((f) => ({
      id: crypto.randomUUID(),
      name: f.name,
      size: f.size,
      type: f.type,
      file: f,
    }));

    setFiles((prev) => [...prev, ...mapped]);
    setIsDone(false);
  }, []);

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

  const removeFile = useCallback(
    (id: string) => {
      if (isMerging) return;
      setFiles((prev) => prev.filter((f) => f.id !== id));
      setIsDone(false);
    },
    [isMerging]
  );

  const moveFile = useCallback(
    (index: number, direction: 'up' | 'down') => {
      if (isMerging) return;
      setFiles((prev) => {
        const arr = [...prev];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        if (swapIndex < 0 || swapIndex >= arr.length) return arr;
        [arr[index], arr[swapIndex]] = [arr[swapIndex], arr[index]];
        return arr;
      });
    },
    [isMerging]
  );

  const formatSize = useCallback((bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }, []);

  const totalSize = files.reduce((acc, f) => acc + f.size, 0);

  const handleMerge = useCallback(async () => {
    if (files.length < 2) return;

    try {
      setIsMerging(true);
      setProgress(0);

      const blob = await mergePDF(files, setProgress);
      setMergedBlob(blob);
      setIsDone(true);
    } catch (err: any) {
      alert(err.message || 'Failed to merge PDFs');
    } finally {
      setIsMerging(false);
    }
  }, [files]);

  const handleReset = useCallback(() => {
    setFiles([]);
    setIsDone(false);
    setProgress(0);
    setIsMerging(false);
    setMergedBlob(null);
  }, []);

  const handleDownload = useCallback(() => {
    try {
      if (!mergedBlob) return;
      const url = URL.createObjectURL(mergedBlob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged.pdf';

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (err: any) {
      alert(err.message || 'Failed to merge PDFs');
    }
  }, [mergedBlob]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Zone */}
      {files.length === 0 && (
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
          onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          aria-label="Upload PDF files to merge"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300"
            style={{
              background: isDragging ? '#3B82F6' : '#FFF0F2',
              transform: isDragging ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon
              name="ScissorsIcon"
              size={28}
              variant="solid"
              style={
                {
                  color: isDragging ? 'white' : '#3B82F6',
                } as React.CSSProperties
              }
            />
          </div>

          <h3
            className="font-heading font-bold mb-2"
            style={{ fontSize: '18px', color: '#1A1A2E' }}
          >
            {isDragging ? 'Drop your PDFs here!' : 'Drop PDF files here'}
          </h3>

          <p
            style={{
              color: '#8888A8',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '20px',
            }}
          >
            or click to browse — supports multiple files
          </p>

          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: '#EF4444',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            <Icon name="DocumentPlusIcon" size={16} variant="solid" />
            Select PDF Files
          </div>

          <p
            style={{
              color: '#8888A8',
              fontSize: '12px',
              fontFamily: 'var(--font-body)',
              marginTop: '16px',
            }}
          >
            PDF files only · Max 100MB per file
          </p>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && !isDone && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold" style={{ fontSize: '16px', color: '#1A1A2E' }}>
              {files.length} file{files.length > 1 ? 's' : ''} selected ({formatSize(totalSize)})
            </h3>

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isMerging}
              className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                color: '#EF4444',
                background: '#FFF0F2',
                border: '1px solid #FFD6DB',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <Icon name="PlusIcon" size={14} />
              Add More
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          <div className="space-y-2 mb-5">
            {files.map((file, i) => (
              <div key={file.id} className="file-item flex items-center gap-3 p-3">
                {/* PDF Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon
                    name="DocumentIcon"
                    size={18}
                    variant="solid"
                    style={{ color: '#EF4444' } as React.CSSProperties}
                  />
                </div>

                {/* Name + Size */}
                <div className="flex-1 min-w-0">
                  <p
                    className="truncate"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      color: '#1A1A2E',
                    }}
                  >
                    {file.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      color: '#8888A8',
                    }}
                  >
                    {formatSize(file.size)}
                  </p>
                </div>

                {/* Order controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => moveFile(i, 'up')}
                    disabled={i === 0 || isMerging}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                    style={{
                      background: '#F8F8FC',
                      color: '#4A4A6A',
                      border: '1px solid #EEEEF5',
                      cursor: i === 0 ? 'not-allowed' : 'pointer',
                    }}
                    aria-label="Move up"
                  >
                    <Icon name="ChevronUpIcon" size={13} />
                  </button>

                  <button
                    onClick={() => moveFile(i, 'down')}
                    disabled={i === files.length - 1 || isMerging}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                    style={{
                      background: '#F8F8FC',
                      color: '#4A4A6A',
                      border: '1px solid #EEEEF5',
                      cursor: i === files.length - 1 ? 'not-allowed' : 'pointer',
                    }}
                    aria-label="Move down"
                  >
                    <Icon name="ChevronDownIcon" size={13} />
                  </button>

                  <button
                    onClick={() => removeFile(file.id)}
                    disabled={isMerging}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all ml-1 disabled:opacity-50"
                    style={{
                      background: '#FFF0F2',
                      color: '#EF4444',
                      border: '1px solid #FFD6DB',
                      cursor: 'pointer',
                    }}
                    aria-label="Remove file"
                  >
                    <Icon name="XMarkIcon" size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress */}
          {isMerging && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: '#4A4A6A',
                  }}
                >
                  Merging files...
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#EF4444',
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ background: '#FFD6DB' }}
              >
                <div
                  className="progress-bar h-full"
                  style={{
                    width: `${progress}%`,
                    background: '#EF4444',
                    transition: 'width 0.2s ease-out',
                  }}
                />
              </div>
            </div>
          )}

          {/* Merge Button */}
          {!isMerging && (
            <button
              onClick={handleMerge}
              disabled={files.length < 2 || isMerging}
              className="w-full py-4 rounded-2xl font-heading font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: files.length >= 2 ? '#EF4444' : '#ccc',
                color: 'white',
                fontSize: '16px',
                border: 'none',
                cursor: files.length >= 2 ? 'pointer' : 'not-allowed',
                boxShadow: files.length >= 2 ? '0 6px 20px rgba(232,68,90,0.28)' : 'none',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="DocumentPlusIcon" size={18} variant="solid" />
                Merge {files.length} PDF{files.length !== 1 ? 's' : ''}
              </span>
            </button>
          )}

          {files.length < 2 && !isMerging && (
            <p
              className="text-center mt-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#8888A8',
              }}
            >
              Add at least 2 PDF files to merge
            </p>
          )}
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="text-center py-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 pulse-anim"
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
            Merge Complete!
          </h3>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '24px',
            }}
          >
            Your {files.length} PDFs have been merged into one file.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-full"
              style={{
                background: '#EF4444',
                color: 'white',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(232,68,90,0.28)',
              }}
              onClick={handleDownload}
            >
              <Icon name="ArrowDownTrayIcon" size={18} variant="solid" />
              Download Merged PDF
            </button>

            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full"
              style={{
                background: '#F8F8FC',
                color: '#4A4A6A',
                border: '1.5px solid #EEEEF5',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              <Icon name="ArrowPathIcon" size={16} />
              Merge More Files
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
