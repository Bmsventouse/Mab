import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, engagements, services } from '../content/company';

export const metadata: Metadata = {
  title: 'Sécurité privée pour entreprises, collectivités et événements',
  description:
    "MAB SECURITE, société de sécurité privée basée à Nîmes, accompagne les organisations professionnelles dans la sécurisation de leurs sites, collaborateurs et publics, y compris dans le cadre d'appels d'offres privés et publics.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="section pb-8">
        <div className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <span className="badge">
              Sécurité privée · B2B · Nîmes &amp; région
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Une sécurité privée structurée pour vos sites et vos publics.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                {company.name} conçoit et pilote des dispositifs de sécurité pour les
                entreprises privées, les donneurs d&apos;ordre publics et les organisateurs
                d&apos;événements, avec une approche compatible avec les exigences des
                appels d&apos;offres privés et publics&nbsp;: traçabilité, fiabilité
                opérationnelle et conformité au cadre réglementaire.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-emerald-500"
              >
                Découvrir nos prestations
              </Link>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Sécurité événementielle
                </div>
                <p className="mt-1 text-muted">
                  Dispositifs dimensionnés pour salons, conventions, événements
                  institutionnels et tournages.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Gardiennage &amp; rondes
                </div>
                <p className="mt-1 text-muted">
                  Présence sur site, rondes de sûreté et levées de doute pour vos locaux,
                  chantiers et sites techniques.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Interlocuteur unique
                </div>
                <p className="mt-1 text-muted">
                  Un référent dédié pour coordonner les missions, centraliser les échanges
                  et assurer le suivi opérationnel.
                </p>
              </div>
            </div>
          </div>

          <aside className="card space-y-4 p-6 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Coordonnées
            </div>
            <div className="space-y-1 text-slate-200">
              <p>{company.address.line1}</p>
              {company.address.line2 && <p>{company.address.line2}</p>}
              <p>
                {company.address.postalCode} {company.address.city}
              </p>
              <p>{company.address.country}</p>
            </div>
            <div className="space-y-2 pt-2 text-slate-200">
              <p>
                Tél. :{' '}
                <a
                  href={`tel:${company.contact.phone.value}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.phone.label}
                </a>
              </p>
              <p>
                E-mail :{' '}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
            <p className="text-xs text-muted">
              Zone d’intervention : {company.areaServed}
            </p>
          </aside>
        </div>
      </section>

      {/* Prestations clés */}
      <section className="section">
        <div className="section-inner space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Prestations clés pour les organisations professionnelles
              </h2>
              <p className="text-sm text-muted">
                Des solutions de sécurité structurées pour vos bâtiments, sites
                opérationnels, événements et environnements sensibles.
              </p>
            </div>
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
            >
              Voir le détail des prestations
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.slug} className="card-muted flex flex-col p-5">
                <h3 className="text-sm font-semibold text-slate-50">{service.name}</h3>
                <p className="mt-2 text-xs text-muted">{service.shortDescription}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {service.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section pb-16">
        <div className="section-inner space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Nos engagements
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {engagements.map((item) => (
              <article key={item.title} className="card-muted p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}