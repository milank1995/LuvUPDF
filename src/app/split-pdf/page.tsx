import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitPDFUploader from './components/SplitPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { splitPDFData } from './components/splitPDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Split PDF Online Free — Extract Pages Instantly | LuvUPDF',
  description:
    'Split PDF files online for free. Extract specific pages or separate PDFs into multiple files instantly. Fast, secure, no registration required.',
  keywords:
    'split PDF, extract PDF pages, separate PDF pages, divide PDF online, PDF splitter free',
  openGraph: {
    title: 'Split PDF Online Free | LuvUPDF',
    description:
      'Extract pages from PDF files or split into multiple documents instantly. Free and secure.',
    type: 'website',
    url: 'https://luvupdf.com/split-pdf',
  },
  alternates: { canonical: 'https://luvupdf.com/split-pdf' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I split a PDF online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, select specific pages or page ranges, click "Split PDF", and download your new files instantly.',
      },
    },
  ],
};

export default function SplitPDFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/*<script*/}
      {/*  type="application/ld+json"*/}
      {/*  dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}*/}
      {/*/>*/}
      <Header />
      <main>
        {/* Page Hero */}
        <section
          className="pt-24 pb-10 px-4 sm:px-6"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,68,90,0.07) 0%, transparent 65%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6" aria-label="Breadcrumb">
              <Link
                href="/"
                style={{
                  color: '#8888A8',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'none',
                }}
              >
                Home
              </Link>
              <Icon
                name="ChevronRightIcon"
                size={12}
                style={{ color: '#EEEEF5' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#3B82F6',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Split PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE' }}
            >
              <Icon
                name="ScissorsIcon"
                size={13}
                variant="solid"
                style={{ color: '#3B82F6' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#3B82F6',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Free PDF Splitter Tool
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
              Split PDF Pages{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
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
              Extract specific pages or split your PDF into multiple files in seconds.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: 'SSL Secured' },
                { icon: 'TrashIcon', text: 'Auto-Deleted' },
                { icon: 'CurrencyDollarIcon', text: '100% Free' },
                { icon: 'BoltIcon', text: 'Instant Results' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
                >
                  <Icon
                    name={badge.icon as any}
                    size={12}
                    variant="solid"
                    style={{ color: '#3B82F6' } as React.CSSProperties}
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
              <SplitPDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...splitPDFData} />
      </main>
      <Footer />
    </>
  );
}
