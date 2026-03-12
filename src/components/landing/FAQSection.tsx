'use client';

import FAQAccordion from '../common/FAQAccordion';

// faqData.ts
export const faqs = [
  {
    question: 'What is LoveUPDF?',
    answer:
      'LoveUPDF is a privacy-first, free online PDF tool platform. We offer 8 PDF tools: merge, split, compress, rotate, lock, unlock, organize, and remove pages. All tools are 100% free with no account required. Your privacy is our priority. files never leave your device for most tools, and server-side tools auto-delete instantly.',
  },
  {
    question: 'Is LoveUPDF really free?',
    answer:
      'Yes. All PDF tools are 100% free. No hidden fees, no subscriptions, no credit cards, no premium tiers. Every feature is available to everyone at no cost.',
  },
  {
    question: 'Are my files private when I use LoveUPDF?',
    answer:
      '100% private. Files are encrypted with 256-bit SSL during transfer. Client-side tools process in your browser with no upload. Server-side tools process in memory and are permanently deleted immediately after download. We never store your documents.',
  },
  {
    question: 'Do I need to create an account to use LoveUPDF?',
    answer:
      "No account, no email, no login required. Just visit the website and use any tool directly in your browser. Your privacy matters. we don't track who you are.",
  },
  {
    question: 'Does LoveUPDF work on mobile devices?',
    answer:
      'Yes. Works perfectly on iPhone, Android, iPad, tablets, and desktop. Any device with a modern browser can access all LoveUPDF tools with the same functionality.',
  },
  {
    question: 'What PDF tools does LoveUPDF offer?',
    answer:
      'LoveUPDF offers 8 free PDF tools: merge PDF, split PDF, compress PDF, rotate PDF, lock PDF with password, unlock PDF, organize PDF pages, and remove PDF pages. All tools are free and privacy-first.',
  },
  {
    question: 'What is the difference between client-side and server-side tools?',
    answer:
      'Client-side tools (merge, split, rotate, organize, remove pages) process entirely in your browser. files never leave your device. Server-side tools (compress, lock, unlock) process in memory and are permanently deleted immediately after download. Both approaches prioritize your privacy.',
  },
  {
    question: 'How long are my files stored on LoveUPDF?',
    answer:
      'For client-side tools: files never leave your device, so nothing is stored. For server-side tools: files are processed in memory and permanently deleted immediately after download. typically within seconds. We never keep copies.',
  },
  {
    question: 'Can I use LoveUPDF for commercial purposes?',
    answer:
      'Yes. All tools are free for personal and commercial use. No restrictions. Process business documents, client files, or work projects without any limitations.',
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
