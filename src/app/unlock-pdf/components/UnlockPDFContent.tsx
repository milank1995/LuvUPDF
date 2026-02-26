import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function UnlockPDFContent() {
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
              Unlock PDF Online — Remove Passwords Safely in Your Browser
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
              The Unlock PDF tool from LuvUPDF is designed for one thing: helping you regain access
              to PDF files that you already own but can&apos;t easily open because of a password
              prompt. In many teams and households, documents move between people, devices, and
              inboxes for months or even years. The original creator sets a strong password,
              everyone promises to remember it, and then—inevitably—the exact combination vanishes
              from memory. Instead of recreating the document from scratch or hunting through old
              chats, a fast PDF unlocker lets you safely remove the barrier and continue working.
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
              LuvUPDF focuses on a clean, browser-based experience. There is nothing to install, no
              account to create, and no confusing menus to learn. When the unlock engine is
              available, you&apos;ll simply upload the secured PDF, confirm that you have the
              correct password, and download an unlocked copy in a single smooth flow. The unlocked
              version preserves the original layout, fonts, images, bookmarks, and links so you can
              continue editing, printing, or sharing it just like any other file in your library.
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
              Until the automated decryption engine goes live, this page already gives you a clear
              preview of the final workflow. You can explore the drag-and-drop upload box, review
              recommended best practices, and bookmark the page for later. Our goal is to offer a
              reliable alternative to bloated desktop software: a free, web-based PDF unlocker that
              respects your privacy, runs on any modern browser, and fits naturally alongside other
              tools in the LuvUPDF suite such as{' '}
              <Link href="/lock-pdf" className="text-[#7C5CBF] underline">
                Lock PDF
              </Link>{' '}
              and{' '}
              <Link href="/merge-pdf" className="text-[#E8445A] underline">
                Merge PDF
              </Link>
              .
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
              When you work with sensitive information—contracts, invoices, HR paperwork, school
              records, or medical summaries—it is critical to balance protection and convenience.
              Passwords should stop unauthorized people from casually opening a file, but they
              should not trap the rightful owner out of their own content forever. That is where an
              unlock tool is most useful: you already have the right to view the file, and you
              already know or have recovered the password; you simply want a copy that opens
              normally on every device you use. LuvUPDF&apos;s Unlock PDF page is built precisely
              around that scenario.
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
              The design mirrors the rest of the platform: a large, welcoming upload area at the top
              of the page, clear labels, and thoughtful microcopy that explains each step in plain
              language. On mobile screens, the layout collapses gracefully so you can unlock PDFs
              directly from your phone or tablet during a commute, in a meeting room, or while
              working from a café. On larger monitors, the explanatory content, tips, and FAQs sit
              beside the tool, giving you quick answers without forcing you to leave the page or
              search through separate documentation.
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
              Although the unlock engine is still being finalized, security remains a core priority.
              The production version of this tool will follow the same principles as our locking and
              merging flows: encrypted connections, short-lived processing windows, and automatic
              cleanup. Files will be handled only long enough to perform the requested action, then
              removed from our systems. This approach allows you to enjoy a fast, cloud-based
              workflow without surrendering control over your private data.
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
                  When to use Unlock PDF
                </h3>
                <ul
                  className="list-disc pl-5"
                  style={{ color: '#4A4A6A', fontSize: '14px', fontFamily: 'var(--font-body)' }}
                >
                  <li>Opening archived reports that were locked by a former colleague.</li>
                  <li>Preparing print-ready versions of documents for a trusted print shop.</li>
                  <li>
                    Simplifying internal workflows where the team already works inside a secure
                    environment.
                  </li>
                  <li>
                    Creating a non-password version for personal backup, while keeping the original
                    locked copy in storage.
                  </li>
                </ul>
              </div>
              <div
                className="p-4 rounded-2xl"
                style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}
              >
                <h3
                  className="font-heading font-semibold mb-2"
                  style={{ fontSize: '15px', color: '#7C2D12' }}
                >
                  Use Unlock PDF responsibly
                </h3>
                <p
                  style={{
                    color: '#7C2D12',
                    fontSize: '13.5px',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Only unlock files that you own or that you have been explicitly authorized to
                  modify. LuvUPDF is built for legitimate productivity and collaboration scenarios,
                  not for bypassing security on documents you are not permitted to access.
                </p>
              </div>
            </div>

            {/* FAQ heading for on-page SEO */}
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontSize: '22px', color: '#1A1A2E', letterSpacing: '-0.02em' }}
            >
              Unlock PDF — Frequently Asked Questions
            </h2>
            <div className="space-y-4 mb-4">
              {[
                {
                  q: 'Will I be able to unlock any PDF without knowing the password?',
                  a: "No. The Unlock PDF feature is intended for situations where you already know the document's password or are authorized to receive an unlocked copy. It is not a hacking tool and will never attempt to guess or brute-force unknown passwords.",
                },
                {
                  q: 'Does unlocking a PDF change the original file?',
                  a: 'In the planned implementation, LuvUPDF will always work on a processed copy of your file. Your original locked PDF will remain unchanged on your device, while the unlocked version is generated as a separate download.',
                },
                {
                  q: 'Will the unlocked PDF keep its fonts, images, and layout?',
                  a: 'Yes. The goal of the Unlock PDF tool is to remove the password requirement while preserving all of the visual and structural details of the document, including bookmarks, internal links, and embedded graphics.',
                },
                {
                  q: 'How does this tool fit with Lock PDF and other utilities?',
                  a: 'LuvUPDF is gradually building a complete toolbox: Lock PDF for adding strong protection, Unlock PDF for regaining normal access when appropriate, Merge PDF for combining documents, and additional utilities like Rotate PDF and Compress PDF for everyday cleanup.',
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
                  <Link href="/rotate-pdf" className="text-[#F59E0B] underline">
                    Rotate PDF — fix sideways or upside-down pages
                  </Link>
                </li>
                <li>
                  <Link href="/compress-pdf" className="text-[#0EA5B0] underline">
                    Compress PDF — shrink file size for faster sharing
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
                    Unlock PDF is actively being built and tested. The UI, SEO content, and FAQ are
                    finalized so search engines and users can already discover the page, while the
                    core unlocking pipeline is completed behind the scenes.
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
