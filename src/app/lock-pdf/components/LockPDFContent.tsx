'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const lockFaqs = [
  {
    q: 'How do I password protect a PDF file online?',
    a: 'To password protect a PDF using LuvUPDF: 1) Go to our Lock PDF page, 2) Upload your PDF file by dragging it into the upload area or clicking "Select PDF File", 3) Enter a strong password and confirm it, 4) Click "Lock PDF with Password", 5) Download your password-protected PDF. The process takes under 10 seconds.',
  },
  {
    q: 'What type of encryption does LuvUPDF use to lock PDFs?',
    a: 'LuvUPDF uses 256-bit AES encryption (Advanced Encryption Standard) to lock PDF files — the same encryption standard used by governments and financial institutions worldwide. This is the strongest PDF encryption available and is virtually impossible to crack with modern computing.',
  },
  {
    q: 'Can I unlock a PDF that I locked with LuvUPDF?',
    a: "Yes, you can use our Unlock PDF tool to remove the password from a PDF you previously locked, as long as you know the correct password. Enter the password you set, and we'll remove the protection. Note: LuvUPDF never stores your passwords, so you must know it to unlock.",
  },
  {
    q: 'What happens if I forget my PDF password?',
    a: 'Unfortunately, if you forget your PDF password, you will not be able to open the locked file through normal means. LuvUPDF does not store passwords for security reasons. We recommend storing passwords in a secure password manager. If you lose your password, you may need a specialized PDF recovery tool.',
  },
  {
    q: 'Does locking a PDF affect its quality or content?',
    a: 'No. Adding password protection to a PDF does not affect its content, formatting, images, or quality in any way. The locking process only adds an encryption layer around the existing document — everything inside remains exactly the same.',
  },
  {
    q: 'Can I lock a PDF on my phone or tablet?',
    a: "Yes! LuvUPDF is fully optimized for mobile devices. You can upload a PDF from your phone's storage, set a password, and download the locked file — all from your mobile browser. No app download is required.",
  },
];

