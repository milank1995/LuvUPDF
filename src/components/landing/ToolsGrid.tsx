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
    description: 'Merge multiple PDF files into one single document easily and securely.',
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
    description: 'Separate one PDF page or whole set for easy conversion into independent PDF files.',
    badge: null,
    badgeBg: '#F1F5F9',
    badgeColor: '#64748B',
  },
  {
    id: 'compress-pdf',
    href: '/compress-pdf',
    icon: 'ArchiveBoxIcon',
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Compress PDF',
    description: 'Reduce the size of your PDF while optimizing for maximal PDF quality.',
    badge: 'Fast',
    badgeBg: '#ECFDF5',
    badgeColor: '#10B981',
  },
  {
    id: 'rotate-pdf',
    href: '/rotate-pdf',
    icon: 'ArrowPathIcon',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Rotate PDF',
    description: 'Rotate your PDF pages to the exact orientation you need.',
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
    description: 'Protect PDF files with a password and encrypt them for secure sharing.',
    badge: 'Secure',
    badgeBg: '#F3EEFF',
    badgeColor: '#7C5CBF',
  },
  {
    id: 'unlock-pdf',
    href: '/unlock-pdf',
    icon: 'LockOpenIcon',
    color: '#0EA5B0',
    bg: '#EDFCFD',
    title: 'Unlock PDF',
    description: 'Remove PDF password security, so you can use your PDFs as you want.',
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
    description: 'Sort, add and delete PDF pages. Drag and drop to reorder pages as you like.',
    badge: 'New',
    badgeBg: '#F5F3FF',
    badgeColor: '#8B5CF6',
  },
  {
    id: 'remove-pages',
    href: '/remove-pages',
    icon: 'TrashIcon',
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Remove PDF Pages',
    description: 'Delete unwanted pages from your PDF document in a few clicks.',
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
            Secure PDF Tools for Everyone
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
            The world's most secure PDF tools. No storage, no login, and 100% free forever.
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

      </div>
    </section>
  );
}
