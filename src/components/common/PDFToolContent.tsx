'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Step {
  step: number;
  title: string;
  desc: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
  color?: string;
  bg?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface RelatedTool {
  href: string;
  icon: string;
  title: string;
  desc: string;
  color?: string;
  bg?: string;
}

interface PDFToolContentProps {
  title: string;
  intro: string[];

  stepSectionTitle: string;
  stepCircleColor: string;
  steps: Step[];

  featureSectionTitle: string;
  featureIntro?: string;
  features: Feature[];

  useCaseSectionTitle: string;
  useCaseIntro?: string;
  useCases?: string[];

  securitySectionTitle?: string;
  security?: string[];

  faqSectionTitle: string;
  faqs: FAQ[];

  relatedTools: RelatedTool[];
}

export default function PDFToolContent({
  title,
  intro,
  stepSectionTitle,
  stepCircleColor,
  steps,
  featureSectionTitle,
  featureIntro,
  features,
  useCaseSectionTitle,
  useCaseIntro,
  useCases,
  securitySectionTitle,
  security,
  faqSectionTitle,
  faqs,
  relatedTools,
}: PDFToolContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* ================= INTRO ================= */}
      <article className="py-16">
        <div className="prose-custom max-w-none">
          <h2
            className="font-heading font-extrabold mb-6"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>

          {intro.map((p, i) => (
            <p
              key={i}
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
                marginBottom: i === intro.length - 1 ? '24px' : '20px',
              }}
            >
              {p}
            </p>
          ))}

          {/* ================= STEPS ================= */}
          {steps.length > 0 && (
            <>
              <h3
                className="font-heading font-bold mb-4 mt-8"
                style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
              >
                {stepSectionTitle}
              </h3>

              <div className="space-y-4 mb-8">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{ background: '#F8F8FC', border: '1.5px solid #EEEEF5' }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: stepCircleColor,
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '13px',
                      }}
                    >
                      {item.step}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#1A1A2E] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= FEATURES ================= */}
          {features.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mb-4">{featureSectionTitle}</h3>

              {featureIntro && <p className="text-gray-600 mb-4">{featureIntro}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl border border-[#EEEEF5]"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.bg || '#F3EEFF' }}
                    >
                      <Icon
                        name={item.icon}
                        size={16}
                        variant="solid"
                        style={{ color: item.color || '#7C5CBF' }}
                      />
                    </div>

                    <div>
                      <p className="font-heading font-bold text-sm text-[#1A1A2E] mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= USE CASES ================= */}
          {useCases && useCases.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mb-4">{useCaseSectionTitle}</h3>

              {useCaseIntro && <p className="text-gray-600 mb-6">{useCaseIntro}</p>}

              <ul className="space-y-2">
                {useCases.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Icon
                      name="CheckCircleIcon"
                      size={15}
                      variant="solid"
                      style={{ color: stepCircleColor }}
                    />
                    <span className="text-sm text-[#4A4A6A] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* ================= SECURITY ================= */}
          {security && security.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mt-8 mb-6">{securitySectionTitle}</h3>

              {security.map((p, i) => (
                <p key={i} className="mb-4 text-gray-600">
                  {p}
                </p>
              ))}
            </>
          )}
        </div>
      </article>

      {/* ================= FAQ ================= */}
      <section className="pb-16">
        <h2 className="font-heading font-extrabold mb-8 text-2xl">{faqSectionTitle}</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item group" open={i === 0}>
              <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#1A1A2E]">
                {faq.q}
                <Icon name="ChevronDownIcon" size={16} style={{ color: '#8888A8' }} />
              </summary>

              <div className="px-5 pb-5">
                <p className="text-sm text-[#4A4A6A] leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="pb-16">
        <h2 className="font-heading font-bold mb-6 text-lg">Other Free PDF Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-3 p-4 border border-[#EEEEF5] rounded-xl"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: tool.bg }}
              >
                <Icon name={tool.icon} size={18} variant="solid" style={{ color: tool.color }} />
              </div>

              <div>
                <p className="font-heading font-bold text-sm text-[#1A1A2E]">{tool.title}</p>
                <p className="text-xs text-[#8888A8]">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
