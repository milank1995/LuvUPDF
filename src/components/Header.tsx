'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Icon from '@/components/ui/AppIcon';

import { tools, navLinks } from '@/config/tools';

// Featured tools for direct header links (top 4 by search volume)
const featuredTools = tools.filter((tool) =>
  ['/merge-pdf', '/split-pdf', '/compress-pdf', '/rotate-pdf'].includes(tool.href)
);

const moreTools = tools.filter((tool) => !featuredTools.includes(tool));

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

  // Close dropdown on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && toolsDropdownOpen) {
        setToolsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [toolsDropdownOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(26,26,46,0.08)]'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] focus-visible:ring-offset-2 rounded-lg"
            aria-label="LoveUPDF - Free Privacy-First PDF Tools"
          >
            <Image
              src="/assets/images/app_logo.png"
              alt="LoveUPDF logo"
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

          {/* Desktop Nav - With Direct Tool Links */}
          <div className="hidden md:flex items-center gap-1">
            {/* Direct Tool Links - SEO Gold */}
            {featuredTools.map((tool) => {
              const isActive = pathname === tool.href;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-[#FFF0F2] text-[#E8445A] font-semibold'
                      : 'text-[#4A4A6A] hover:text-[#1A1A2E] hover:bg-[#F8F8FC]'
                  }`}
                  style={{
                    fontFamily: 'var(--font-body)',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tool.label}
                </Link>
              );
            })}

            {/* More Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] focus-visible:ring-offset-2`}
                style={{
                  color: '#4A4A6A',
                  fontFamily: 'var(--font-body)',
                }}
                aria-expanded={toolsDropdownOpen}
                aria-haspopup="true"
                aria-label="More PDF tools"
              >
                More Tools
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu - Remaining Tools */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[280px] pt-2 transition-all duration-200 ${
                  toolsDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
                role="menu"
                aria-label="More PDF tools menu"
              >
                <div className="bg-white rounded-2xl shadow-[0_10px_50px_rgba(26,26,46,0.15)] border border-[#EEEEF5] overflow-hidden p-2">
                  {moreTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group/item flex items-center gap-3 px-4 py-3 rounded-xl text-[13.5px] font-semibold hover:text-[#E8445A] hover:bg-[#FFF0F2] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                      style={{
                        color: '#4A4A6A',
                        fontFamily: 'var(--font-body)',
                      }}
                      role="menuitem"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover/item:scale-110"
                        style={{ background: `${tool.color}10` }}
                        aria-hidden="true"
                      >
                        <Icon name={tool.icon as any} size={18} style={{ color: tool.color }} />
                      </div>
                      <span>{tool.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {navLinks?.map((link) => {
              const isActive = pathname === link?.href;
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-[#FFF0F2] text-[#E8445A] font-semibold'
                      : 'text-[#4A4A6A] hover:text-[#1A1A2E] hover:bg-[#F8F8FC]'
                  }`}
                  style={{
                    fontFamily: 'var(--font-body)',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link?.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] focus-visible:ring-offset-2"
            style={{ color: '#1A1A2E' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: 'white', paddingTop: '72px' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav
            className="flex flex-col px-4 py-6 gap-2 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            {/* Mobile Direct Tool Links */}
            <div className="flex flex-col gap-1 mb-2">
              <p
                className="px-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: '#8888A8' }}
              >
                Popular Tools
              </p>
              {featuredTools.map((tool) => {
                const isActive = pathname === tool.href;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                    style={{
                      color: isActive ? '#E8445A' : '#1A1A2E',
                      background: isActive ? '#FFF0F2' : '#F8F8FC',
                      fontFamily: 'var(--font-body)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon
                      name={tool.icon as any}
                      size={18}
                      style={{ color: tool.color }}
                      aria-hidden="true"
                    />
                    <span>{tool.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile More Tools Toggle - UPDATED to match desktop */}
            <div className="flex flex-col gap-1 mt-2">
              <button
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all bg-[#F8F8FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                style={{
                  color: '#1A1A2E',
                  fontFamily: 'var(--font-body)',
                }}
                aria-expanded={mobileToolsOpen}
                aria-controls="mobile-tools-menu"
              >
                <span>More Tools</span>
                <Icon
                  name="ChevronDownIcon"
                  size={20}
                  className={`transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {mobileToolsOpen && (
                <div
                  id="mobile-tools-menu"
                  className="flex flex-col gap-1 pl-2 mt-1 border-l-2 border-[#EEEEF5] ml-6"
                  role="menu"
                  aria-label="More PDF tools menu"
                >
                  {moreTools.map((tool) => {
                    const isActive = pathname === tool.href;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                        style={{
                          color: isActive ? '#E8445A' : '#4A4A6A',
                          background: isActive ? '#FFF0F2' : 'transparent',
                          fontFamily: 'var(--font-body)',
                        }}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon
                          name={tool.icon as any}
                          size={18}
                          style={{ color: tool.color }}
                          aria-hidden="true"
                        />
                        <span>{tool.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            <div className="flex flex-col gap-1 mt-4 pt-4 border-t border-[#EEEEF5]">
              {navLinks?.map((link) => {
                const isActive = pathname === link?.href;
                return (
                  <Link
                    key={link?.href}
                    href={link?.href}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                    style={{
                      color: isActive ? '#E8445A' : '#1A1A2E',
                      background: isActive ? '#FFF0F2' : '#F8F8FC',
                      fontFamily: 'var(--font-body)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link?.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Privacy badge for mobile menu */}
          <div className="px-4 py-4 mt-auto border-t border-[#EEEEF5]">
            <p className="text-xs text-center" style={{ color: '#8888A8' }}>
              <span className="font-medium" style={{ color: '#4A4A6A' }}>
                🔒 Privacy first:
              </span>{' '}
              No storage, no account, 100% free
            </p>
          </div>
        </div>
      )}
    </>
  );
}
