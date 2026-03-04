'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useToast } from '@/components/ui/Toast';
import { BRAND_COLORS, PDF_CONFIG } from '@/constants/pdfConfig';
import { TOOL_COLORS } from '@/constants/toolColors';
import UploadZone from '@/components/pdf/UploadZone';
import { usePDFWorker } from '@/hooks/usePDFWorker';
import Script from 'next/script';
import JSZip from 'jszip';

const colors = TOOL_COLORS.compress;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  previewUrl?: string;
  pageCount?: number;
  isPreviewLoading?: boolean;
}

interface CompressionResult {
  name: string;
  originalSize: number;
  compressedSize: number;
  bytes: Uint8Array;
}

/**
 * Individual File Preview Card Component
 */
function FilePreviewCard({
  file,
  onRemove,
  isProcessing,
}: {
  file: UploadedFile;
  onRemove: (id: string) => void;
  isProcessing: boolean;
}) {
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      {/* Delete Button */}
      {!isProcessing && (
        <button
          onClick={() => onRemove(file.id)}
          className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white shadow-sm border border-slate-100 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Remove file"
        >
          <Icon name="TrashIcon" size={14} />
        </button>
      )}

      {/* Preview Area */}
      <div className="aspect-[4/5] bg-slate-50 border-b border-slate-100 flex items-center justify-center relative overflow-hidden bg-dot-slate-200">
        {file.isPreviewLoading ? (
          <div className="w-6 h-6 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
        ) : file.previewUrl ? (
          <img
            src={file.previewUrl}
            alt={file.name}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-slate-300">
            <Icon name="DocumentIcon" size={40} />
          </div>
        )}

        {/* Page Count Badge */}
        {file.pageCount !== undefined && (
          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border border-slate-100 text-[9px] font-bold text-slate-500 shadow-sm">
            {file.pageCount} PAGES
          </div>
        )}
      </div>

      {/* Info Area */}
      <div className="p-3 space-y-1">
        <p className="text-xs font-bold text-slate-700 truncate pr-2" title={file.name}>
          {file.name}
        </p>
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase tracking-tight">
          <span>{formatSize(file.size)}</span>
        </div>
      </div>
    </div>
  );
}

