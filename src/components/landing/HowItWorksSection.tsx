import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'ArrowUpTrayIcon',
    title: 'Upload Your File',
    description:
      'Drag & drop or select your PDF. For client-side tools, nothing leaves your device.',
    color: '#E8445A',
    bg: '#FFF0F2',
  },
  {
    number: '02',
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Choose Your Action',
    description:
      'Select merge, split, compress, lock, unlock, rotate, organize, or remove pages. Configure your options.',
    color: '#7C5CBF',
    bg: '#F3EEFF',
  },
  {
    number: '03',
    icon: 'ArrowDownTrayIcon',
    title: 'Download Instantly',
    description:
      'Your processed PDF is ready in seconds. Files are permanently deleted from our servers immediately after download.',
    color: '#0EA5B0',
    bg: '#EDFCFD',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ background: 'white' }}
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header with semantic HTML */}
        <div className="text-center mb-14">
          <p
            className="block mb-3"
            style={{
              color: '#E8445A',
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontSize: '13px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-heading)',
            }}
          >
            How It Works
          </p>
          <h2
            id="how-it-works-heading"
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Secure PDF Processing in 3 Simple Steps
          </h2>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '17px',
              maxWidth: '560px',
              margin: '0 auto',
              fontFamily: 'var(--font-body)',
            }}
          >
            <strong className="font-semibold" style={{ color: '#1A1A2E' }}>
              No account. No software. No storage.
            </strong>{' '}
            Just secure PDF processing that respects your data.
          </p>
        </div>

        {/* Steps with enhanced accessibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) - decorative only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            style={{
              background: 'linear-gradient(90deg, #FFD6DB 0%, #FFD6DB 100%)',
              borderTop: '2px dashed #FFD6DB',
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              {/* Step number (schema) */}
              <meta itemProp="position" content={String(i + 1)} />
              <meta itemProp="name" content={step.title} />

              {/* Number + Icon */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: step.bg, border: `2px solid ${step.color}22` }}
                  aria-hidden="true"
                >
                  <Icon
                    name={step.icon as any}
                    size={26}
                    variant="solid"
                    style={{ color: step.color } as React.CSSProperties}
                  />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black z-20"
                  style={{
                    background: step.color,
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '10px',
                  }}
                  aria-label={`Step ${i + 1}`}
                >
                  {i + 1}
                </span>
              </div>

              {/* Content with schema markup */}
              <h3
                className="font-heading font-bold mb-2.5"
                style={{ fontSize: '18px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
                itemProp="headline"
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: '#4A4A6A',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-body)',
                  maxWidth: '240px',
                }}
                itemProp="text"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Security Note with privacy emphasis */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl"
          style={{
            background: '#F8F8FC',
            border: '1.5px solid #EEEEF5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
          }}
          role="complementary"
          aria-label="Privacy guarantees"
        >
          {[
            {
              icon: 'LockClosedIcon',
              text: '256-bit SSL encryption',
              desc: 'Bank-grade security for all transfers',
            },
            { icon: 'EyeSlashIcon', text: 'Zero data storage', desc: 'Files never saved to disk' },
            {
              icon: 'TrashIcon',
              text: 'Instant auto-deletion',
              desc: 'Permanently removed after processing',
            },
            {
              icon: 'ShieldCheckIcon',
              text: 'Client-side processing',
              desc: 'Files stay on your device when possible',
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-2.5 px-3 py-2"
              style={{ minWidth: '180px' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
                aria-hidden="true"
              >
                <Icon
                  name={item.icon as any}
                  size={16}
                  variant="solid"
                  style={{ color: '#E8445A' } as React.CSSProperties}
                />
              </div>
              <div className="text-left">
                <div
                  style={{
                    color: '#1A1A2E',
                    fontSize: '14px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {item.text}
                </div>
                <div
                  style={{
                    color: '#8888A8',
                    fontSize: '11px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden descriptive text for search engines */}
        <div className="sr-only">
          <p>
            LoveUPDF offers 8 free PDF tools: merge PDF, split PDF, compress PDF, rotate PDF, lock
            PDF with password, unlock PDF, organize PDF pages, and remove PDF pages. All tools
            prioritize your privacy with client-side browser processing whenever possible. For
            features that require server processing (compress, lock, unlock), files are encrypted
            with 256-bit SSL and automatically deleted immediately after download.
          </p>
        </div>
      </div>
    </section>
  );
}
