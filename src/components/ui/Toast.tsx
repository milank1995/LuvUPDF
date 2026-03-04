'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from './AppIcon';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  link?: {
    text: string;
    href: string;
  };
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, link?: { text: string; href: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const TOAST_DURATION = 6000;

const ToastItem: React.FC<{ toast: Toast; onRemove: (id: string) => void }> = ({
  toast,
  onRemove,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const remainingTimeRef = useRef<number>(TOAST_DURATION);

  const startTimer = useCallback(() => {
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      onRemove(toast.id);
    }, remainingTimeRef.current);
  }, [toast.id, onRemove]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      const elapsedTime = Date.now() - startTimeRef.current;
      remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsedTime);
    }
  }, []);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimer();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startTimer();
  };

  const getColors = (type: ToastType) => {
    switch (type) {
      case 'error':
        return { bg: '#E8445A', text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)' };
      case 'success':
        return { bg: '#16A34A', text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)' };
      case 'info':
      default:
        return { bg: '#1A1A2E', text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)' };
    }
  };

  const colors = getColors(toast.type);

  return (
    <div
      className="pointer-events-auto flex items-center gap-4 px-5 py-4 rounded-2xl shadow-2xl animate-fade-up border-none"
      style={{
        background: colors.bg,
        color: colors.text,
        minWidth: '340px',
        maxWidth: '480px',
        opacity: isHovered ? 1 : 0.98,
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.2s ease-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: colors.iconBg }}
      >
        <Icon
          name={
            toast.type === 'error'
              ? 'XCircleIcon'
              : toast.type === 'success'
                ? 'CheckCircleIcon'
                : 'InformationCircleIcon'
          }
          size={22}
          variant="solid"
          style={{ color: '#FFFFFF' } as React.CSSProperties}
        />
      </div>
      <div className="flex-1">
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {toast.message}
        </p>
        {toast.link && (
          <Link
            href={toast.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-1.5 font-bold hover:underline transition-all"
            style={{ fontSize: '13px', color: '#FFFFFF' }}
          >
            {toast.link.text}
            <Icon name="ArrowTopRightOnSquareIcon" size={13} />
          </Link>
        )}
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
      >
        <Icon name="XMarkIcon" size={18} />
      </button>
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType = 'info', link?: { text: string; href: string }) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, link }]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
