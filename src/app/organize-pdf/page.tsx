import type { Metadata } from 'next';
import OrganizePDFUploader from './components/OrganizePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { organizePDFData } from './components/organizePDFData';
import Icon from '@/components/ui/AppIcon';
import { TOOL_COLORS } from '@/constants/toolColors';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/constants/site';

const colors = TOOL_COLORS.organize;

export const metadata: Metadata = {
  title: 'Organize PDF Pages Online Free — Reorder & Arrange | LoveUPDF',
  description:
    'Organize PDF pages online free. Drag and drop to reorder, rotate, or delete pages. Client-side processing — files never leave your device.',
  keywords:
    'organize PDF online free, reorder PDF pages, rearrange PDF pages, PDF page organizer, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Organize PDF Pages Online Free | LoveUPDF',
    description:
      'Rearrange and organize PDF pages instantly. Free and private — files stay in your browser.',
    type: 'website',
    url: `${SITE_URL}/organize-pdf`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organize PDF Pages Online Free | LoveUPDF',
    description: 'Reorder PDF pages with drag and drop. Free and private.',
  },
  alternates: { canonical: `${SITE_URL}/organize-pdf` },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Organize PDF Pages Online',
  description: 'Reorder, rotate, or delete PDF pages with simple drag and drop.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: `${SITE_URL}/organize-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Arrange Pages',
      text: 'Drag thumbnails to reorder. Use rotate or delete icons as needed.',
      url: `${SITE_URL}/organize-pdf`,
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click organize and download your rearranged PDF instantly.',
      url: `${SITE_URL}/organize-pdf`,
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I organize PDF pages online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, drag and drop pages to reorder, then download your organized file instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I delete pages while organizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Delete unwanted pages while reordering. All changes made before download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Files are processed in your browser and never uploaded to any server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rotate pages while organizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rotate individual pages with one click while rearranging.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Organize PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${SITE_URL}/organize-pdf`,
  description: 'Free online PDF organizer. Rearrange, rotate, and delete pages in your browser.',
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
      name: 'Organize PDF',
      item: `${SITE_URL}/organize-pdf`,
    },
  ],
};

export default function OrganizePDFPage() {
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
          aria-labelledby="organize-pdf-heading"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${colors.primary}12 0%, transparent 70%), #FFFFFF`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Organize PDF' },
              ]}
              color={colors.primary}
            />

            {/* H1 */}
            <h1
              id="organize-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Organize PDF Pages
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Reorder, rotate, or delete pages with drag and drop.
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
                  style={{ color: colors.primary }}
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
              <OrganizePDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files processed in your browser. Nothing is uploaded or stored.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including organize PDF, merge PDF, split PDF,
                compress PDF, rotate PDF, lock PDF, unlock PDF, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...organizePDFData} />
      </main>
    </>
  );
}
