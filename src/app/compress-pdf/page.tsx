import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompressPDFUploader from './components/CompressPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { compressPDFData } from './components/compressPDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce PDF File Size Instantly | LuvUPDF',
  description:
    'Compress PDF files online for free. Reduce PDF file size without losing quality. Fast, secure, and no registration required.',
  keywords:
    'compress PDF, reduce PDF size, shrink PDF file, PDF compressor online free, optimize PDF size',
  openGraph: {
    title: 'Compress PDF Online Free | LuvUPDF',
    description:
      'Reduce PDF file size instantly while maintaining quality. Free and secure PDF compressor.',
    type: 'website',
    url: 'https://luvupdf.com/compress-pdf',
  },
  alternates: { canonical: 'https://luvupdf.com/compress-pdf' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress a PDF file online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, choose your compression level, click "Compress PDF", and download the reduced-size file instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will compressing a PDF reduce quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our compression tool reduces file size while maintaining the best possible quality. You can choose the level of compression based on your needs.',
      },
    },
  ],
};

export default function CompressPDFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main>
        {/* Page Hero */}
        <section
          className="pt-24 pb-10 px-4 sm:px-6"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(16,185,129,0.07) 0%, transparent 65%), #FFFFFF',
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
                  color: '#10B981',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Compress PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0' }}
            >
              <Icon
                name="ArchiveBoxIcon"
                size={13}
                variant="solid"
                style={{ color: '#10B981' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#10B981',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Free PDF Compressor
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
              Compress PDF Files{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
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
              Reduce PDF file size quickly without sacrificing quality. Perfect for email, sharing,
              and faster uploads.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: 'SSL Secured' },
                { icon: 'SparklesIcon', text: 'Optimized Quality' },
                { icon: 'CurrencyDollarIcon', text: '100% Free' },
                { icon: 'BoltIcon', text: 'Fast Compression' },
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
                    style={{ color: '#10B981' } as React.CSSProperties}
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
              <CompressPDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...compressPDFData} />
      </main>

      <Footer />
    </>
  );
}
