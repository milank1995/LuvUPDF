'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    question: 'Is LuvUPDF really free to use?',
    answer:
      "Yes, LuvUPDF is completely free to use. All PDF tools — including merge, lock, unlock, and rotate — are available at no cost. We don't require any account creation, credit card, or subscription. Our platform is supported by non-intrusive advertising.",
  },
  {
    question: 'Are my PDF files safe and secure?',
    answer:
      'Absolutely. All file uploads and downloads are protected using 256-bit SSL encryption, the same standard used by banks. Your files are processed on secure servers and automatically deleted within 1 hour of processing. We never read, analyze, or store your documents.',
  },
  {
    question: 'How do I merge multiple PDF files into one?',
    answer:
      'Navigate to our Merge PDF tool, upload two or more PDF files by dragging and dropping them into the upload area or clicking to browse. You can reorder the files as needed, then click "Merge PDF" to combine them. Your merged file will be ready to download in seconds.',
  },
  {
    question: 'What is the maximum file size I can upload?',
    answer:
      "LuvUPDF supports PDF files up to 100MB per upload. For the Merge PDF tool, you can combine up to 20 files at once, as long as the combined total doesn't exceed 200MB. For larger files, we recommend compressing them first.",
  },
  {
    question: 'Do I need to create an account to use LuvUPDF?',
    answer:
      'No account is required. You can use all PDF tools immediately without registering, providing an email address, or signing in. Simply visit the tool page, upload your file, and start working.',
  },
  {
    question: 'Can I use LuvUPDF on my phone or tablet?',
    answer:
      'Yes! LuvUPDF is fully responsive and optimized for all devices including smartphones, tablets, and desktop computers. It works on all modern browsers including Chrome, Firefox, Safari, and Edge on both iOS and Android.',
  },
  {
    question: 'How do I password protect a PDF file?',
    answer:
      'Use our Lock PDF tool. Upload your PDF, enter your desired password (we recommend at least 8 characters with a mix of letters, numbers, and symbols), confirm the password, and click "Lock PDF". The protected file will be ready to download immediately.',
  },
  {
    question: 'Will more PDF tools be added to LuvUPDF?',
    answer:
      "Yes! We're actively developing more tools. Coming soon: Compress PDF, PDF to Word, Word to PDF, OCR (text recognition), Split PDF, and AI-powered PDF tools. All new tools will be free to use.",
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
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={`faq-${i}`} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: openIndex === i ? '#E8445A' : '#1A1A2E',
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? '#FFF0F2' : '#F8F8FC',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <Icon
                    name="ChevronDownIcon"
                    size={16}
                    style={
                      { color: openIndex === i ? '#E8445A' : '#8888A8' } as React.CSSProperties
                    }
                  />
                </div>
              </button>

              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <div className="px-5 pb-5">
                  <p
                    style={{
                      color: '#4A4A6A',
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
