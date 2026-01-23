'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { trackEvent, type AnalyticsEvent } from '../../lib/analytics';

export interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  event: AnalyticsEvent;
}

/**
 * Client-side link that pushes an event to the dataLayer (GTM) on click.
 * Usable depuis des composants serveur.
 */
export function TrackedLink({ href, children, className, event }: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(event);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}