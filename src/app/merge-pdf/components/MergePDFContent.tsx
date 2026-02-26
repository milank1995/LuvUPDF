import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const mergeFaqs = [
  {
    q: 'How do I merge PDF files online for free?',
    a: 'To merge PDF files online for free using LuvUPDF: 1) Visit our Merge PDF page, 2) Upload two or more PDF files by dragging them into the upload area or clicking "Select PDF Files", 3) Reorder files if needed using the up/down arrows, 4) Click "Merge PDF" button, 5) Download your merged PDF file. The entire process takes under 30 seconds and is completely free.',
  },
  {
    q: 'How many PDF files can I merge at once?',
    a: 'LuvUPDF allows you to merge up to 20 PDF files at once. Each individual file can be up to 100MB, and the total combined size should not exceed 200MB. For larger projects, you can merge in batches.',
  },
  {
    q: 'Can I change the order of pages when merging PDFs?',
    a: 'Yes! After uploading your files, you can reorder them using the up and down arrow buttons next to each file. The PDFs will be merged in the order they appear in the list, from top to bottom.',
  },
  {
    q: 'Is the merged PDF quality affected?',
    a: 'No. LuvUPDF preserves the original quality of all your PDF files during the merge process. Text, images, fonts, hyperlinks, and formatting are all maintained exactly as they were in the original documents.',
  },
  {
    q: 'Do merged PDFs retain bookmarks and hyperlinks?',
    a: 'Yes, our merge tool preserves internal hyperlinks within each document. However, cross-document bookmarks may need to be updated manually after merging, as they reference page numbers that may have shifted.',
  },
  {
    q: 'How long does it take to merge PDF files?',
    a: 'Most merges complete in under 5 seconds, depending on the number of files and their sizes. Very large or complex PDFs (with many images or embedded fonts) may take up to 30 seconds.',
  },
];

