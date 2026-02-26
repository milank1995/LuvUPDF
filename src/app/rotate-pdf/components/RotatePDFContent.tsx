import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function RotatePDFContent() {
  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr]">
          {/* Main SEO content */}
          <article>
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontSize: '26px', color: '#1A1A2E', letterSpacing: '-0.03em' }}
            >
              Rotate PDF Pages Online — Fix Sideways Documents in Seconds
            </h2>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              Sideways or upside-down PDF pages are more than a minor annoyance—they slow down your
              reading, make presentations awkward, and can even cause important details to be
              missed. Scanners, fax machines, and mobile cameras often capture documents in the
              wrong orientation, leaving you with a file that has to be manually rotated every time
              it is opened. The Rotate PDF tool from LuvUPDF is designed to solve exactly that
              problem: a quick way to turn pages into the correct position so the document simply
              works the way you expect.
            </p>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              This dedicated Rotate PDF page follows the same layout as our{' '}
              <Link href="/merge-pdf" className="text-[#E8445A] underline">
                Merge PDF
              </Link>{' '}
              and{' '}
              <Link href="/lock-pdf" className="text-[#7C5CBF] underline">
                Lock PDF
              </Link>{' '}
              tools: a large upload box at the top, clear explanations, and an FAQ section for
              search. The difference is in the action. Instead of combining or protecting files,
              this tool focuses on precision adjustments to page orientation. It will let you spin
              individual pages or entire documents by 90, 180, or 270 degrees and then save a clean,
              corrected PDF you can share with colleagues, clients, and friends.
            </p>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              Right now, the user interface you see is a preview of the final experience. You can
              explore the drag-and-drop area, review how the feature fits into the broader LuvUPDF
              ecosystem, and bookmark this page for later. The rotation engine itself is under
              active development and will be enabled once testing and quality checks are complete.
              This approach allows us to ship content and structure that search engines can
              understand today, while still taking the time to build a secure and reliable
              processing pipeline behind the scenes.
            </p>
            <p
              className="mb-4"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              When Rotate PDF goes live, the workflow will be intentionally simple. You will drag
              your PDF into the upload box, preview the pages that need adjustment, choose the
              rotation direction for each, and apply the changes with a single click. The corrected
              file will be available for immediate download, with all original text, images,
              signatures, and annotations preserved. LuvUPDF is focused on improving the viewing
              experience, not rewriting your content.
            </p>
            <p
              className="mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              PDFs that have been rotated correctly are easier to read on phones, tablets, and
              laptops, and they look more professional in meetings or screen shares. Instead of
              asking everyone to twist their head or rotate their device, you can send a clean file
              that opens perfectly on the first try. The Rotate PDF page is built to help you solve
              that problem in the same modern, minimal interface you already know from other LuvUPDF
              tools.
            </p>

            <div className="grid gap-5 md:grid-cols-2 mb-8">
              <div
                className="p-4 rounded-2xl"
                style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
              >
                <h3
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: '15px', color: '#1A1A2E' }}
                >
                  When Rotate PDF is useful
                </h3>
                <ul
                  className="list-disc pl-5"
                  style={{ color: '#4A4A6A', fontSize: '14px', fontFamily: 'var(--font-body)' }}
                >
                  <li>Fixing scanned contracts that were captured sideways.</li>
                  <li>Preparing multi-page reports for printing in the correct orientation.</li>
                  <li>Cleaning up lecture notes or worksheets scanned from notebooks.</li>
                  <li>Rotating photos or diagrams that were embedded at the wrong angle.</li>
                </ul>
              </div>
              <div
                className="p-4 rounded-2xl"
                style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}
              >
                <h3
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: '15px', color: '#7C2D12' }}
                >
                  Designed for clarity and speed
                </h3>
                <p
                  style={{
                    color: '#7C2D12',
                    fontSize: '13.5px',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  The final tool will focus on fast page previews, intuitive rotation controls, and
                  a single export step. No clutter, no complex menus, and no watermarks—just a
                  clean, purpose-built interface.
                </p>
              </div>
            </div>

            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontSize: '22px', color: '#1A1A2E', letterSpacing: '-0.02em' }}
            >
              Rotate PDF — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Will rotating pages change the quality of my PDF?',
                  a: 'No. Rotating pages simply updates their orientation metadata inside the file. Text, images, and vector graphics are preserved exactly as they are, so your document remains crisp and legible.',
                },
                {
                  q: 'Can I rotate just one page instead of the whole PDF?',
                  a: 'Yes. The planned Rotate PDF experience is designed around page-level control. You will be able to select a single page, a range of pages, or all pages and apply different rotation angles as needed.',
                },
                {
                  q: 'Is the Rotate PDF tool free to use?',
                  a: 'Like other tools in the LuvUPDF suite, Rotate PDF is intended to be completely free with no registration required and no watermarks on your exported files.',
                },
                {
                  q: 'How does Rotate PDF work with other tools?',
                  a: 'You might rotate pages first to correct orientation, then use Merge PDF to combine documents, or Lock PDF to protect the final file. Each tool solves a specific problem, and together they create a full-featured PDF workflow in your browser.',
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="faq-item group rounded-2xl p-4 border"
                  style={{ borderColor: '#EEEEF5' }}
                >
                  <summary
                    className="flex items-center justify-between gap-3 cursor-pointer"
                    style={{ listStyle: 'none' }}
                  >
                    <span
                      className="font-heading"
                      style={{ fontSize: '15px', color: '#1A1A2E', fontWeight: 600 }}
                    >
                      {item.q}
                    </span>
                    <Icon
                      name="ChevronDownIcon"
                      size={16}
                      style={{ color: '#8888A8' } as React.CSSProperties}
                    />
                  </summary>
                  <p
                    className="mt-3"
                    style={{
                      color: '#4A4A6A',
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* Side column: internal links */}
          <aside className="space-y-5">
            <div
              className="p-4 rounded-2xl"
              style={{ background: '#F8F8FC', border: '1px solid #EEEEF5' }}
            >
              <h3
                className="font-heading font-semibold mb-2"
                style={{ fontSize: '15px', color: '#1A1A2E' }}
              >
                Explore other free PDF tools
              </h3>
              <ul
                className="space-y-2"
                style={{ fontSize: '13.5px', fontFamily: 'var(--font-body)' }}
              >
                <li>
                  <Link href="/merge-pdf" className="text-[#E8445A] underline">
                    Merge PDF — combine multiple PDFs into one
                  </Link>
                </li>
                <li>
                  <Link href="/lock-pdf" className="text-[#7C5CBF] underline">
                    Lock PDF — add password protection with 256-bit AES
                  </Link>
                </li>
                <li>
                  <Link href="/unlock-pdf" className="text-[#0EA5B0] underline">
                    Unlock PDF — remove passwords from your own files
                  </Link>
                </li>
                <li>
                  <Link href="/compress-pdf" className="text-[#0EA5B0] underline">
                    Compress PDF — reduce file size for faster sharing
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="p-4 rounded-2xl"
              style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FEF3C7' }}
                >
                  <Icon
                    name="InformationCircleIcon"
                    size={18}
                    variant="solid"
                    style={{ color: '#CA8A04' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <p
                    className="font-heading font-semibold mb-1"
                    style={{ fontSize: '14px', color: '#78350F' }}
                  >
                    Development status
                  </p>
                  <p
                    style={{
                      color: '#78350F',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Rotate PDF is actively being built and tested. The SEO content, layout, and
                    internal links are ready today so visitors can discover the tool, while the core
                    page-rotation pipeline is completed behind the scenes.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
