import type { Metadata } from 'next';
import { SITE_URL } from '@/constants/site';
import HeroSection from '../components/landing/HeroSection';
import ToolsGrid from '../components/landing/ToolsGrid';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import FAQSection from '../components/landing/FAQSection';

export const metadata: Metadata = {
  title: 'LoveUPDF - Free, Secure PDF Tools Online | Merge, Split & More',
  description:
    'LoveUPDF offers private, secure PDF tools you can trust. Merge PDF files, split documents, remove pages, compress, and edit PDFs online free. No login required, files auto-deleted.',
  keywords:
    'LoveUPDF, luvupdf, merge PDF online free, combine PDF files, split PDF online, remove pages from PDF, compress PDF free, secure PDF tools, free PDF merger, PDF editor online, privacy-first PDF tools, delete PDF pages free, rotate PDF online, organize PDF pages',
  openGraph: {
    title: 'LoveUPDF - Private, Secure PDF Tools',
    description:
      'Free PDF tools that respect your privacy. Merge, split, compress, and edit PDFs online. No account needed, files auto-delete. Trusted by thousands.',
    type: 'website',
    url: SITE_URL,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoveUPDF - Free, Secure PDF Tools Online',
    description:
      'Privacy-first PDF tools. Merge, split, compress, and edit PDFs. No storage, no login, completely free.',
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LoveUPDF',
  alternateName: 'luvupdf',
  url: SITE_URL,
  description:
    'Secure and free online PDF tools. Merge PDF files, split documents, remove pages, compress, and organize PDFs without any data storage or account required.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Merge PDF online free',
    'Split PDF documents',
    'Remove pages from PDF online',
    'Compress PDF files',
    'Rotate PDF pages',
    'Organize PDF pages',
    'Lock PDF with password',
    'Unlock PDF files',
    'Secure PDF tools',
    'No account required',
    'Privacy-first processing',
  ],
  screenshot: `${SITE_URL}/site-image.png`,
  softwareVersion: '1.0',
  provider: {
    '@type': 'Organization',
    name: 'LoveUPDF',
    url: SITE_URL,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LoveUPDF really free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LoveUPDF is completely free to use. All PDF tools are available at no cost without any account creation, registration, or subscription. Whether you know us as LoveUPDF or luvupdf, you get the same free service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my PDF files safe and secure on LoveUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. LoveUPDF is built as a privacy-first platform. All file transfers are encrypted with 256-bit SSL. We do not store any files or document data on our servers. All files are automatically and permanently deleted immediately after processing. Your documents never leave your device for most operations, and even server-processed files are deleted instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account to use LoveUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No account or login is required. You can use all PDF tools immediately when you visit LoveUPDF. We don't track users or require any personal information.",
      },
    },
    {
      '@type': 'Question',
      name: 'What PDF tools does LoveUPDF offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LoveUPDF offers a complete suite of PDF tools including: Merge PDF, Split PDF, Compress PDF, Rotate PDF, Lock PDF with password, Unlock PDF, Organize PDF pages, and Remove PDF pages. All tools are free and privacy-focused.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does LoveUPDF protect my privacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LoveUPDF protects your privacy in multiple ways: Most operations (Merge, Split, Rotate, Organize, Remove Pages) happen entirely in your browser with no server upload. For features requiring server processing (Compress, Lock, Unlock), files are transferred securely via 256-bit SSL encryption and permanently deleted from our servers immediately after processing. We never store, log, or track your documents.',
      },
    },
  ],
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
      name: 'Free PDF Tools',
      item: `${SITE_URL}/tools`,
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        <HeroSection />
        <ToolsGrid />
        <HowItWorksSection />
        <BenefitsSection />
        <FAQSection />
      </main>
    </>
  );
}
