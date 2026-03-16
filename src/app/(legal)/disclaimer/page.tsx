import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Disclaimer — Terms of Responsibility',
  description:
    'Legal disclaimer for LoveUPDF free online PDF tools. Understand the limitations of liability, service expectations, and your responsibilities when using our privacy-first platform.',
  keywords:
    'PDF disclaimer, LoveUPDF legal, liability limitation, free tool disclaimer, terms of responsibility, no warranties, external links disclaimer',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Disclaimer — Free PDF Tools',
    description:
      'Legal disclaimer for LoveUPDF. Understand your rights and responsibilities when using our privacy-first PDF tools.',
    type: 'website',
    url: `${SITE_URL}/disclaimer`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer',
    description: 'Terms of responsibility for using our free PDF tools.',
  },
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
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
      name: 'Disclaimer',
      item: `${SITE_URL}/disclaimer`,
    },
  ],
};

const disclaimerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Disclaimer',
  description:
    'Legal disclaimer for LoveUPDF free PDF tools. No warranties, limitation of liability, and external links policy.',
  url: `${SITE_URL}/disclaimer`,
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
      name: 'What is a disclaimer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A disclaimer explains the limitations of liability and responsibilities when using our free PDF tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does LoveUPDF guarantee perfect results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While we strive for quality, we cannot guarantee that every file will process perfectly due to variations in PDF formats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are external links on LoveUPDF endorsed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. External links are provided for convenience only and do not signify endorsement. We are not responsible for third-party content.',
      },
    },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerJsonLd) }}
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
                items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]}
                color="#E8445A"
              />
            </div>

            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon name="ScaleIcon" size={20} variant="solid" style={{ color: '#E8445A' }} />
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
                Disclaimer
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
                Clear expectations for our free tools.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                This disclaimer explains the limitations of liability and your responsibilities when
                using LoveUPDF. We believe in transparency — so you know exactly what to expect from
                our privacy-first platform.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  icon: 'ShieldCheckIcon',
                  title: 'No Warranties',
                  desc: 'Tools provided "as is" without guarantees',
                },
                {
                  icon: 'ScaleIcon',
                  title: 'Limitation of Liability',
                  desc: 'We are not liable for damages from use',
                },
                {
                  icon: 'LinkIcon',
                  title: 'External Links',
                  desc: 'Third-party sites not endorsed',
                },
                {
                  icon: 'UserIcon',
                  title: 'Your Responsibility',
                  desc: 'You are responsible for your documents',
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

            {/* Detailed Disclaimer Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section id="general-information">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  1. General Information
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    The information and tools provided on the LoveUPDF website are for{' '}
                    <strong>general information and convenience only.</strong> While we strive to
                    keep the service reliable and up to date, we make no warranties or
                    representations of any kind, express or implied, about the completeness,
                    accuracy, or suitability of the website or the information contained on it.
                  </p>
                  <p>
                    <strong>
                      Your use of any information or tools on this site is entirely at your own
                      risk.
                    </strong>{' '}
                    We are not liable for any consequences arising from your use of our services.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="no-professional-advice">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  2. No Professional Advice
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF{' '}
                    <strong>
                      does not provide legal, financial, medical, or professional advice
                    </strong>{' '}
                    of any kind. Our tools are designed for document management only and should not
                    be relied upon as a substitute for professional consultation.
                  </p>
                  <p>
                    You are solely responsible for how you use your documents and any outcomes
                    resulting from that use. Always consult a qualified professional where
                    appropriate for your specific situation.
                  </p>
                  <div className="p-4 rounded-lg mt-2" style={{ background: '#F8F8FC' }}>
                    <p className="text-sm" style={{ color: '#4A4A6A' }}>
                      <strong>Examples:</strong> Do not rely on our tools for legally binding
                      documents without professional review. Use common sense with sensitive
                      information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="no-warranties">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  3. No Warranties
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF is provided on an{' '}
                    <strong>
                      &quot;as is&quot; and &quot;as available&quot; basis without any warranties
                    </strong>{' '}
                    of any kind, either express or implied, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Warranties of merchantability or fitness for a particular purpose</li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Complete accuracy of processed files</li>
                    <li>Compatibility with all PDF formats, versions, or third-party software</li>
                  </ul>
                  <p>
                    While we strive for quality, <strong>PDF formats can vary widely.</strong> Some
                    complex documents may not process perfectly, and we cannot guarantee results for
                    every file type.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="limitation-liability">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  4. Limitation of Liability
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    <strong>
                      To the fullest extent permitted by law, LoveUPDF and its operators shall not
                      be liable
                    </strong>{' '}
                    for any direct, indirect, incidental, consequential, or punitive damages arising
                    out of or in connection with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your use or inability to use our website or tools</li>
                    <li>Any errors or omissions in processed documents</li>
                    <li>Loss of data, files, or content</li>
                    <li>Unauthorized access to your files (though we maintain strict security)</li>
                  </ul>
                  <p>
                    This limitation applies even if we have been advised of the possibility of such
                    damages. Because our tools are provided <strong>free of charge,</strong> this
                    limitation is essential to our ability to offer this service.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="external-links">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  5. External Links
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    Our website may contain links to third-party websites. These links are provided{' '}
                    <strong>solely for your convenience</strong> and do not signify endorsement,
                    approval, or responsibility for the content or practices of those sites.
                  </p>
                  <p>
                    We have <strong>no control over the content, privacy policies, or terms</strong>{' '}
                    of external websites. Visiting them is at your own risk. We recommend reviewing
                    their policies before use.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="your-responsibility">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  6. Your Responsibility
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>By using LoveUPDF, you acknowledge and agree that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>You are solely responsible for your documents and their content</li>
                    <li>You will only process files you own or have permission to use</li>
                    <li>You understand our tools are provided without guarantees</li>
                    <li>You accept the inherent risks of using online tools</li>
                  </ul>
                  <p>
                    We encourage you to <strong>keep backups of important documents</strong> before
                    using any online tool.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="privacy-commitment">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  7. Our Privacy Commitment
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    While this disclaimer limits liability, we want to reaffirm our{' '}
                    <strong>commitment to your privacy:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Client-side tools:</strong> Files never leave your device
                    </li>
                    <li>
                      <strong>Server-side tools:</strong> Files processed in memory, permanently
                      deleted after download
                    </li>
                    <li>
                      <strong>No storage:</strong> We never keep copies of your documents
                    </li>
                  </ul>
                  <p>
                    For complete details, please review our{' '}
                    <a
                      href="/privacy-policy"
                      style={{ color: '#E8445A', textDecoration: 'underline' }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="updates">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  8. Changes to This Disclaimer
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We may update this disclaimer periodically to reflect changes in our services,
                    legal requirements, or industry best practices. When we make material changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The &quot;Last updated&quot; date at the top will be revised</li>
                    <li>Additional notice may be provided where appropriate</li>
                  </ul>
                  <p>
                    Your <strong>continued use of the site constitutes acceptance</strong> of any
                    updated terms.
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
                Disclaimer Summary — Plain English
              </h3>
              <div className="space-y-3">
                {[
                  '✓ Tools provided "as is" without guarantees',
                  '✓ No professional advice offered — you are responsible',
                  '✓ We are not liable for damages from use',
                  '✓ External links are for convenience only',
                  '✓ Keep backups of important documents',
                  '✓ Your privacy remains our priority — zero storage',
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
                Questions about this disclaimer?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                If you have any questions about our disclaimer or legal terms, please contact us.
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
                LoveUPDF disclaimer. Free PDF tools provided "as is" without warranties. No
                professional advice offered. Limitation of liability for damages from tool use.
                External links for convenience only. Client-side processing for merge PDF, split
                PDF, rotate PDF, organize PDF pages, remove PDF pages. Server-side processing for
                compress PDF, lock PDF, unlock PDF with instant auto-deletion. Zero file storage.
                Your responsibility to backup important documents. Privacy-first PDF tools.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
