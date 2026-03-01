import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LockPDFUploader from './components/LockPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { lockPDFData } from './components/lockPDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Lock PDF Online Free — Password Protect PDF Instantly | LuvUPDF',
  description:
    'Lock and password protect your PDF files online for free using 256-bit AES encryption. No sign-up required. Secure your PDFs instantly with LuvUPDF.',
  keywords:
    'lock PDF, password protect PDF, encrypt PDF, PDF password, secure PDF online, protect PDF free, PDF encryption, lock PDF online',
  openGraph: {
    title: 'Lock PDF Online Free — Password Protect PDF | LuvUPDF',
    description:
      'Add 256-bit AES password protection to any PDF file for free. No registration, instant results, SSL secured.',
    type: 'website',
    url: 'https://luvupdf.com/lock-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock PDF Online Free | LuvUPDF',
    description: 'Password protect any PDF with 256-bit encryption. Free, instant, no sign-up.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/lock-pdf',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I password protect a PDF file online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF to LuvUPDF\'s Lock PDF tool, enter a strong password, confirm it, and click "Lock PDF with Password". Download your encrypted PDF instantly. No registration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of encryption does LuvUPDF use to lock PDFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LuvUPDF uses 256-bit AES encryption — the same standard used by governments and financial institutions worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I forget my PDF password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LuvUPDF does not store passwords for security reasons. If you forget your PDF password, you will need a specialized PDF recovery tool to regain access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does locking a PDF affect its quality or content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Adding password protection does not affect the content, formatting, images, or quality of your PDF in any way.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF Lock PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/lock-pdf',
  description: 'Free online PDF lock tool. Password protect PDF files with 256-bit AES encryption.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function LockPDFPage() {
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
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(124,92,191,0.07) 0%, transparent 65%), #FFFFFF',
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
                  color: '#7C5CBF',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                Lock PDF
              </span>
            </nav>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#F3EEFF', border: '1.5px solid #E0D4FF' }}
            >
              <Icon
                name="LockClosedIcon"
                size={13}
                variant="solid"
                style={{ color: '#7C5CBF' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#7C5CBF',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                256-bit AES Encryption · Free
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
              Lock PDF with Password{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7C5CBF 0%, #A07CE8 100%)',
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
              Protect your sensitive PDF documents with military-grade 256-bit AES encryption. Set a
              password in seconds — no account required.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: '256-bit AES' },
                { icon: 'EyeSlashIcon', text: 'Password Not Stored' },
                { icon: 'CurrencyDollarIcon', text: '100% Free' },
                { icon: 'BoltIcon', text: 'Instant Encryption' },
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
                    style={{ color: '#7C5CBF' } as React.CSSProperties}
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
              <LockPDFUploader />
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...lockPDFData} />
      </main>
      <Footer />
    </>
  );
}
