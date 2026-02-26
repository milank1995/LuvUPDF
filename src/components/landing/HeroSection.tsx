'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 px-4 sm:px-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,68,90,0.09) 0%, transparent 70%), linear-gradient(180deg, #FFFFFF 0%, #FFF8F9 100%)',
      }}
      aria-label="Hero"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-[8%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,68,90,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,122,138,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E8445A' }} />
          <span
            style={{
              color: '#E8445A',
              fontSize: '12px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            100% Free · No Sign-up Required
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-extrabold leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(40px, 7vw, 80px)', color: '#1A1A2E', lineHeight: 1.05 }}
        >
          Free Online PDF Tools{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #E8445A 0%, #FF7A8A 60%, #E8445A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            You'll Love
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            color: '#4A4A6A',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            maxWidth: '560px',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
          }}
        >
          Merge, lock, unlock, and rotate PDF files instantly. Simple, secure, and completely free —
          right in your browser.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Link
            href="/merge-pdf"
            className="btn-primary flex items-center gap-2 text-base px-8 py-3.5"
            style={{
              background: '#E8445A',
              color: 'white',
              borderRadius: '100px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 24px rgba(232,68,90,0.28)',
              transition: 'all 0.2s ease',
            }}
          >
            <Icon name="DocumentPlusIcon" size={18} variant="solid" />
            Start Merging PDF
          </Link>
          <Link
            href="#tools"
            className="btn-secondary flex items-center gap-2 text-base"
            style={{
              background: 'white',
              color: '#4A4A6A',
              border: '1.5px solid #EEEEF5',
              borderRadius: '100px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 28px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            Explore All Tools
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Floating Stats Cards */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: 'UserGroupIcon', value: '2M+', label: 'Files Processed' },
            { icon: 'ShieldCheckIcon', value: '256-bit', label: 'SSL Encryption' },
            { icon: 'BoltIcon', value: '<5s', label: 'Average Process Time' },
            { icon: 'HeartIcon', value: 'Always', label: 'Free to Use' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
              style={{
                background: 'white',
                border: '1.5px solid #EEEEF5',
                boxShadow: '0 2px 12px rgba(26,26,46,0.05)',
                animation: `float-gentle ${3.5 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`,
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
              >
                <Icon
                  name={stat.icon as any}
                  size={14}
                  variant="solid"
                  className=""
                  style={{ color: '#E8445A' } as React.CSSProperties}
                />
              </div>
              <div className="text-left">
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: '#1A1A2E',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    color: '#8888A8',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
