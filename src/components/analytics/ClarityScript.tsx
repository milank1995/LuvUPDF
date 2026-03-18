import Script from 'next/script';

/**
 * ClarityScript
 *
 * Injects the Microsoft Clarity loader via next/script with `strategy="afterInteractive"`.
 * This ensures Clarity loads after the page becomes interactive without blocking
 * the critical rendering path.
 *
 * Place this component inside <head> (or anywhere in the layout) — Next.js will
 * hoist it correctly regardless of location.
 */
export default function ClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // Do not render in development or when the ID is missing
  if (!clarityId || process.env.NODE_ENV === 'development') return null;

  return (
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${clarityId}");
        `,
      }}
    />
  );
}
