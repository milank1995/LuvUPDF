'use client';

import FAQAccordion from '../common/FAQAccordion';

const faqs = [
  {
    question: 'Is LoveUPDF really free?',
    answer: 'Yes. All tools are 100% free. No hidden fees, no subscriptions, no credit cards.',
  },
  {
    question: 'Are my files private?',
    answer:
      '100% private. Files are encrypted with 256-bit SSL and auto-deleted immediately after processing. We never store your documents.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No account, no email, no login. Just use the tools directly in your browser.',
  },
  {
    question: 'Works on mobile?',
    answer:
      'Yes. Works perfectly on iPhone, Android, iPad, and desktop. Any device with a browser.',
  },
  {
    question: 'What tools are available?',
    answer:
      'Merge, split, compress, rotate, lock, unlock, organize, and remove pages. All free, all private.',
  },
];

export default function FAQSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ background: 'white' }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: '#E8445A', letterSpacing: '0.05em' }}
          >
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-heading font-extrabold mb-3"
            style={{
              fontSize: 'clamp(26px, 4vw, 36px)',
              color: '#1A1A2E',
            }}
          >
            Common Questions
          </h2>
          <p style={{ color: '#4A4A6A', fontSize: '15px' }}>
            Quick answers about our privacy-first PDF tools.
          </p>
        </div>

        {/* FAQ List */}
        <FAQAccordion faqs={faqs} />

        {/* Simple CTA */}
        <div
          className="mt-8 p-5 rounded-xl text-center"
          style={{
            background: 'linear-gradient(135deg, #FFF0F2 0%, #FFE8EB 100%)',
            border: '1.5px solid #FFD6DB',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '17px',
              color: '#1A1A2E',
              marginBottom: '6px',
            }}
          >
            Need help?
          </p>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            Our support team is here to help you get the most out of LoveUPDF.
          </p>
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
        </div>
      </div>
    </section>
  );
}
