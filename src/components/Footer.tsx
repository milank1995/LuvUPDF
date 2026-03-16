'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const tools = [
  { id: 'merge-pdf', href: '/merge-pdf', icon: 'DocumentPlusIcon', title: 'Merge PDF' },
  { id: 'split-pdf', href: '/split-pdf', icon: 'ScissorsIcon', title: 'Split PDF' },
  { id: 'remove-pages', href: '/remove-pages', icon: 'TrashIcon', title: 'Remove Pages' },
  { id: 'organize-pdf', href: '/organize-pdf', icon: 'Squares2X2Icon', title: 'Organize PDF' },
  { id: 'compress-pdf', href: '/compress-pdf', icon: 'ArchiveBoxIcon', title: 'Compress PDF' },
  { id: 'rotate-pdf', href: '/rotate-pdf', icon: 'ArrowPathIcon', title: 'Rotate PDF' },
  { id: 'lock-pdf', href: '/lock-pdf', icon: 'LockClosedIcon', title: 'Lock PDF' },
  { id: 'unlock-pdf', href: '/unlock-pdf', icon: 'LockOpenIcon', title: 'Unlock PDF' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy', icon: 'ShieldCheckIcon' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions', icon: 'DocumentTextIcon' },
  { label: 'Disclaimer', href: '/disclaimer', icon: 'ExclamationTriangleIcon' },
  { label: 'DMCA Policy', href: '/dmca-policy', icon: 'NoSymbolIcon' },
  { label: 'Cookie Policy', href: '/cookie-policy', icon: 'CookieIcon' },
  { label: 'About Us', href: '/about', icon: 'UserGroupIcon' },
  { label: 'Contact Us', href: '/contact', icon: 'EnvelopeIcon' },
];

// Social media links with EXACT brand SVGs and accessibility titles
const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/LoveUpdf',
    label: 'Follow us on X (Twitter) for LoveUPDF updates and PDF tips',
    title: 'X (Twitter)',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/loveupdf/',
    label: 'Follow LoveUPDF on LinkedIn for professional PDF tool updates',
    title: 'LinkedIn',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/LoveUpdf/61579682636933/',
    label: 'Follow LoveUPDF on Facebook for news and PDF tool announcements',
    title: 'Facebook',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/user/loveupdf/',
    label: 'Join LoveUPDF on Reddit for community discussions about PDF tools',
    title: 'Reddit',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.5 8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-11 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9.5 7c0 2.5-2 4-4 4s-4-1.5-4-4c0-1 .5-2 1.5-2.5.5-.5 1.5-.5 2.5-.5s2 0 2.5.5c1 .5 1.5 1.5 1.5 2.5zm-2-1c0-.5-.5-1-1-1s-1 .5-1 1 .5 1 1 1 1-.5 1-1z" />
        <circle cx="8.5" cy="10.5" r="1.5" fill="white" />
        <circle cx="15.5" cy="10.5" r="1.5" fill="white" />
        <path
          d="M12 14c-1.8 0-3.4 1-4.3 2.5l1.5 1c.7-1 2-1.5 3.3-1.5s2.6.5 3.3 1.5l1.5-1c-.9-1.5-2.5-2.5-4.3-2.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/loveupdf/',
    label: 'Follow LoveUPDF on Instagram for visual PDF tips and behind-the-scenes',
    title: 'Instagram',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t bg-[#FAFAFA] border-[#EEEEF5]"
      role="contentinfo"
      aria-label="Footer - LoveUPDF website footer with tools, company information and social media links"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo + Brand Section - 4 columns */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] rounded-lg"
              aria-label="LoveUPDF - Go to homepage - Free privacy-first PDF tools"
            >
              <Image
                src="/assets/images/app_logo.png"
                alt="LoveUPDF logo - Free online PDF tools"
                width={120}
                height={120}
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105"
                priority={false}
                loading="lazy"
              />
              <span
                className="font-heading font-extrabold text-3xl md:text-4xl"
                style={{
                  color: '#1A1A2E',
                  lineHeight: '1',
                }}
              >
                LoveU
                <span
                  style={{
                    background: 'linear-gradient(135deg, #E8445A, #FF7A8A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  PDF
                </span>
              </span>
            </Link>

            {/* Brand Description - Good for SEO */}
            <p className="text-sm max-w-xs text-center md:text-left" style={{ color: '#8888A8' }}>
              Privacy-first PDF tools. No storage, no tracking, 100% free.
            </p>

            {/* SSL Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF0F2] border border-[#FFD6DB] mt-2">
              <Icon name="LockClosedIcon" size={12} variant="solid" style={{ color: '#E8445A' }} />
              <span
                style={{
                  color: '#E8445A',
                  fontSize: '11px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                256-bit SSL · Auto-Deleted
              </span>
            </div>
          </div>

          {/* Tools Section - 4 columns */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
            >
              PDF Tools
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="flex items-center gap-2 text-sm transition-all hover:text-[#E8445A] hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] rounded-lg px-1"
                  style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}
                  aria-label={`${tool.title} - free PDF tool, no account needed, privacy-first`}
                >
                  <Icon name={tool.icon} size={14} aria-hidden="true" />
                  <span>{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section - 4 columns */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
            >
              Company
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm transition-all hover:text-[#E8445A] hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A] rounded-lg px-1"
                  style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}
                  aria-label={`${link.label} - LoveUPDF legal information`}
                >
                  <Icon name={link.icon} size={14} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-[#EEEEF5] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs" style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}>
              © {currentYear} LoveUPDF. All rights reserved.
            </p>

            {/* Social Media Links - Exact Brand SVGs with descriptive labels */}
            <ul className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F8FC] hover:bg-[#FFF0F2] text-[#8888A8] hover:text-[#E8445A] transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8445A]"
                    aria-label={social.label}
                    title={social.title}
                  >
                    {social.svg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs flex items-center gap-1" style={{ color: '#8888A8' }}>
                <Icon name="ShieldCheckIcon" size={12} style={{ color: '#E8445A' }} />
                Privacy First
              </span>
              <span className="text-xs flex items-center gap-1" style={{ color: '#8888A8' }}>
                <Icon name="TrashIcon" size={12} style={{ color: '#E8445A' }} />
                Zero Storage
              </span>
              <span className="text-xs flex items-center gap-1" style={{ color: '#8888A8' }}>
                <Icon name="CurrencyDollarIcon" size={12} style={{ color: '#E8445A' }} />
                100% Free
              </span>
            </div>
          </div>
        </div>

        {/* Hidden SEO Content - Comprehensive for search engines */}
        <div className="sr-only">
          <p>
            LoveUPDF offers 8 free privacy-first PDF tools: Merge PDF, Split PDF, Compress PDF,
            Rotate PDF, Lock PDF, Unlock PDF, Organize PDF Pages, and Remove PDF Pages. All tools
            are 100% free with no account required. Zero file storage policy with 256-bit SSL
            encryption. Follow us on social media for updates and tips.
          </p>
          <ul>
            <li>X (Twitter): https://x.com/LoveUpdf</li>
            <li>LinkedIn: https://www.linkedin.com/company/loveupdf/</li>
            <li>Facebook: https://www.facebook.com/people/LoveUpdf/61579682636933/</li>
            <li>Reddit: https://www.reddit.com/user/loveupdf/</li>
            <li>Instagram: https://www.instagram.com/loveupdf/</li>
          </ul>
          <p>
            Privacy Policy, Terms & Conditions, Disclaimer, DMCA Policy, Cookie Policy, About Us,
            Contact Us pages available.
          </p>
        </div>
      </div>
    </footer>
  );
}
