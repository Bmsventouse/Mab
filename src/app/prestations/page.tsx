import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Prestations de sécurité privée – Gardiennage BTP & sites professionnels',
  description:
    "Prestations de sécurité MAB SECURITE : gardiennage de chantiers BTP, surveillance humaine, rondes de sûreté, sécurité événementielle et sécurisation de sites pour les entreprises et collectivités à Paris, Marseille, Nîmes et sur la côte sud.",
};

export default function PrestationsPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Prestations</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Prestations de sécurité privée pour les organisations professionnelles
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} conçoit et pilote des dispositifs de sécurité adaptés aux
            contraintes des entreprises privées, des collectivités et des établissements
            publics. Chaque mission est cadrée en amont afin d&apos;assurer un niveau de
            sécurité cohérent avec vos enjeux, vos obligations réglementaires et, le cas
            échéant, les exigences de vos appels d&apos;offres privés ou publics et de vos
            cahiers des charges.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <section key={service.slug} className="card p-6 text-sm">
              <h2 className="text-base font-semibold text-slate-50">
                {service.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
              <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                <p className="font-medium text-slate-200">
                  Exemples de situations prises en charge :
                </p>
              </div>
              <ul className="mt-2 space-y-2 text-xs text-slate-300">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="card-muted p-5 text-xs text-slate-300">
            <p className="font-medium text-slate-100">
              Besoin d’une approche globale de la sécurité de vos sites&nbsp;?
            </p>
            <p className="mt-2">
              Nous construisons des dispositifs combinant gardiennage, rondes de sûreté et
              sécurité événementielle, en articulation avec vos procédures internes (plans
              de prévention, consignes d&apos;accès, gestion des visiteurs, prestataires et
              sous-traitants).
            </p>
          </div>
          <div className="card p-5 text-xs text-slate-300">
            <p className="font-medium text-slate-100">
              Focus : gardiennage de chantiers BTP à Paris
            </p>
            <p className="mt-2">
              Pour les opérations de construction et de réhabilitation en Île-de-France,
              {` `}{company.name} propose des dispositifs dédiés au gardiennage de chantiers
              BTP : présence de nuit, rondes de sûreté, levées de doute et protection des
              bases-vie et dépôts de matériaux.
            </p>
            <div className="mt-3">
              <Link
                href="/gardiennage-chantiers-btp-paris"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 min-h-[44px]"
              >
                Découvrir notre offre BTP à Paris
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}