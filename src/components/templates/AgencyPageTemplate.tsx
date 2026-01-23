import type { ReactNode } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface AgencyPageTemplateProps {
  h1: string;
  badge: string;
  intro: string;
  zoneLabel: string;
  responsable: string;
  zonePhoneLabel?: ReactNode;
  children: ReactNode;
  situationsAside: ReactNode;
}

/**
 * Layout template for local agency pages (Paris, Marseille, Montpellier, Nîmes).
 */
export function AgencyPageTemplate({
  h1,
  badge,
  intro,
  zoneLabel,
  responsable,
  zonePhoneLabel,
  children,
  situationsAside,
}: AgencyPageTemplateProps) {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">{badge}</p>
          <Heading level={1}>{h1}</Heading>
          <Text variant="muted" className="max-w-2xl">
            {intro}
          </Text>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm text-slate-300">
            {children}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-50">{zoneLabel}</p>
              <p className="mt-1 text-slate-200">
                Responsable opérationnel : <span className="font-semibold">{responsable}</span>
              </p>
              {zonePhoneLabel && (
                <div className="mt-1 text-xs text-slate-400">{zonePhoneLabel}</div>
              )}
            </div>
          </div>

          <aside className="card p-5 text-xs text-slate-200">
            <h2 className="text-sm font-semibold text-slate-50">
              Exemples de situations prises en charge
            </h2>
            <div className="mt-3">{situationsAside}</div>
          </aside>
        </section>
      </div>
    </div>
  );
}