'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Icon from '@/components/ui/AppIcon';

import { tools, navLinks } from '@/config/tools';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileToolsOpen(false);
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
          <Link href="/" className="flex items-center group" aria-label="LoveUPDF Home">
            <Image
              src="/assets/images/app_logo.png"
              alt="LoveUPDF Icon"
              width={48}
              height={48}
              className="w-10 h-10 object-contain"
              priority
            />
            <span
              className="font-heading font-extrabold tracking-tight"
              style={{
                color: '#1A1A2E',
                fontWeight: 900,
                fontSize: '22px',
                lineHeight: '1',
              }}
            >
              LoveU<span style={{ color: '#E8445A' }}>PDF</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tools Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-brand-mid hover:text-brand-dark hover:bg-brand-surface`}
                style={{
                  color: '#4A4A6A',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Tools
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu - 2 Columns */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-2 transition-all duration-200 ${
                  toolsDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-[0_10px_50px_rgba(26,26,46,0.15)] border border-brand-surface overflow-hidden p-3 grid grid-cols-2 gap-1">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group/item flex items-center gap-3 px-4 py-3 rounded-xl text-[13.5px] font-semibold text-brand-mid hover:text-primary hover:bg-primary-light transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover/item:scale-110"
                        style={{ background: `${tool.color}10` }}
                      >
                        <Icon name={tool.icon as any} size={18} style={{ color: tool.color }} />
                      </div>
                      {tool.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
          <nav className="flex flex-col px-4 py-6 gap-2 overflow-y-auto">
            {/* Mobile Tools Dropdown */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all bg-brand-surface"
                style={{
                  color: '#1A1A2E',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                <span>Tools</span>
                <Icon
                  name="ChevronDownIcon"
                  size={20}
                  className={`transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileToolsOpen && (
                <div className="flex flex-col gap-1 pl-2 mt-1 border-l-2 border-brand-surface ml-6">
                  {tools.map((tool) => {
                    const isActive = pathname === tool.href;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all"
                        style={{
                          color: isActive ? '#E8445A' : '#4A4A6A',
                          background: isActive ? '#FFF0F2' : 'transparent',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        <Icon name={tool.icon as any} size={18} style={{ color: tool.color }} />
                        {tool.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

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
        </div>
      )}
    </>
  );
}
