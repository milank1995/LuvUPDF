import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/landing/ToolsGrid';

export const metadata: Metadata = {
  title: 'All PDF Tools — Merge, Split, Compress, Lock & Unlock | LuvUPDF',
  description:
    'Browse all free online PDF tools from LuvUPDF in one place. Merge, split, compress, lock, unlock, and rotate PDF files — no sign-up required.',
  alternates: {
    canonical: 'https://luvupdf.com/tools',
  },
};

export default function AllToolsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-24 pb-8 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-heading font-extrabold mb-4"
              style={{
                fontSize: 'clamp(30px, 5vw, 46px)',
                color: '#1A1A2E',
                letterSpacing: '-0.03em',
              }}
            >
              All Free PDF Tools in One Place
            </h1>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '16px',
                maxWidth: '560px',
                margin: '0 auto',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.7,
              }}
            >
              Quickly access every LuvUPDF tool from a single page. Merge, split, compress, lock,
              unlock, and rotate PDF files with a consistent, modern interface on any device.
            </p>
          </div>
        </section>
        <ToolsGrid />
      </main>
      <Footer />
    </>
  );
}
