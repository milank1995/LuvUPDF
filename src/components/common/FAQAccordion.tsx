'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function FAQAccordion({
  faqs,
  color = '#6C5CE7',
}: {
  faqs: { question: string; answer: string }[];
  color?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={`faq-${i}`} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: isOpen ? color : '#1A1A2E',
                  lineHeight: 1.4,
                }}
              >
                {faq.question}
              </span>

              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? `${color}20` : `${color}10`,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  style={{
                    color: isOpen ? color : `${color}80`,
                  }}
                />
              </div>
            </button>

            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
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
        );
      })}
    </div>
  );
}
