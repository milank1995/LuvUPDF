import type { Metadata } from 'next';
import OrganizePDFUploader from './components/OrganizePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { organizePDFData } from './components/organizePDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { TOOL_COLORS } from '@/constants/toolColors';

const colors = TOOL_COLORS.organize;

export const metadata: Metadata = {
  title: 'Organize PDF Pages Online Free — Reorder & Arrange PDF Instantly | LuvUPDF',
  description:
    'Organize PDF pages online for free. Reorder, rearrange, rotate, or delete pages easily. Fast, secure, and no registration required.',
  keywords:
    'organize PDF, reorder PDF pages, rearrange PDF pages, manage PDF pages online, sort PDF pages free',
  openGraph: {
    title: 'Organize PDF Pages Online Free | LuvUPDF',
    description:
      'Rearrange and organize your PDF pages instantly. Free and secure PDF page organizer.',
    type: 'website',
    url: 'https://luvupdf.com/organize-pdf',
    siteName: 'LuvUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organize PDF Pages Online Free | LuvUPDF',
    description:
      'Rearrange and organize your PDF pages instantly. Free and secure PDF page organizer.',
  },
  alternates: { canonical: 'https://luvupdf.com/organize-pdf' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I organize PDF pages online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, drag and drop pages to rearrange them, delete or rotate pages if needed, then download your organized PDF instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I reorder and delete pages at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can reorder, rotate, and delete pages within the same tool before downloading your updated PDF.',
      },
    },
  ],
};

import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function OrganizePDFPage() {
  return (
    <>
      {/* ... faqJsonLd stays the same */}
      <main>
        {/* Page Hero */}
        <section
          className="pt-24 pb-10 px-4 sm:px-6"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${colors.primary}12 0%, transparent 65%), #FFFFFF`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Organize PDF' },
              ]}
              color={colors.primary}
            />

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: colors.surface, border: `1.5px solid ${colors.border}` }}
            >
              <Icon
                name="Squares2X2Icon"
                size={13}
                variant="solid"
                style={{ color: colors.primary } as React.CSSProperties}
              />
              <span
                style={{
                  color: colors.primary,
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Free PDF Organizer
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-heading font-extrabold mb-4"
              style={{
                fontSize: 'clamp(28px, 5vw, 52px)',
                color: '#1A1A2E',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Organize PDF Pages{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #A78BFA 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                For Free
              </span>
            </h1>

            <p
              className="mx-auto mb-8"
              style={{
                color: '#4A4A6A',
                fontSize: 'clamp(15px, 2vw, 18px)',
                maxWidth: '520px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.65,
              }}
            >
              Rearrange, rotate, and manage your PDF pages easily with our drag-and-drop organizer
              tool.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: 'SSL Secured' },
                { icon: 'ArrowsUpDownIcon', text: 'Drag & Drop' },
                { icon: 'CurrencyDollarIcon', text: '100% Free' },
                { icon: 'BoltIcon', text: 'Instant Results' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: '#F8F8FC',
                    border: '1px solid #EEEEF5',
                  }}
                >
                  <Icon
                    name={badge.icon as any}
                    size={12}
                    variant="solid"
                    style={{ color: colors.primary } as React.CSSProperties}
                  />
                  <span
                    style={{
                      color: '#4A4A6A',
                      fontSize: '12px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                    }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Upload Tool */}
            <div
              className="p-6 sm:p-8 rounded-3xl"
              style={{
                background: 'white',
                boxShadow: '0 4px 32px rgba(26,26,46,0.07)',
                border: '1.5px solid #EEEEF5',
              }}
            >
              <OrganizePDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...organizePDFData} />
      </main>
    </>
  );
}
