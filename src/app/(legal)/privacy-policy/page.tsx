import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | LuvUPDF',
  description:
    'Learn how LuvUPDF collects, uses, and protects your data when you use our free online PDF tools.',
  alternates: {
    canonical: 'https://luvupdf.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              This Privacy Policy explains how LuvUPDF (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) collects, uses, and protects information when you use our website and
              free online PDF tools. By accessing or using LuvUPDF, you agree to the terms of this
              policy.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              1. Information We Collect
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
              We design LuvUPDF so you can use core tools without creating an account. We may
              collect limited technical information such as IP address, browser type, device
              information, and anonymized usage analytics to help us improve performance and detect
              abuse. Uploaded PDF files are processed only for the duration required to provide the
              requested service and are automatically removed after a short retention period.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              2. How We Use Your Information
            </h2>
            <ul
              className="mb-4 list-disc pl-5"
              style={{ color: '#4A4A6A', fontSize: '15px', fontFamily: 'var(--font-body)' }}
            >
              <li>To operate and maintain our PDF tools and website.</li>
              <li>To monitor performance, reliability, and security.</li>
              <li>To analyze aggregated, anonymized usage patterns and improve the product.</li>
              <li>To comply with legal obligations and respond to lawful requests.</li>
            </ul>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              3. File Handling and Retention
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
              PDF files you upload are transmitted over encrypted connections and are used only to
              perform the selected action (such as merge or lock). We do not use your content for
              training models or building profiles. Processed files are removed automatically within
              a short period after completion of the task, except where longer retention is required
              by law.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              4. Cookies and Analytics
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
              We may use cookies and similar technologies to remember your preferences, keep basic
              session information, and measure aggregated traffic. For more details, please see our
              Cookie Policy.
            </p>

            <h2
              className="font-heading font-bold mb-3"
              style={{ fontSize: '20px', color: '#1A1A2E' }}
            >
              5. Your Rights
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
              Depending on your location, you may have rights to access, correct, or delete certain
              personal data we hold about you, or to object to specific processing activities. You
              can contact us using the details on the Contact page if you have any privacy-related
              questions or requests.
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
      <Footer />
    </>
  );
}
