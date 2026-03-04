import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompressPDFUploader from './components/CompressPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { compressPDFData } from './components/compressPDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { TOOL_COLORS } from '@/constants/toolColors';

const colors = TOOL_COLORS.compress;

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce PDF File Size Instantly | LuvUPDF',
  description:
    'The best free online PDF compressor. Reduce PDF file size without losing quality. Secure, fast, and no registration or watermark required. Works on all devices.',
  keywords:
    'compress PDF online, reduce PDF size, shrink PDF file, PDF compressor free, optimize PDF size, online PDF shrinker, LuvUPDF',
  openGraph: {
    title: 'Compress PDF Online Free — Reduce PDF File Size | LuvUPDF',
    description:
      'Shrink your PDF documents while maintaining maximum quality. Secure, 100% free, and no account needed.',
    type: 'website',
    url: 'https://luvupdf.com/compress-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PDF Online Free — Reduce PDF Size Instantly | LuvUPDF',
    description:
      'The easiest way to reduce PDF file size for free. Secure processing and no registration required.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/compress-pdf',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress PDF Files Online Free',
  description:
    'Learn how to reduce PDF file size while maintaining quality using LuvUPDF in 4 simple steps.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag-and-drop your PDF file into the LuvUPDF compressor tool.',
      url: 'https://luvupdf.com/compress-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Select Level',
      text: 'Choose your preferred compression level: Recommended for balance or Extreme for smallest size.',
      url: 'https://luvupdf.com/compress-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Optimize File',
      text: 'Click the "Compress PDF" button to process and shrink your document instantly on our secure servers.',
      url: 'https://luvupdf.com/compress-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Download Result',
      text: 'Download your newly compressed PDF file instantly. All files are automatically deleted after 1 hour.',
      url: 'https://luvupdf.com/compress-pdf',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress a PDF online for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Simply upload your PDF to LuvUPDF, select a compression level, and click 'Compress PDF'. You can download the optimized file instantly with no registration required.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will compression reduce the quality of my PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tool uses smart compression algorithms to reduce file size while maintaining the highest possible quality for text and images.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to compress PDFs on LuvUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use 256-bit SSL encryption for all transfers, and all files are automatically purged from our servers after 60 minutes.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF PDF Compressor',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/compress-pdf',
  description:
    'A powerful, free online PDF compressor tool to reduce PDF file size without quality loss.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function CompressPDFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Header />
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
                  color: colors.primary,
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
              style={{ background: colors.surface, border: `1.5px solid ${colors.border}` }}
            >
              <Icon
                name="SparklesIcon"
                size={13}
                variant="solid"
                style={{ color: colors.primary } as React.CSSProperties}
              />
              <span
                style={{
                  color: colors.primary,
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                100% Free PDF Optimizer
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
              Compress PDF Files —{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #34D399 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Simple, Fast & Free
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
              Reduce PDF file size quickly without sacrificing quality. Perfect for email sharing,
              faster uploads, and saving storage space. No installation needed.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: 'Secure Encryption' },
                { icon: 'SparklesIcon', text: 'High-Quality Output' },
                { icon: 'CurrencyDollarIcon', text: 'Always Free (No Ads)' },
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
