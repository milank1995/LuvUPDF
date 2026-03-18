import React from 'react';
import type { Metadata, Viewport } from 'next';
import { ToastProvider } from '@/components/ui/Toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/constants/site';
import { navLinks, tools } from '@/config/tools';
import ClarityScript from '@/components/analytics/ClarityScript';
import ClarityTracker from '@/components/analytics/ClarityTracker';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E8445A',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
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
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
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

// JSON-LD structured data for organization (ENHANCED)
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoveUPDF',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/app_logo.png`,
  sameAs: [
    'https://x.com/LoveUpdf',
    'https://www.linkedin.com/company/loveupdf/',
    'https://www.facebook.com/people/LoveUpdf/61579682636933/',
    'https://www.instagram.com/loveupdf/',
    'https://www.reddit.com/user/loveupdf/',
  ],
  description: 'Privacy-first, free online PDF tools with zero file storage.',
  email: 'hello@luvupdf.com',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'LoveUPDF Team',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@luvupdf.com',
    availableLanguage: ['English'],
  },
};

// JSON-LD structured data for website
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LoveUPDF',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  description: 'Free online PDF tools with 100% privacy. No account needed, files auto-deleted.',
};

// JSON-LD structured data for software application (NEW)
const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LoveUPDF',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: SITE_URL,
  description:
    'Free privacy-first PDF tools. Merge, split, compress, rotate, lock, unlock, organize, and remove pages.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Merge PDF',
    'Split PDF',
    'Compress PDF',
    'Rotate PDF',
    'Lock PDF',
    'Unlock PDF',
    'Organize PDF',
    'Remove PDF Pages',
  ],
  screenshot: `${SITE_URL}/assets/images/og-image.png`,
  softwareVersion: '1.0',
};

// JSON-LD for BreadcrumbList
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...tools.map((tool, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: tool.label,
      item: `${SITE_URL}${tool.href}`,
    })),
  ],
};

// COMBINED schema - one script instead of five!
const combinedJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationJsonLd,
    websiteJsonLd,
    softwareApplicationJsonLd,
    breadcrumbJsonLd,
    {
      '@type': 'SiteNavigationElement',
      name: 'Main Menu',
      url: SITE_URL,
      hasPart: navLinks.map((link) => ({
        '@type': 'SiteNavigationElement',
        url: `${SITE_URL}${link.href}`,
        name: link.label,
      })),
    },
  ],
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
        <meta name="color-scheme" content="light" />

        {/* Microsoft browser configuration */}
        <meta name="msapplication-TileColor" content="#E8445A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* SINGLE COMBINED JSON-LD with defer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
          defer
        />

        {/* Optimized font loading with display=swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/assets/images/app_logo.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />

        {/* Inline critical CSS (minimal) */}
        <style>{`
          header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
          body { margin: 0; padding: 0; }
        `}</style>

        {/* Microsoft Clarity — loads after page is interactive */}
        <ClarityScript />
      </head>
      <body>
        <noscript>
          <div
            style={{
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#FFF0F2',
              color: '#E8445A',
              fontFamily: 'sans-serif',
            }}
          >
            ⚡ LoveUPDF works best with JavaScript enabled. Please enable JavaScript for the full
            experience.
          </div>
        </noscript>
        <ToastProvider>
          {/* Clarity SPA route-change tracker */}
          <ClarityTracker />
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