export default function LockPDFContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* SEO Content Block */}
      <article className="py-16">
        <h2
          className="font-heading font-extrabold mb-6"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A2E', letterSpacing: '-0.02em' }}
        >
          How to Lock a PDF with a Password — Complete Guide
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
          Protecting sensitive PDF documents with a password is one of the most important steps you
          can take to secure your information. Whether you're sharing confidential business
          contracts, personal financial documents, medical records, or private correspondence,
          password-protecting your PDF ensures that only authorized recipients can access its
          contents.
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
          LuvUPDF's free online PDF lock tool makes it incredibly easy to add 256-bit AES encryption
          to any PDF file — directly in your browser, with no software installation and no account
          required.
        </p>

        <h3
          className="font-heading font-bold mb-4 mt-8"
          style={{ fontSize: '20px', color: '#1A1A2E', letterSpacing: '-0.01em' }}
        >
          Step-by-Step: How to Lock a PDF with LuvUPDF
        </h3>

        <div className="space-y-4 mb-8">
          {[
            {
              step: 1,
              title: 'Upload Your PDF File',
              desc: 'Click the upload area or drag and drop your PDF file onto the page. LuvUPDF accepts any PDF file up to 100MB. Your file is immediately encrypted during transfer using SSL technology.',
            },
            {
              step: 2,
              title: 'Set a Strong Password',
              desc: 'Enter your chosen password in the "Set Password" field. LuvUPDF\'s password strength indicator will show you how secure your password is in real-time. For maximum security, use a password with at least 8 characters including uppercase letters, numbers, and symbols.',
            },
            {
              step: 3,
              title: 'Confirm Your Password',
              desc: 'Re-enter your password in the confirmation field to ensure there are no typos. A green checkmark will appear when both passwords match. Remember: this password will be required every time someone tries to open the PDF.',
            },
            {
              step: 4,
              title: 'Click Lock PDF',
              desc: 'Press the "Lock PDF with Password" button. Our servers will apply 256-bit AES encryption to your document in just a few seconds.',
            },
            {
              step: 5,
              title: 'Download Your Protected PDF',
              desc: 'Once locked, click the download button to save your password-protected PDF. The file is automatically deleted from our servers within 1 hour. Store your password in a secure location.',
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
                  background: '#7C5CBF',
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
          Understanding PDF Encryption: 256-bit AES
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
          LuvUPDF uses 256-bit AES (Advanced Encryption Standard) to protect your PDF files — the
          gold standard in data encryption. Here's what that means in practice:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: 'ShieldCheckIcon',
              color: '#7C5CBF',
              bg: '#F3EEFF',
              title: 'Military-Grade Encryption',
              desc: '256-bit AES is used by governments, militaries, and banks worldwide. It would take billions of years to crack with brute force.',
            },
            {
              icon: 'KeyIcon',
              color: '#E8445A',
              bg: '#FFF0F2',
              title: 'Open & Restricted Permissions',
              desc: 'PDF passwords can restrict not just opening, but also printing, copying, and editing the document.',
            },
            {
              icon: 'DevicePhoneMobileIcon',
              color: '#0EA5B0',
              bg: '#EDFCFD',
              title: 'Universal Compatibility',
              desc: 'Password-protected PDFs work with all PDF readers including Adobe Acrobat, Preview, Chrome, and mobile apps.',
            },
            {
              icon: 'CloudIcon',
              color: '#F59E0B',
              bg: '#FFFBEB',
              title: 'No Password Storage',
              desc: "LuvUPDF never stores, logs, or has access to your password. It's applied client-side and immediately forgotten.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-3 p-4 rounded-xl"
              style={{ background: 'white', border: '1.5px solid #EEEEF5' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: item.bg }}
              >
                <Icon
                  name={item.icon as any}
                  size={16}
                  variant="solid"
                  style={{ color: item.color } as React.CSSProperties}
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
          When Should You Lock a PDF?
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
          Password protecting a PDF is recommended in many situations. Here are the most common
          scenarios where locking a PDF is essential:
        </p>

        <ul className="space-y-2 mb-8" style={{ listStyle: 'none', padding: 0 }}>
          {[
            'Sending contracts, NDAs, or legal agreements to clients or partners',
            'Sharing financial reports, tax documents, or bank statements',
            'Distributing medical records, prescriptions, or health information',
            'Protecting intellectual property like research papers or creative work',
            'Sharing HR documents such as salary information or performance reviews',
            'Sending personal identification documents like passports or licenses',
            'Protecting academic transcripts, certificates, or diplomas',
            'Securing business proposals before final agreement',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Icon
                name="LockClosedIcon"
                size={15}
                variant="solid"
                style={{ color: '#7C5CBF', marginTop: '3px', flexShrink: 0 } as React.CSSProperties}
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
          Tips for Creating a Strong PDF Password
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
          The strength of your PDF's protection depends heavily on the quality of your password. A
          weak password can be cracked quickly using dictionary or brute-force attacks. Follow these
          best practices to maximize security:
        </p>

        <div
          className="p-5 rounded-xl mb-8"
          style={{ background: '#F3EEFF', border: '1.5px solid #E0D4FF' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { good: true, text: 'Use at least 8–12 characters' },
              { good: true, text: 'Mix uppercase and lowercase letters' },
              { good: true, text: 'Include numbers and symbols (!@#$%)' },
              { good: true, text: 'Use a passphrase (e.g. "Blue$Sky72Moon!")' },
              { good: false, text: 'Avoid common words like "password"' },
              { good: false, text: "Don't use birthdays or names" },
              { good: false, text: 'Avoid sequential numbers (123456)' },
              { good: false, text: "Don't reuse passwords from other accounts" },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <Icon
                  name={tip.good ? 'CheckCircleIcon' : 'XCircleIcon'}
                  size={15}
                  variant="solid"
                  style={
                    {
                      color: tip.good ? '#16A34A' : '#EF4444',
                      marginTop: '2px',
                      flexShrink: 0,
                    } as React.CSSProperties
                  }
                />
                <span
                  style={{
                    color: '#4A4A6A',
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.5,
                  }}
                >
                  {tip.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: '#4A4A6A',
            fontSize: '15.5px',
            lineHeight: 1.75,
            fontFamily: 'var(--font-body)',
            marginBottom: '16px',
          }}
        >
          Once you've locked your PDF, store the password in a reputable password manager such as
          1Password, Bitwarden, or LastPass. Never send the password in the same email or message as
          the locked PDF — use a separate channel like a phone call or SMS.
        </p>
      </article>

      {/* FAQ Section */}
      <section className="pb-16">
        <h2
          className="font-heading font-extrabold mb-8"
          style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A2E', letterSpacing: '-0.02em' }}
        >
          Frequently Asked Questions — Lock PDF
        </h2>
        <div className="space-y-3">
          {lockFaqs.map((faq, i) => (
            <details key={i} className="faq-item group" open={i === 0}>
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
          ))}
        </div>
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
              href: '/merge-pdf',
              icon: 'DocumentPlusIcon',
              title: 'Merge PDF',
              desc: 'Combine multiple PDFs into one file',
              color: '#E8445A',
              bg: '#FFF0F2',
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
