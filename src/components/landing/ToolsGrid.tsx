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
    description:
      'Combine multiple PDFs into one file. 100% private. all processing happens in your browser.',
    badge: 'Popular',
    badgeBg: '#FFF0F2',
    badgeColor: '#E8445A',
    privacyNote: 'Client-side · No upload',
  },
  {
    id: 'split-pdf',
    href: '/split-pdf',
    icon: 'ScissorsIcon',
    color: '#3B82F6',
    bg: '#EFF6FF',
    title: 'Split PDF',
    description:
      'Extract pages or separate a PDF into multiple files. Your file never leaves your device.',
    badge: null,
    badgeBg: '#F1F5F9',
    badgeColor: '#64748B',
    privacyNote: 'Client-side · No upload',
  },
  {
    id: 'compress-pdf',
    href: '/compress-pdf',
    icon: 'ArchiveBoxIcon',
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Compress PDF',
    description:
      'Reduce file size while maintaining quality. Secure server processing. files deleted instantly.',
    badge: 'Fast',
    badgeBg: '#ECFDF5',
    badgeColor: '#10B981',
    privacyNote: 'Server-side · Auto-deleted',
  },
  {
    id: 'rotate-pdf',
    href: '/rotate-pdf',
    icon: 'ArrowPathIcon',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Rotate PDF',
    description: 'Fix page orientation permanently. All processing done locally in your browser.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    privacyNote: 'Client-side · No upload',
  },
  {
    id: 'lock-pdf',
    href: '/lock-pdf',
    icon: 'LockClosedIcon',
    color: '#7C5CBF',
    bg: '#F3EEFF',
    title: 'Lock PDF',
    description: 'Add password protection to your PDF. Secure encryption. no copies stored.',
    badge: 'Secure',
    badgeBg: '#F3EEFF',
    badgeColor: '#7C5CBF',
    privacyNote: 'Server-side · Auto-deleted',
  },
  {
    id: 'unlock-pdf',
    href: '/unlock-pdf',
    icon: 'LockOpenIcon',
    color: '#0EA5B0',
    bg: '#EDFCFD',
    title: 'Unlock PDF',
    description: 'Remove password from protected PDFs. Temporary processing. file wiped after use.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    privacyNote: 'Server-side · Auto-deleted',
  },
  {
    id: 'organize-pdf',
    href: '/organize-pdf',
    icon: 'Squares2X2Icon',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Organize PDF',
    description:
      'Reorder, add, or delete pages with drag & drop. Everything stays in your browser.',
    badge: 'New',
    badgeBg: '#F5F3FF',
    badgeColor: '#8B5CF6',
    privacyNote: 'Client-side · No upload',
  },
  {
    id: 'remove-pages',
    href: '/remove-pages',
    icon: 'TrashIcon',
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Remove PDF Pages',
    description: 'Delete unwanted pages instantly. 100% private. no server interaction.',
    badge: null,
    badgeBg: '',
    badgeColor: '',
    privacyNote: 'Client-side · No upload',
  },
];

export default function ToolsGrid() {
  return (
    <section
      id="tools"
      className="py-20 px-4 sm:px-6"
      style={{ background: '#FAFAFA' }}
      aria-labelledby="tools-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with semantic HTML */}
        <div className="text-center mb-12">
          <p
            className="section-label block mb-3"
            style={{ color: '#E8445A', fontWeight: 600, letterSpacing: '0.05em' }}
          >
            FREE PDF TOOLS
          </p>
          <h2
            id="tools-heading"
            className="font-heading font-extrabold mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            Privacy-First PDF Tools
          </h2>
          <p
            style={{
              color: '#4A4A6A',
              fontSize: '17px',
              maxWidth: '560px',
              margin: '0 auto',
              fontFamily: 'var(--font-body)',
            }}
          >
            Every tool respects your privacy. <strong>Client-side processing when possible</strong>,
            server-side with <strong>instant auto-deletion</strong> when needed. No login, no
            storage, no tracking.
          </p>
        </div>

        {/* Tools Grid with semantic HTML */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="tool-card group flex flex-col p-6"
              style={{
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                background: 'white',
                borderRadius: '20px',
                border: '1.5px solid #EEEEF5',
                transition: 'all 0.2s ease',
              }}
              aria-label={`${tool.title} - ${tool.description}`}
            >
              {/* Privacy indicator - always visible */}
              <div
                className="absolute top-3 right-3 text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: tool.privacyNote.includes('Client') ? '#E8F5E9' : '#FFF3E0',
                  color: tool.privacyNote.includes('Client') ? '#2E7D32' : '#B85C00',
                  border: `1px solid ${tool.privacyNote.includes('Client') ? '#A5D6A7' : '#FFE0B2'}`,
                  fontFamily: 'var(--font-heading)',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                {tool.privacyNote}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: tool.bg }}
                aria-hidden="true"
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
                style={{ fontSize: '18px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
              >
                {tool.title}
              </h3>
              <p
                className="flex-1 leading-relaxed"
                style={{ color: '#4A4A6A', fontSize: '13.5px', fontFamily: 'var(--font-body)' }}
              >
                {tool.description}
              </p>

              {/* Arrow link */}
              <div
                className="mt-4 flex items-center gap-1.5 font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: tool.color, fontSize: '13px', fontFamily: 'var(--font-heading)' }}
                aria-hidden="true"
              >
                Use Tool
                <Icon name="ArrowRightIcon" size={14} />
              </div>

              {/* Hidden descriptive text for screen readers */}
              <span className="sr-only">
                {tool.title} tool. {tool.description} {tool.privacyNote}
              </span>
            </Link>
          ))}
        </div>

        {/* Trust badge */}
        <div
          className="mt-12 text-center"
          style={{
            padding: '16px 24px',
            background: 'white',
            borderRadius: '60px',
            border: '1.5px solid #EEEEF5',
            maxWidth: '600px',
            margin: '40px auto 0',
          }}
        >
          <p style={{ color: '#4A4A6A', fontSize: '14px', fontFamily: 'var(--font-body)' }}>
            <span style={{ color: '#E8445A', fontWeight: 700 }}>🔒 Privacy Promise:</span> We never
            store your files. Client-side tools = no server upload. Server tools = instant deletion.
            <span className="block mt-1 text-[13px]" style={{ color: '#8888A8' }}>
              256-bit SSL encryption · No logs · No tracking
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
