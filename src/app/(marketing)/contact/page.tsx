import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | LuvUPDF — Support & Feedback',
  description:
    'Have questions or feedback? Contact the LuvUPDF team. We are here to help you with your free and secure PDF tool needs.',
  keywords: ['Contact LuvUPDF', 'PDF tool support', 'Feedback', 'LuvUPDF help'],
  alternates: {
    canonical: 'https://luvupdf.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <main>
        <section className="pt-24 pb-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-3xl mx-auto">
            <h1
              className="font-heading font-extrabold mb-4"
              style={{
                fontSize: 'clamp(28px,4vw,40px)',
                color: '#1A1A2E',
                letterSpacing: '-0.03em',
              }}
            >
              Get in Touch
            </h1>
            <p
              className="mb-6"
              style={{
                color: '#4A4A6A',
                fontSize: '15.5px',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
              }}
            >
              Have a question about LuvUPDF, a suggestion for a new feature, or need help with a
              tool? Use the form below to reach out. We value your privacy and only use your
              information to respond to your inquiry.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1.5"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1A1A2E',
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border text-sm"
                  style={{
                    borderColor: '#EEEEF5',
                    fontFamily: 'var(--font-body)',
                    color: '#1A1A2E',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1.5"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1A1A2E',
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border text-sm"
                  style={{
                    borderColor: '#EEEEF5',
                    fontFamily: 'var(--font-body)',
                    color: '#1A1A2E',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1.5"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1A1A2E',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border text-sm"
                  style={{
                    borderColor: '#EEEEF5',
                    fontFamily: 'var(--font-body)',
                    color: '#1A1A2E',
                  }}
                />
              </div>

              <p
                className="text-xs"
                style={{
                  color: '#8888A8',
                  fontFamily: 'var(--font-body)',
                }}
              >
                This form is for general inquiries only. Please do not include sensitive personal or
                financial information.
              </p>

              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full"
                style={{
                  background: '#E8445A',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(232,68,90,0.28)',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
