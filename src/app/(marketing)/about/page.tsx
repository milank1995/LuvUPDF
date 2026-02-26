import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | LuvUPDF',
  description:
    'Discover the mission behind LuvUPDF — fast, simple, and free online PDF tools built for everyday users.',
  alternates: {
    canonical: 'https://luvupdf.com/about',
  },
};

export default function AboutPage() {
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
              About LuvUPDF
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
              LuvUPDF was created to make working with PDF files feel simple again. Instead of
              forcing you to install heavy desktop software or sign up for expensive subscriptions,
              we focus on fast, secure, and free tools that live entirely in your browser.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Our Mission
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
              We believe powerful PDF tools should be accessible to everyone. Our mission is to
              provide a suite of focused, well-designed utilities — such as merging, locking, and
              rotating PDFs — that work on any device with a modern browser.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              What We&apos;re Building
            </h2>
            <ul
              className="mb-4 list-disc pl-5"
              style={{ color: '#4A4A6A', fontSize: '15px', fontFamily: 'var(--font-body)' }}
            >
              <li>Core tools for merging, splitting, compressing, locking, and unlocking PDFs.</li>
              <li>Clean, modern interfaces that are easy to use on desktop and mobile.</li>
              <li>Secure processing pipelines with short-lived file retention and encryption.</li>
            </ul>

            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              As we continue to expand LuvUPDF, we remain focused on performance, privacy, and a
              consistent user experience across every page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
