import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LuvUPDF — Free PDF Tool Usage',
  description:
    'Read the terms of use for LuvUPDF. Learn about our services, your responsibilities, and our 100% secure PDF processing policy.',
  keywords: [
    'Terms of Service',
    'PDF tool conditions',
    'LuvUPDF usage',
    'Legal terms',
    'PDF ownership',
  ],
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
              These Terms &amp; Conditions govern your use of the LuvUPDF website and our free online
              PDF tools. By using our services, you agree to these terms, which are designed to
              protect both you and our platform while ensuring a <strong>secure and private
                experience.</strong>
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              1. 100% Free & Secure Usage
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
              LuvUPDF provides free access to PDF management tools. You may use these tools for
              personal or professional purposes. We do not charge fees, require accounts, or
              place hidden limits on our standard free services.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              2. Document Ownership & Privacy
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
              <strong>You retain 100% ownership of any file you upload.</strong> LuvUPDF does not claim
              any rights to your content. Furthermore, because we do not store files after processing,
              we do not maintain any copies of your documents. You are solely responsible for the
              content and legality of the files you process.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              3. Service &quot;As Is&quot;
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
              While we strive for 100% uptime and perfectly processed documents, LuvUPDF is provided
              on an &quot;as is&quot; basis. We are not liable for any issues arising from the use of our
              free tools, including but not limited to file compatibility or temporary service
              interruptions.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              4. Prohibited Activities
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
              You agree not to use LuvUPDF for any illegal activities, including the processing
              of unauthorized or infringing content. Any attempt to disrupt the service, bypass
              security measures, or scrape data is strictly prohibited.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              5. Updates to Terms
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
              We may update these terms occasionally to reflect changes in our tools or legal
              requirements. Your continued use of the site constitutes acceptance of any updated
              terms.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
