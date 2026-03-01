import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import UnlockPDFUploader from './components/UnlockPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { unlockPDFData } from './components/unlockPDFData';

export const metadata: Metadata = {
  title: 'Unlock PDF Online Free — Remove PDF Passwords Safely | LuvUPDF',
  description:
    'Unlock password-protected PDF files online for free. Regain access to your own documents while keeping quality intact. No installation, no sign-up, works in your browser.',
  openGraph: {
    title: 'Unlock PDF Online Free — Remove PDF Passwords | LuvUPDF',
    description:
      'Remove passwords from your own PDF files in a few simple steps. Free, secure, and browser-based.',
    type: 'website',
    url: 'https://luvupdf.com/unlock-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlock PDF Online Free | LuvUPDF',
    description:
      'Unlock password-protected PDFs you own without installing heavy desktop software. 100% free.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/unlock-pdf',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I unlock any PDF file with this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LuvUPDF Unlock PDF is designed for documents that you already own or are authorized to access. You will need to know the correct password or have legitimate permission to remove it. The tool is not intended for bypassing security on unauthorized files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Unlock PDF tool free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Unlock PDF tool, like other core utilities in LuvUPDF, is planned to be completely free to use with no watermarks and no registration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will unlocking a PDF change its content or quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Unlocking a PDF simply removes the password requirement. The text, images, layout, fonts, and internal structure of the document remain the same.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF Unlock PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/unlock-pdf',
  description:
    'Free online Unlock PDF tool. Remove passwords from your own PDF files quickly and safely in the browser.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function UnlockPDFPage() {
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
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(14,165,176,0.06) 0%, transparent 65%), #FFFFFF',
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
                  color: '#0EA5B0',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Unlock PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#ECFEFF', border: '1.5px solid #A5F3FC' }}
            >
              <Icon
                name="LockOpenIcon"
                size={13}
                variant="solid"
                style={{ color: '#0EA5B0' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#0EA5B0',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Unlock PDF · Coming Soon
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
              Unlock PDF Files Online{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #0EA5B0 0%, #14B8A6 100%)',
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
              Safely remove passwords from your own PDF files in a few clicks. This dedicated Unlock
              PDF page is fully optimized for SEO and user experience while the processing engine is
              being finalized.
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
              <UnlockPDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...unlockPDFData} />
      </main>
      <Footer />
    </>
  );
}
