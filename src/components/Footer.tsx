'use client';

import Link from 'next/link';
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

export default function Footer() {
  return (
    <footer className="border-t bg-[#FAFAFA] border-[#EEEEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo + Title */}
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
            <div className="flex items-center gap-3">
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
              <div className="flex flex-col items-center md:items-start">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    fontSize: '18px',
                    lineHeight: '1',
                    color: '#1A1A2E',
                  }}
                >
                  LuvU
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
          </div>

          {/* Tools Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
            >
              Tools
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
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
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
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
        <div className="mt-12 pt-6 border-t border-[#EEEEF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs" style={{ color: '#8888A8', fontFamily: 'var(--font-body)' }}>
            © 2026 LuvUPDF. All rights reserved.
          </p>

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
