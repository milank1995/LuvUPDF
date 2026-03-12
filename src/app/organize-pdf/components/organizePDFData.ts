import { TOOL_COLORS } from '@/constants/toolColors';

const colors = TOOL_COLORS.organize;

export const organizePDFData = {
  title: 'How to Organize PDF Pages',

  intro: [
    'Reorder, rotate, or delete pages with simple drag and drop.',
    'Client-side processing — files never leave your device. No account needed.',
  ],

  stepSectionTitle: 'Organize PDF in 4 Steps',
  stepCircleColor: colors.primary,

  steps: [
    {
      step: 1,
      title: 'Upload',
      desc: 'Select or drag your PDF. Up to 100MB. All processing stays in your browser.',
    },
    {
      step: 2,
      title: 'Arrange Pages',
      desc: 'Drag thumbnails to reorder. Use rotate icon to fix orientation.',
    },
    {
      step: 3,
      title: 'Delete Pages',
      desc: 'Remove unwanted pages with delete icon. Changes previewed instantly.',
    },
    {
      step: 4,
      title: 'Download',
      desc: 'Click organize. Your new PDF is ready. Files never leave your device.',
    },
  ],

  featureSectionTitle: 'Why Use LoveUPDF',
  featureIntro: 'Simple, private, and fast.',

  features: [
    {
      icon: 'ArrowsUpDownIcon',
      title: 'Drag & Drop',
      desc: 'Reorder pages by dragging thumbnails.',
      color: colors.primary,
      bg: colors.surface,
    },
    {
      icon: 'ArrowPathIcon',
      title: 'Rotate Pages',
      desc: 'Fix sideways pages with one click.',
      color: '#F59E0B',
      bg: '#FFFBEB',
    },
    {
      icon: 'TrashIcon',
      title: 'Delete Pages',
      desc: 'Remove unwanted pages easily.',
      color: '#EF4444',
      bg: '#FEF2F2',
    },
    {
      icon: 'ShieldCheckIcon',
      title: '100% Private',
      desc: 'Files stay in your browser. No upload.',
      color: '#16A34A',
      bg: '#F0FDF4',
    },
  ],

  useCaseSectionTitle: 'Common Uses',
  useCaseIntro: 'When you might need to organize a PDF:',

  useCases: [
    'Reorder chapters in a thesis or book',
    'Remove blank or unwanted pages',
    'Fix sideways scanned documents',
    'Rearrange slides in presentations',
    'Prepare documents for printing',
  ],

  securitySectionTitle: 'Your Privacy',
  security: [
    'Files processed in your browser — no servers, no uploads.',
    '256-bit SSL encryption for any data transfer.',
    'We never see or store your documents.',
    'Original file stays untouched on your device.',
  ],

  faqSectionTitle: 'Common Questions',

  faqs: [
    {
      q: 'Can I reorder pages by dragging?',
      a: 'Yes. Simply drag page thumbnails up or down to rearrange them.',
    },
    {
      q: 'Can I delete multiple pages at once?',
      a: 'Yes. Delete pages individually while reordering. All changes applied before download.',
    },
    {
      q: 'Will rotating pages affect quality?',
      a: 'No. Text, images, and formatting stay exactly the same.',
    },
    {
      q: 'Where are my files processed?',
      a: 'Right in your browser. Files never leave your device.',
    },
    {
      q: 'Is my original file modified?',
      a: 'No. A new organized version is created. Your original stays unchanged.',
    },
    {
      q: 'Do you keep copies of my PDF?',
      a: 'No. Files stay on your device. We have no access to your documents.',
    },
  ],
};
