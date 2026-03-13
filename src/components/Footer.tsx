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

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/LoveUpdf',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/loveupdf/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/LoveUpdf/61579682636933/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/user/loveupdf/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485.492.492 1.288.492 1.78 0s.492-1.288 0-1.78C3.866 17.276 3 14.743 3 12 3 7.029 7.029 3 12 3s9 4.029 9 9c0 2.743-.866 5.276-2.295 6.705-.492.492-.492 1.288 0 1.78s1.288.492 1.78 0C22.657 18.314 24 15.314 24 12c0-6.627-5.373-12-12-12zM12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
        <path d="M14.5 12c.828 0 1.5-.672 1.5-1.5S15.328 9 14.5 9 13 9.672 13 10.5s.672 1.5 1.5 1.5zm-5 0c.828 0 1.5-.672 1.5-1.5S10.328 9 9.5 9 8 9.672 8 10.5s.672 1.5 1.5 1.5z" />
        <path d="M12 15c-1.381 0-2.5-.56-2.5-1.25s1.119-1.25 2.5-1.25 2.5.56 2.5 1.25S13.381 15 12 15z" />
        <path d="M18.5 7.5c-.828 0-1.5.672-1.5 1.5 0 .165.027.323.076.471l-1.637.818C14.887 9.593 13.504 9 12 9s-2.887.593-3.439 1.289l-1.637-.818c.049-.148.076-.306.076-.471 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5c.165 0 .323-.027.471-.076l1.637.818C7.113 11.407 7 11.694 7 12c0 2.761 2.239 5 5 5s5-2.239 5-5c0-.306-.113-.593-.284-.811l1.637-.818c.148.049.306.076.471.076.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-[#FAFAFA] border-[#EEEEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo + Title */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <Image
                src="/assets/images/app_logo.png"
                alt="LoveUPDF Icon"
                width={120}
                height={120}
                className="w-20 h-20 object-contain"
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '36px',
                  lineHeight: '1',
                  color: '#1A1A2E',
                }}
              >
                LoveU
                <span
                  style={{
                    background: 'linear-gradient(135deg, #E8445A, #FF7A8A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  PDF
                </span>
              </span>
            </div>
          </div>

          {/* Tools Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
            >
              Tools
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#E8445A]"
                  style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name={tool.icon} size={14} />
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
            >
              Company
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#E8445A]"
                  style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}
                >
                  <Icon name={link.icon} size={14} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-[#EEEEF5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs" style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}>
              © 2026 LoveUPDF. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8888A8] hover:text-[#E8445A] transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF0F2] border border-[#FFD6DB]">
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
              SSL Secured · Files Auto-Deleted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
