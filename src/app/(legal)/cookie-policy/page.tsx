import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Cookie Policy — Minimal & Privacy-First Tracking',
  description:
    'LoveUPDF uses minimal necessary cookies to ensure site functionality and security. We do not track personal behavior, build profiles, or sell your data. Privacy-first by design.',
  keywords:
    'cookie policy, PDF tool privacy, tracking policy, LoveUPDF cookies, necessary cookies, privacy-first cookies, minimal tracking, no personal data',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy — Minimal & Privacy-First',
    description:
      'We use only necessary cookies. No tracking, no profiling, no data selling. Your privacy matters.',
    type: 'website',
    url: `${SITE_URL}/cookie-policy`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy',
    description: 'Minimal cookies. Privacy-first. No tracking.',
  },
  alternates: {
    canonical: `${SITE_URL}/cookie-policy`,
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
      name: 'Cookie Policy',
      item: `${SITE_URL}/cookie-policy`,
    },
  ],
};

const cookiePolicyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Cookie Policy',
  description:
    'LoveUPDF cookie policy — minimal necessary cookies only. No tracking, no profiling, no data selling.',
  url: `${SITE_URL}/cookie-policy`,
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
      name: 'What cookies does LoveUPDF use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use only necessary functional cookies to remember basic preferences and maintain security. No tracking or advertising cookies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does LoveUPDF track me across websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We do not use cross-site tracking cookies. Your activity on LoveUPDF stays private.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I disable cookies and still use LoveUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can disable cookies in your browser settings, but some features may not work properly without them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sell my data from cookies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. We do not sell, rent, or share any data from cookies with third parties.',
      },
    },
  ],
};

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicyJsonLd) }}
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
                items={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon name="CookieIcon" size={20} variant="solid" style={{ color: '#E8445A' }} />
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
                Cookie Policy
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
                Minimal cookies. Maximum privacy.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                LoveUPDF uses only <strong>necessary cookies</strong> to ensure our site remains{' '}
                <strong>secure, fast, and functional</strong>. We do not use cookies for invasive
                tracking, building user profiles, or serving targeted ads. Your privacy is built
                into every line of code.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  icon: 'ShieldCheckIcon',
                  title: 'No Tracking Cookies',
                  desc: 'We never track you across websites',
                },
                {
                  icon: 'EyeSlashIcon',
                  title: 'No Profiling',
                  desc: "We don't build user profiles",
                },
                {
                  icon: 'CurrencyDollarIcon',
                  title: 'No Data Selling',
                  desc: 'We never sell your information',
                },
                {
                  icon: 'LockClosedIcon',
                  title: 'Essential Only',
                  desc: 'Just cookies needed to function',
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

            {/* Detailed Cookie Policy Sections */}
            <div className="space-y-10">
              {/* Section 1 - What Are Cookies */}
              <section id="what-are-cookies">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  1. What Are Cookies?
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    Cookies are small text files stored on your device when you visit a website.
                    They help websites remember information about your visit, such as preferences
                    and settings, making future visits smoother and more personalized.
                  </p>
                  <p>
                    At LoveUPDF, we follow a <strong>"less is more" philosophy</strong> with cookies
                    — we only use what's absolutely necessary.
                  </p>
                </div>
              </section>

              {/* Section 2 - Types of Cookies We Use */}
              <section id="types-of-cookies">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  2. Types of Cookies We Use
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We use only <strong>necessary/essential cookies</strong>. These are cookies that
                    are required for the basic operation of our website and tools. They enable:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Functional preferences:</strong> Remembering your language selection
                      or theme preference
                    </li>
                    <li>
                      <strong>Security features:</strong> Detecting and preventing unusual or
                      malicious activity
                    </li>
                    <li>
                      <strong>Session management:</strong> Keeping your current session active while
                      using our tools
                    </li>
                  </ul>
                  <p>
                    <strong>We do not use:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tracking cookies</li>
                    <li>Advertising cookies</li>
                    <li>Third-party marketing cookies</li>
                    <li>Cross-site tracking cookies</li>
                    <li>Persistent identifiers for profiling</li>
                  </ul>
                  <div className="p-4 rounded-lg mt-2" style={{ background: '#F8F8FC' }}>
                    <p className="text-sm" style={{ color: '#4A4A6A' }}>
                      <strong>Privacy promise:</strong> No cookies = no tracking. We keep it simple.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 - How We Use Cookies */}
              <section id="how-we-use">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  3. How We Use Cookies
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>Our limited cookie usage serves three main purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Functionality:</strong> To remember your basic preferences (like
                      language) so you don't have to set them each visit
                    </li>
                    <li>
                      <strong>Security:</strong> To help protect our site and your data by detecting
                      unusual activity patterns
                    </li>
                    <li>
                      <strong>Performance:</strong> To understand aggregated, anonymous usage
                      patterns so we can improve our tools and fix issues
                    </li>
                  </ul>
                  <p>
                    Any performance data we collect is <strong>completely anonymized</strong> — we
                    cannot identify individual users.
                  </p>
                </div>
              </section>

              {/* Section 4 - Third-Party Cookies */}
              <section id="third-party">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  4. Third-Party Cookies
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF{' '}
                    <strong>does not use third-party advertising or tracking cookies.</strong> We
                    believe your browsing activity should stay private.
                  </p>
                  <p>
                    Some of our pages may contain links to third-party websites (like social media
                    buttons). Those sites may set their own cookies, which are governed by their own
                    privacy policies. We recommend reviewing their cookie policies if you're
                    concerned.
                  </p>
                </div>
              </section>

              {/* Section 5 - Managing Cookies */}
              <section id="managing-cookies">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  5. Managing Your Cookie Preferences
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block all cookies entirely</li>
                  </ul>
                  <p>
                    <strong>Important note:</strong> Since we use only necessary cookies, disabling
                    cookies may affect your ability to use LoveUPDF. Some features may not work
                    correctly, and you may need to re-enter preferences each visit.
                  </p>
                  <p>For instructions on managing cookies, visit your browser's help section:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <a href="#" style={{ color: '#E8445A' }}>
                        Chrome
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: '#E8445A' }}>
                        Firefox
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: '#E8445A' }}>
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: '#E8445A' }}>
                        Edge
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 - Updates */}
              <section id="updates">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  6. Changes to This Policy
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We may update this Cookie Policy occasionally to reflect changes in our
                    practices or legal requirements. If we make material changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The "Last updated" date at the top will be revised</li>
                    <li>We may provide additional notice where appropriate</li>
                  </ul>
                  <p>
                    Your continued use of LoveUPDF after updates constitutes acceptance of the
                    revised policy.
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
                Cookie Policy — Plain English
              </h3>
              <div className="space-y-3">
                {[
                  '✓ Only necessary functional cookies — no tracking',
                  '✓ No advertising or marketing cookies',
                  '✓ No cross-site tracking or profiling',
                  '✓ We never sell your data',
                  '✓ You can disable cookies, but some features may break',
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
                Questions about cookies?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                If you have questions about our cookie policy or privacy practices, please contact
                us.
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
                  We'll respond within 24 hours
                </span>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF cookie policy. We use only necessary cookies for functionality and
                security. No tracking cookies, no advertising cookies, no cross-site tracking, no
                profiling. Your privacy matters. Minimal cookies, maximum privacy. Free PDF tools
                including merge PDF, split PDF, compress PDF, rotate PDF, lock PDF, unlock PDF,
                organize PDF, remove PDF pages. Privacy-first platform with zero file storage.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
