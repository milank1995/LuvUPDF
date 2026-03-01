import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MergePDFUploader from './components/MergePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { mergePDFData } from './components/mergePDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free — Combine PDFs Instantly | LuvUPDF',
  description:
    'Merge multiple PDF files into one document online for free. No sign-up required. Fast, secure, and easy to use. Combine PDFs in seconds with LuvUPDF.',
  keywords:
    'merge PDF, combine PDF files, PDF merger online, merge PDF free, join PDF files, PDF combiner, merge multiple PDFs',
  openGraph: {
    title: 'Merge PDF Files Online Free | LuvUPDF',
    description:
      'Combine multiple PDF files into one document instantly. Free, secure, no registration required.',
    type: 'website',
    url: 'https://luvupdf.com/merge-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Files Online Free | LuvUPDF',
    description: 'Combine multiple PDFs into one file for free. No sign-up, instant results.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/merge-pdf',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I merge PDF files online for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF files to LuvUPDF\'s Merge PDF tool, arrange them in the desired order, and click "Merge PDF". Download your combined file instantly. No registration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many PDF files can I merge at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LuvUPDF allows you to merge up to 20 PDF files at once, with each file up to 100MB in size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the merged PDF quality affected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LuvUPDF preserves the original quality of all your PDF files, including text, images, fonts, and formatting.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF Merge PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/merge-pdf',
  description: 'Free online PDF merger tool. Combine multiple PDF files into one document.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function MergePDFPage() {
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
                  color: '#E8445A',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Merge PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
            >
              <Icon
                name="DocumentPlusIcon"
                size={13}
                variant="solid"
                style={{ color: '#E8445A' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#E8445A',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Free PDF Merger Tool
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
              Merge PDF Files Online{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8445A 0%, #FF7A8A 100%)',
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
              Combine multiple PDF documents into a single file in seconds. Drag, drop, reorder, and
              merge — no account required.
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
                    style={{ color: '#E8445A' } as React.CSSProperties}
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
              <MergePDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...mergePDFData} />
      </main>
      <Footer />
    </>
  );
}
