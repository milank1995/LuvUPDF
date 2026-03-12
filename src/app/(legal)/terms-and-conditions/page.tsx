import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LoveUPDF — Free PDF Tool Usage',
  description:
    'Read the terms of use for LoveUPDF. Learn about our services, your responsibilities, and our 100% secure PDF processing policy. No file storage, no accounts required.',
  keywords:
    'terms of service, PDF tool conditions, LoveUPDF usage, legal terms, PDF ownership, free PDF tools terms, privacy-first terms',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms & Conditions | LoveUPDF — Free PDF Tools',
    description:
      'Terms of use for LoveUPDF. Free PDF tools with zero file storage and no account required.',
    type: 'website',
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | LoveUPDF',
    description: 'Free PDF tools terms. Zero storage, no accounts, 100% private.',
  },
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
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
      name: 'Terms & Conditions',
      item: `${SITE_URL}/terms-and-conditions`,
    },
  ],
};

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Terms & Conditions',
  description:
    'Terms of use for LoveUPDF free PDF tools. Zero file storage, no accounts, privacy-first processing.',
  url: `${SITE_URL}/terms-and-conditions`,
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
      name: 'Is LoveUPDF really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All PDF tools are 100% free with no hidden fees, no subscriptions, and no premium tiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns my files when I use LoveUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You retain 100% ownership. We never claim rights to your documents and do not store them after processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All tools are available instantly without account creation, login, or personal information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I use LoveUPDF for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can use our tools for personal or professional purposes as long as you own or have permission to process the documents.',
      },
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
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
                items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
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
                  name="DocumentTextIcon"
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
                Terms & Conditions
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
                Simple terms for simple tools.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                These terms govern your use of LoveUPDF. We believe in keeping things
                straightforward — just like our tools. By using our services, you agree to these
                terms, which are designed to protect both you and our platform while ensuring a{' '}
                <strong>secure and private experience.</strong>
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  icon: 'CurrencyDollarIcon',
                  title: '100% Free',
                  desc: 'No hidden fees, no subscriptions',
                },
                {
                  icon: 'UserIcon',
                  title: 'No Account Needed',
                  desc: 'Use instantly without login',
                },
                {
                  icon: 'ShieldCheckIcon',
                  title: 'You Own Your Files',
                  desc: 'We never claim ownership',
                },
                { icon: 'TrashIcon', title: 'No Storage', desc: 'Files deleted after processing' },
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

            {/* Detailed Terms Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section id="free-usage">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  1. 100% Free & Secure Usage
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF provides <strong>completely free access</strong> to all PDF management
                    tools. There are no hidden fees, no premium tiers, no subscription plans, and no
                    credit card required. Ever.
                  </p>
                  <p>
                    You may use these tools for <strong>personal or professional purposes</strong>{' '}
                    without restriction. We do not limit the number of files you can process or add
                    watermarks to your documents. Our free service is designed to stay free.
                  </p>
                  <div className="p-4 rounded-lg mt-2" style={{ background: '#F8F8FC' }}>
                    <p className="text-sm" style={{ color: '#4A4A6A' }}>
                      <strong>No account required:</strong> All tools work instantly in your browser
                      without registration, login, or providing any personal information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="ownership">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  2. Document Ownership & Privacy
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    <strong>You retain 100% ownership of every file you upload or process.</strong>{' '}
                    LoveUPDF does not claim any rights, title, or interest in your documents. Your
                    content remains yours — completely.
                  </p>
                  <p>
                    Because of our <strong>privacy-first architecture:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>
                        Client-side tools (Merge, Split, Rotate, Organize, Remove Pages):
                      </strong>{' '}
                      Files never leave your device. We have zero access.
                    </li>
                    <li>
                      <strong>Server-side tools (Compress, Lock, Unlock):</strong> Files are
                      processed in memory and permanently deleted immediately after download. No
                      copies are kept.
                    </li>
                  </ul>
                  <p className="mt-2">
                    We do not read, analyze, or store your document contents. You are solely
                    responsible for the <strong>content and legality</strong> of the files you
                    process. Only process documents you own or have permission to use.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="acceptable-use">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  3. Acceptable Use
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    You agree to use LoveUPDF only for lawful purposes and in accordance with these
                    terms. Prohibited activities include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Processing unauthorized or infringing content</li>
                    <li>Attempting to disrupt or overload our services</li>
                    <li>Bypassing security measures or scraping data</li>
                    <li>Using our tools for illegal activities</li>
                  </ul>
                  <p>
                    We reserve the right to block access or take appropriate action if we detect
                    misuse that threatens our platform or other users.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="service-as-is">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  4. Service &quot;As Is&quot;
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF is provided on an{' '}
                    <strong>&quot;as is&quot; and &quot;as available&quot; basis.</strong> While we
                    strive for 100% uptime and perfectly processed documents, we make no warranties
                    about:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Uninterrupted or error-free service</li>
                    <li>Complete accuracy of processed files</li>
                    <li>Compatibility with all PDF formats or versions</li>
                  </ul>
                  <p>
                    To the fullest extent permitted by law,{' '}
                    <strong>we disclaim all warranties</strong> and are not liable for any damages
                    arising from your use of our free tools.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="intellectual-property">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  5. Intellectual Property
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    The LoveUPDF name, logo, website design, and underlying technology are owned by
                    us and protected by intellectual property laws. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Copy, modify, or reverse-engineer our tools</li>
                    <li>Use our branding without permission</li>
                    <li>Claim ownership of our technology</li>
                  </ul>
                  <p>
                    This does not affect your ownership of your documents — your content remains
                    yours.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="third-party">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  6. Third-Party Links
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  Our site may contain links to third-party websites. We are not responsible for
                  their content, privacy practices, or terms. Visiting those sites is at your own
                  risk.
                </p>
              </section>

              {/* Section 7 */}
              <section id="termination">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  7. Termination
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  We reserve the right to modify, suspend, or discontinue any part of our services
                  without notice. We may also terminate access for users who violate these terms.
                </p>
              </section>

              {/* Section 8 */}
              <section id="governing-law">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  8. Governing Law
                </h2>
                <p style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}>
                  These terms are governed by applicable laws. Any disputes arising from your use of
                  LoveUPDF shall be resolved in the appropriate courts.
                </p>
              </section>

              {/* Section 9 */}
              <section id="updates">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  9. Updates to Terms
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We may update these terms occasionally to reflect changes in our tools, legal
                    requirements, or industry best practices. When we make material changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The &quot;Last updated&quot; date at the top will be revised</li>
                    <li>Additional notice may be provided where appropriate</li>
                  </ul>
                  <p>
                    Your <strong>continued use of the site constitutes acceptance</strong> of any
                    updated terms. We encourage you to review this page periodically.
                  </p>
                </div>
              </section>
            </div>

            {/* Summary Box */}
            <div
              className="mt-12 p-6 rounded-xl"
              style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
            >
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: '#1A1A2E' }}>
                Terms Summary — Plain English
              </h3>
              <div className="space-y-3">
                {[
                  '✓ 100% free — always, no hidden fees',
                  '✓ You own your files — we never claim rights',
                  '✓ No account or personal info needed',
                  '✓ Files never stored — client-side or instant deletion',
                  '✓ Use for personal or professional purposes',
                  "✓ Don't use for illegal content or abuse the service",
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
                Questions about our terms?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                If you have any questions about these terms, please contact us.
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
                  We'll get back to you within 24 hours
                </span>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF terms and conditions. 100% free PDF tools. No hidden fees, no
                subscriptions, no account required. You retain full ownership of your files. Zero
                file storage policy. Client-side processing for merge PDF, split PDF, rotate PDF,
                organize PDF pages, remove PDF pages. Server-side processing for compress PDF, lock
                PDF, unlock PDF with instant auto-deletion. Use for personal or professional
                purposes. Do not use for illegal content. Privacy-first PDF tools.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
