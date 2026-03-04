'use client';

import { useState, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import UploadZone from '@/components/pdf/UploadZone';
import { usePDFWorker } from '@/hooks/usePDFWorker';
import { TOOL_COLORS } from '@/constants/toolColors';
import { useToast } from '@/components/ui/Toast';

const colors = TOOL_COLORS.lock;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  file: File;
}

export default function LockPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>({});
  const [lockedBlob, setLockedBlob] = useState<Blob | null>(null);

  const { showToast } = useToast();
  const { processPDFs, isProcessing, progress } = usePDFWorker();

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
      setErrors({});
    },
    [showToast]
  );

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getPasswordStrength = (pw: string): { label: string; color: string; width: string } => {
    if (!pw) return { label: '', color: '#EEEEF5', width: '0%' };
    if (pw.length < 4) return { label: 'Too short', color: '#EF4444', width: '15%' };
    if (pw.length < 8) return { label: 'Weak', color: '#F97316', width: '35%' };
    const hasUpper = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSymbol = /[^A-Za-z0-9]/.test(pw);
    const score = [hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
    if (pw.length >= 8 && score >= 2) return { label: 'Strong', color: '#16A34A', width: '100%' };
    if (pw.length >= 8 && score >= 1) return { label: 'Good', color: '#F59E0B', width: '65%' };
    return { label: 'Fair', color: '#F59E0B', width: '50%' };
  };

  const validate = () => {
    const newErrors: { password?: string; confirm?: string } = {};
    if (!password) newErrors.password = 'Please enter a password';
    else if (password.length < 4) newErrors.password = 'Password must be at least 4 characters';
    if (!confirmPassword) newErrors.confirm = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirm = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLock = async () => {
    if (!file || !validate()) return;

    try {
      console.log('UI: Locking PDF with password...');
      const result = await processPDFs('LOCK_PDF', [{ blob: file.file, name: file.name }]);

      if (result && result.blob) {
        console.log('UI: PDF locked successfully, blob received');
        setLockedBlob(result.blob);
        setIsDone(true);
        showToast('PDF locked successfully!', 'success');
      } else {
        console.error('UI: Process returned successfully but blob is missing', result);
        showToast('Processing failed: Output file missing.', 'error');
      }
    } catch (err: any) {
      console.error('UI: Error in handleLock:', err);
      showToast(err.message || 'Failed to lock PDF', 'error');
    }
  };

  const handleReset = () => {
    setFile(null);
    setPassword('');
    setConfirmPassword('');
    setIsDone(false);
    setErrors({});
    setLockedBlob(null);
  };

  const handleDownload = () => {
    if (!lockedBlob) return;
    const url = URL.createObjectURL(lockedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `locked_${file?.name || 'document.pdf'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Zone */}
      {!file && (
        <UploadZone
          onFilesSelected={handleFilesSelected}
          multiple={false}
          accentColor={colors.primary}
          iconName="LockClosedIcon"
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
                setErrors({});
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-red-50 text-red-400"
              aria-label="Remove file"
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          </div>

          {/* Password Fields */}
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
                Set Password
              </label>
              <div className="relative">
                <input
                  id="pdf-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  placeholder="Enter a strong password"
                  className="password-input w-full px-4 py-3.5 pr-11 text-sm rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all"
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
              {errors.password && (
                <p
                  className="mt-1.5 text-xs font-medium"
                  style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                >
                  {errors.password}
                </p>
              )}
              {/* Strength bar */}
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#8888A8',
                      }}
                    >
                      Password Strength
                    </span>
                    <span
                      style={{
                        color: strength.color,
                        fontFamily: 'var(--font-heading)',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden bg-slate-100">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: strength.width, background: strength.color }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="pdf-confirm-password"
                className="block mb-1.5"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#1A1A2E',
                }}
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="pdf-confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, confirm: undefined }));
                  }}
                  placeholder="Re-enter your password"
                  className="password-input w-full px-4 py-3.5 pr-11 text-sm rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all"
                  style={{ fontSize: '14px', fontFamily: 'var(--font-body)', color: '#1A1A2E' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-50 rounded-lg transition-colors"
                  style={{
                    color: '#8888A8',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                  }}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  <Icon name={showConfirm ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                </button>
              </div>
              {errors.confirm && (
                <p
                  className="mt-1.5 text-xs font-medium"
                  style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                >
                  {errors.confirm}
                </p>
              )}
              {confirmPassword && password === confirmPassword && !errors.confirm && (
                <p
                  className="mt-2 text-[11px] font-bold flex items-center gap-1.5"
                  style={{ color: '#16A34A', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name="CheckCircleIcon" size={14} variant="solid" /> PASSWORDS MATCH
                </p>
              )}
            </div>
          </div>

          {/* Security Note */}
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
              <strong style={{ color: '#1A1A2E' }}>Security Note:</strong> LuvUPDF uses
              industry-standard encryption, but we never store your password. If lost, the file
              cannot be recovered.
            </p>
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
                  Locking your PDF...
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: colors.primary,
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden bg-slate-100">
                <div
                  className="h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${colors.primary} 0%, #A07CE8 100%)`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Lock Button */}
          {!isProcessing && (
            <button
              onClick={handleLock}
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
                <Icon name="LockClosedIcon" size={20} variant="solid" />
                Lock PDF with Password
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
            Encryption Complete!
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
            Your PDF <strong>{file?.name}</strong> is now securely password-protected.
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
              Download Locked PDF
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
            Privacy First · 256-Bit Encryption · Small Footprint
          </p>
        </div>
      )}
    </div>
  );
}
