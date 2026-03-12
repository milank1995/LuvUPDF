import React from 'react';
import type { Metadata, Viewport } from 'next';
import { ToastProvider } from '@/components/ui/Toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E8445A',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://luvupdf.com'),
  title: {
    default: 'LoveUPDF — Free & Secure Online PDF Tools',
    template: '%s | LoveUPDF',
  },
  description:
    'Free online PDF tools with 100% privacy. Merge, split, compress, rotate, lock, unlock, organize, and remove pages from PDFs. No account needed, files auto-deleted.',
  keywords:
    'LoveUPDF, luvupdf, free PDF tools, merge PDF online, split PDF, compress PDF, rotate PDF, lock PDF, unlock PDF, organize PDF pages, remove PDF pages, privacy-first PDF, secure PDF editor, no account PDF tools',
  authors: [{ name: 'LoveUPDF' }],
  creator: 'LoveUPDF',
  publisher: 'LoveUPDF',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  icons: {
    icon: [
      { url: '/assets/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/assets/images/favicon.ico',
    apple: [{ url: '/assets/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/images/safari-pinned-tab.svg',
        color: '#E8445A',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'LoveUPDF — Free & Secure Online PDF Tools',
    description:
      'Privacy-first PDF tools. Merge, split, compress, rotate, lock, unlock, organize, and remove pages. No account, no storage, 100% free.',
    url: 'https://luvupdf.com',
    siteName: 'LoveUPDF',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LoveUPDF - Free & Secure PDF Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoveUPDF — Free & Secure PDF Tools',
    description: 'Privacy-first PDF tools. No account, no storage, 100% free.',
    images: ['/assets/images/og-image.png'],
    creator: '@luvupdf',
    site: '@luvupdf',
  },
  alternates: {
    canonical: 'https://luvupdf.com',
    languages: {
      'en-US': 'https://luvupdf.com',
    },
  },
  appleWebApp: {
    capable: true,
    title: 'LoveUPDF',
    statusBarStyle: 'black-translucent',
  },
  applicationName: 'LoveUPDF',
  category: 'utilities',
  classification: 'PDF Tools',
};

// JSON-LD structured data for organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoveUPDF',
  url: 'https://luvupdf.com',
  logo: 'https://luvupdf.com/assets/images/app_logo.png', // Updated to use app_logo.png
  sameAs: ['https://twitter.com/luvupdf', 'https://facebook.com/luvupdf'],
  description: 'Privacy-first, free online PDF tools with zero file storage.',
  email: 'hello@luvupdf.com',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'LoveUPDF Team',
    },
  ],
};

// JSON-LD structured data for website
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LoveUPDF',
  url: 'https://luvupdf.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://luvupdf.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  description: 'Free online PDF tools with 100% privacy. No account needed, files auto-deleted.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        {/* Microsoft browser configuration - moved from metadata.other */}
        <meta name="msapplication-TileColor" content="#E8445A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
