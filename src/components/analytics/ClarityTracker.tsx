'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Minimal type declaration for the global `clarity` function injected by
 * Microsoft Clarity. Extend as needed for custom events.
 */
declare global {
  interface Window {
    clarity?: (method: string, ...args: unknown[]) => void;
  }
}

/**
 * ClarityTracker
 *
 * A client component that fires Clarity custom tags on every route change so
 * that session recordings and heatmaps are correctly grouped by page.
 *
 * It also exposes a helper — `setCustomTag` — for event-level instrumentation
 * (e.g., tool used, file uploaded, action completed).
 *
 * Why a separate component?
 * - `ClarityScript` lives in the server layout and only loads the SDK once.
 * - `ClarityTracker` subscribes to Next.js navigation events on the client and
 *   annotates Clarity whenever the active route changes.
 *
 * Best-practice tags sent automatically on each navigation:
 *   • page        → the current pathname  (e.g., "/merge-pdf")
 *   • environment → "production" | "staging"
 */
export default function ClarityTracker() {
  const pathname = usePathname();
  // Track whether this is the very first render to skip redundant initial call
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.clarity !== 'function') return;

    const env = process.env.NEXT_PUBLIC_APP_ENV ?? process.env.NODE_ENV ?? 'production';

    // Always tag the active page and environment so you can filter
    // recordings & heatmaps by URL in the Clarity dashboard.
    window.clarity('set', 'page', pathname);
    window.clarity('set', 'environment', env);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Clarity handles the initial page-view automatically
    }

    // For SPA navigations Clarity needs an explicit "new page" upgrade so the
    // heatmap resets and a fresh recording segment starts.
    window.clarity('upgrade', 'spa-navigation');
  }, [pathname]);

  // This component renders nothing — it is side-effect only.
  return null;
}

// ---------------------------------------------------------------------------
// Standalone helper — import and call this anywhere in your client code.
// ---------------------------------------------------------------------------

/**
 * setCustomTag
 *
 * Tag a Clarity session with any key/value pair for later filtering.
 *
 * @example
 * // Inside an onClick handler or useEffect:
 * setCustomTag('tool', 'merge-pdf');
 * setCustomTag('file_count', '3');
 * setCustomTag('user_action', 'download');
 */
export function setCustomTag(key: string, value: string): void {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('set', key, value);
  }
}

/**
 * identifyUser
 *
 * Associate the current session with a known user ID or email alias.
 * Only call this after the user has authenticated and you have consent.
 *
 * @param userId    A stable, non-PII identifier (e.g., hashed email or UUID).
 * @param sessionId Optional – override the auto-generated Clarity session ID.
 * @param pageId    Optional – override the auto-generated Clarity page ID.
 * @param friendlyName Optional – a display name shown in the Clarity dashboard.
 */
export function identifyUser(
  userId: string,
  sessionId?: string,
  pageId?: string,
  friendlyName?: string
): void {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('identify', userId, sessionId, pageId, friendlyName);
  }
}
