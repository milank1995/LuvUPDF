import Icon from '@/components/ui/AppIcon';

const benefits = [
  {
    icon: 'CurrencyDollarIcon',
    color: '#16A34A',
    bg: '#F0FDF4',
    title: 'Completely Free',
    description:
      'Every tool on LuvUPDF is 100% free. No hidden fees, no premium tiers, no credit card ever required.',
  },
  {
    icon: 'ShieldCheckIcon',
    color: '#E8445A',
    bg: '#FFF0F2',
    title: 'Bank-Grade Security',
    description:
      'All file transfers are protected with 256-bit SSL encryption. Your files are auto-deleted after processing.',
  },
  {
    icon: 'BoltIcon',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Lightning Fast',
    description:
      'Our servers process your PDFs in under 5 seconds. No waiting, no queues — instant results every time.',
  },
  {
    icon: 'UserIcon',
    color: '#7C5CBF',
    bg: '#F3EEFF',
    title: 'No Account Needed',
    description:
      'Jump straight to your task. No registration, no email verification, no profile setup — just upload and go.',
  },
  {
    icon: 'DevicePhoneMobileIcon',
    color: '#0EA5B0',
    bg: '#EDFCFD',
    title: 'Works on Any Device',
    description:
      'Fully responsive design works flawlessly on desktop, tablet, and mobile. Any browser, any OS.',
  },
  {
    icon: 'GlobeAltIcon',
    color: '#E8445A',
    bg: '#FFF0F2',
    title: 'No Software to Install',
    description:
      'Everything runs in your browser. No downloads, no updates, no disk space used on your device.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Why LuvUPDF</span>
          <h2
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Built for People Who Love PDFs
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
            We built LuvUPDF because free should mean actually free — no tricks, no upsells.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: benefit.bg }}
              >
                <Icon
                  name={benefit.icon as any}
                  size={20}
                  variant="solid"
                  style={{ color: benefit.color } as React.CSSProperties}
                />
              </div>
              <h3
                className="font-heading font-bold mb-2"
                style={{ fontSize: '16px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  color: '#4A4A6A',
                  fontSize: '13.5px',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-body)',
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
