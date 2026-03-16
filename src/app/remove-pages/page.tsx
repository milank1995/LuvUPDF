import type { Metadata } from 'next';
import RemovePagesPDFUploader from './components/RemovePagesPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { removePagesPDFData } from './components/removePagesPDFData';
import Icon from '@/components/ui/AppIcon';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Remove Pages from PDF Online Free — Delete PDF Pages',
  description:
    'Delete unwanted pages from any PDF. Free, private, no account needed. Client-side processing — files never leave your device.',
  keywords:
    'remove pages from PDF online free, delete PDF pages, PDF page remover, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Remove Pages from PDF Online Free',
    description:
      'Delete unwanted PDF pages instantly. Free and private — files stay in your browser.',
    type: 'website',
    url: `${SITE_URL}/remove-pages`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Pages from PDF Online Free',
    description: 'Delete PDF pages instantly. Free and private.',
  },
  alternates: { canonical: `${SITE_URL}/remove-pages` },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Remove Pages from a PDF',
  description: 'Delete unwanted pages from your PDF in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: `${SITE_URL}/remove-pages`,
    },
    {
      '@type': 'HowToStep',
      name: 'Select Pages',
      text: 'Click on page thumbnails to choose which to delete.',
      url: `${SITE_URL}/remove-pages`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click remove and download your updated PDF instantly.',
      url: `${SITE_URL}/remove-pages`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I remove pages from a PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, select pages to delete, click remove, and download your updated file.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will removing pages affect quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Remaining pages keep their original quality, formatting, and content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to remove PDF pages online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Files are processed in your browser and never uploaded to any server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I select multiple pages to remove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Click multiple page thumbnails to select them all before removing.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Remove Pages',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/remove-pages`,
  description: 'Free online PDF page remover. Delete unwanted pages instantly in your browser.',
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
      name: 'Remove Pages',
      item: `${SITE_URL}/remove-pages`,
    },
  ],
};

export default function RemovePagesPDFPage() {
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
          aria-labelledby="remove-pages-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,68,90,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Remove Pages' },
              ]}
              color="#EF4444"
            />

            {/* H1 */}
            <h1
              id="remove-pages-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Remove Pages from PDF
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Delete unwanted or blank pages instantly.
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
                  style={{ color: '#EF4444' }}
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
              <RemovePagesPDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files processed in your browser. Nothing is uploaded or stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including remove pages, merge PDF, split PDF,
                compress PDF, rotate PDF, lock PDF, unlock PDF, and organize PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...removePagesPDFData} />
      </main>
    </>
  );
}
