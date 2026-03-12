import type { Metadata } from 'next';
import Icon from '@/components/ui/AppIcon';
import UnlockPDFUploader from './components/UnlockPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { unlockPDFData } from './components/unlockPDFData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Unlock PDF Online Free — Remove PDF Passwords | LoveUPDF',
  description:
    'Remove passwords from your own PDF files. Free, secure, no account needed. Files processed in memory and auto-deleted instantly.',
  keywords:
    'unlock PDF online free, remove PDF password, decrypt PDF, PDF password remover, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Unlock PDF Online Free | LoveUPDF',
    description: 'Remove passwords from your own PDF files. Free and private.',
    type: 'website',
    url: `${SITE_URL}/unlock-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlock PDF Online Free | LoveUPDF',
    description: 'Remove PDF passwords instantly. Free and private.',
  },
  alternates: {
    canonical: `${SITE_URL}/unlock-pdf`,
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Unlock a Password-Protected PDF',
  description: 'Remove password protection from your own PDF files in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your locked PDF file into the tool.',
      url: `${SITE_URL}/unlock-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Enter Password',
      text: 'Type the password used to lock the PDF.',
      url: `${SITE_URL}/unlock-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click unlock and download your password-free PDF instantly.',
      url: `${SITE_URL}/unlock-pdf`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I unlock a password-protected PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, enter the password, and click unlock. Download your file instantly without password protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I unlock any PDF file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only PDFs you own or have permission to access. You must know the correct password.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does unlocking affect quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Content, images, and formatting stay exactly the same. Only the password is removed.',
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
      name: 'What if I enter the wrong password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The unlock will fail. Double-check your password and try again.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Unlock PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/unlock-pdf`,
  description: 'Free online PDF unlock tool. Remove passwords from your own PDF files.',
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
      name: 'Unlock PDF',
      item: `${SITE_URL}/unlock-pdf`,
    },
  ],
};

export default function UnlockPDFPage() {
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
          aria-labelledby="unlock-pdf-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(14,165,176,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Unlock PDF' },
              ]}
              color="#0EA5B0"
            />

            {/* H1 */}
            <h1
              id="unlock-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Unlock PDF Files
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Remove password protection from your own PDFs.
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
                  style={{ color: '#0EA5B0' }}
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
              <UnlockPDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files encrypted during transfer. Processed in memory. Permanently deleted after
              download. Passwords never stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including unlock PDF, lock PDF, merge PDF, split PDF,
                compress PDF, rotate PDF, organize PDF, and remove PDF pages. All tools prioritize
                your privacy with client-side or secure server-side processing with instant
                auto-deletion.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...unlockPDFData} />
      </main>
    </>
  );
}