export default function CompressPDFUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [results, setResults] = useState<CompressionResult[]>([]);
  const [compressionLevel, setCompressionLevel] = useState<'recommended' | 'extreme'>(
    'recommended'
  );

  const { showToast } = useToast();
  const { processPDFs, isProcessing, progress } = usePDFWorker();

  /** Handle File Selection & Metadata Extraction */
  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
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
          isPreviewLoading: true,
        }));

        setFiles((prev) => [...prev, ...mapped]);
        setIsDone(false);
        setResults([]);
      } else if (validFiles.length > 0) {
        showToast('Files already added.', 'info');
      }
    },
    [files, showToast]
  );

  /** Preview Generation for All Files */
  useEffect(() => {
    const filesNeedingPreview = files.filter((f) => f.isPreviewLoading && !f.previewUrl);
    if (filesNeedingPreview.length === 0) return;

    let cancelled = false;

    const generatePreviews = async () => {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) return;

      if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
      }

      for (const fileItem of filesNeedingPreview) {
        if (cancelled) break;

        try {
          const bytes = await fileItem.file.arrayBuffer();
          const loadingTask = pdfjsLib.getDocument({ data: bytes });
          const pdf = await loadingTask.promise;

          const numPages = pdf.numPages;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 0.2 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;

          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/jpeg', 0.7)
          );

          if (blob && !cancelled) {
            const url = URL.createObjectURL(blob);
            setFiles((prev) =>
              prev.map((f) =>
                f.id === fileItem.id
                  ? {
                      ...f,
                      previewUrl: url,
                      pageCount: numPages,
                      isPreviewLoading: false,
                    }
                  : f
              )
            );
          }
        } catch (err) {
          console.error(`Preview error for ${fileItem.name}:`, err);
          setFiles((prev) =>
            prev.map((f) => (f.id === fileItem.id ? { ...f, isPreviewLoading: false } : f))
          );
        }
      }
    };

    generatePreviews();

    return () => {
      cancelled = true;
    };
  }, [files]);

  const removeFile = useCallback(
    (id: string) => {
      if (isProcessing) return;
      setFiles((prev) => {
        const fileToRemove = prev.find((f) => f.id === id);
        if (fileToRemove?.previewUrl) URL.revokeObjectURL(fileToRemove.previewUrl);
        return prev.filter((f) => f.id !== id);
      });
      setIsDone(false);
    },
    [isProcessing]
  );

  const formatSize = useCallback((bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }, []);

  const totalOriginalSize = useMemo(() => files.reduce((acc, f) => acc + f.size, 0), [files]);
  const totalCompressedSize = useMemo(
    () => results.reduce((acc, r) => acc + r.compressedSize, 0),
    [results]
  );
  const savingsPercent = useMemo(() => {
    if (totalOriginalSize === 0) return 0;
    const savings = totalOriginalSize - totalCompressedSize;
    if (savings <= 0) return 0;
    return Math.round((savings / totalOriginalSize) * 100);
  }, [totalOriginalSize, totalCompressedSize]);

  const handleCompress = async () => {
    if (files.length === 0) return;

    try {
      const response = await processPDFs(
        'COMPRESS_PDF',
        files.map((f) => ({ blob: f.file, name: f.name, level: compressionLevel }))
      );

      const { results: compressedResults, errors } = response as any;

      if (errors && errors.length > 0) {
        errors.forEach((err: any) => {
          const message = err.isEncrypted
            ? `"${err.fileName}" is password protected.`
            : `"${err.fileName}" could not be processed.`;
          showToast(message, 'error');
        });
      }

      if (compressedResults && compressedResults.length > 0) {
        setResults(compressedResults as CompressionResult[]);
        setIsDone(true);
        showToast(`Successfully compressed ${compressedResults.length} PDF(s)!`, 'success');
      } else {
        showToast('No files were compressed. Check for errors.', 'error');
      }
    } catch (err: any) {
      showToast(err.message || 'Failed to compress PDF', 'error');
    }
  };

  const handleReset = useCallback(() => {
    files.forEach((f) => f.previewUrl && URL.revokeObjectURL(f.previewUrl));
    setFiles([]);
    setIsDone(false);
    setResults([]);
  }, [files]);

  const handleDownload = useCallback(async () => {
    if (results.length === 0) return;

    if (results.length === 1) {
      const res = results[0];
      const blob = new Blob([res.bytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `compressed_${res.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } else {
      // Batch download via ZIP
      const zip = new JSZip();
      results.forEach((res) => {
        zip.file(`compressed_${res.name}`, res.bytes);
      });
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compressed_pdfs.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  }, [results]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs"
        type="module"
        strategy="afterInteractive"
      />

      {/* Upload Zone */}
      {files.length === 0 && (
        <div className="max-w-2xl mx-auto">
          <UploadZone
            onFilesSelected={handleFiles}
            accentColor={colors.primary}
            iconName="ArchiveBoxIcon"
          />
        </div>
      )}

      {/* Grid of Files */}
      {files.length > 0 && !isDone && (
        <div className="space-y-6">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-800">
              {files.length} PDF{files.length > 1 ? 's' : ''} to compress
            </h3>

            <div className="flex items-center gap-2">
              <button
                onClick={() => document.getElementById('grid-add-input')?.click()}
                disabled={isProcessing}
                className="flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-md disabled:opacity-50"
                style={{
                  color: colors.primary,
                  background: colors.surface,
                  border: `1.5px solid ${colors.border}`,
                }}
              >
                <Icon name="PlusIcon" size={16} />
                Add Files
              </button>
              <input
                id="grid-add-input"
                type="file"
                accept=".pdf,application/pdf"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
              <button
                onClick={handleReset}
                disabled={isProcessing}
                className="p-2.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all border border-slate-200"
                title="Clear all"
              >
                <Icon name="TrashIcon" size={18} />
              </button>
            </div>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {files.map((file) => (
              <FilePreviewCard
                key={file.id}
                file={file}
                onRemove={removeFile}
                isProcessing={isProcessing}
              />
            ))}
          </div>

          {/* Settings & Progress Section */}
          <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 shadow-inner space-y-6">
            <div className="max-w-xl mx-auto space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center flex items-center justify-center gap-2">
                  <div className="w-8 h-[1px] bg-slate-200" />
                  Choose compression level
                  <div className="w-8 h-[1px] bg-slate-200" />
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setCompressionLevel('recommended')}
                    className={`px-6 py-4 rounded-2xl border-2 text-center transition-all ${
                      compressionLevel === 'recommended'
                        ? 'bg-white border-emerald-500 shadow-lg text-emerald-600'
                        : 'bg-white/50 border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Recommended</p>
                    <p className="text-[10px] opacity-70">Optimal quality & size</p>
                  </button>
                  <button
                    onClick={() => setCompressionLevel('extreme')}
                    className={`px-6 py-4 rounded-2xl border-2 text-center transition-all ${
                      compressionLevel === 'extreme'
                        ? 'bg-white border-emerald-500 shadow-lg text-emerald-600'
                        : 'bg-white/50 border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold text-sm">Extreme</p>
                    <p className="text-[10px] opacity-70">Smallest file possible</p>
                  </button>
                </div>
              </div>

              {isProcessing ? (
                <div className="space-y-3 px-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 animate-pulse uppercase tracking-wider">
                      Processing...
                    </span>
                    <span className="text-sm font-black text-slate-700">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200 overflow-hidden p-0.5 shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-300 ease-out shadow-sm"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${colors.primary}, #34D399)`,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleCompress}
                  className="w-full py-5 rounded-2xl font-heading font-black text-lg shadow-xl hover:translate-y-[-3px] transition-all group"
                  style={{ background: colors.primary, color: 'white', boxShadow: colors.shadow }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <Icon
                      name="BoltIcon"
                      size={24}
                      variant="solid"
                      className="group-hover:animate-bounce"
                    />
                    Optimize {files.length} Document{files.length > 1 ? 's' : ''}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="max-w-2xl mx-auto text-center py-6">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50/50">
            <Icon name="CheckIcon" size={36} variant="solid" className="text-emerald-500" />
          </div>

          <h3 className="font-heading font-extrabold text-3xl mb-2 text-slate-900">Success!</h3>
          <p className="text-slate-500 mb-8 font-medium">
            Your files have been compressed effectively.
          </p>

          <div className="bg-slate-50 rounded-3xl p-8 mb-10 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] p-4 opacity-5 text-emerald-500">
              <Icon name="SparklesIcon" size={140} variant="solid" />
            </div>

            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="text-left space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Initial Size
                </p>
                <p className="text-2xl font-black text-slate-700">
                  {formatSize(totalOriginalSize)}
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">
                  Optimized Size
                </p>
                <p className="text-2xl font-black text-emerald-600">
                  {formatSize(totalCompressedSize)}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-black text-slate-700 uppercase tracking-tight">
                  Total Reduction
                </span>
              </div>
              <div className="px-5 py-2 bg-emerald-500 text-white rounded-xl text-lg font-black shadow-lg shadow-emerald-500/30">
                Saved {savingsPercent}%
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl font-heading font-black text-lg shadow-xl hover:translate-y-[-4px] transition-all group"
              style={{ background: colors.primary, color: 'white', boxShadow: colors.shadow }}
            >
              <div className="flex items-center justify-center gap-2.5">
                <Icon
                  name="ArrowDownTrayIcon"
                  size={24}
                  variant="solid"
                  className="group-hover:translate-y-1 transition-transform"
                />
                {results.length > 1 ? 'Download Zip' : 'Download PDF'}
              </div>
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-heading font-bold text-lg transition-all hover:bg-slate-100"
              style={{
                background: BRAND_COLORS.secondarySurface,
                color: BRAND_COLORS.secondary,
                border: `1.5px solid ${BRAND_COLORS.secondaryBorder}`,
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="ArrowPathIcon" size={20} />
                Try More
              </div>
            </button>
          </div>

          <p className="mt-10 text-[11px] font-bold text-slate-400 flex items-center justify-center gap-2 uppercase tracking-wide">
            <Icon name="ShieldCheckIcon" size={16} className="text-emerald-400" />
            Secure high-grade encryption. All files deleted in 60m.
          </p>
        </div>
      )}
    </div>
  );
}
