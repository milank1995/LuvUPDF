import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'ArrowUpTrayIcon',
    title: 'Upload Your File',
    description: 'Drag & drop or click to upload your PDF. We support files up to 100MB.',
    color: '#E8445A',
    bg: '#FFF0F2',
  },
  {
    number: '02',
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Choose Your Action',
    description: 'Select your tool — merge, lock, unlock, or rotate. Configure options as needed.',
    color: '#7C5CBF',
    bg: '#F3EEFF',
  },
  {
    number: '03',
    icon: 'ArrowDownTrayIcon',
    title: 'Download Instantly',
    description: 'Your processed PDF is ready in seconds. Download and use it right away.',
    color: '#0EA5B0',
    bg: '#EDFCFD',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-3">How It Works</span>
          <h2
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Process Any PDF in 3 Simple Steps
          </h2>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '16px',
              maxWidth: '440px',
              margin: '0 auto',
              fontFamily: 'var(--font-body)',
            }}
          >
            No account needed. No software to install. Just upload, process, and download.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            style={{
              background: 'linear-gradient(90deg, #FFD6DB 0%, #FFD6DB 100%)',
              borderTop: '2px dashed #FFD6DB',
            }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Number + Icon */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: step.bg, border: `2px solid ${step.color}22` }}
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
                >
                  {i + 1}
                </span>
              </div>

              <h3
                className="font-heading font-bold mb-2.5"
                style={{ fontSize: '17px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: '#4A4A6A',
                  fontSize: '14px',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-body)',
                  maxWidth: '220px',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-5 rounded-2xl"
          style={{ background: '#F8F8FC', border: '1.5px solid #EEEEF5' }}
        >
          {[
            { icon: 'ShieldCheckIcon', text: 'Files encrypted with SSL' },
            { icon: 'ClockIcon', text: 'Auto-deleted after 1 hour' },
            { icon: 'EyeSlashIcon', text: 'We never read your files' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <Icon
                name={item.icon as any}
                size={16}
                variant="solid"
                style={{ color: '#E8445A' } as React.CSSProperties}
              />
              <span
                style={{
                  color: '#4A4A6A',
                  fontSize: '13.5px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
