import type { Metadata } from 'next';
import Icon from '@/components/ui/AppIcon';
import RotatePDFUploader from './components/RotatePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { rotatePDFData } from './components/rotatePDFData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Rotate PDF Online Free — Fix Page Orientation | LoveUPDF',
  description:
    'Rotate PDF pages permanently. Fix sideways scans or upside-down pages. Free, private, no upload — all in your browser.',
  keywords:
    'rotate PDF online free, fix sideways PDF, rotate PDF pages, PDF orientation changer, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Rotate PDF Online Free | LoveUPDF',
    description: 'Rotate PDF pages instantly. Free and private — files never leave your device.',
    type: 'website',
    url: `${SITE_URL}/rotate-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate PDF Online Free | LoveUPDF',
    description: 'Fix page orientation instantly. Free and private.',
  },
  alternates: {
    canonical: `${SITE_URL}/rotate-pdf`,
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Rotate a PDF Online',
  description: 'Fix sideways or upside-down pages in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: `${SITE_URL}/rotate-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Rotate Pages',
      text: 'Click rotate on pages you want to fix. Choose clockwise, counterclockwise, or 180°.',
      url: `${SITE_URL}/rotate-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click apply and download your rotated PDF instantly.',
      url: `${SITE_URL}/rotate-pdf`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I rotate a PDF online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, click rotate on pages you want to fix, and download. All in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rotate only specific pages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Select individual pages to rotate while leaving others unchanged.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will rotating affect PDF quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Text, images, and formatting stay exactly the same. Only orientation changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rotate pages multiple times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rotate as many times as needed until orientation is correct.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Rotate PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/rotate-pdf`,
  description:
    'Free online PDF rotator. Fix page orientation in your browser. No upload, no installation.',
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
      name: 'Rotate PDF',
      item: `${SITE_URL}/rotate-pdf`,
    },
  ],
};

export default function RotatePDFPage() {
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
          aria-labelledby="rotate-pdf-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(245,158,11,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Rotate PDF' },
              ]}
              color="#F59E0B"
            />

            {/* H1 */}
            <h1
              id="rotate-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Rotate PDF Pages
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Fix sideways scans or upside-down pages.
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
                  style={{ color: '#F59E0B' }}
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
              <RotatePDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files processed in your browser. Nothing is uploaded or stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including rotate PDF, merge PDF, split PDF, compress
                PDF, lock PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...rotatePDFData} />
      </main>
    </>
  );
}
