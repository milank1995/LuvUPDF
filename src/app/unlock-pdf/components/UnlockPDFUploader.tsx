'use client';

import { useState, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import UploadZone from '@/components/pdf/UploadZone';
import { TOOL_COLORS } from '@/constants/toolColors';
import { useToast } from '@/components/ui/Toast';

const colors = TOOL_COLORS.unlock;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  file: File;
}

export default function UnlockPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unlockedBlob, setUnlockedBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [manualProgress, setManualProgress] = useState(0);

  const { showToast } = useToast();

  const handleFilesSelected = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const f = files[0];
      if (!f.name.endsWith('.pdf') && f.type !== 'application/pdf') {
        showToast('Invalid file type. Please upload a PDF.', 'error');
        return;
      }
      setFile({ id: crypto.randomUUID(), name: f.name, size: f.size, file: f });
      setIsDone(false);
      setError(null);
      setPassword('');
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
      setError('Please enter the PDF password');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);
      setManualProgress(20);

      const formData = new FormData();
      formData.append('file', file.file);
      formData.append('password', password);

      const res = await fetch('https://api.luvupdf.com/api/pdf/combined-unlock-pdf', {
        method: 'POST',
        body: formData,
      });

      setManualProgress(80);

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Failed to unlock PDF: ${res.statusText}`);
      }

      const blob = await res.blob();
      setManualProgress(100);

      setUnlockedBlob(blob);
      setIsDone(true);
      showToast('PDF unlocked successfully!', 'success');
    } catch (err: any) {
      setError(err.message || 'Failed to unlock PDF');
      showToast(err.message || 'Failed to unlock PDF', 'error');
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
    setManualProgress(0);
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

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Zone */}
      {!file && (
        <UploadZone
          onFilesSelected={handleFilesSelected}
          multiple={false}
          accentColor={colors.primary}
          iconName="LockOpenIcon"
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
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50 text-red-400"
              aria-label="Remove file"
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>

          {/* Password Field */}
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

          {/* Progress Section */}
          {isProcessing && (
            <div className="mb-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#4A4A6A',
                  }}
                >
                  Unlocking your PDF...
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: colors.primary,
                  }}
                >
                  {Math.round(manualProgress)}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden bg-slate-100">
                <div
                  className="h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    width: `${manualProgress}%`,
                    background: `linear-gradient(90deg, ${colors.primary} 0%, #14B8A6 100%)`,
                  }}
                />
              </div>
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
            Privacy First · Instant Decryption · Secure
          </p>
        </div>
      )}
    </div>
  );
}
