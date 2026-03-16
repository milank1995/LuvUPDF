import type { Metadata } from 'next';
import LockPDFUploader from './components/LockPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { lockPDFData } from './components/lockPDFData';
import Icon from '@/components/ui/AppIcon';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Lock PDF Online Free — Password Protect PDF',
  description:
    'Password protect PDF files with 256-bit AES encryption. Free, secure, no account needed. Files processed in memory and auto-deleted.',
  keywords:
    'lock PDF online free, password protect PDF, encrypt PDF, PDF security, 256-bit AES, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Lock PDF Online Free',
    description: 'Add password protection to any PDF. 256-bit encryption. Free and private.',
    type: 'website',
    url: `${SITE_URL}/lock-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock PDF Online Free',
    description: 'Password protect PDFs with 256-bit AES encryption. Free and private.',
  },
  alternates: {
    canonical: `${SITE_URL}/lock-pdf`,
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Password Protect a PDF',
  description: 'Add 256-bit AES encryption to your PDF files in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: `${SITE_URL}/lock-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Set Password',
      text: 'Enter and confirm a strong password.',
      url: `${SITE_URL}/lock-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click lock and download your encrypted PDF instantly.',
      url: `${SITE_URL}/lock-pdf`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I password protect a PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, enter a password, and click lock. Download your encrypted file instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What encryption do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use 256-bit AES encryption — the same standard used by banks and governments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I forget my password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't store passwords. If you forget it, the PDF cannot be unlocked.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you keep my files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Files are processed in memory and permanently deleted after download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I lock PDFs on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Works on iPhone, Android, iPad, and desktop browsers.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Lock PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/lock-pdf`,
  description: 'Free online PDF lock tool. Password protect PDFs with 256-bit AES encryption.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'All Tools',
      item: `${SITE_URL}/tools`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Lock PDF',
      item: `${SITE_URL}/lock-pdf`,
    },
  ],
};

export default function LockPDFPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main itemScope itemType="https://schema.org/SoftwareApplication">
        {/* Hero Section */}
        <section
          className="pt-24 pb-10 px-4 sm:px-6"
          aria-labelledby="lock-pdf-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(124,92,191,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Lock PDF' },
              ]}
              color="#7C5CBF"
            />

            {/* H1 */}
            <h1
              id="lock-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Lock PDF with Password
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Add 256-bit AES encryption to any PDF.
              <span className="block mt-1">Secure server processing. Auto-deleted instantly.</span>
            </p>

            {/* Privacy Badge */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: '#F8F8FC' }}
              >
                <Icon
                  name="ShieldCheckIcon"
                  size={14}
                  variant="solid"
                  style={{ color: '#7C5CBF' }}
                />
                <span className="text-xs font-medium" style={{ color: '#4A4A6A' }}>
                  Server-side · Processed in memory · Auto-deleted
                </span>
              </div>
            </div>

            {/* Upload Tool */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'white',
                border: '1.5px solid #EEEEF5',
              }}
            >
              <LockPDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files encrypted during transfer. Processed in memory. Permanently deleted after
              download. Passwords never stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including lock PDF, merge PDF, split PDF, compress
                PDF, rotate PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible. Server-side
                tools like lock use 256-bit SSL and instant auto-deletion.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...lockPDFData} />
      </main>
    </>
  );
}
