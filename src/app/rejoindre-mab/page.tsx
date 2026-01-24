import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../content/company';
import { AgentApplicationForm } from '../../components/forms/AgentApplicationForm';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Rejoindre MAB SECURITE – Candidature agents de sécurité',
  description:
    "Formulaire de candidature pour les agents de sécurité et profils SSIAP souhaitant rejoindre le vivier de MAB SECURITE et être recontactés pour des missions à Paris, Marseille, Montpellier, Nîmes et sur la côte sud.",
  canonicalPath: '/rejoindre-mab',
});

export default function RejoindreMabPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-10">
        <header className="space-y-3">
          <p className="badge">Rejoindre MAB SECURITE</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Agents de sécurité : rejoindre le vivier de {company.name}
          </h1>
          <p className="max-w-3xl text-sm text-muted">
            Cette page est destinée aux agents de sécurité, rondiers, profils SSIAP et
            agents événementiels qui souhaitent être identifiés par {company.name} pour
            des missions ponctuelles ou récurrentes sur ses zones d&apos;intervention. Les
            candidatures transmises sont examinées au fil de l&apos;eau et intégrées à un
            vivier mobilisable en fonction des besoins opérationnels.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <AgentApplicationForm />

          <aside className="space-y-5 text-xs text-slate-300">
            <div className="card-muted p-5">
              <h2 className="text-sm font-semibold text-slate-50">
                Profils recherchés en priorité
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>Agents de sécurité titulaires d&apos;une carte professionnelle</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>
                    Profils SSIAP 1, 2 ou 3 pour des dispositifs intégrant la sécurité
                    incendie
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>Expérience sur chantiers BTP, sites logistiques ou tertiaires</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>Agents disponibles pour des missions de nuit, week-end ou événements</span>
                </li>
              </ul>
            </div>

            <div className="card-muted p-5">
              <h2 className="text-sm font-semibold text-slate-50">
                Zones d&apos;intervention principales
              </h2>
              <p className="mt-2">
                {company.name} intervient à Paris et en Île-de-France, à Marseille, dans les
                Bouches-du-Rhône, à Montpellier et dans l&apos;Hérault (34), à Nîmes et dans
                le Gard (30), ainsi que sur la côte sud (Nice, Cannes et environs).
              </p>
              <p className="mt-2 text-slate-400">
                Les missions proposées dépendent des besoins des clients, des contraintes de
                site et de votre localisation. Une candidature ne constitue pas un engagement
                de collaboration automatique, mais permet d&apos;être identifié pour de
                futurs besoins.
              </p>
            </div>

            <div className="card-muted p-5">
              <h2 className="text-sm font-semibold text-slate-50">
                Données transmises et confidentialité
              </h2>
              <p className="mt-2">
                Les informations que vous transmettez via ce formulaire sont utilisées
                exclusivement par {company.name} pour étudier votre candidature, vous
                recontacter et, le cas échéant, vous proposer des missions correspondant à
                votre profil. Elles ne sont pas revendues ni utilisées à des fins
                commerciales par des tiers.
              </p>
              <p className="mt-2 text-slate-400">
                Vous pouvez demander la mise à jour ou la suppression de vos données en
                utilisant les coordonnées indiquées sur la page Contact du site.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}