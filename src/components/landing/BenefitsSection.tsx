import Icon from '@/components/ui/AppIcon';

const benefits = [
  {
    icon: 'CurrencyDollarIcon',
    color: '#16A34A',
    bg: '#F0FDF4',
    title: '100% Free',
    description: 'No hidden fees. No premium tiers. All tools free forever.',
  },
  {
    icon: 'ShieldCheckIcon',
    color: '#E8445A',
    bg: '#FFF0F2',
    title: 'Privacy First',
    description: '256-bit SSL encryption. Files auto-deleted. Zero storage.',
  },
  {
    icon: 'BoltIcon',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Lightning Fast',
    description: 'Process in under 5 seconds. No waiting. Instant results.',
  },
  {
    icon: 'UserIcon',
    color: '#7C5CBF',
    bg: '#F3EEFF',
    title: 'No Account',
    description: 'No login. No email. No tracking. Just private tools.',
  },
  {
    icon: 'DevicePhoneMobileIcon',
    color: '#0EA5B0',
    bg: '#EDFCFD',
    title: 'Works Everywhere',
    description: 'Desktop, tablet, mobile. Any browser, any device.',
  },
  {
    icon: 'GlobeAltIcon',
    color: '#E8445A',
    bg: '#FFF0F2',
    title: 'No Installation',
    description: 'Runs in your browser. No downloads. No updates.',
  },
];

export default function BenefitsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ background: '#FAFAFA' }}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: '#E8445A', letterSpacing: '0.05em' }}
          >
            WHY LOVEUPDF
          </p>
          <h2
            id="benefits-heading"
            className="font-heading font-extrabold mb-3"
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              color: '#1A1A2E',
            }}
          >
            Private by Design
          </h2>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '16px',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Free PDF tools that respect your privacy. No storage. No tracking.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-5 rounded-xl"
              style={{
                background: 'white',
                border: '1.5px solid #EEEEF5',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: benefit.bg }}
              >
                <Icon
                  name={benefit.icon as any}
                  size={18}
                  variant="solid"
                  style={{ color: benefit.color } as React.CSSProperties}
                />
              </div>
              <h3
                className="font-heading font-bold mb-1.5"
                style={{ fontSize: '16px', color: '#1A1A2E' }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  color: '#4A4A6A',
                  fontSize: '13px',
                  lineHeight: 1.5,
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