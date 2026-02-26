import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import RotatePDFUploader from './components/RotatePDFUploader';
import RotatePDFContent from './components/RotatePDFContent';

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free — Fix Sideways PDFs | LuvUPDF',
  description:
    'Rotate PDF pages online for free. Fix sideways or upside-down pages in seconds without installing software. Clean, fast, and secure PDF rotation in your browser.',
  openGraph: {
    title: 'Rotate PDF Pages Online Free | LuvUPDF',
    description:
      'Correct the orientation of scanned or sideways PDF pages instantly. Free, browser-based Rotate PDF tool from LuvUPDF.',
    type: 'website',
    url: 'https://luvupdf.com/rotate-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate PDF Pages Online Free | LuvUPDF',
    description:
      'Rotate individual PDF pages or whole documents to the perfect orientation with a simple, free web tool.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/rotate-pdf',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it free to rotate PDF pages with LuvUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Rotate PDF tool is planned to be completely free to use, with no watermarks and no registration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will rotating pages reduce the quality of my PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Rotating pages simply updates their orientation. The text, images, and layout of your PDF remain exactly the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rotate only specific pages instead of the whole document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Rotate PDF experience is being designed so you can select individual pages or ranges of pages to rotate without affecting the rest of the file.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF Rotate PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/rotate-pdf',
  description:
    'Free online Rotate PDF tool. Fix sideways or upside-down pages without installing any software.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function RotatePDFPage() {
  return (
    <>
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
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(245,158,11,0.08) 0%, transparent 65%), #FFFFFF',
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
                  color: '#F59E0B',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Rotate PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A' }}
            >
              <Icon
                name="ArrowPathIcon"
                size={13}
                variant="solid"
                style={{ color: '#F59E0B' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#F59E0B',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Rotate PDF · Coming Soon
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
              Rotate PDF Pages Online{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
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
              Fix sideways or upside-down PDF pages without installing heavy software. This Rotate
              PDF page delivers a modern, SEO-optimized experience while the underlying rotation
              engine is finalized.
            </p>

            {/* Upload Tool */}
            <div
              className="p-6 sm:p-8 rounded-3xl"
              style={{
                background: 'white',
                boxShadow: '0 4px 32px rgba(26,26,46,0.07)',
                border: '1.5px solid #EEEEF5',
              }}
            >
              <RotatePDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <RotatePDFContent />
      </main>
      <Footer />
    </>
  );
}
