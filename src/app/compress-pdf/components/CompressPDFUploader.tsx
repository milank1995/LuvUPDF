'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import UploadZone from '@/components/pdf/UploadZone';
import { TOOL_COLORS } from '@/constants/toolColors';
import { useToast } from '@/components/ui/Toast';
import { isEncryptedPDF } from '@/utils/pdf';

const colors = TOOL_COLORS.compress;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  file: File;
}

type StepStatus = 'idle' | 'active' | 'done' | 'error';

interface ProcessStep {
  id: string;
  label: string;
  detail: string;
  status: StepStatus;
}

type CompressionMode = 'low' | 'medium' | 'high';

const INITIAL_STEPS: ProcessStep[] = [
  {
    id: 'upload',
    label: 'Uploading PDF',
    detail: 'Securely transferring to server — no files are stored',
    status: 'idle',
  },
  {
    id: 'compress',
    label: 'Compressing PDF',
    detail: 'Optimizing images and fonts to reduce file size',
    status: 'idle',
  },
  {
    id: 'optimize',
    label: 'Finalizing & Optimizing',
    detail: 'Preparing your compressed file for download',
    status: 'idle',
  },
];

const API_BASE = process.env.API_BASE_URL || 'https://api.luvupdf.com';

export default function CompressPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [mode, setMode] = useState<CompressionMode>('medium');
  const [isDone, setIsDone] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [steps, setSteps] = useState<ProcessStep[]>(INITIAL_STEPS);
  const [overallProgress, setOverallProgress] = useState(0);
  const [results, setResults] = useState<{
    originalSize: string;
    compressedSize: string;
    reductionPercent: string;
    pdfUrl: string;
  } | null>(null);

  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { showToast } = useToast();

  const animateToProgress = (target: number) => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    progressTimerRef.current = setInterval(() => {
      setOverallProgress((prev) => {
        if (prev >= target) {
          clearInterval(progressTimerRef.current!);
          return target;
        }
        return Math.min(prev + 1, target);
      });
    }, 20);
  };

  useEffect(() => {
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, []);

  const setStepStatus = (stepId: string, status: StepStatus) => {
    setSteps((prev) => prev.map((s) => (s.id === stepId ? { ...s, status } : s)));
  };

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

  const handleFilesSelected = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const f = files[0];
      if (!f.name.endsWith('.pdf') && f.type !== 'application/pdf') {
        showToast('Invalid file type. Please upload a PDF.', 'error');
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        showToast(`File too large. Maximum allowed size is 50 MB.`, 'error');
        return;
      }
      setFile({ id: crypto.randomUUID(), name: f.name, size: f.size, file: f });
      setIsDone(false);
      setSteps(INITIAL_STEPS);
      setOverallProgress(0);
    },
    [showToast]
  );

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);
    setSteps(INITIAL_STEPS);
    setOverallProgress(0);

    try {
      // 1. Pre-flight check
      setStepStatus('upload', 'active');
      animateToProgress(10);

      const alreadyEncrypted = await isEncryptedPDF(file.file);
      if (alreadyEncrypted) {
        setStepStatus('upload', 'error');
        showToast(
          'This PDF is password-protected. Please unlock it first before compressing.',
          'error',
          { text: 'Unlock PDF', href: '/unlock-pdf' }
        );
        setIsProcessing(false);
        return;
      }

      // 2. Upload
      animateToProgress(30);
      const formData = new FormData();
      formData.append('file', file.file);

      const response = await fetch(`${API_BASE}/api/pdf/compress-pdf/${mode}`, {
        method: 'POST',
        body: formData,
      });

      setStepStatus('upload', 'done');
      setStepStatus('compress', 'active');
      animateToProgress(70);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Compression failed');
      }

      setStepStatus('compress', 'done');
      setStepStatus('optimize', 'active');
      animateToProgress(95);

      setResults({
        originalSize: data.originalSize,
        compressedSize: data.compressedSize,
        reductionPercent: data.reductionPercent,
        pdfUrl: data.pdfUrl,
      });

      animateToProgress(100);
      await new Promise((r) => setTimeout(r, 500));
      setStepStatus('optimize', 'done');
      setIsDone(true);
      showToast('PDF compressed successfully!', 'success');
    } catch (err: any) {
      showToast(err.message || 'An error occurred during compression', 'error');
      setSteps((prev) => prev.map((s) => (s.status === 'active' ? { ...s, status: 'error' } : s)));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setIsDone(false);
    setResults(null);
    setSteps(INITIAL_STEPS);
    setOverallProgress(0);
  };

  const modeOptions = [
    { id: 'low', label: 'Low', desc: 'Slight compression, high quality' },
    { id: 'medium', label: 'Medium', desc: 'Good compression, good quality', recommended: true },
    { id: 'high', label: 'High', desc: 'High compression, standard quality' },
  ];

  /* Step indicator icons (consistent with LockPDF) */
  const StepIcon = ({ status }: { status: StepStatus }) => {
    if (status === 'done')
      return (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: '#10B981' }}
        >
          <Icon name="CheckIcon" size={14} style={{ color: '#fff' } as React.CSSProperties} />
        </div>
      );
    if (status === 'error')
      return (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: '#EF4444' }}
        >
          <Icon name="XMarkIcon" size={14} style={{ color: '#fff' } as React.CSSProperties} />
        </div>
      );
    if (status === 'active')
      return (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: colors.primary }}
        >
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );
    return (
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: '#EEEEF5' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: '#C4C4D4' }} />
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!file && (
        <UploadZone
          onFilesSelected={handleFilesSelected}
          multiple={false}
          accentColor={colors.primary}
          iconName="ArchiveBoxIcon"
          title="Drop PDF file here"
          subtitle="or click to browse — single file only"
          buttonText="Select PDF File"
          dragTitle="Drop your PDF here!"
        />
      )}

      {file && !isDone && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* File Item */}
          <div
            className="file-item flex items-center gap-3 p-4 mb-6"
            style={{
              background: colors.surface,
              border: `1.5px solid ${colors.border}`,
              borderRadius: '16px',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'white' }}
            >
              <Icon
                name="DocumentIcon"
                size={20}
                variant="solid"
                style={{ color: colors.primary } as React.CSSProperties}
              />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="truncate font-heading font-bold text-[15px] text-[#1A1A2E]">
                {file.name}
              </p>
              <p className="font-body text-[12px] text-[#8888A8]">{formatSize(file.size)}</p>
            </div>
            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50 text-red-400"
              disabled={isProcessing}
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>

          {/* Mode Selector */}
          {!isProcessing && (
            <div className="mb-6 text-left">
              <h4 className="font-heading font-bold text-sm text-[#1A1A2E] mb-3">
                Compression Level
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {modeOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className="relative flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all border-2"
                    style={{
                      background: mode === opt.id ? colors.surface : 'white',
                      borderColor: mode === opt.id ? colors.primary : '#EEEEF5',
                    }}
                  >
                    <input
                      type="radio"
                      name="compression-mode"
                      className="hidden"
                      checked={mode === opt.id}
                      onChange={() => setMode(opt.id as CompressionMode)}
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: mode === opt.id ? colors.primary : '#C4C4D4' }}
                    >
                      {mode === opt.id && (
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: colors.primary }}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-[15px] text-[#1A1A2E]">
                          {opt.label}
                        </span>
                        {opt.recommended && (
                          <span
                            className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
                            style={{ background: colors.primary, color: 'white' }}
                          >
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="font-body text-[12px] text-[#8888A8]">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Progress Steps */}
          {isProcessing && (
            <div className="mb-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-semibold text-[13px] text-[#4A4A6A]">
                  Processing your PDF…
                </span>
                <span
                  className="font-heading font-extrabold text-[13px]"
                  style={{ color: colors.primary }}
                >
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden bg-slate-100 mb-5 text-left">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${overallProgress}%`,
                    background: `linear-gradient(90deg, ${colors.primary} 0%, #34D399 100%)`,
                  }}
                />
              </div>

              <div className="space-y-3 text-left">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300"
                    style={{
                      background:
                        step.status === 'active'
                          ? colors.surface
                          : step.status === 'done'
                            ? '#F0FDF4'
                            : step.status === 'error'
                              ? '#FEF2F2'
                              : '#F8F8FC',
                      border: `1.5px solid ${step.status === 'active' ? colors.border : step.status === 'done' ? '#BBF7D0' : step.status === 'error' ? '#FECACA' : '#EEEEF5'}`,
                    }}
                  >
                    <StepIcon status={step.status} />
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '13px',
                          color:
                            step.status === 'done'
                              ? '#10B981'
                              : step.status === 'error'
                                ? '#DC2626'
                                : step.status === 'active'
                                  ? '#1A1A2E'
                                  : '#8888A8',
                        }}
                      >
                        {step.label}
                      </p>
                      {(step.status === 'active' || step.status === 'done') && (
                        <p className="font-body text-[12px] text-[#8888A8] mt-0.5">{step.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compress Button */}
          {!isProcessing && (
            <button
              onClick={handleCompress}
              className="w-full py-4 rounded-2xl font-heading font-extrabold text-white transition-all hover:translate-y-[-2px] active:translate-y-0"
              style={{
                background: colors.primary,
                boxShadow: colors.shadow,
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="ArchiveBoxIcon" size={20} variant="solid" />
                Compress PDF Now
              </span>
            </button>
          )}
        </div>
      )}

      {/* Success State */}
      {isDone && results && (
        <div className="text-center py-10 animate-in zoom-in-95 duration-500">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: '#F0FDF4', boxShadow: '0 0 0 10px #F0FDF444' }}
          >
            <Icon
              name="CheckBadgeIcon"
              size={36}
              variant="solid"
              style={{ color: '#16A34A' } as React.CSSProperties}
            />
          </div>

          <h3 className="font-heading font-extrabold text-2xl mb-2 text-slate-900">
            Compression Success!
          </h3>
          <p className="font-body text-[15px] text-[#4A4A6A] mb-8">
            Your file <strong>{file?.name}</strong> has been reduced by{' '}
            <strong>{results.reductionPercent}</strong>.
          </p>

          {/* Size Comparison Card */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Before
              </p>
              <p className="font-heading font-extrabold text-lg text-slate-600">
                {results.originalSize}
              </p>
            </div>
            <div
              className="p-4 rounded-2xl border-2"
              style={{ background: colors.surface, borderColor: colors.border }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-wider mb-1"
                style={{ color: colors.primary }}
              >
                After
              </p>
              <p className="font-heading font-extrabold text-lg" style={{ color: '#1A1A2E' }}>
                {results.compressedSize}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={results.pdfUrl}
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg no-underline"
              style={{
                background: colors.primary,
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '15px',
                boxShadow: colors.shadow,
              }}
            >
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              Download Compressed PDF
            </a>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-[1.5px] border-slate-200 bg-white text-slate-600 font-heading font-bold text-[15px] transition-all hover:bg-slate-50"
            >
              <Icon name="ArrowPathIcon" size={18} />
              Start Fresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
