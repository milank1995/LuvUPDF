import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | LuvUPDF — 100% Secure & Private PDF Tools',
  description:
    'LuvUPDF is a privacy-first platform. We do not store your files, use encrypted connections, and delete data immediately after processing.',
  keywords: [
    'Privacy Policy',
    'Secure PDF processing',
    'No storage PDF',
    'Private PDF tools',
    'Data protection',
  ],
  alternates: {
    canonical: 'https://luvupdf.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
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
              Privacy & Security Policy
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
              At LuvUPDF, your privacy is our top priority. This policy explains our <strong>commitment
                to zero file retention</strong> and how we ensure your documents remain 100% secure
              throughout the processing cycle.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              1. Our &quot;Privacy-First&quot; Philosophy
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
              We believe you shouldn&apos;t have to sacrifice your personal or professional data to use
              quality tools. LuvUPDF is designed to function with minimal data collection. We do
              not require accounts, logins, or any personal information to use our core PDF tools.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              2. 100% Secure File Handling
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
              All files uploaded to LuvUPDF are transmitted via <strong>256-bit SSL encryption</strong>.
              This ensures that your data is protected from the moment it leaves your device until
              processing is complete.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              3. Automatic File Deletion (No Storage)
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
              <strong>We do not store your files.</strong> Unlike other services that may keep your
              documents for hours or days, LuvUPDF automatically and permanently deletes your
              files immediately after the processing task is finished. Your content is never used
              for training AI, building databases, or any other purpose.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              4. Technical Information & Cookies
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
              We collect limited, non-identifying technical information (such as browser type and
              anonymized usage stats) to maintain site performance and security. We use minimal
              cookies only to enhance your experience and remember basic preferences.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              5. Your Rights & Control
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
              Since we do not store your documents or personal profiles, there is no data for us
              to &quot;hand over&quot; or &quot;sell.&quot; You maintain full control over your documents at all times.
              For any questions regarding our security protocols, please contact us via the
              details on the Contact page.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              6. Changes to This Policy
            </h2>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '15px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              We may update this Privacy Policy from time to time to reflect changes in our
              services, legal requirements, or best practices. When we make material updates, we
              will adjust the &quot;Last updated&quot; date and may provide additional notice where
              appropriate.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
