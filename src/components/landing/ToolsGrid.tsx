import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const tools = [
  {
    id: 'merge-pdf',
    href: '/merge-pdf',
    icon: 'DocumentPlusIcon',
    color: '#E8445A',
    bg: '#FFF0F2',
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one seamless document in seconds.',
    badge: 'Popular',
    badgeBg: '#FFF0F2',
    badgeColor: '#E8445A',
  },
  {
    id: 'split-pdf',
    href: '/split-pdf',
    icon: 'ScissorsIcon',
    color: '#3B82F6',
    bg: '#EFF6FF',
    title: 'Split PDF',
    description: 'Extract pages or split one PDF into multiple files instantly.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'remove-pages',
    href: '/remove-pages',
    icon: 'TrashIcon',
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Remove Pages',
    description: 'Delete unwanted or blank pages from your PDF quickly.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'organize-pdf',
    href: '/organize-pdf',
    icon: 'Squares2X2Icon',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Organize PDF',
    description: 'Reorder, rotate, and manage PDF pages with drag and drop.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'compress-pdf',
    href: '/compress-pdf',
    icon: 'ArchiveBoxIcon',
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Compress PDF',
    description: 'Reduce PDF file size without losing quality.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'rotate-pdf',
    href: '/rotate-pdf',
    icon: 'ArrowPathIcon',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Rotate PDF',
    description: 'Rotate PDF pages to the correct orientation easily.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'lock-pdf',
    href: '/lock-pdf',
    icon: 'LockClosedIcon',
    color: '#7C5CBF',
    bg: '#F3EEFF',
    title: 'Lock PDF',
    description: 'Protect your PDF with a secure password.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
  {
    id: 'unlock-pdf',
    href: '/unlock-pdf',
    icon: 'LockOpenIcon',
    color: '#0EA5B0',
    bg: '#EDFCFD',
    title: 'Unlock PDF',
    description: 'Remove password protection from PDF files instantly.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
  },
];

export default function ToolsGrid() {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-3">PDF Tools</span>
          <h2
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Everything You Need for PDFs
          </h2>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '17px',
              maxWidth: '480px',
              margin: '0 auto',
              fontFamily: 'var(--font-body)',
            }}
          >
            Professional-grade PDF tools, completely free. No watermarks, no account, no limits.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="tool-card group flex flex-col p-6"
              style={{ textDecoration: 'none', position: 'relative', overflow: 'hidden' }}
            >
              {/* Badge */}
              {tool.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: tool.badgeBg,
                    color: tool.badgeColor,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: `1px solid ${tool.badgeColor}22`,
                  }}
                >
                  {tool.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: tool.bg }}
              >
                <Icon
                  name={tool.icon as any}
                  size={22}
                  variant="solid"
                  style={{ color: tool.color } as React.CSSProperties}
                />
              </div>

              {/* Content */}
              <h3
                className="font-heading font-bold mb-2"
                style={{ fontSize: '17px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
              >
                {tool.title}
              </h3>
              <p
                className="flex-1 leading-relaxed"
                style={{ color: '#4A4A6A', fontSize: '13.5px', fontFamily: 'var(--font-body)' }}
              >
                {tool.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 flex items-center gap-1.5 font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: tool.color, fontSize: '13px', fontFamily: 'var(--font-heading)' }}
              >
                Use Tool
                <Icon name="ArrowRightIcon" size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* More tools teaser */}
        <div
          className="mt-8 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'white', border: '1.5px dashed #FFD6DB' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: '#FFF0F2' }}
            >
              <Icon
                name="SparklesIcon"
                size={18}
                variant="solid"
                style={{ color: '#E8445A' } as React.CSSProperties}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#1A1A2E',
                }}
              >
                More tools coming soon
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8888A8' }}>
                Compress PDF, PDF to Word, OCR, AI tools & more
              </p>
            </div>
          </div>
          <button
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{
              background: '#FFF0F2',
              color: '#E8445A',
              border: '1.5px solid #FFD6DB',
              fontFamily: 'var(--font-heading)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Get Notified
          </button>
        </div>
      </div>
    </section>
  );
}
