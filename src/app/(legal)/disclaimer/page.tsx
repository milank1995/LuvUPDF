import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer | LuvUPDF',
  description:
    'Read the legal disclaimer for using LuvUPDF and its free online PDF tools, including limitations of responsibility.',
  alternates: {
    canonical: 'https://luvupdf.com/disclaimer',
  },
};

export default function DisclaimerPage() {
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
              Disclaimer
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
              The information and tools provided on the LuvUPDF website are for general information
              and convenience only. While we strive to keep the service reliable and up to date, we
              make no warranties or representations of any kind, express or implied, about the
              completeness, accuracy, or suitability of the website or the information contained on
              it.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              No Professional Advice
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
              LuvUPDF does not provide legal, financial, or professional advice. You are solely
              responsible for how you use your documents and any outcomes resulting from that use.
              Always consult a qualified professional where appropriate.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              External Links
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
              Our website may contain links to third-party websites. These links are provided for
              your convenience and do not signify endorsement. We have no control over the content
              or practices of these external sites and accept no responsibility for any loss or
              damage that may arise from your use of them.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              Limitation of Liability
            </h2>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              In no event will LuvUPDF or its operators be liable for any loss or damage, including
              without limitation indirect or consequential loss or damage, arising out of or in
              connection with the use of this website or our tools.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
