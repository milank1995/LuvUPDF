'use client';

import React, { useRef, useState, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import { BRAND_COLORS, PDF_CONFIG } from '@/constants/pdfConfig';

interface UploadZoneProps {
  onFilesSelected: (files: FileList | null) => void;
  multiple?: boolean;
  accentColor?: string;
  iconName?: string;
}

export default function UploadZone({
  onFilesSelected,
  multiple = true,
  accentColor = BRAND_COLORS.primary,
  iconName = 'DocumentPlusIcon',
}: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      dragCounter.current = 0;
      setIsDragging(false);
      onFilesSelected(e.dataTransfer.files);
    },
    [onFilesSelected]
  );

  const handleClick = () => fileInputRef.current?.click();

  return (
    <div
      className={`upload-zone ${isDragging ? 'drag-over' : ''}`}
      style={{ padding: '60px 24px', textAlign: 'center' }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label="Upload PDF files to merge"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple={multiple}
        className="hidden"
        onChange={(e) => onFilesSelected(e.target.files)}
      />

      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300"
        style={{
          background: isDragging
            ? accentColor
            : accentColor === BRAND_COLORS.primary
              ? BRAND_COLORS.primarySurface
              : '#EFF6FF',
          transform: isDragging ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon
          name={iconName}
          size={28}
          variant="solid"
          style={
            {
              color: isDragging ? 'white' : accentColor,
            } as React.CSSProperties
          }
        />
      </div>

      <h3 className="font-heading font-bold mb-2" style={{ fontSize: '18px', color: '#1A1A2E' }}>
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
          background: accentColor,
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
  );
}
