import type { Metadata } from 'next';
import HeroSection from '../components/landing/HeroSection';
import ToolsGrid from '../components/landing/ToolsGrid';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import FAQSection from '../components/landing/FAQSection';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free — Secure & Privacy-First | LuvUPDF',
  description:
    'Combine PDF files or remove pages from PDF online for free. 100% secure, no login required, and files are automatically deleted after processing. Privacy-first PDF tools.',
  keywords:
    'Merge PDF online free, Combine PDF files, Remove pages from PDF online, Delete PDF pages free, Secure PDF tools, free PDF merger, PDF privacy',
  openGraph: {
    title: 'Merge PDF Online Free — Secure & Privacy-First | LuvUPDF',
    description:
      'Combine PDF files or remove pages from PDF online. 100% Secure, No Login, Files Auto-Deleted. The privacy-first way to manage your PDFs.',
    type: 'website',
    url: 'https://luvupdf.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Online Free — Secure & Privacy-First | LuvUPDF',
    description: 'Free, secure PDF tools. Merge and remove pages online with zero data storage.',
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
  description: 'Secure and free online PDF tools. Merge PDF files and remove pages without any data storage or account required.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Merge PDF online free',
    'Remove pages from PDF online',
    'Combine PDF files',
    'Delete PDF pages free',
    'Secure PDF tools',
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
        text: 'LuvUPDF is a privacy-first platform. All file transfers are encrypted with 256-bit SSL. Crucially, we do not store any files or document data; all files are automatically deleted immediately after processing.',
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
