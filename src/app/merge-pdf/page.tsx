import type { Metadata } from 'next';
import MergePDFUploader from './components/MergePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { mergePDFData } from './components/mergePDFData';
import Icon from '@/components/ui/AppIcon';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free — Combine PDF Files | LoveUPDF',
  description:
    'Merge multiple PDF files into one document. Free, private, no account needed. Files stay in your browser — never uploaded.',
  keywords:
    'merge PDF online free, combine PDF files, PDF merger free, join PDF files, free PDF combiner, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Merge PDF Online Free — Combine PDF Files | LoveUPDF',
    description:
      'Free PDF merger. Combine PDFs instantly. 100% private — files never leave your device.',
    type: 'website',
    url: `${SITE_URL}/merge-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Online Free | LoveUPDF',
    description: 'Combine PDF files instantly. No upload, no account, 100% free.',
  },
  alternates: {
    canonical: `${SITE_URL}/merge-pdf`,
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Merge PDF Files Online',
  description: 'Combine multiple PDFs into one document in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDFs',
      text: 'Select or drag your PDF files into the tool.',
      url: `${SITE_URL}/merge-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Arrange Order',
      text: 'Drag files to arrange them in your desired order.',
      url: `${SITE_URL}/merge-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click merge and download your combined PDF instantly.',
      url: `${SITE_URL}/merge-pdf`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I merge PDF files for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDFs, arrange them in order, and click merge. Download your combined file instantly. No account or payment needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is merging PDFs safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Files are processed in your browser and never uploaded to any server. Your documents stay private on your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rearrange pages before merging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drag and drop files to arrange them in any order before merging.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF PDF Merger',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/merge-pdf`,
  description:
    'Free online PDF merger. Combine multiple PDF files into one document. Privacy-first, no server upload.',
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
      name: 'Merge PDF',
      item: `${SITE_URL}/merge-pdf`,
    },
  ],
};

export default function MergePDFPage() {
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
          aria-labelledby="merge-pdf-heading"
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
                { label: 'Merge PDF' },
              ]}
              color="#E8445A"
            />

            {/* H1 */}
            <h1
              id="merge-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Merge PDF Files
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '520px',
              }}
            >
              Combine multiple PDFs into one document.
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
                  style={{ color: '#E8445A' }}
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
              <MergePDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files processed in your browser. Nothing is uploaded or stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including merge PDF, split PDF, compress PDF, rotate
                PDF, lock PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...mergePDFData} />
      </main>
    </>
  );
}
