import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Contact Us — Support & Feedback',
  description:
    'Have questions or feedback? Contact the LoveUPDF team. We are here to help with your free and secure PDF tool needs. Privacy-first support.',
  keywords:
    'contact LoveUPDF, PDF tool support, feedback, LoveUPDF help, support request, privacy support, free PDF tools help',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Us — Support & Feedback',
    description:
      "Get in touch with the LoveUPDF team. Questions, feedback, or support — we're here to help.",
    type: 'website',
    url: `${SITE_URL}/contact`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us',
    description: "Questions or feedback? We're here to help.",
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
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
      name: 'Contact',
      item: `${SITE_URL}/contact`,
    },
  ],
};

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact LoveUPDF',
  description: 'Contact page for LoveUPDF support and feedback.',
  url: `${SITE_URL}/contact`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'LoveUPDF',
    url: SITE_URL,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      <main>
        {/* Contact Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon name="EnvelopeIcon" size={20} variant="solid" style={{ color: '#E8445A' }} />
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
                Get in Touch
              </h1>
            </div>

            {/* Introduction */}
            <div
              className="mb-8 p-6 rounded-xl"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                Have a question about LoveUPDF? Need help with a tool? Want to suggest a new
                feature? We're here for you. Your privacy matters — we only use your information to
                respond to your inquiry.
              </p>
            </div>

            {/* Contact Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div
                className="p-5 rounded-xl"
                style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon
                    name="ChatBubbleLeftIcon"
                    size={16}
                    variant="solid"
                    style={{ color: '#E8445A' }}
                  />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
                  General Questions
                </h3>
                <p className="text-xs mb-2" style={{ color: '#4A4A6A' }}>
                  Questions about how our tools work
                </p>
                <a
                  href="mailto:hello@luvupdf.com"
                  className="text-xs font-medium"
                  style={{ color: '#E8445A' }}
                >
                  hello@luvupdf.com
                </a>
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon name="WrenchIcon" size={16} variant="solid" style={{ color: '#E8445A' }} />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
                  Technical Support
                </h3>
                <p className="text-xs mb-2" style={{ color: '#4A4A6A' }}>
                  Need help using a specific tool
                </p>
                <a
                  href="mailto:support@luvupdf.com"
                  className="text-xs font-medium"
                  style={{ color: '#E8445A' }}
                >
                  support@luvupdf.com
                </a>
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon
                    name="LightBulbIcon"
                    size={16}
                    variant="solid"
                    style={{ color: '#E8445A' }}
                  />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
                  Feature Requests
                </h3>
                <p className="text-xs mb-2" style={{ color: '#4A4A6A' }}>
                  Suggest a new tool or improvement
                </p>
                <a
                  href="mailto:ideas@luvupdf.com"
                  className="text-xs font-medium"
                  style={{ color: '#E8445A' }}
                >
                  ideas@luvupdf.com
                </a>
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon name="ScaleIcon" size={16} variant="solid" style={{ color: '#E8445A' }} />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
                  Legal & Privacy
                </h3>
                <p className="text-xs mb-2" style={{ color: '#4A4A6A' }}>
                  DMCA, privacy, or legal questions
                </p>
                <a
                  href="mailto:legal@luvupdf.com"
                  className="text-xs font-medium"
                  style={{ color: '#E8445A' }}
                >
                  legal@luvupdf.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="p-6 rounded-xl"
              style={{ background: '#FFFFFF', border: '1.5px solid #EEEEF5' }}
            >
              <h2 className="font-heading font-bold text-lg mb-4" style={{ color: '#1A1A2E' }}>
                Send Us a Message
              </h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: '#1A1A2E' }}
                  >
                    Name{' '}
                    <span className="text-xs" style={{ color: '#8888A8' }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      borderColor: '#EEEEF5',
                      color: '#1A1A2E',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: '#1A1A2E' }}
                  >
                    Email{' '}
                    <span className="text-xs" style={{ color: '#E8445A' }}>
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      borderColor: '#EEEEF5',
                      color: '#1A1A2E',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: '#1A1A2E' }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      borderColor: '#EEEEF5',
                      color: '#1A1A2E',
                      backgroundColor: 'white',
                    }}
                  >
                    <option>General question</option>
                    <option>Technical support</option>
                    <option>Feature suggestion</option>
                    <option>Legal/privacy matter</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: '#1A1A2E' }}
                  >
                    Message{' '}
                    <span className="text-xs" style={{ color: '#E8445A' }}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      borderColor: '#EEEEF5',
                      color: '#1A1A2E',
                    }}
                  />
                </div>

                <div className="p-3 rounded-lg" style={{ background: '#F8F8FC' }}>
                  <p className="text-xs flex items-start gap-2" style={{ color: '#8888A8' }}>
                    <Icon
                      name="ShieldCheckIcon"
                      size={14}
                      variant="solid"
                      style={{ color: '#E8445A', flexShrink: 0 }}
                    />
                    <span>
                      <strong style={{ color: '#4A4A6A' }}>Privacy note:</strong> We only use your
                      information to respond. No data is stored or shared. This form is for general
                      inquiries only — please don't include sensitive personal or financial
                      information.
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full"
                  style={{
                    background: '#E8445A',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(232,68,90,0.28)',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Response Time Box */}
            <div className="mt-6 p-4 rounded-xl text-center" style={{ background: '#F8F8FC' }}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon name="ClockIcon" size={14} variant="solid" style={{ color: '#E8445A' }} />
                <span className="text-sm font-medium" style={{ color: '#1A1A2E' }}>
                  Response Time
                </span>
              </div>
              <p className="text-xs" style={{ color: '#4A4A6A' }}>
                We typically reply within 24 hours, often sooner.
              </p>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                Contact LoveUPDF for support, questions, or feedback. Email hello@luvupdf.com for
                general inquiries, support@luvupdf.com for technical help, ideas@luvupdf.com for
                feature suggestions, and legal@luvupdf.com for DMCA, privacy, or legal matters.
                Privacy-first platform with zero file storage. Free PDF tools: merge, split,
                compress, rotate, lock, unlock, organize, remove pages.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
