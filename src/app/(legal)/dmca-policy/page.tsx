import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'DMCA Policy — Copyright Notices & Takedown Requests',
  description:
    'Learn how to file a DMCA notice or counter-notice with LoveUPDF. We respect intellectual property rights and handle copyright claims seriously and promptly.',
  keywords:
    'DMCA policy, copyright notice, PDF tool DMCA, intellectual property, takedown request, counter-notice, copyright infringement, LoveUPDF legal',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'DMCA Policy — Copyright Notices',
    description:
      'How to file DMCA takedown requests and counter-notices for LoveUPDF. We respect intellectual property rights.',
    type: 'website',
    url: `${SITE_URL}/dmca-policy`,
    siteName: 'LoveUPDF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Policy',
    description: 'Copyright notices and takedown requests for LoveUPDF.',
  },
  alternates: {
    canonical: `${SITE_URL}/dmca-policy`,
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
      name: 'DMCA Policy',
      item: `${SITE_URL}/dmca-policy`,
    },
  ],
};

const dmcaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'DMCA Policy',
  description:
    'DMCA copyright notice and takedown policy for LoveUPDF. Instructions for filing claims and counter-notices.',
  url: `${SITE_URL}/dmca-policy`,
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
      name: 'How do I file a DMCA takedown request on LoveUPDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Submit a written notice to our designated agent with your contact info, identification of the copyrighted work, location of infringing material, and a statement of good-faith belief.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after I submit a DMCA notice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We review your notice and may remove or disable access to the allegedly infringing material. We may also share your notice with the user who submitted the content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I file a counter-notice if my content was removed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you believe your content was removed by mistake, you can submit a counter-notification with your contact information and consent to jurisdiction.',
      },
    },
  ],
};

