'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import FAQAccordion from '../common/FAQAccordion';

const faqs = [
  {
    question: 'Why is LuvUPDF completely free to use?',
    answer:
      "We believe that basic document tools should be accessible to everyone. LuvUPDF is 100% free — no hidden fees, no subscriptions, and no credit cards. Our platform 'Merge PDF online free' and 'Remove PDF pages' tools are supported by high-quality, non-intrusive advertising so we can keep our servers running for you.",
  },
  {
    question: 'How secure are my files on LuvUPDF?',
    answer:
      'Your privacy is our highest priority. All file transfers are encrypted with bank-grade 256-bit SSL. Crucially, we do not store any document data; files are processed on secure servers and automatically deleted immediately after you download them, or after 1 hour of inactivity.',
  },
  {
    question: 'Do I need to create an account or install software?',
    answer:
      'Not at all. LuvUPDF is an entirely browser-based platform. You can merge, edit, and manage your PDFs without ever creating an account, sharing your email, or downloading any software to your device.',
  },
  {
    question: 'Can I use these PDF tools on my phone or tablet?',
    answer:
      'Yes! Our platform is fully responsive and works perfectly on iPhones, Android devices, iPads, and all desktop computers. As long as you have a web browser and an internet connection, you can use LuvUPDF anywhere.',
  },
  {
    question: 'Will more tools like Compress and Split be added soon?',
    answer:
      "Absolutely. We are actively working on expanding our suite. 'Split PDF', 'Compress PDF', and 'PDF to Word' are in development and will be released shortly. Like all our existing tools, these new features will be 100% free and secure.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: 'white' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-3">FAQ</span>
          <h2
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#4A4A6A', fontSize: '16px', fontFamily: 'var(--font-body)' }}>
            Everything you need to know about LuvUPDF and our free PDF tools.
          </p>
        </div>

        {/* FAQ List */}
        <FAQAccordion faqs={faqs} />

        {/* CTA */}
        <div
          className="mt-10 p-6 rounded-2xl text-center"
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
            Still have questions?
          </p>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            Our support team is here to help you get the most out of LuvUPDF.
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
