'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import Icon from '@/components/ui/AppIcon';
import { useToast } from '@/components/ui/Toast';
import { BRAND_COLORS, PDF_CONFIG } from '@/constants/pdfConfig';
import UploadZone from '@/components/pdf/UploadZone';

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
}

type SplitMode = 'ranges' | 'fixed' | 'every';

// Blue Theme Constants
const SPLIT_THEME = {
  primary: '#3B82F6',
  primaryLight: '#EFF6FF',
  primaryBorder: '#BFDBFE',
  primaryShadow: 'rgba(59, 130, 246, 0.3)',
};

export default function SplitPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [thumbnails, setThumbnails] = useState<PageThumbnail[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [splitMode, setSplitMode] = useState<SplitMode>('ranges');
  const [rangeInput, setRangeInput] = useState('1');
  const [fixedInterval, setFixedInterval] = useState(1);

  const { showToast } = useToast();

  /** Handle File Upload (Single File Only) */
  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles || newFiles.length === 0) return;

      const f = newFiles[0];

      if (
        !(f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) ||
        f.size > PDF_CONFIG.MAX_FILE_SIZE
      ) {
        showToast('Invalid file type or file too large (max 100MB).', 'error');
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
        setProgress(0);
      } catch (err) {
        console.error('Error reading PDF:', err);
        showToast('Failed to read PDF file.', 'error');
      }
    },
    [thumbnails, showToast]
  );

  /** Generate Thumbnails (Lazy) */
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
          const thumb: PageThumbnail = { id: crypto.randomUUID(), pageIndex: i - 1, url };
          loadedThumbs.push(thumb);

          setThumbnails([...loadedThumbs]);

          // Small delay for main thread responsiveness
          await new Promise((r) => setTimeout(r, 10));
        }
      } catch (err) {
        console.error('Thumbnail generation error:', err);
      }
    };

    generateThumbnailsLazy();

    return () => {
      cancelled = true;
      loadedThumbs.forEach((t) => URL.revokeObjectURL(t.url));
    };
  }, [file]);

  const removeFile = useCallback(() => {
    thumbnails.forEach((t) => URL.revokeObjectURL(t.url));
    setThumbnails([]);
    setFile(null);
    setIsDone(false);
    setProgress(0);
  }, [thumbnails]);

  /** Parsing Logic */
  const parseRanges = useCallback((input: string, totalPages: number): number[][] => {
    const segments = input.split(',').map((s) => s.trim());
    const ranges: number[][] = [];

    for (const segment of segments) {
      if (segment.includes('-')) {
        const [startStr, endStr] = segment.split('-');
        let start = parseInt(startStr);
        let end = parseInt(endStr);

        if (isNaN(start) || isNaN(end)) continue;

        // Convert to 0-indexed
        start = Math.max(1, start) - 1;
        end = Math.min(totalPages, end) - 1;

        if (start <= end) {
          const range = [];
          for (let i = start; i <= end; i++) range.push(i);
          ranges.push(range);
        }
      } else {
        const page = parseInt(segment);
        if (!isNaN(page) && page >= 1 && page <= totalPages) {
          ranges.push([page - 1]);
        }
      }
    }
    return ranges;
  }, []);

  /** Split Functions */
  const handleSplit = async () => {
    if (!file) return;

    try {
      setIsProcessing(true);
      setProgress(0);

      const arrayBuffer = await file.file.arrayBuffer();
      const mainPdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPagesScope = file.pageCount;

      let rangesToExtract: number[][] = [];

      if (splitMode === 'every') {
        for (let i = 0; i < totalPagesScope; i++) {
          rangesToExtract.push([i]);
        }
      } else if (splitMode === 'fixed') {
        const interval = Math.max(1, fixedInterval);
        for (let i = 0; i < totalPagesScope; i += interval) {
          const range = [];
          for (let j = i; j < i + interval && j < totalPagesScope; j++) {
            range.push(j);
          }
          rangesToExtract.push(range);
        }
      } else {
        rangesToExtract = parseRanges(rangeInput, totalPagesScope);
      }

      if (rangesToExtract.length === 0) {
        showToast('Please provide valid page ranges.', 'error');
        setIsProcessing(false);
        return;
      }

      const zip = new JSZip();
      const baseName = file.name.replace(/\.[^/.]+$/, '');

      for (let i = 0; i < rangesToExtract.length; i++) {
        const pages = rangesToExtract[i];
        const newPdf = await PDFDocument.create();
        const copiedPages = await newPdf.copyPages(mainPdfDoc, pages);
        copiedPages.forEach((p) => newPdf.addPage(p));

        const pdfBytes = await newPdf.save();

        if (rangesToExtract.length === 1) {
          // Single file extraction - Direct Download
          const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${baseName}_split.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(url), 100);
        } else {
          // Multiple files - Add to ZIP
          zip.file(`${baseName}_part_${i + 1}.pdf`, pdfBytes);
        }

        setProgress(Math.round(((i + 1) / rangesToExtract.length) * 100));
        // Small delay to allow UI updates
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      if (rangesToExtract.length > 1) {
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${baseName}_split.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);
      }

      setIsDone(true);
      showToast('PDF split successfully!', 'success');
    } catch (err) {
      console.error('Split error:', err);
      showToast('An error occurred during splitting.', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatSize = useCallback((bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Upload Zone */}
      {!file && (
        <UploadZone
          onFilesSelected={handleFiles}
          multiple={false}
          accentColor={SPLIT_THEME.primary}
          iconName="ScissorsIcon"
        />
      )}

      {/* Workspace */}
      {file && !isDone && (
        <div className="flex flex-col lg:flex-row gap-8 items-start animate-fade-in">
          {/* Main Preview Area */}
          <div className="flex-1 w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-6 bg-brand-surface p-4 rounded-3xl border border-brand-border">
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-brand-dark font-heading mb-0.5 truncate">
                  {file.name}
                </h2>
                <div className="flex items-center gap-3 text-xs text-brand-muted font-body">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-brand-border">
                    <Icon name="DocumentIcon" size={12} />
                    {file.pageCount} pages
                  </span>
                  <span>{formatSize(file.size)}</span>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all border group"
                style={{
                  background: SPLIT_THEME.primaryLight,
                  borderColor: SPLIT_THEME.primaryBorder,
                  color: SPLIT_THEME.primary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = SPLIT_THEME.primary;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = SPLIT_THEME.primaryLight;
                  e.currentTarget.style.color = SPLIT_THEME.primary;
                }}
                title="Remove file"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 bg-brand-surface/30 p-4 rounded-3xl border border-brand-border border-dashed">
              {Array.from({ length: file.pageCount }).map((_, i) => {
                const thumb = thumbnails.find((t) => t.pageIndex === i);
                return (
                  <div key={i} className="group relative">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden border border-brand-border bg-white shadow-sm transition-all group-hover:shadow-md">
                      {thumb ? (
                        <img
                          src={thumb.url}
                          alt={`Page ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center animate-pulse bg-brand-surface">
                          <Icon name="DocumentIcon" size={24} className="text-brand-border" />
                        </div>
                      )}

                      {/* Page Label */}
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-brand-dark/60 backdrop-blur-md text-[10px] text-white font-bold min-w-[20px] text-center">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 bg-white border border-brand-border rounded-3xl p-6 shadow-card sticky top-6">
            <h3 className="font-heading font-bold text-lg text-brand-dark mb-5 flex items-center gap-2">
              <Icon name="ScissorsIcon" size={20} style={{ color: SPLIT_THEME.primary }} />
              Split Settings
            </h3>

            {/* Mode Selectors */}
            <div className="space-y-2.5 mb-6">
              {[
                {
                  id: 'ranges',
                  label: 'Custom Ranges',
                  icon: 'AdjustmentsHorizontalIcon',
                  desc: 'Select specific page groups',
                },
                {
                  id: 'fixed',
                  label: 'Fixed Intervals',
                  icon: 'Square2StackIcon',
                  desc: 'Split every X pages',
                },
                {
                  id: 'every',
                  label: 'Extract All',
                  icon: 'DocumentDuplicateIcon',
                  desc: 'Every page as a new PDF',
                },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSplitMode(mode.id as SplitMode)}
                  className={`w-full group flex items-start gap-3 p-3 rounded-2xl border transition-all text-left ${
                    splitMode === mode.id
                      ? 'shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-brand-surface'
                  }`}
                  style={{
                    backgroundColor: splitMode === mode.id ? SPLIT_THEME.primaryLight : undefined,
                    borderColor: splitMode === mode.id ? SPLIT_THEME.primaryBorder : undefined,
                  }}
                >
                  <div
                    className={`p-2 rounded-xl mt-0.5 transition-all ${splitMode === mode.id ? 'text-white' : 'bg-brand-surface text-brand-muted group-hover:bg-white'}`}
                    style={{
                      backgroundColor: splitMode === mode.id ? SPLIT_THEME.primary : undefined,
                      boxShadow:
                        splitMode === mode.id
                          ? '0 2px 8px ' + SPLIT_THEME.primaryShadow
                          : undefined,
                    }}
                  >
                    <Icon name={mode.icon as any} size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={`font-heading font-bold text-sm ${splitMode === mode.id ? 'text-brand-dark' : 'text-brand-mid'}`}
                    >
                      {mode.label}
                    </span>
                    <span className="text-[10.5px] text-brand-muted font-body leading-tight">
                      {mode.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mode Content */}
            <div className="mb-8 p-4 rounded-2xl bg-brand-surface border border-brand-border">
              {splitMode === 'ranges' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider px-1">
                      Define Ranges
                    </label>
                    <input
                      type="text"
                      value={rangeInput}
                      onChange={(e) => setRangeInput(e.target.value)}
                      placeholder="e.g. 1-3, 5, 8-10"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 outline-none transition-all font-body text-sm bg-white"
                      style={{ '--tw-ring-color': SPLIT_THEME.primary } as React.CSSProperties}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-brand-muted uppercase tracking-tight px-1 flex items-center gap-1.5">
                      <Icon name="InformationCircleIcon" size={12} />
                      How to use:
                    </p>
                    <ul className="text-[11px] text-brand-mid space-y-1.5 px-1 leading-relaxed list-disc list-inside">
                      <li>
                        Commas for separate files:{' '}
                        <code className="bg-brand-border/50 px-1 rounded text-brand-dark">
                          1-3, 5-7
                        </code>
                      </li>
                      <li>
                        Hyphens for ranges:{' '}
                        <code className="bg-brand-border/50 px-1 rounded text-brand-dark">
                          1-10
                        </code>
                      </li>
                      <li>
                        Single pages:{' '}
                        <code className="bg-brand-border/50 px-1 rounded text-brand-dark">
                          1, 3, 5
                        </code>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {splitMode === 'fixed' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wider px-1">
                      Split every
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="1"
                        max={file.pageCount}
                        value={fixedInterval}
                        onChange={(e) => setFixedInterval(parseInt(e.target.value) || 1)}
                        className="flex-1 px-4 py-3 rounded-xl border border-brand-border focus:ring-2 outline-none transition-all font-heading font-bold text-center bg-white"
                        style={{ '--tw-ring-color': SPLIT_THEME.primary } as React.CSSProperties}
                      />
                      <span className="text-brand-dark font-semibold text-sm">pages</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-brand-muted leading-relaxed px-1 text-center italic">
                    Example: Splitting a 10-page Doc by 2 will create 5 separate files.
                  </p>
                </div>
              )}

              {splitMode === 'every' && (
                <div className="space-y-3 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                    style={{
                      backgroundColor: SPLIT_THEME.primaryLight,
                      color: SPLIT_THEME.primary,
                    }}
                  >
                    <Icon name="DocumentDuplicateIcon" size={24} />
                  </div>
                  <p className="text-xs text-brand-mid leading-relaxed font-body">
                    Every page will be extracted into its own separate PDF file.
                  </p>
                  <p className="text-[10px] text-brand-muted bg-white border border-brand-border px-2 py-1.5 rounded-lg inline-block">
                    Results delivered in a{' '}
                    <span className="font-bold text-brand-dark">ZIP archive</span>.
                  </p>
                </div>
              )}
            </div>

            {/* Action Area */}
            {isProcessing ? (
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-brand-dark px-1">
                  <span className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: SPLIT_THEME.primary }}
                    />
                    Splitting...
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full bg-brand-surface border border-brand-border rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{ width: `${progress}%`, backgroundColor: SPLIT_THEME.primary }}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleSplit}
                className="w-full py-4 rounded-2xl text-white font-heading font-bold shadow-button hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
                style={{
                  backgroundColor: SPLIT_THEME.primary,
                  boxShadow: '0 6px 20px ' + SPLIT_THEME.primaryShadow,
                }}
              >
                <span>Split PDF Now</span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            )}

            <p className="text-[10px] text-brand-muted text-center mt-4">
              Secure client-side processing
            </p>
          </div>
        </div>
      )}

      {/* Done State */}
      {isDone && file && (
        <div className="max-w-xl mx-auto text-center py-12 animate-fade-in bg-white border border-brand-border rounded-xl4 shadow-card p-10 mt-10">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
            <Icon name="CheckIcon" size={32} className="text-green-500" variant="solid" />
          </div>

          <h2 className="text-3xl font-extrabold text-brand-dark font-heading mb-3 tracking-tight">
            SPLIT COMPLETE!
          </h2>
          <p className="text-brand-mid font-body mb-10 text-lg leading-relaxed">
            Your document has been successfully split. Your download should start automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={removeFile}
              className="flex-1 px-8 py-4 rounded-2xl border-2 border-brand-border font-heading font-bold text-brand-mid hover:bg-brand-surface transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Icon name="ArrowPathIcon" size={18} />
              Start New Task
            </button>
            <button
              onClick={handleSplit}
              className="flex-1 px-8 py-4 rounded-2xl text-white font-heading font-bold shadow-button flex items-center justify-center gap-2 active:scale-95 transition-all"
              style={{
                backgroundColor: SPLIT_THEME.primary,
                boxShadow: '0 6px 20px ' + SPLIT_THEME.primaryShadow,
              }}
            >
              <Icon name="ArrowDownTrayIcon" size={18} variant="solid" />
              Download Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
