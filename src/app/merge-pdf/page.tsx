import type { Metadata } from 'next';
import MergePDFUploader from './components/MergePDFUploader';
import PDFToolContent from '@/components/common/PDFToolContent';
import { mergePDFData } from './components/mergePDFData';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free — Join & Combine PDF Files | LuvUPDF',
  description:
    'The best free online PDF merger. Combine multiple PDF files into one document instantly. Secure, fast, and no registration or watermark required. Works on all devices.',
  keywords:
    'merge PDF online, combine PDF files, PDF merger free, join PDF files, PDF joiner, merge multiple PDFs, how to merge PDF, free PDF combiner, LuvUPDF',
  openGraph: {
    title: 'Merge PDF Online Free — Join & Combine PDF Files | LuvUPDF',
    description:
      'Combine multiple PDF documents into a single high-quality file in seconds. Secure, 100% free, and no account needed.',
    type: 'website',
    url: 'https://luvupdf.com/merge-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Online Free — Combine PDF Files Instantly | LuvUPDF',
    description:
      'The easiest way to combine multiple PDFs into one file for free. Secure processing and no registration required.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/merge-pdf',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Merge PDF Files Online Free',
  description:
    'Learn how to combine multiple PDF files into one high-quality document using LuvUPDF in 4 simple steps.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Upload PDFs',
      text: 'Select or drag-and-drop your PDF files into the LuvUPDF merger tool. Supports files up to 100MB.',
      url: 'https://luvupdf.com/merge-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Reorder Files',
      text: 'Arrange your uploaded PDFs in the perfect order using the simple up/down arrows or drag-and-drop.',
      url: 'https://luvupdf.com/merge-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'File Adjustment',
      text: 'Finalize your selection by adding more documents or removing files as needed before merging.',
      url: 'https://luvupdf.com/merge-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Combine Files',
      text: 'Click the "Merge PDF" button to process and join your documents instantly on our secure servers.',
      url: 'https://luvupdf.com/merge-pdf',
    },
    {
      '@type': 'HowToStep',
      name: 'Direct Download',
      text: 'Download your newly combined PDF file instantly. All files are automatically deleted after 1 hour for your privacy.',
      url: 'https://luvupdf.com/merge-pdf',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I merge PDF files online for free without watermarks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Simply upload your PDF files to LuvUPDF, arrange them in your preferred order, and click 'Merge PDF'. You can download the result instantly with no registrations, fees, or watermarks.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is merging PDFs safe on LuvUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use 256-bit SSL encryption for all transfers, and our systems automatically purge all files within 60 minutes of processing to ensure your total privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I reorder PDF pages before merging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, after uploading your files, you can use the intuitive arrow controls to reorder them exactly how you want them to appear in the final merged document.',
      },
    },
  ],
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LuvUPDF PDF Merger',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  url: 'https://luvupdf.com/merge-pdf',
  description:
    'A powerful, free online PDF merger tool to combine multiple PDF files into one document with zero quality loss.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

import Breadcrumbs from '@/components/ui/Breadcrumbs';

// ... metadata and other constants stay the same

export default function MergePDFPage() {
  return (
    <>
      {/* ... scripts stay the same */}
      <main>
        {/* Page Hero */}
        <section
          className="pt-24 pb-10 px-4 sm:px-6"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,68,90,0.07) 0%, transparent 65%), #FFFFFF',
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

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
            >
              <Icon
                name="DocumentPlusIcon"
                size={13}
                variant="solid"
                style={{ color: '#E8445A' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#E8445A',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                100% Free PDF Combiner
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
              Merge PDF Files —{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8445A 0%, #FF7A8A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Fast, Secure & 100% Free
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
              The ultimate tool to combine multiple PDF files into one document. Join and merge your
              PDFs with high-quality results in seconds. No installation, no registration, and 100%
              secure.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: 'ShieldCheckIcon', text: '256-bit SSL Secure' },
                { icon: 'TrashIcon', text: 'Privacy Guard: Auto-Delete' },
                { icon: 'CurrencyDollarIcon', text: 'Always Free (No Watermark)' },
                { icon: 'BoltIcon', text: 'Ultra-Fast Processing' },
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
                    style={{ color: '#E8445A' } as React.CSSProperties}
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
              <MergePDFUploader />
            </div>

            {/* Privacy Statement */}
            <p
              className="mt-5 text-center px-4"
              style={{
                color: '#8888A8',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.7,
              }}
            >
              🔒 <strong style={{ color: '#4A4A6A' }}>Your privacy is our priority.</strong> We do
              not call any APIs or send your files to a server. All processing is done entirely on
              the client side for your privacy.
            </p>
          </div>
        </section>

        {/* SEO Content + FAQ */}
        <PDFToolContent {...mergePDFData} />
      </main>
    </>
  );
}
