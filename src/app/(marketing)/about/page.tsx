import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'About LoveUPDF — Privacy-First & Free Online PDF Tools',
  description:
    'Learn about LoveUPDF, the secure and 100% free online PDF toolkit. We prioritize your privacy with zero file storage, encrypted processing, and no account required.',
  keywords:
    'about LoveUPDF, secure PDF tools, free PDF merger, private PDF editor, privacy-first PDF, no storage PDF tool, PDF tools online free, LoveUPDF mission',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'About LoveUPDF — Privacy-First PDF Tools',
    description:
      'We built LoveUPDF to provide free, private PDF tools with zero file storage. Your documents stay yours.',
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About LoveUPDF',
    description: 'Privacy-first PDF tools. Free, secure, zero storage.',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
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
      name: 'About',
      item: `${SITE_URL}/about`,
    },
  ],
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LoveUPDF',
  description:
    'Privacy-first, free online PDF tools with zero file storage and 256-bit SSL encryption.',
  url: `${SITE_URL}/about`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'LoveUPDF',
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoveUPDF',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/app_logo.png`,
  sameAs: ['https://twitter.com/luvupdf', 'https://facebook.com/luvupdf'],
  description:
    'Privacy-first, free online PDF tools. Merge, split, compress, rotate, lock, unlock, organize, and remove pages from PDFs with zero file storage.',
  foundingDate: '2023',
  email: 'hello@luvupdf.com',
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon name="HeartIcon" size={20} variant="solid" style={{ color: '#E8445A' }} />
              </div>
              <h1
                className="font-heading font-extrabold"
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  color: '#1A1A2E',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                About LoveUPDF
              </h1>
            </div>

            {/* Introduction - Mission statement */}
            <div
              className="mb-10 p-6 rounded-xl"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <p className="text-lg font-medium mb-2" style={{ color: '#1A1A2E' }}>
                The privacy-first way to manage PDFs.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                LoveUPDF was built with a simple conviction:{' '}
                <strong>managing your documents shouldn't come at the cost of your privacy.</strong>{' '}
                We offer a suite of fast, 100% free, and secure online PDF tools that put the user
                first.
              </p>
            </div>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                { value: '8+', label: 'Free Tools' },
                { value: '0', label: 'File Storage' },
                { value: '256-bit', label: 'SSL Encryption' },
                { value: '100%', label: 'Privacy First' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-lg"
                  style={{ background: '#F8F8FC' }}
                >
                  <div className="font-heading font-extrabold text-xl" style={{ color: '#E8445A' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: '#4A4A6A' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Our Story */}
            <div className="space-y-10">
              <section id="story">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  Our Story
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF started in 2023 when our founders realized that most "free" PDF tools
                    came with hidden costs — either they stored your files on insecure servers,
                    required accounts that tracked your activity, or bombarded you with ads while
                    selling your data.
                  </p>
                  <p>We believed there had to be a better way. So we built one.</p>
                  <p>
                    Our platform was designed from the ground up with a{' '}
                    <strong>privacy-first architecture.</strong> For tools that can run in your
                    browser, they do — your files never leave your device. For features that require
                    server processing, we built a system that processes files in memory and
                    permanently deletes them the instant your task is complete.
                  </p>
                </div>
              </section>

              {/* Our Promise - Zero Storage */}
              <section id="promise">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  Our &quot;Zero Storage&quot; Promise
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    <strong>LoveUPDF does not store your files.</strong> Period. Every PDF you
                    process is handled through a temporary, encrypted session and is automatically
                    deleted the moment your task is complete.
                  </p>
                  <div className="p-4 rounded-lg mt-2" style={{ background: '#F8F8FC' }}>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#E8445A' }}>✓</span>
                        <span>
                          <strong>Client-side tools:</strong> Merge, Split, Rotate, Organize, Remove
                          Pages — processed in your browser, never uploaded
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#E8445A' }}>✓</span>
                        <span>
                          <strong>Server-side tools:</strong> Compress, Lock, Unlock — processed in
                          memory, permanently deleted after download
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    We don't build profiles. We don't sell data. We never see your content. Your
                    documents stay yours — always.
                  </p>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  Why Choose LoveUPDF?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    {
                      icon: 'CurrencyDollarIcon',
                      title: '100% Free',
                      desc: 'No subscriptions, no hidden fees, no credit cards',
                    },
                    {
                      icon: 'UserIcon',
                      title: 'No Account Needed',
                      desc: 'Use instantly — no login, no email, no tracking',
                    },
                    {
                      icon: 'ShieldCheckIcon',
                      title: '256-bit SSL',
                      desc: 'Bank-grade encryption for all file transfers',
                    },
                    {
                      icon: 'TrashIcon',
                      title: 'Auto-Deleted',
                      desc: 'Files permanently deleted after processing',
                    },
                    {
                      icon: 'DevicePhoneMobileIcon',
                      title: 'Works Anywhere',
                      desc: 'Desktop, tablet, or mobile — any browser',
                    },
                    {
                      icon: 'BoltIcon',
                      title: 'Lightning Fast',
                      desc: 'Processes in seconds, no waiting',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 p-4 rounded-xl"
                      style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: '#FFF0F2' }}
                      >
                        <Icon
                          name={item.icon as any}
                          size={16}
                          variant="solid"
                          style={{ color: '#E8445A' }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-heading font-bold text-sm mb-0.5"
                          style={{ color: '#1A1A2E' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-xs" style={{ color: '#4A4A6A', lineHeight: 1.5 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Mission */}
              <section id="mission">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  Our Mission
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  We believe powerful PDF tools should be accessible to everyone — without technical
                  barriers, financial hurdles, or privacy compromises. Our mission is to provide a
                  clean, modern, and trustworthy platform for all your document needs. Whether
                  you're merging reports on a desktop, splitting contracts on a tablet, or removing
                  pages on your phone, LoveUPDF works the same: fast, free, and private.
                </p>
              </section>

              {/* Our Tools */}
              <section id="tools">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  Our PDF Tools
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    'Merge PDF',
                    'Split PDF',
                    'Compress PDF',
                    'Rotate PDF',
                    'Lock PDF',
                    'Unlock PDF',
                    'Organize PDF',
                    'Remove Pages',
                  ].map((tool) => (
                    <Link
                      key={tool}
                      href={`/${tool.toLowerCase().replace(' ', '-')}`}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: '#F8F8FC',
                        color: '#4A4A6A',
                        border: '1px solid #EEEEF5',
                      }}
                    >
                      {tool}
                    </Link>
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#4A4A6A' }}>
                  Each tool is designed with the same privacy-first philosophy. No exceptions.
                </p>
              </section>
            </div>

            {/* Summary Box */}
            <div
              className="mt-12 p-6 rounded-xl"
              style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
            >
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: '#1A1A2E' }}>
                LoveUPDF at a Glance
              </h3>
              <div className="space-y-3">
                {[
                  '✓ 8+ free PDF tools — all 100% free forever',
                  '✓ Zero file storage — client-side or instant deletion',
                  '✓ 256-bit SSL encryption for all transfers',
                  '✓ No accounts, no logins, no tracking',
                  '✓ Works on any device, any browser',
                  '✓ Built by people who value privacy',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span style={{ color: '#E8445A' }}>•</span>
                    <span className="text-sm" style={{ color: '#4A4A6A', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact/Support Box */}
            <div
              className="mt-8 p-6 rounded-xl text-center"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A1A2E' }}>
                Have questions or feedback?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                We'd love to hear from you. Reach out anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="btn-primary px-6 py-2.5 text-sm"
                  style={{
                    background: '#E8445A',
                    color: 'white',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '10px 24px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Contact Support
                </button>
                <span className="text-xs" style={{ color: '#8888A8' }}>
                  We typically reply within 24 hours
                </span>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF is a privacy-first platform offering 8+ free PDF tools: merge PDF, split
                PDF, compress PDF, rotate PDF, lock PDF, unlock PDF, organize PDF pages, and remove
                PDF pages. Zero file storage policy. 256-bit SSL encryption. No accounts required.
                Client-side processing for merge, split, rotate, organize, remove pages. Server-side
                processing for compress, lock, unlock with instant auto-deletion. Founded in 2023
                with a mission to provide private, accessible PDF tools for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