export default function DmcaPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dmcaJsonLd) }}
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
                items={[{ label: 'Home', href: '/' }, { label: 'DMCA Policy' }]}
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
                DMCA Policy
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
                Respecting intellectual property rights.
              </p>
              <p className="text-base" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                LoveUPDF respects the intellectual property rights of others and expects our users
                to do the same. This DMCA Policy explains how to notify us if you believe your
                copyrighted work has been used in a way that constitutes infringement, and how to
                submit a counter-notice if your content was removed by mistake.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  icon: 'DocumentTextIcon',
                  title: 'DMCA Notices',
                  desc: 'File takedown requests for infringing content',
                },
                {
                  icon: 'ArrowUturnLeftIcon',
                  title: 'Counter-Notices',
                  desc: 'Appeal if your content was removed by mistake',
                },
                {
                  icon: 'ShieldCheckIcon',
                  title: 'Good-Faith Required',
                  desc: 'Notices must be accurate and in good faith',
                },
                {
                  icon: 'EnvelopeIcon',
                  title: 'Designated Agent',
                  desc: 'Send all notices to our DMCA agent',
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

            {/* Detailed DMCA Sections */}
            <div className="space-y-10">
              {/* Section 1 - Designated Agent */}
              <section id="designated-agent">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  1. Designated DMCA Agent
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF's designated agent for receiving DMCA notices and counter-notices is:
                  </p>
                  <div className="p-4 rounded-lg" style={{ background: '#F8F8FC' }}>
                    <p className="font-medium" style={{ color: '#1A1A2E' }}>
                      DMCA Agent
                    </p>
                    <p style={{ color: '#4A4A6A' }}>LoveUPDF Legal Department</p>
                    <p style={{ color: '#4A4A6A' }}>
                      Email:{' '}
                      <a href="mailto:dmca@luvupdf.com" style={{ color: '#E8445A' }}>
                        dmca@luvupdf.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 - Submitting a DMCA Notice */}
              <section id="dmca-notice">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  2. Submitting a DMCA Takedown Notice
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    If you are a copyright owner or authorized to act on behalf of one, and you
                    believe that material available through LoveUPDF infringes your copyright, you
                    may submit a written DMCA notice to our designated agent. To be effective, your
                    notice must include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Your contact information:</strong> Full name, address, phone number,
                      and email address.
                    </li>
                    <li>
                      <strong>Identification of the copyrighted work:</strong> Describe the work you
                      claim has been infringed, or provide a representative list of such works.
                    </li>
                    <li>
                      <strong>Identification of infringing material:</strong> Sufficient information
                      to locate the material on our service, including URLs or specific page
                      locations.
                    </li>
                    <li>
                      <strong>Good-faith statement:</strong> A statement that you have a good-faith
                      belief that the use is not authorized by the copyright owner, its agent, or
                      the law.
                    </li>
                    <li>
                      <strong>Accuracy statement:</strong> A statement, under penalty of perjury,
                      that the information in your notice is accurate and that you are authorized to
                      act on behalf of the copyright owner.
                    </li>
                    <li>
                      <strong>Signature:</strong> Your physical or electronic signature.
                    </li>
                  </ul>
                  <p>
                    <strong>Important:</strong> Misrepresentations in your notice may result in
                    liability for damages. Consult a legal professional if you're unsure.
                  </p>
                </div>
              </section>

              {/* Section 3 - What Happens After a Notice */}
              <section id="after-notice">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  3. What Happens After a DMCA Notice
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>Upon receiving a valid DMCA notice, we will:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Review the notice for compliance with DMCA requirements</li>
                    <li>Remove or disable access to the allegedly infringing material</li>
                    <li>Notify the user who submitted the content about the removal</li>
                    <li>
                      Provide the user with a copy of your notice (with personal information
                      redacted as appropriate)
                    </li>
                    <li>Maintain records of the notice as required by law</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 - Counter-Notification */}
              <section id="counter-notice">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  4. Counter-Notification Process
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    If you believe that material you uploaded to LoveUPDF was removed or disabled by
                    mistake or misidentification, you may submit a counter-notification to our
                    designated agent. Your counter-notice must include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Your contact information:</strong> Full name, address, phone number,
                      and email address.
                    </li>
                    <li>
                      <strong>Identification of removed material:</strong> Describe the material
                      that was removed and its location before removal.
                    </li>
                    <li>
                      <strong>Statement of good faith:</strong> A statement, under penalty of
                      perjury, that you have a good-faith belief the material was removed as a
                      result of mistake or misidentification.
                    </li>
                    <li>
                      <strong>Consent to jurisdiction:</strong> A statement that you consent to the
                      jurisdiction of the federal court in your district (or the district where your
                      service provider is located) and that you will accept service of process from
                      the person who filed the original DMCA notice.
                    </li>
                    <li>
                      <strong>Signature:</strong> Your physical or electronic signature.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5 - After Counter-Notice */}
              <section id="after-counter">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  5. What Happens After a Counter-Notice
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>Upon receiving a valid counter-notification, we will:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide a copy of the counter-notice to the original complainant</li>
                    <li>
                      Inform them that we may restore the removed material within 10-14 business
                      days
                    </li>
                    <li>
                      Replace the removed material unless the original complainant files a court
                      action seeking to restrain the user
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 - Repeat Infringers */}
              <section id="repeat-infringers">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  6. Repeat Infringer Policy
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    LoveUPDF maintains a policy of terminating, in appropriate circumstances, the
                    accounts of users who are repeat infringers. Due to our{' '}
                    <strong>privacy-first approach (no accounts required),</strong> we instead
                    monitor IP addresses and may block access to users who repeatedly submit
                    infringing content.
                  </p>
                </div>
              </section>

              {/* Section 7 - Privacy Considerations */}
              <section id="privacy">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  7. Privacy & DMCA Notices
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We respect your privacy while complying with legal obligations. When handling
                    DMCA notices:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We may share relevant portions of notices with affected users</li>
                    <li>Personal information may be redacted where appropriate</li>
                    <li>
                      We maintain records as required by law, but do not use this information for
                      any other purpose
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8 - Updates */}
              <section id="updates">
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#1A1A2E' }}>
                  8. Changes to This Policy
                </h2>
                <div
                  className="space-y-4"
                  style={{ color: '#4A4A6A', fontSize: '15px', lineHeight: 1.7 }}
                >
                  <p>
                    We may update this DMCA Policy periodically to reflect changes in legal
                    requirements or our practices. When we make material changes, we'll update the
                    "Last updated" date at the top of this page. Your continued use of our services
                    constitutes acceptance of any updates.
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
                DMCA Process — Quick Summary
              </h3>
              <div className="space-y-3">
                {[
                  '✓ File takedown notices with our designated agent at dmca@luvupdf.com',
                  '✓ Include all required elements: contact info, work identification, location, statements',
                  '✓ Counter-notices available if your content was removed by mistake',
                  '✓ We process all valid notices promptly',
                  '✓ Repeat infringers may be blocked from our service',
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
                Questions about DMCA?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#4A4A6A', lineHeight: 1.6 }}>
                If you have questions about our DMCA policy or need assistance filing a notice,
                please contact our designated agent.
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
                  DMCA agent responds within 24 hours
                </span>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <p>
                LoveUPDF DMCA policy. File copyright takedown notices with designated agent at
                dmca@luvupdf.com. Required elements: contact information, identification of
                copyrighted work, location of infringing material, good-faith statement, accuracy
                statement, signature. Counter-notification process available for mistaken removals.
                Repeat infringer policy. Privacy-first platform with zero file storage. Free PDF
                tools including merge PDF, split PDF, compress PDF, rotate PDF, lock PDF, unlock
                PDF, organize PDF, remove PDF pages.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
