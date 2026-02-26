import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DMCA Policy | LuvUPDF',
  description:
    'Learn how to submit a DMCA copyright infringement notice or counter-notice for content related to LuvUPDF.',
  alternates: {
    canonical: 'https://luvupdf.com/dmca-policy',
  },
};

export default function DmcaPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-24 pb-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto">
            <h1
              className="font-heading font-extrabold mb-4"
              style={{
                fontSize: 'clamp(28px,4vw,40px)',
                color: '#1A1A2E',
                letterSpacing: '-0.03em',
              }}
            >
              DMCA Policy
            </h1>
            <p
              className="mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
              }}
            >
              LuvUPDF respects intellectual property rights and expects users to do the same. This
              DMCA Policy explains how to notify us if you believe your copyrighted work has been
              used in a way that constitutes infringement, and how to submit a counter-notice.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Submitting a DMCA Notice
            </h2>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              If you are a copyright owner or authorized to act on behalf of one, and you believe
              that material available through LuvUPDF infringes your copyright, you may submit a
              written DMCA notice. Your notice should include:
            </p>
            <ul
              className="mb-4 list-disc pl-5"
              style={{ color: '#4A4A6A', fontSize: '15px', fontFamily: 'var(--font-body)' }}
            >
              <li>Your full name and contact information.</li>
              <li>
                Identification of the copyrighted work you claim has been infringed (or a
                representative list of such works).
              </li>
              <li>
                Identification of the material you claim is infringing, including where it is
                located on our service.
              </li>
              <li>
                A statement that you have a good-faith belief the use is not authorized by the
                copyright owner, its agent, or the law.
              </li>
              <li>
                A statement, under penalty of perjury, that the information in your notice is
                accurate and that you are authorized to act on behalf of the copyright owner.
              </li>
              <li>Your physical or electronic signature.</li>
            </ul>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Counter-Notification
            </h2>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              If you believe material you uploaded or provided to LuvUPDF was removed by mistake or
              misidentification, you may submit a counter-notification. Your counter-notice should
              include similar identifying information and a statement that you consent to the
              jurisdiction of the appropriate courts for resolution of the dispute.
            </p>

            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              We may share relevant portions of your notice or counter-notice with the user who
              submitted the content or with law enforcement, as appropriate.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
