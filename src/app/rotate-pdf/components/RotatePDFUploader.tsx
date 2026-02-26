'use client';

import Icon from '@/components/ui/AppIcon';

export default function RotatePDFUploader() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="upload-zone" style={{ padding: '60px 24px', textAlign: 'center' }}>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: '#FFFBEB' }}
        >
          <Icon
            name="ArrowPathIcon"
            size={28}
            variant="solid"
            style={{ color: '#F59E0B' } as React.CSSProperties}
          />
        </div>
        <h3 className="font-heading font-bold mb-2" style={{ fontSize: '18px', color: '#1A1A2E' }}>
          Drop your PDF pages to rotate
        </h3>
        <p
          style={{
            color: '#8888A8',
            fontSize: '14px',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Drag &amp; drop a PDF with sideways pages, or click anywhere in this box to select a file
          from your device.
        </p>
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full opacity-60 cursor-not-allowed"
          style={{
            background: '#F59E0B',
            color: 'white',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '14px',
          }}
        >
          <Icon name="ArrowUpTrayIcon" size={16} variant="solid" />
          Select PDF to rotate
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

        <div
          className="mt-6 p-4 rounded-2xl"
          style={{ background: '#FFFBEB', border: '1px dashed #F59E0B' }}
        >
          <p
            className="font-heading font-semibold mb-1"
            style={{ fontSize: '14px', color: '#92400E' }}
          >
            Tool in active development
          </p>
          <p
            style={{
              color: '#92400E',
              fontSize: '12.5px',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
            }}
          >
            The Rotate PDF engine is currently being implemented. The interface you see here mirrors
            the final drag-and-drop experience, but page rotation is temporarily disabled. Soon,
            you&apos;ll be able to rotate individual pages to the perfect orientation in seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
