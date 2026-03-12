import type { Metadata } from 'next';
import SplitPDFUploader from './components/SplitPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { splitPDFData } from './components/splitPDFData';
import Icon from '@/components/ui/AppIcon';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Split PDF Online Free — Extract Pages | LoveUPDF',
  description:
    'Split PDF files into multiple documents or extract specific pages. Free, private, no account needed. Files stay in your browser.',
  keywords:
    'split PDF online free, extract PDF pages, separate PDF pages, PDF splitter free, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Split PDF Online Free | LoveUPDF',
    description: 'Split PDF files instantly. Free and private — files never leave your device.',
    type: 'website',
    url: `${SITE_URL}/split-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split PDF Online Free | LoveUPDF',
    description: 'Extract PDF pages instantly. Free and private.',
  },
  alternates: { canonical: `${SITE_URL}/split-pdf` },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Split a PDF Online',
  description: 'Extract specific pages or split PDFs into multiple files in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: `${SITE_URL}/split-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Pages',
      text: 'Select pages to extract or choose split options.',
      url: `${SITE_URL}/split-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click split and download your files instantly.',
      url: `${SITE_URL}/split-pdf`,
    },
  ],
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
        text: 'Upload your PDF, choose pages to extract, and click split. Download your new files instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to split PDFs online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Files are processed in your browser and never uploaded to any server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I extract specific pages only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Enter page ranges like 1-5 or select individual pages to extract.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Split PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/split-pdf`,
  description: 'Free online PDF splitter. Extract pages or split PDFs into multiple files.',
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
      name: 'Split PDF',
      item: `${SITE_URL}/split-pdf`,
    },
  ],
};

export default function SplitPDFPage() {
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
          aria-labelledby="split-pdf-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(59,130,246,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Split PDF' },
              ]}
              color="#3B82F6"
            />

            {/* H1 */}
            <h1
              id="split-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Split PDF Pages
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Extract specific pages or split into multiple files.
              <span className="block mt-1">No upload. No account. 100% private.</span>
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
                  style={{ color: '#3B82F6' }}
                />
                <span className="text-xs font-medium" style={{ color: '#4A4A6A' }}>
                  Client-side · No server upload
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
              <SplitPDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files processed in your browser. Nothing is uploaded or stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including split PDF, merge PDF, compress PDF, rotate
                PDF, lock PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...splitPDFData} />
      </main>
    </>
  );
}
