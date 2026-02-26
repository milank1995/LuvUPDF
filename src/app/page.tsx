import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '../components/landing/HeroSection';
import ToolsGrid from '../components/landing/ToolsGrid';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import FAQSection from '../components/landing/FAQSection';

export const metadata: Metadata = {
  title: 'LuvUPDF — Free Online PDF Tools',
  description:
    'LuvUPDF offers free, fast, and secure online PDF tools. Merge PDF files, lock PDFs with passwords, unlock PDFs, and rotate pages — no sign-up required, works on any device.',
  keywords:
    'free PDF tools, merge PDF, lock PDF, unlock PDF, rotate PDF, online PDF editor, PDF converter, free PDF merger',
  openGraph: {
    title: 'LuvUPDF — Free Online PDF Tools',
    description:
      'Merge, lock, unlock, and rotate PDF files for free. No registration, no software — just fast, secure PDF tools in your browser.',
    type: 'website',
    url: 'https://luvupdf.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuvUPDF — Free Online PDF Tools',
    description: 'Free PDF tools online. Merge, lock, unlock, rotate — no sign-up required.',
  },
  alternates: {
    canonical: 'https://luvupdf.com/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LuvUPDF',
  url: 'https://luvupdf.com',
  description: 'Free online PDF tools including merge, lock, unlock, and rotate PDF files.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Merge PDF files',
    'Lock PDF with password',
    'Unlock PDF files',
    'Rotate PDF pages',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LuvUPDF really free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LuvUPDF is completely free to use. All PDF tools are available at no cost without any account creation or subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my PDF files safe and secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All file uploads and downloads are protected using 256-bit SSL encryption. Files are automatically deleted within 1 hour of processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account to use LuvUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No account is required. You can use all PDF tools immediately without registering or signing in.',
      },
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
      <Header />
      <main>
        <HeroSection />
        <ToolsGrid />
        <HowItWorksSection />
        <BenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
