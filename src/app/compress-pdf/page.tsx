import type { Metadata } from 'next';
import CompressPDFUploader from './components/CompressPDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { compressPDFData } from './components/compressPDFData';
import Icon from '@/components/ui/AppIcon';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce File Size | LoveUPDF',
  description:
    'Compress PDF files online for free. Reduce file size while maintaining quality. Secure server processing — files auto-deleted instantly.',
  keywords:
    'compress PDF online free, reduce PDF file size, PDF compressor, shrink PDF, LoveUPDF, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Compress PDF Online Free | LoveUPDF',
    description: 'Reduce PDF file size instantly. Free, secure, auto-deleted.',
    type: 'website',
    url: 'https://luvupdf.com/compress-pdf',
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PDF Online Free | LoveUPDF',
    description: 'Reduce PDF file size instantly. Free and secure.',
  },
  alternates: { canonical: 'https://luvupdf.com/compress-pdf' },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Compress a PDF Online',
  description: 'Reduce PDF file size while maintaining quality in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDF',
      text: 'Select or drag your PDF file into the tool.',
      url: 'https://luvupdf.com/compress-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Choose Level',
      text: 'Select compression level (low, medium, or high).',
      url: 'https://luvupdf.com/compress-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Download',
      text: 'Click compress and download your smaller file instantly.',
      url: 'https://luvupdf.com/compress-pdf',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I compress a PDF online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your PDF, click compress, and download the smaller file instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will compression reduce quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We balance file size and quality. Images are optimized but remain clear and readable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Files are encrypted, processed in memory, and permanently deleted immediately after download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which compression level should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medium works for most files. Low keeps highest quality. High for smallest size.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF Compress PDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/compress-pdf',
  description: 'Free online PDF compressor. Reduce file size while maintaining quality.',
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
      item: 'https://luvupdf.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'All Tools',
      item: 'https://luvupdf.com/tools',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Compress PDF',
      item: 'https://luvupdf.com/compress-pdf',
    },
  ],
};

export default function CompressPDFPage() {
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
          aria-labelledby="compress-pdf-heading"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(16,185,129,0.05) 0%, transparent 70%), #FFFFFF',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'All Tools', href: '/tools' },
                { label: 'Compress PDF' },
              ]}
              color="#10B981"
            />

            {/* H1 */}
            <h1
              id="compress-pdf-heading"
              className="font-heading font-extrabold mb-3"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#1A1A2E',
                lineHeight: 1.1,
              }}
            >
              Compress PDF Files
            </h1>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '500px',
              }}
            >
              Reduce file size for email or sharing.
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
                  style={{ color: '#10B981' }}
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
              <CompressPDFUploader />
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs" style={{ color: '#8888A8' }}>
              Files encrypted during transfer. Processed in memory. Permanently deleted after
              download.
            </p>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF offers free PDF tools including compress PDF, merge PDF, split PDF, rotate
                PDF, lock PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools
                prioritize your privacy with client-side processing whenever possible. Server-side
                tools like compress use 256-bit SSL and instant auto-deletion.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...compressPDFData} />
      </main>
    </>
  );
}
