'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Merge PDF', href: '/merge-pdf' },
  { label: 'Lock PDF', href: '/lock-pdf' },
  { label: 'All Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(26,26,46,0.08)]'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="LuvUPDF Home"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #E8445A 0%, #FF7A8A 100%)' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M14 2V8H20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13H15M9 17H13"
                  stroke="#E8445A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              className="font-heading font-800 text-lg tracking-tight"
              style={{ color: '#1A1A2E', fontWeight: 800 }}
            >
              LuvU<span style={{ color: '#E8445A' }}>PDF</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-brand-mid hover:text-brand-dark hover:bg-brand-surface'
                  }`}
                  style={{
                    color: isActive ? '#E8445A' : '#4A4A6A',
                    background: isActive ? '#FFF0F2' : undefined,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {link?.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA removed for a cleaner header */}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#1A1A2E' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </nav>
      </header>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: 'white', paddingTop: '72px' }}
        >
          <nav className="flex flex-col px-4 py-6 gap-2">
            {navLinks?.map((link) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all"
                  style={{
                    color: isActive ? '#E8445A' : '#1A1A2E',
                    background: isActive ? '#FFF0F2' : '#F8F8FC',
                    fontFamily: 'var(--font-body)',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                  }}
                >
                  {link?.label}
                  {isActive && (
                    <span
                      className="ml-auto w-2 h-2 rounded-full"
                      style={{ background: '#E8445A' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          {/* Mobile CTA removed for a simpler drawer */}
        </div>
      )}
    </>
  );
}
