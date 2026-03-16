import type { Metadata } from 'next';
import ToolsGrid from '@/components/landing/ToolsGrid';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'All PDF Tools — Merge, Split, Compress, Lock & Unlock',
  description:
    'Browse all free online PDF tools from LoveUPDF. Merge, split, compress, lock, unlock, rotate, organize, and remove pages from PDFs — no sign-up, no upload, 100% private.',
  keywords:
    'all PDF tools, free PDF tools, merge PDF, split PDF, compress PDF, rotate PDF, lock PDF, unlock PDF, organize PDF, remove PDF pages, LoveUPDF tools, luvupdf',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'All Free PDF Tools',
    description:
      'Complete collection of free PDF tools. Merge, split, compress, lock, unlock, rotate, organize, and remove pages. Privacy-first, no account needed.',
    type: 'website',
    url: `${SITE_URL}/tools`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Free PDF Tools',
    description: '8+ free PDF tools. Privacy-first, no account needed.',
  },
  alternates: {
    canonical: `${SITE_URL}/tools`,
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
  ],
};

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'All Free PDF Tools',
  description: 'Complete collection of free online PDF tools from LoveUPDF.',
  url: `${SITE_URL}/tools`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'LoveUPDF',
    url: SITE_URL,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Merge PDF',
        url: `${SITE_URL}/merge-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Split PDF',
        url: `${SITE_URL}/split-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Compress PDF',
        url: `${SITE_URL}/compress-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Rotate PDF',
        url: `${SITE_URL}/rotate-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Lock PDF',
        url: `${SITE_URL}/lock-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Unlock PDF',
        url: `${SITE_URL}/unlock-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Organize PDF',
        url: `${SITE_URL}/organize-pdf`,
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Remove PDF Pages',
        url: `${SITE_URL}/remove-pages`,
      },
    ],
  },
};

export default function AllToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-8 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-6 flex justify-center">
              <Breadcrumbs
                items={[{ label: 'Home', href: '/' }, { label: 'All Tools' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon
                  name="Squares2X2Icon"
                  size={20}
                  variant="solid"
                  style={{ color: '#E8445A' }}
                />
              </div>
              <h1
                className="font-heading font-extrabold"
                style={{
                  fontSize: 'clamp(32px, 5vw, 44px)',
                  color: '#1A1A2E',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                All Free PDF Tools
              </h1>
            </div>

            <p
              className="mx-auto mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '17px',
                maxWidth: '560px',
                lineHeight: 1.6,
              }}
            >
              Everything you need to work with PDFs — all in one place.
              <span className="block mt-1 text-sm" style={{ color: '#8888A8' }}>
                8 tools · 100% free · No account · Privacy-first
              </span>
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <ToolsGrid />

        {/* Feature Summary Section */}
        <section className="py-12 px-4 sm:px-6" style={{ background: '#FAFAFA' }}>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="p-5 rounded-xl"
                style={{ background: 'white', border: '1px solid #EEEEF5' }}
              >
                <h2 className="font-heading font-bold text-base mb-2" style={{ color: '#1A1A2E' }}>
                  Client-Side Tools
                </h2>
                <p className="text-xs mb-3" style={{ color: '#4A4A6A' }}>
                  Processed in your browser — files never leave your device
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Merge PDF', 'Split PDF', 'Rotate PDF', 'Organize PDF', 'Remove Pages'].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: '#F8F8FC', color: '#4A4A6A' }}
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: 'white', border: '1px solid #EEEEF5' }}
              >
                <h2 className="font-heading font-bold text-base mb-2" style={{ color: '#1A1A2E' }}>
                  Server-Side Tools
                </h2>
                <p className="text-xs mb-3" style={{ color: '#4A4A6A' }}>
                  Processed in memory · Auto-deleted instantly
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Compress PDF', 'Lock PDF', 'Unlock PDF'].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: '#F8F8FC', color: '#4A4A6A' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <p>
            LoveUPDF offers 8 free PDF tools: merge PDF, split PDF, compress PDF, rotate PDF, lock
            PDF, unlock PDF, organize PDF pages, and remove PDF pages. All tools are 100% free with
            no account required. Privacy-first platform with zero file storage. Client-side tools
            process in your browser. Server-side tools process in memory and auto-delete instantly.
          </p>
        </div>
      </main>
    </>
  );
}
