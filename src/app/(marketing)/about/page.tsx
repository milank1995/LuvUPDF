import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About LuvUPDF — Privacy-First & Free Online PDF Tools',
  description:
    'Learn about LuvUPDF, the secure and 100% free online PDF toolkit. We prioritize your privacy with zero file storage and encrypted processing.',
  keywords: [
    'About LuvUPDF',
    'Secure PDF tools',
    'Free PDF merger',
    'Private PDF editor',
    'Privacy-first PDF',
    'No storage PDF tool',
  ],
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
              The Privacy-First Way to Manage PDFs
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
              LuvUPDF was built with a simple conviction: managing your documents shouldn&apos;t come at
              the cost of your privacy. We offer a suite of <strong>fast, 100% free, and secure
                online PDF tools</strong> that put the user first.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Our &quot;Zero Storage&quot; Promise
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
              Unlike other platforms, <strong>LuvUPDF does not store your files.</strong> Every PDF
              you process is handled through a temporary, encrypted session and is automatically
              deleted the moment your task is complete. We don&apos;t build profiles, we don&apos;t sell
              data, and we never see your content.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Why Choose LuvUPDF?
            </h2>
            <ul
              className="mb-6 list-disc pl-5 space-y-2"
              style={{ color: '#4A4A6A', fontSize: '15px', fontFamily: 'var(--font-body)' }}
            >
              <li><strong>100% Free:</strong> No subscriptions, no hidden fees, and no account required.</li>
              <li><strong>Secure & Encrypted:</strong> All file transfers use 256-bit SSL encryption.</li>
              <li><strong>Total Privacy:</strong> Files are automatically deleted after processing.</li>
              <li><strong>No Software Needed:</strong> Everything works directly in your web browser.</li>
            </ul>

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
              We believe powerful PDF tools should be accessible to everyone without technical or financial
              barriers. Our mission is to provide a clean, modern, and trustworthy platform for all your
              document needs — whether you&apos;re merging reports on a desktop or removing pages on the go
              with your phone.
            </p>

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
