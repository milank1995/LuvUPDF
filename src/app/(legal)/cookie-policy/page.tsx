import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | LuvUPDF',
  description:
    'Find out how LuvUPDF uses cookies and similar technologies to improve performance and user experience.',
  alternates: {
    canonical: 'https://luvupdf.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
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
              Cookie Policy
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
              This Cookie Policy explains how LuvUPDF uses cookies and similar technologies to
              recognize you when you visit our website. It explains what these technologies are and
              why we use them, as well as your rights to control their use.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              What Are Cookies?
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
              Cookies are small text files that are stored on your device when you visit a website.
              They help websites remember information about your visit, such as preferred language
              and other settings, which can make future visits easier and the site more useful to
              you.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              How We Use Cookies
            </h2>
            <ul
              className="mb-4 list-disc pl-5"
              style={{ color: '#4A4A6A', fontSize: '15px', fontFamily: 'var(--font-body)' }}
            >
              <li>To remember basic preferences such as language and layout.</li>
              <li>To help secure the site and detect unusual activity.</li>
              <li>
                To measure aggregated traffic and usage patterns so we can improve performance.
              </li>
            </ul>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Managing Cookies
            </h2>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              You can control or delete cookies through your browser settings. Please be aware that
              disabling certain cookies may impact the functionality of LuvUPDF and your ability to
              use some features of our tools.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
