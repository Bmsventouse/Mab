import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Prestations de sécurité privée',
  description:
    "Prestations de sécurité MAB SECURITE : dispositifs de sécurité pour les entreprises, collectivités et organisateurs d'événements (sécurité événementielle, gardiennage, rondes, sécurisation de sites).",
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
      </div>
    </div>
  );
}