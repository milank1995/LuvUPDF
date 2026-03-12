import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | LoveUPDF — Zero Storage, 100% Private PDF Tools',
  description:
    'LoveUPDF is a privacy-first platform. We never store your files. All processing uses 256-bit SSL encryption with instant auto-deletion. No accounts, no tracking, no data sharing.',
  keywords:
    'privacy policy, secure PDF processing, no storage PDF, private PDF tools, data protection, 256-bit SSL, auto-delete files, LoveUPDF privacy, PDF encryption, client-side processing',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | LoveUPDF — Zero Storage PDF Tools',
    description:
      'We never store your files. 256-bit SSL encryption. Instant auto-deletion. Your documents stay yours.',
    type: 'website',
    url: `${SITE_URL}/privacy-policy`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | LoveUPDF',
    description: 'Zero storage. 256-bit SSL. Instant auto-deletion.',
  },
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
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
      name: 'Privacy Policy',
      item: `${SITE_URL}/privacy-policy`,
    },
  ],
};

const privacyPolicyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Privacy Policy',
  description:
    'LoveUPDF privacy policy — zero file storage, 256-bit SSL encryption, instant auto-deletion.',
  url: `${SITE_URL}/privacy-policy`,
  isPartOf: {
    '@type': 'WebSite',
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
      name: 'Does LoveUPDF store my PDF files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We never store your files. Client-side tools process entirely in your browser with no upload. Server-side tools process files in memory and permanently delete them immediately after download.',
      },
    },
    {
      '@type': 'Question',
      name: 'What encryption does LoveUPDF use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use 256-bit SSL encryption for all file transfers — the same standard used by banks and financial institutions worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All LoveUPDF tools are completely free and require no account, login, or personal information.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are my files kept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For client-side tools: files never leave your device. For server-side tools: files are processed in memory and permanently deleted immediately after download — typically within seconds.',
      },
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon
                  name="ShieldCheckIcon"
                  size={20}
                  variant="solid"
                  style={{ color: '#E8445A' }}
                />
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
                Privacy Policy
              </h1>
            </div>

            {/* Last Updated */}
            <p className="text-sm mb-6" style={{ color: '#8888A8' }}>
              Last updated: March 2026 · Effective immediately
            </p>

            {/* Introduction - Trust statement */}
            <div
              className="mb-10 p-6 rounded-xl"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <p className="text-lg font-medium mb-2" style={{ color: '#1A1A2E' }}>
                Your privacy is our foundation.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                LoveUPDF was built with a simple promise:{' '}
                <strong>we never store your files.</strong> Unlike other PDF tools that keep your
                documents on servers for hours or days, we've designed every feature around zero
                data retention. Your documents stay yours — always.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  icon: 'LockClosedIcon',
                  title: '256-bit SSL Encryption',
                  desc: 'Bank-grade security for all transfers',
                },
                {
                  icon: 'ServerIcon',
                  title: 'Zero File Storage',
                  desc: 'Client-side or in-memory processing only',
                },
                {
                  icon: 'TrashIcon',
                  title: 'Instant Auto-Deletion',
                  desc: 'Files permanently deleted after download',
                },
                {
                  icon: 'UserIcon',
                  title: 'No Accounts Required',
                  desc: 'No logins, no tracking, no personal data',
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

            {/* Detailed Policy Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section id="philosophy">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  1. Privacy-First Philosophy
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF was created because we believe{' '}
                    <strong>privacy shouldn't be a premium feature.</strong> Every tool we offer is
                    designed around a simple principle: your documents belong to you, and no one
                    else.
                  </p>
                  <p>
                    <strong>No accounts, no logins, no personal information needed.</strong> You can
                    use every PDF tool instantly without creating a profile, sharing your email, or
                    telling us anything about yourself. We don't track who you are or what you're
                    working on.
                  </p>
                  <p>
                    Our business model is simple: provide great free tools supported by minimal,
                    non-intrusive advertising. <strong>Your data is not our product.</strong>
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="file-security">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  2. File Security & Encryption
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    All file transfers to and from LoveUPDF are protected with{' '}
                    <strong>256-bit SSL/TLS encryption</strong> — the same security standard used by
                    banks, financial institutions, and government agencies worldwide.
                  </p>
                  <p>
                    This means from the moment your file leaves your device until processing is
                    complete, it's protected from interception. Whether you're using our{' '}
                    <strong>client-side tools</strong> (merge, split, rotate, organize, remove
                    pages) or <strong>server-side tools</strong> (compress, lock, unlock), your
                    connection is always secure.
                  </p>
                  <div className="p-4 rounded-lg mt-2" style={{ background: '#F8F8FC' }}>
                    <p className="text-sm" style={{ color: '#4A4A6A' }}>
                      <strong>For client-side tools:</strong> Files are processed entirely in your
                      browser and never uploaded to any server. They literally never leave your
                      device.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="file-deletion">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  3. Automatic File Deletion — Zero Storage
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    <strong>We never store your files.</strong> This is our most important promise.
                    Unlike other PDF services that may keep your documents on servers for hours,
                    days, or even use them for training AI models, LoveUPDF follows a strict
                    no-storage policy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>
                        Client-side tools (Merge, Split, Rotate, Organize, Remove Pages):
                      </strong>{' '}
                      Files are processed in your browser. Nothing is ever uploaded to any server.
                      Your files never leave your device.
                    </li>
                    <li>
                      <strong>Server-side tools (Compress, Lock, Unlock):</strong> Files are
                      uploaded via encrypted connection, processed in server memory, and{' '}
                      <strong>permanently deleted immediately after download.</strong> No copies, no
                      backups, no databases — just instant deletion.
                    </li>
                  </ul>
                  <p className="mt-2">
                    We do not read, scan, analyze, or store your document contents for any purpose —
                    including AI training, data mining, or marketing. Your content remains 100%
                    yours.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="cookies">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  4. Cookies & Technical Data
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We collect minimal, <strong>non-identifying technical information</strong> to
                    maintain and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Browser type and version (to ensure compatibility)</li>
                    <li>Anonymous usage statistics (which tools are used most)</li>
                    <li>Basic performance data (page load times)</li>
                  </ul>
                  <p>
                    We use <strong>essential cookies only</strong> to remember basic preferences and
                    improve your experience. No tracking cookies, no cross-site tracking, no
                    advertising cookies that follow you around the web.
                  </p>
                  <p>
                    You can disable cookies in your browser settings, though some non-essential
                    features may be affected.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="third-party">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  5. Third-Party Services
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>LoveUPDF uses minimal third-party services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Cloud hosting providers:</strong> Secure servers for our server-side
                      tools. These providers do not have access to your file contents and all data
                      is encrypted.
                    </li>
                    <li>
                      <strong>Analytics:</strong> Anonymous, aggregated usage data to improve our
                      tools. No personal identifiers.
                    </li>
                  </ul>
                  <p>
                    <strong>
                      We do not sell, rent, or share your information with third parties for
                      marketing purposes.
                    </strong>{' '}
                    Period.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="your-rights">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  6. Your Rights & Control
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    Because we <strong>do not store your files or create user profiles,</strong>{' '}
                    there is no personal data for us to provide, modify, or delete. You maintain
                    100% control over your documents at all times.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="children">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  7. Children's Privacy
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  LoveUPDF is not directed at children under 13. We do not knowingly collect
                  personal information from anyone under 13. If you believe we have inadvertently
                  collected such information, contact us immediately and we will delete it.
                </p>
              </section>

              {/* Section 8 */}
              <section id="changes">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  8. Changes to This Policy
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  We may update this Privacy Policy to reflect changes in our services, legal
                  requirements, or industry best practices. When we make material changes, we'll
                  update the "Last updated" date at the top of this page and may provide additional
                  notice where appropriate. We encourage you to review this policy periodically.
                </p>
              </section>
            </div>

            {/* Summary Box */}
            <div
              className="mt-12 p-6 rounded-xl"
              style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
            >
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: '#1A1A2E' }}>
                Privacy Promise — Summarized
              </h3>
              <div className="space-y-3">
                {[
                  '✓ We never store your files — client-side or instant deletion only',
                  '✓ 256-bit SSL encryption for all transfers',
                  '✓ No accounts, no logins, no personal information',
                  '✓ No AI training, no data mining, no content scanning',
                  '✓ Your documents stay yours — always',
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

            {/* Contact Box */}
            <div
              className="mt-8 p-6 rounded-xl text-center"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A1A2E' }}>
                Questions? We're here to help.
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                If you have any questions about your privacy or how we handle your data, please
                contact us.
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
                  Typically replies within 24 hours
                </span>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF privacy policy. Zero file storage. 256-bit SSL encryption. Instant
                auto-deletion. No accounts required. No tracking. Client-side processing for merge
                PDF, split PDF, rotate PDF, organize PDF pages, remove PDF pages. Server-side
                processing for compress PDF, lock PDF, unlock PDF with instant deletion. Your
                documents never stored or shared. Privacy-first PDF tools.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
