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
      aria-labelledby="hero-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-[8%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,68,90,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,122,138,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Trust badge with semantic HTML */}
        <p
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background: '#FFF0F2', border: '1.5px solid #FFD6DB' }}
          aria-label="Service highlights: 100% free, 100% secure, no login required"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#E8445A' }}
            aria-hidden="true"
          />
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
            ✓ 100% Free · ✓ 100% Secure · ✓ No Login
          </span>
        </p>

        {/* Main headline with proper heading hierarchy */}
        <h1
          id="hero-heading"
          className="font-heading font-extrabold leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(40px, 7vw, 72px)', color: '#1A1A2E', lineHeight: 1.05 }}
        >
          Free PDF Tools{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #E8445A 0%, #FF7A8A 60%, #E8445A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            You Can Trust
          </span>
        </h1>

        {/* Descriptive subheading with key benefits */}
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
          Merge, split, compress, and edit PDFs online.
          <span className="block mt-1">No uploads. No storage. 100% private.</span>
        </p>

        {/* CTAs with descriptive link text */}
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
            aria-label="Merge PDF files online free - starts immediately, no signup needed"
          >
            <Icon name="DocumentPlusIcon" size={18} variant="solid" aria-hidden="true" />
            <span>Merge PDF Files Free</span>
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
            aria-label="Browse all free PDF tools including split, compress, rotate and more"
          >
            <span>Explore All PDF Tools</span>
            <Icon name="ArrowRightIcon" size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Feature highlights with semantic HTML */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: 'ShieldCheckIcon', value: '100% Private', desc: 'Browser-only processing' },
            { icon: 'LockClosedIcon', value: '256-bit SSL', desc: 'Bank-level encryption' },
            { icon: 'TrashIcon', value: 'Auto-Deleted', desc: 'Files wiped instantly' },
            { icon: 'HeartIcon', value: 'Always Free', desc: 'No paid tiers' },
          ].map((stat, i) => (
            <div
              key={stat.value}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
              style={{
                background: 'white',
                border: '1.5px solid #EEEEF5',
                boxShadow: '0 2px 12px rgba(26,26,46,0.05)',
                animation: `float-gentle ${3.5 + i * 0.4}s ease-in-out infinite`,
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFF0F2' }}
                aria-hidden="true"
              >
                <Icon
                  name={stat.icon as any}
                  size={14}
                  variant="solid"
                  style={{ color: '#E8445A' }}
                />
              </div>
              <div className="text-left">
                <div className="font-heading font-extrabold text-[13px] text-[#1A1A2E]">
                  {stat.value}
                </div>
                <div className="font-body text-[10px] text-[#8888A8]">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden descriptive text for search engines */}
        <div className="sr-only">
          <p>
            LoveUPDF provides completely free PDF tools including: merge PDF online free, split PDF
            documents, compress PDF files, rotate PDF pages, lock PDF with password, unlock PDF
            files, organize PDF pages, and remove pages from PDF. All tools prioritize your privacy
            with client-side processing whenever possible.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
