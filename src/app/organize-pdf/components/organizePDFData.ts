import { TOOL_COLORS } from '@/constants/toolColors';

const colors = TOOL_COLORS.organize;

export const organizePDFData = {
  title: 'How to Organize PDF Pages Online — Complete Guide',

  intro: [
    'Organizing PDFs allows you to reorder, rotate, or delete pages easily in one place.',
    'LuvUPDF provides a simple drag-and-drop interface to manage your PDF documents instantly and securely.',
  ],

  stepSectionTitle: 'How to Organize PDF Pages: A 4-Step Guide',
  stepCircleColor: colors.primary,

  steps: [
    {
      step: 1,
      title: 'Selection & Upload',
      desc: 'Pick a PDF from your computer or drag it into the secure upload area. We support files up to 100MB for fast processing.',
    },
    {
      step: 2,
      title: 'Visual Arrangement',
      desc: 'View your pages as thumbnails. Use drag-and-drop to reorder, the rotate icon to fix orientation, or the delete icon to remove unwanted pages.',
    },
    {
      step: 3,
      title: 'Apply & Process',
      desc: 'Once you are happy with the layout, click "Organize PDF". Our system will rebuild your document with the exact sequence and rotations you chose.',
    },
    {
      step: 4,
      title: 'Secure Download',
      desc: 'Download your organized PDF instantly. For your privacy, all files are permanently deleted from our servers after 60 minutes.',
    },
  ],

  featureSectionTitle: 'Why Use LuvUPDF to Organize PDFs?',
  featureIntro: 'Professional tools for flexible page management:',

  features: [
    {
      icon: 'ArrowsUpDownIcon',
      title: 'Drag & Drop Reordering',
      desc: 'Physically move pages to change their sequence in seconds.',
      color: colors.primary,
      bg: colors.surface,
    },
    {
      icon: 'ArrowPathIcon',
      title: 'Easy Page Rotation',
      desc: 'Fix upside-down or sideways pages with a single click.',
      color: '#F59E0B',
      bg: '#FFFBEB',
    },
    {
      icon: 'TrashIcon',
      title: 'Selective Deletion',
      desc: 'Remove unnecessary pages without affecting the rest of the document.',
      color: '#EF4444',
      bg: '#FEF2F2',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Privacy First',
      desc: 'All processing is secure and files are deleted from our servers after 1 hour.',
      color: '#16A34A',
      bg: '#F0FDF4',
    },
  ],

  useCaseSectionTitle: 'Common Use Cases',
  useCaseIntro: 'Organizing PDFs is essential for various professional and personal needs:',

  useCases: [
    'Academic Papers: Reorder chapters, rotate charts, or remove draft pages from complex thesis documents.',
    'Business Reports: Organize financial statements, fix landscape spreadsheets orientation, and prune appendices.',
    'Legal & Compliance: Manage court filings by arranging exhibits correctly and fixing scanned affidavit orientation.',
    'Creative Portfolios: Sort projects for better visual flow and remove layout errors instantly.',
    'Personal Documents: Organize family records, rotate scanned IDs, and remove sensitive info before sharing.',
  ],

  securitySectionTitle: 'Is It Safe?',
  security: [
    'Bank-Level Security: Files are protected with 256-bit SSL encryption during the entire organization process.',
    'Absolute Privacy: We do not read, store, or share your PDFs. Processing happens in a secure, isolated environment.',
    'Automated Cleanup: All files are permanently purged from our servers exactly 60 minutes after you finish.',
    'Privacy-First Platform: LuvUPDF is built on privacy; your data remains 100% yours and is never stored.',
  ],

  faqSectionTitle: 'Frequently Asked Questions — Organize PDF',
  faqs: [
    {
      q: 'Can I change the order of pages in my PDF?',
      a: 'Yes. Simply drag and drop the page thumbnails into the exact order you want before clicking "Organize PDF".',
    },
    {
      q: 'Can I rotate specific pages while organizing?',
      a: 'Absolutely. Each page thumbnail has a rotate button that lets you turn that specific page 90 degrees at a time.',
    },
    {
      q: 'Will removing pages change the quality of my PDF?',
      a: 'No. Reordering, rotating, or deleting pages does not affect the text, images, or layout quality. Your PDF remains high-quality.',
    },
    {
      q: 'Is my original PDF modified?',
      a: 'No. Our tool creates a new organized version of your file for you to download. Your original file stays untouched on your device.',
    },
  ],
};
