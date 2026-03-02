import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RemovePagesPDFUploader from './components/RemovePagesPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { removePagesPDFData } from './components/removePagesPDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Remove Pages from PDF Online Free — Delete PDF Pages Instantly | LuvUPDF',
  description:
    'Remove unwanted pages from a PDF online for free. Delete specific pages instantly while preserving quality. Secure, fast, and no registration required.',
  keywords:
    'remove pages from PDF, delete PDF pages, remove PDF page online, delete pages from PDF free, PDF page remover',
  openGraph: {
    title: 'Remove Pages from PDF Online Free | LuvUPDF',
    description:
      'Delete unwanted pages from your PDF instantly. Free, secure, and easy to use online PDF page remover.',
    type: 'website',
    url: 'https://luvupdf.com/remove-pages',
  },
  alternates: { canonical: 'https://luvupdf.com/remove-pages' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I remove pages from a PDF online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, select the pages you want to delete, click "Remove Pages", and download your updated PDF instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will removing pages affect PDF quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Removing pages does not affect the quality, formatting, or content of the remaining pages in your PDF.',
      },
    },
  ],
};

export default function RemovePagesPDFPage() {
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
                  color: '#EF4444',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Remove Pages
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#FEF2F2', border: '1.5px solid #FECACA' }}
            >
              <Icon
                name="TrashIcon"
                size={13}
                variant="solid"
                style={{ color: '#EF4444' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#EF4444',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Free PDF Page Remover
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
              Remove Pages from PDF{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
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
              Delete unwanted or blank pages from your PDF in seconds while preserving formatting
              and quality.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: 'SSL Secured' },
                { icon: 'TrashIcon', text: 'Selective Removal' },
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
                    style={{ color: '#EF4444' } as React.CSSProperties}
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
              <RemovePagesPDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...removePagesPDFData} />
      </main>
      <Footer />
    </>
  );
}
