'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import UploadZone from '@/components/pdf/UploadZone';
import { TOOL_COLORS } from '@/constants/toolColors';
import { useToast } from '@/components/ui/Toast';
import { isEncryptedPDF } from '@/utils/pdf';

const colors = TOOL_COLORS.unlock;

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

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

const INITIAL_STEPS: ProcessStep[] = [
  {
    id: 'upload',
    label: 'Uploading PDF',
    detail: 'Securely transferring your file to our server — it is never stored',
    status: 'idle',
  },
  {
    id: 'decrypt',
    label: 'Removing Password Protection',
    detail: 'Verifying password and decrypting your PDF on the server',
    status: 'idle',
  },
  {
    id: 'download',
    label: 'Preparing Unlocked PDF',
    detail: 'Generating your password-free file for download',
    status: 'idle',
  },
];

const API_BASE = process.env.API_BASE_URL || 'https://api.luvupdf.com';

export default function UnlockPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unlockedBlob, setUnlockedBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [steps, setSteps] = useState<ProcessStep[]>(INITIAL_STEPS);
  const [overallProgress, setOverallProgress] = useState(0);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { showToast } = useToast();

  // Smooth progress animation between milestones
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
    }, 18);
  };

  useEffect(() => {
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, []);

  const setStepStatus = (stepId: string, status: StepStatus) => {
    setSteps((prev) => prev.map((s) => (s.id === stepId ? { ...s, status } : s)));
  };

  const handleFilesSelected = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const f = files[0];

      if (!f.name.toLowerCase().endsWith('.pdf') && f.type !== 'application/pdf') {
        showToast('Invalid file type. Please upload a PDF.', 'error');
        return;
      }

      if (f.size > MAX_FILE_SIZE) {
        showToast(
          `File too large. Maximum allowed size is 50 MB (your file: ${(f.size / (1024 * 1024)).toFixed(1)} MB).`,
          'error'
        );
        return;
      }

      setFile({ id: crypto.randomUUID(), name: f.name, size: f.size, file: f });
      setIsDone(false);
      setError(null);
      setPassword('');
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

  const handleUnlock = async () => {
    if (!file) return;

    if (!password) {
      setError('Please enter the PDF password.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSteps(INITIAL_STEPS);
    setOverallProgress(0);

    try {
      // ── Pre-flight: client-side encryption check ──
      setStepStatus('upload', 'active');
      animateToProgress(10);

      const alreadyUnlocked = !(await isEncryptedPDF(file.file));
      if (alreadyUnlocked) {
        setStepStatus('upload', 'error');
        showToast(
          'This PDF does not appear to be password-protected. If you want to protect it, use our Lock PDF tool.',
          'error',
          { text: 'Lock this PDF →', href: '/lock-pdf' }
        );
        return;
      }

      // ── Step 1: Upload ──
      animateToProgress(28);

      const formData = new FormData();
      formData.append('file', file.file);
      formData.append('password', password);

      const res = await fetch(`${API_BASE}/api/pdf/combined-unlock-pdf`, {
        method: 'POST',
        body: formData,
      });

      setStepStatus('upload', 'done');

      // ── Step 2: Decrypt (progress 28→70) ──
      setStepStatus('decrypt', 'active');
      animateToProgress(70);

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        const apiMessage: string =
          errData.error || errData.message || `Server error ${res.status}: ${res.statusText}`;

        setStepStatus('upload', 'error');
        setStepStatus('decrypt', 'error');
        setError(apiMessage);
        showToast(apiMessage, 'error');
        return;
      }

      setStepStatus('decrypt', 'done');

      // ── Step 3: Prepare download (progress 70→95) ──
      setStepStatus('download', 'active');
      animateToProgress(95);

      const blob = await res.blob();

      setStepStatus('download', 'done');
      animateToProgress(100);

      setUnlockedBlob(blob);

      // Small delay so user sees 100%
      await new Promise((r) => setTimeout(r, 400));
      setIsDone(true);
      showToast('PDF unlocked successfully!', 'success');
    } catch (err: any) {
      const msg: string = err.message || 'Failed to unlock PDF. Please try again.';
      setError(msg);
      showToast(msg, 'error');
      setSteps((prev) => prev.map((s) => (s.status === 'active' ? { ...s, status: 'error' } : s)));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPassword('');
    setIsDone(false);
    setError(null);
    setUnlockedBlob(null);
    setSteps(INITIAL_STEPS);
    setOverallProgress(0);
  };

  const handleDownload = () => {
    if (!unlockedBlob) return;
    const url = URL.createObjectURL(unlockedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `unlocked_${file?.name || 'document.pdf'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  /* ─────── Step indicator icons ─────── */
  const StepIcon = ({ status }: { status: StepStatus }) => {
    if (status === 'done')
      return (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: '#16A34A' }}
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
    // idle
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
      {/* Upload Zone */}
      {!file && (
        <UploadZone
          onFilesSelected={handleFilesSelected}
          multiple={false}
          accentColor={colors.primary}
          iconName="LockOpenIcon"
          title="Drop PDF file here"
          subtitle="or click to browse — single file only"
          buttonText="Select PDF File"
          dragTitle="Drop your PDF here!"
        />
      )}

      {/* File + Password Form */}
      {file && !isDone && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* File Info */}
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
            <div className="flex-1 min-w-0">
              <p
                className="truncate"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#1A1A2E',
                }}
              >
                {file.name}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#8888A8' }}>
                {formatSize(file.size)}
              </p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setError(null);
                setSteps(INITIAL_STEPS);
                setOverallProgress(0);
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50 text-red-400"
              aria-label="Remove file"
              disabled={isProcessing}
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>

          {/* Password Field — hidden while processing */}
          {!isProcessing && (
            <div className="space-y-5 mb-6">
              <div>
                <label
                  htmlFor="pdf-password"
                  className="block mb-1.5"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#1A1A2E',
                  }}
                >
                  PDF Password
                </label>
                <div className="relative">
                  <input
                    id="pdf-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(null);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                    placeholder="Enter the PDF password"
                    className="password-input w-full px-4 py-3.5 pr-11 text-sm rounded-xl border border-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all"
                    style={{ fontSize: '14px', fontFamily: 'var(--font-body)', color: '#1A1A2E' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-50 rounded-lg transition-colors"
                    style={{
                      color: '#8888A8',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                    }}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                  </button>
                </div>
                {error && (
                  <p
                    className="mt-1.5 text-xs font-medium"
                    style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                  >
                    {error}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ─── Real-time Process Steps ─── */}
          {isProcessing && (
            <div className="mb-6 animate-in fade-in duration-300">
              {/* Overall progress bar */}
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#4A4A6A',
                  }}
                >
                  Unlocking your PDF…
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: colors.primary,
                  }}
                >
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden bg-slate-100 mb-5">
                <div
                  className="h-full rounded-full shadow-sm"
                  style={{
                    width: `${overallProgress}%`,
                    background: `linear-gradient(90deg, ${colors.primary} 0%, #14B8A6 100%)`,
                    transition: 'width 0.3s ease-out',
                  }}
                />
              </div>

              {/* Step list */}
              <div className="space-y-3">
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
                      border: `1.5px solid ${
                        step.status === 'active'
                          ? colors.border
                          : step.status === 'done'
                            ? '#BBF7D0'
                            : step.status === 'error'
                              ? '#FECACA'
                              : '#EEEEF5'
                      }`,
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
                              ? '#16A34A'
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
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '12px',
                            color: '#8888A8',
                            marginTop: '2px',
                          }}
                        >
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Privacy reassurance during processing */}
              <p
                className="mt-4 text-center text-[11px] font-bold uppercase tracking-widest"
                style={{ color: '#C4C4D4' }}
              >
                🔒 API called for server-side unlocking only · No files stored on our servers
              </p>
            </div>
          )}

          {/* Security + Privacy Note */}
          {!isProcessing && (
            <div
              className="flex items-start gap-3 p-4 rounded-xl mb-6"
              style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
            >
              <div className="p-1 rounded-lg bg-white shadow-sm mt-0.5">
                <Icon
                  name="InformationCircleIcon"
                  size={16}
                  variant="solid"
                  style={{ color: colors.primary, display: 'block' } as React.CSSProperties}
                />
              </div>
              <p
                style={{
                  color: '#4A4A6A',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: '#1A1A2E' }}>Privacy &amp; Security:</strong> We call our
                API solely to perform server-side unlocking — your file and password are{' '}
                <strong style={{ color: '#1A1A2E' }}>never stored</strong> on our servers. Once the
                unlocked PDF is returned, all data is discarded immediately.
              </p>
            </div>
          )}

          {/* Unlock Button */}
          {!isProcessing && (
            <button
              onClick={handleUnlock}
              className="w-full py-4 rounded-2xl font-heading font-extrabold text-base transition-all hover:translate-y-[-2px] active:translate-y-0"
              style={{
                background: colors.primary,
                color: 'white',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: colors.shadow,
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="LockOpenIcon" size={20} variant="solid" />
                Unlock PDF
              </span>
            </button>
          )}
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="text-center py-10 animate-in zoom-in-95 duration-500">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: '#F0FDF4',
              boxShadow: '0 0 0 10px #F0FDF444',
            }}
          >
            <Icon
              name="CheckBadgeIcon"
              size={36}
              variant="solid"
              style={{ color: '#16A34A' } as React.CSSProperties}
            />
          </div>
          <h3
            className="font-heading font-extrabold mb-3 text-slate-900"
            style={{ fontSize: '24px' }}
          >
            PDF Unlocked!
          </h3>
          <p
            className="max-w-xs mx-auto mb-8"
            style={{
              color: '#4A4A6A',
              fontSize: '15px',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
            }}
          >
            Your PDF <strong>{file?.name}</strong> has been successfully unlocked.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: colors.primary,
                color: 'white',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: colors.shadow,
              }}
            >
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              Download Unlocked PDF
            </button>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-[1.5px] border-slate-200 bg-white text-slate-600 font-heading font-bold text-[15px] transition-all hover:bg-slate-50"
            >
              <Icon name="ArrowPathIcon" size={18} />
              Start Fresh
            </button>
          </div>

          <p className="mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Privacy First · Instant Decryption · No Data Stored
          </p>
        </div>
      )}
    </div>
  );
}