export default function MergePDFContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* SEO Content Block */}
      <article className="py-16">
        <div className="prose-custom max-w-none">
          <h2
            className="font-heading font-extrabold mb-6"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: '#1A1A2E',
              letterSpacing: '-0.02em',
            }}
          >
            How to Merge PDF Files Online — Complete Guide
          </h2>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '20px',
            }}
          >
            Merging PDF files is one of the most common document tasks for students, professionals,
            and businesses. Whether you need to combine a cover letter with your resume, merge
            multiple invoices into one file, or consolidate research papers, LuvUPDF's free online
            PDF merger makes it effortless.
          </p>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '24px',
            }}
          >
            Unlike desktop software that requires installation and often costs money, LuvUPDF lets
            you merge PDF files directly in your browser — on any device, at any time, completely
            free.
          </p>

          <h3
            className="font-heading font-bold mb-4 mt-8"
            style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
          >
            Step-by-Step: Merging PDFs with LuvUPDF
          </h3>

          <div className="space-y-4 mb-8">
            {[
              {
                step: 1,
                title: 'Upload Your PDF Files',
                desc: 'Click the upload area or drag and drop your PDF files directly onto the page. You can select multiple files at once from your computer, phone, or tablet. LuvUPDF supports all PDF versions and accepts files up to 100MB each.',
              },
              {
                step: 2,
                title: 'Arrange the Files in Order',
                desc: 'Once uploaded, your files appear in a list. Use the up and down arrow buttons to reorder them. The final merged PDF will follow this sequence exactly — first file becomes the first pages, and so on.',
              },
              {
                step: 3,
                title: 'Click Merge PDF',
                desc: 'Hit the "Merge PDF" button and our servers will combine your files instantly. You\'ll see a progress indicator as the merge happens — typically completing in just a few seconds.',
              },
              {
                step: 4,
                title: 'Download Your Merged File',
                desc: 'When the merge is complete, a download button appears. Click it to save your newly merged PDF to your device. The file is automatically deleted from our servers within 1 hour.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-4 rounded-xl"
                style={{ background: '#F8F8FC', border: '1.5px solid #EEEEF5' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: '#E8445A',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '13px',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#1A1A2E',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: '#4A4A6A',
                      fontSize: '14px',
                      lineHeight: 1.65,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className="font-heading font-bold mb-4 mt-8"
            style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
          >
            Why Use LuvUPDF to Merge PDFs?
          </h3>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            There are dozens of PDF merger tools available, but LuvUPDF stands out for several
            important reasons:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                icon: 'CurrencyDollarIcon',
                title: 'Truly Free',
                desc: 'No hidden costs, no premium plan required. Every merge is free, every time.',
              },
              {
                icon: 'ShieldCheckIcon',
                title: 'Privacy First',
                desc: 'Your PDFs are never stored permanently. All files are auto-deleted within 1 hour.',
              },
              {
                icon: 'BoltIcon',
                title: 'No Software Install',
                desc: 'Works in any browser on any device. No downloads, no updates needed.',
              },
              {
                icon: 'DocumentCheckIcon',
                title: 'Quality Preserved',
                desc: 'Fonts, images, hyperlinks, and formatting are all maintained perfectly.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 p-4 rounded-xl"
                style={{ background: 'white', border: '1.5px solid #EEEEF5' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FFF0F2' }}
                >
                  <Icon
                    name={item.icon as any}
                    size={16}
                    variant="solid"
                    style={{ color: '#E8445A' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      color: '#1A1A2E',
                      marginBottom: '2px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: '#4A4A6A',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className="font-heading font-bold mb-4 mt-8"
            style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
          >
            Common Use Cases for Merging PDFs
          </h3>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            PDF merging is useful across many different scenarios:
          </p>

          <ul className="space-y-2 mb-8" style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Combining a resume with a cover letter and portfolio into one application file',
              'Merging multiple bank statements or invoices for accounting and tax purposes',
              'Consolidating research articles or chapters into a single reference document',
              'Combining scanned documents into one complete file for archiving',
              'Merging a presentation with supporting materials for a client proposal',
              'Creating a complete contract by merging the main document with appendices',
              'Combining multiple chapters of an ebook or report',
              'Merging certificates, licenses, and credentials for a job application',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Icon
                  name="CheckCircleIcon"
                  size={16}
                  variant="solid"
                  style={
                    { color: '#E8445A', marginTop: '2px', flexShrink: 0 } as React.CSSProperties
                  }
                />
                <span
                  style={{
                    color: '#4A4A6A',
                    fontSize: '14.5px',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h3
            className="font-heading font-bold mb-4 mt-8"
            style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
          >
            Is It Safe to Merge PDFs Online?
          </h3>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            Security is a top concern when uploading sensitive documents online. LuvUPDF takes your
            privacy seriously with multiple layers of protection:
          </p>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}
          >
            All file transfers use 256-bit SSL/TLS encryption — the same standard used by banks and
            healthcare providers. Files are processed on isolated servers and never shared with
            third parties. Processed files are automatically and permanently deleted within 1 hour
            of processing, and our team never reads or accesses your document contents.
          </p>

          <p
            style={{
              color: '#4A4A6A',
              fontSize: '15.5px',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              marginBottom: '8px',
            }}
          >
            For highly sensitive documents, we recommend processing them on a secure network and
            downloading the result promptly. If you have compliance requirements (HIPAA, GDPR,
            etc.), consider our enterprise options or offline processing.
          </p>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="pb-16">
        <h2
          className="font-heading font-extrabold mb-8"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A2E', letterSpacing: '-0.02em' }}
        >
          Frequently Asked Questions — Merge PDF
        </h2>
        <MergeFAQList faqs={mergeFaqs} />
      </section>

      {/* Related Tools */}
      <section className="pb-16">
        <h2
          className="font-heading font-bold mb-6"
          style={{ fontSize: '22px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
        >
          Other Free PDF Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              href: '/lock-pdf',
              icon: 'LockClosedIcon',
              title: 'Lock PDF',
              desc: 'Password protect your PDF files',
              color: '#7C5CBF',
              bg: '#F3EEFF',
            },
            {
              href: '/unlock-pdf',
              icon: 'LockOpenIcon',
              title: 'Unlock PDF',
              desc: 'Remove PDF passwords from your own files',
              color: '#0EA5B0',
              bg: '#EDFCFD',
            },
            {
              href: '/rotate-pdf',
              icon: 'ArrowPathIcon',
              title: 'Rotate PDF',
              desc: 'Fix sideways or upside-down PDF pages',
              color: '#F59E0B',
              bg: '#FFFBEB',
            },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="tool-card p-4 flex items-center gap-3"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: tool.bg }}
              >
                <Icon
                  name={tool.icon as any}
                  size={18}
                  variant="solid"
                  style={{ color: tool.color } as React.CSSProperties}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1A1A2E',
                  }}
                >
                  {tool.title}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#8888A8' }}>
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Inline FAQ Component for Merge page
function MergeFAQList({ faqs }: { faqs: { q: string; a: string }[] }) {
  'use client';
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <MergeFAQItem key={i} faq={faq} index={i} />
      ))}
    </div>
  );
}

function MergeFAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  return (
    <details className="faq-item group" open={index === 0}>
      <summary
        className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '15px',
          color: '#1A1A2E',
        }}
      >
        {faq.q}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-180"
          style={{ background: '#F8F8FC' }}
        >
          <Icon
            name="ChevronDownIcon"
            size={16}
            style={{ color: '#8888A8' } as React.CSSProperties}
          />
        </div>
      </summary>
      <div className="px-5 pb-5">
        <p
          style={{
            color: '#4A4A6A',
            fontSize: '14.5px',
            lineHeight: 1.7,
            fontFamily: 'var(--font-body)',
          }}
        >
          {faq.a}
        </p>
      </div>
    </details>
  );
}
