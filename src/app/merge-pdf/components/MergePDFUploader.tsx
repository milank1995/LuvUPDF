'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useToast } from '@/components/ui/Toast';
import { BRAND_COLORS, PDF_CONFIG, UI_STYLES } from '@/constants/pdfConfig';
import UploadZone from '@/components/pdf/UploadZone';
import FileListItem from '@/components/pdf/FileListItem';
import { usePDFWorker } from '@/hooks/usePDFWorker';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
}

export default function MergePDFUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [mergedBlob, setMergedBlob] = useState<Blob | null>(null);

  const { showToast } = useToast();
  const { processPDFs, isProcessing, progress } = usePDFWorker();

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const validFiles = Array.from(newFiles).filter(
        (f) =>
          (f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) &&
          f.size <= PDF_CONFIG.MAX_FILE_SIZE
      );

      if (validFiles.length < newFiles.length) {
        showToast(
          `${newFiles.length - validFiles.length} file(s) skipped (invalid type or size).`,
          'error'
        );
      }

      const uniqueFiles = validFiles.filter(
        (f) => !files.some((existing) => existing.name === f.name)
      );

      if (uniqueFiles.length > 0) {
        const mapped: UploadedFile[] = uniqueFiles.map((f) => ({
          id: crypto.randomUUID(),
          name: f.name,
          size: f.size,
          type: f.type,
          file: f,
        }));

        setFiles((prev) => [...prev, ...mapped]);
        setIsDone(false);
      } else if (validFiles.length > 0) {
        showToast('Files already added.', 'info');
      }
    },
    [files, showToast]
  );

  const removeFile = useCallback(
    (id: string) => {
      if (isProcessing) return;
      setFiles((prev) => prev.filter((f) => f.id !== id));
      setIsDone(false);
    },
    [isProcessing]
  );

  const moveFile = useCallback(
    (index: number, direction: 'up' | 'down') => {
      if (isProcessing) return;
      setFiles((prev) => {
        const arr = [...prev];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        if (swapIndex < 0 || swapIndex >= arr.length) return arr;
        [arr[index], arr[swapIndex]] = [arr[swapIndex], arr[index]];
        return arr;
      });
    },
    [isProcessing]
  );

  const formatSize = useCallback((bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }, []);

  const totalSize = useMemo(() => files.reduce((acc, f) => acc + f.size, 0), [files]);

  const handleMerge = async () => {
    if (files.length < 2) return;

    try {
      const { blob, errors } = await processPDFs(
        'MERGE_PDFS',
        files.map((f) => ({ blob: f.file, name: f.name }))
      );

      if (errors.length > 0) {
        errors.forEach((err) => {
          const message = err.isEncrypted
            ? `"${err.fileName}" is password protected and was skipped.`
            : `"${err.fileName}" is corrupted/invalid and was skipped.`;
          const link = err.isEncrypted
            ? { text: 'Unlock this PDF', href: '/unlock-pdf' }
            : undefined;
          showToast(message, 'error', link);
        });

        // Remove invalid files
        const errorFileNames = new Set(errors.map((e) => e.fileName));
        setFiles((prev) => prev.filter((f) => !errorFileNames.has(f.name)));
      }

      const successfulFilesCount = files.length - errors.length;

      if (blob && successfulFilesCount >= 2) {
        setMergedBlob(blob);
        setIsDone(true);
        showToast(
          errors.length === 0
            ? 'All PDFs merged successfully!'
            : `Merged ${successfulFilesCount} files.`,
          errors.length === 0 ? 'success' : 'info'
        );
      } else {
        showToast('At least 2 valid PDF files are required for merging.', 'error');
      }
    } catch (err: any) {
      showToast(err.message || 'Failed to merge PDFs', 'error');
    }
  };

  const handleReset = useCallback(() => {
    setFiles([]);
    setIsDone(false);
    setMergedBlob(null);
  }, []);

  const handleDownload = useCallback(() => {
    if (!mergedBlob) return;
    const url = URL.createObjectURL(mergedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }, [mergedBlob]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Zone */}
      {files.length === 0 && <UploadZone onFilesSelected={handleFiles} />}

      {/* File List */}
      {files.length > 0 && !isDone && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3
              className="font-heading font-bold"
              style={{ fontSize: '16px', color: BRAND_COLORS.text.dark }}
            >
              {files.length} file{files.length > 1 ? 's' : ''} selected ({formatSize(totalSize)})
            </h3>

            <button
              onClick={() => document.getElementById('add-more-input')?.click()}
              disabled={isProcessing}
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all disabled:opacity-50"
              style={{
                color: BRAND_COLORS.primary,
                background: BRAND_COLORS.primarySurface,
                border: `1px solid ${BRAND_COLORS.primaryBorder}`,
                fontFamily: 'var(--font-heading)',
              }}
            >
              <Icon name="PlusIcon" size={14} />
              Add More
            </button>

            <input
              id="add-more-input"
              type="file"
              accept=".pdf,application/pdf"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          <div className="space-y-2 mb-5">
            {files.map((file, i) => (
              <FileListItem
                key={file.id}
                id={file.id}
                name={file.name}
                size={formatSize(file.size)}
                index={i}
                totalFiles={files.length}
                isMerging={isProcessing}
                onRemove={removeFile}
                onMove={moveFile}
              />
            ))}
          </div>

          {/* Progress Overlay */}
          {isProcessing && (
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
                    color: '#E8445A',
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
                    background: '#E8445A',
                    transition: 'width 0.2s ease-out',
                  }}
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          {!isProcessing && (
            <button
              onClick={handleMerge}
              disabled={files.length < 2}
              className="w-full py-4 rounded-2xl font-heading font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: files.length >= 2 ? '#E8445A' : '#ccc',
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

          {files.length < 2 && !isProcessing && (
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full"
              style={{
                background: '#E8445A',
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
              onClick={() => setIsDone(false)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full"
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
              <Icon name="PencilSquareIcon" size={17} />
              Edit Selection
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-full transition-opacity hover:opacity-70"
              style={{
                background: 'transparent',
                color: '#8888A8',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              <Icon name="ArrowPathIcon" size={15} />
              Start Fresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
