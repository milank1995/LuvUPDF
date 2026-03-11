export interface ToolConfig {
  label: string;
  href: string;
  icon: string;
  color: string;
  description: string;
}

export const tools: ToolConfig[] = [
  {
    label: 'Merge PDF',
    href: '/merge-pdf',
    icon: 'DocumentPlusIcon',
    color: '#E8445A',
    description: 'Combine multiple PDF files into one document instantly.',
  },
  {
    label: 'Split PDF',
    href: '/split-pdf',
    icon: 'ScissorsIcon',
    color: '#3B82F6',
    description: 'Extract pages from your PDF or save each page as a separate PDF.',
  },
  {
    label: 'Compress PDF',
    href: '/compress-pdf',
    icon: 'ArchiveBoxIcon',
    color: '#10B981',
    description: 'Reduce the file size of your PDF without losing quality.',
  },
  {
    label: 'Rotate PDF',
    href: '/rotate-pdf',
    icon: 'ArrowPathIcon',
    color: '#F59E0B',
    description: 'Rotate your PDF pages to find the perfect orientation.',
  },
  {
    label: 'Lock PDF',
    href: '/lock-pdf',
    icon: 'LockClosedIcon',
    color: '#7C5CBF',
    description: 'Protect your PDF with a password and encryption.',
  },
  {
    label: 'Unlock PDF',
    href: '/unlock-pdf',
    icon: 'LockOpenIcon',
    color: '#0EA5B0',
    description: 'Remove password protection and encryption from your PDF.',
  },
  {
    label: 'Organize PDF',
    href: '/organize-pdf',
    icon: 'Squares2X2Icon',
    color: '#8B5CF6',
    description: 'Rearrange, add, or delete pages in your PDF document.',
  },
  {
    label: 'Remove Pages',
    href: '/remove-pages',
    icon: 'TrashIcon',
    color: '#EF4444',
    description: 'Delete unwanted pages from your PDF file effortlessly.',
  },
];

export const navLinks = [
  { label: 'All Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
