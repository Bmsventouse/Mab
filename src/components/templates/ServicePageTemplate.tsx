import type { ReactNode } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface ServicePageTemplateProps {
  h1: string;
  intro: string;
  badge?: string;
  sidebar?: ReactNode;
  children: ReactNode;
}

/**
 * Generic layout for a "Service" page:
 * - badge (optional)
 * - H1 + intro
 * - main content + optional sidebar
 */
export function ServicePageTemplate({
  h1,
  intro,
  badge,
  sidebar,
  children,
}: ServicePageTemplateProps) {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          {badge && <p className="badge">{badge}</p>}
          <Heading level={1}>{h1}</Heading>
          <Text variant="muted" className="max-w-2xl">
            {intro}
          </Text>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-5 text-sm text-slate-300">{children}</div>
          {sidebar && <aside className="card p-5 text-xs text-slate-200">{sidebar}</aside>}
        </section>
      </div>
    </div>
  );
}