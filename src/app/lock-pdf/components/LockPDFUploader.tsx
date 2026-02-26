'use client';

import { useState, useRef, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
}

export default function LockPDFUploader() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleFile = useCallback((f: File | null) => {
    if (!f) return;
    if (!f.name.endsWith('.pdf') && f.type !== 'application/pdf') return;
    setFile({ id: `${f.name}-${Date.now()}`, name: f.name, size: f.size });
    setIsDone(false);
    setErrors({});
  }, []);

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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    handleFile(f);
  };

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

  const handleLock = () => {
    if (!file || !validate()) return;
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsDone(true);
          return 100;
        }
        return prev + Math.random() * 18 + 6;
      });
    }, 180);
  };

  const handleReset = () => {
    setFile(null);
    setPassword('');
    setConfirmPassword('');
    setIsDone(false);
    setProgress(0);
    setErrors({});
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Zone */}
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
          onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          aria-label="Upload PDF file to lock"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] || null)}
          />
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300"
            style={{
              background: isDragging ? '#7C5CBF' : '#F3EEFF',
              transform: isDragging ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon
              name="LockClosedIcon"
              size={28}
              variant="solid"
              style={{ color: isDragging ? 'white' : '#7C5CBF' } as React.CSSProperties}
            />
          </div>
          <h3
            className="font-heading font-bold mb-2"
            style={{ fontSize: '18px', color: '#1A1A2E' }}
          >
            {isDragging ? 'Drop your PDF here!' : 'Drop a PDF file here'}
          </h3>
          <p
            style={{
              color: '#8888A8',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '20px',
            }}
          >
            or click to browse — one file at a time
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: '#7C5CBF',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            <Icon name="DocumentIcon" size={16} variant="solid" />
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
            PDF files only · Max 100MB
          </p>
        </div>
      )}

      {/* File + Password Form */}
      {file && !isDone && (
        <div>
          {/* File Info */}
          <div className="file-item flex items-center gap-3 p-3 mb-5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: '#F3EEFF' }}
            >
              <Icon
                name="DocumentIcon"
                size={18}
                variant="solid"
                style={{ color: '#7C5CBF' } as React.CSSProperties}
              />
            </div>
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
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#8888A8' }}>
                {formatSize(file.size)}
              </p>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setErrors({});
              }}
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: '#FFF0F2',
                color: '#E8445A',
                border: '1px solid #FFD6DB',
                cursor: 'pointer',
              }}
              aria-label="Remove file"
            >
              <Icon name="XMarkIcon" size={13} />
            </button>
          </div>

          {/* Password Fields */}
          <div className="space-y-4 mb-5">
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
                  className="password-input w-full px-4 py-3 pr-11 text-sm"
                  style={{ fontSize: '14px', fontFamily: 'var(--font-body)', color: '#1A1A2E' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{
                    color: '#8888A8',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={16} />
                </button>
              </div>
              {errors.password && (
                <p
                  className="mt-1.5 text-xs"
                  style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                >
                  {errors.password}
                </p>
              )}
              {/* Strength bar */}
              {password && (
                <div className="mt-2">
                  <div
                    className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ background: '#EEEEF5' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: strength.width, background: strength.color }}
                    />
                  </div>
                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: strength.color,
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                    }}
                  >
                    {strength.label}
                  </p>
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
                  className="password-input w-full px-4 py-3 pr-11 text-sm"
                  style={{ fontSize: '14px', fontFamily: 'var(--font-body)', color: '#1A1A2E' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{
                    color: '#8888A8',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                  }}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  <Icon name={showConfirm ? 'EyeSlashIcon' : 'EyeIcon'} size={16} />
                </button>
              </div>
              {errors.confirm && (
                <p
                  className="mt-1.5 text-xs"
                  style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                >
                  {errors.confirm}
                </p>
              )}
              {confirmPassword && password === confirmPassword && !errors.confirm && (
                <p
                  className="mt-1.5 text-xs flex items-center gap-1"
                  style={{ color: '#16A34A', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name="CheckCircleIcon" size={12} variant="solid" /> Passwords match
                </p>
              )}
            </div>
          </div>

          {/* Security Note */}
          <div
            className="flex items-start gap-2.5 p-3 rounded-xl mb-5"
            style={{ background: '#F3EEFF', border: '1px solid #E0D4FF' }}
          >
            <Icon
              name="InformationCircleIcon"
              size={15}
              variant="solid"
              style={{ color: '#7C5CBF', marginTop: '1px', flexShrink: 0 } as React.CSSProperties}
            />
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '12.5px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.55,
              }}
            >
              <strong style={{ color: '#1A1A2E' }}>Remember your password.</strong> LuvUPDF does not
              store your password — if you forget it, the PDF cannot be unlocked without a recovery
              tool.
            </p>
          </div>

          {/* Progress */}
          {isProcessing && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span
                  style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#4A4A6A' }}
                >
                  Encrypting PDF...
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#7C5CBF',
                  }}
                >
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ background: '#E0D4FF' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #7C5CBF 0%, #A07CE8 100%)',
                  }}
                />
              </div>
            </div>
          )}

          {/* Lock Button */}
          {!isProcessing && (
            <button
              onClick={handleLock}
              className="w-full py-4 rounded-2xl font-heading font-bold text-base transition-all"
              style={{
                background: '#7C5CBF',
                color: 'white',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(124,92,191,0.28)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="LockClosedIcon" size={18} variant="solid" />
                Lock PDF with Password
              </span>
            </button>
          )}
        </div>
      )}

      {/* Done State */}
      {isDone && (
        <div className="text-center py-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{
              background: '#F3EEFF',
              animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          >
            <Icon
              name="LockClosedIcon"
              size={26}
              variant="solid"
              style={{ color: '#7C5CBF' } as React.CSSProperties}
            />
          </div>
          <h3
            className="font-heading font-bold mb-2"
            style={{ fontSize: '20px', color: '#1A1A2E' }}
          >
            PDF Locked Successfully!
          </h3>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '6px',
            }}
          >
            <strong style={{ color: '#1A1A2E' }}>{file?.name}</strong> is now password-protected.
          </p>
          <p
            style={{
              color: '#8888A8',
              fontSize: '12.5px',
              fontFamily: 'var(--font-body)',
              marginBottom: '24px',
            }}
          >
            Keep your password safe — it cannot be recovered if lost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full"
              style={{
                background: '#7C5CBF',
                color: 'white',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(124,92,191,0.28)',
              }}
            >
              <Icon name="ArrowDownTrayIcon" size={18} variant="solid" />
              Download Locked PDF
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
              Lock Another PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
