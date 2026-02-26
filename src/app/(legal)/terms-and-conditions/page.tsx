import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LuvUPDF',
  description:
    'Read the terms and conditions that apply when you access and use the LuvUPDF website and free PDF tools.',
  alternates: {
    canonical: 'https://luvupdf.com/terms-and-conditions',
  },
};

export default function TermsPage() {
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
              Terms &amp; Conditions
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
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the
              LuvUPDF website, products, and services. By using our site or tools, you agree to be
              bound by these Terms. If you do not agree, please do not use LuvUPDF.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              1. Use of Our Services
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
              You may use LuvUPDF only in compliance with applicable laws and these Terms. You are
              responsible for ensuring you have the right to upload and process any PDF files you
              submit. Do not use our services to upload content that is illegal, harmful,
              infringing, or violates the rights of others.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              2. Intellectual Property
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
              All content and branding on the LuvUPDF website, including logos, text, and interface
              design, are owned by or licensed to us and are protected by applicable intellectual
              property laws. You retain all rights to your own documents and files; we do not claim
              ownership over your content.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              3. Disclaimer of Warranties
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
              LuvUPDF is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do
              not guarantee that the services will be uninterrupted, error-free, or suitable for
              every purpose. To the fullest extent permitted by law, we disclaim all warranties,
              whether express or implied, including implied warranties of merchantability, fitness
              for a particular purpose, and non-infringement.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              4. Limitation of Liability
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
              To the maximum extent permitted by law, LuvUPDF and its operators will not be liable
              for any indirect, incidental, consequential, or punitive damages, or any loss of data,
              revenue, or profits arising out of your use of or inability to use our services.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              5. Changes to the Terms
            </h2>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              We may update these Terms from time to time. Continued use of LuvUPDF after changes
              become effective constitutes your acceptance of the updated Terms.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
