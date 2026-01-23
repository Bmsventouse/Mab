import type { Metadata } from 'next';
import { Building2, Clapperboard, Landmark, Ticket } from 'lucide-react';
import { company, sectors } from '../../content/company';

export const metadata: Metadata = {
  title: 'Secteurs d’intervention – BTP, entreprises et acteurs publics',
  description:
    "Secteurs accompagnés par MAB SECURITE : entreprises du BTP, sièges sociaux, sites industriels et logistiques, collectivités, acteurs publics et métiers de l'événementiel (y compris tournages et plateaux techniques) à Paris, Marseille, Montpellier, Nîmes et dans leurs régions.",
};

const iconMap: Record<string, typeof Building2> = {
  entreprises: Building2,
  evenementiel: Ticket,
  collectivites: Landmark,
  'tournages-plateaux': Clapperboard,
};

export default function SecteursPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Secteurs</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Des dispositifs adaptés à vos environnements
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} intervient dans différents environnements professionnels avec
            un souci constant d&apos;adaptation aux contraintes de chaque métier&nbsp;:
            continuité de service, gestion des flux, exigences réglementaires, enjeux
            d&apos;image et de confidentialité, y compris dans le cadre de marchés publics
            ou de conventions pluriannuelles.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => {
            const Icon = iconMap[sector.slug] ?? Building2;

            return (
              <section key={sector.slug} className="card p-6 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-50">
                      {sector.name}
                    </h2>
                    <p className="text-sm text-muted">{sector.description}</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                      {sector.examples.map((example) => (
                        <li key={example}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Vous ne trouvez pas votre secteur dans cette liste&nbsp;?
          </p>
          <p className="mt-2">
            Les besoins en sécurité privée peuvent concerner de nombreux environnements
            spécifiques (santé, enseignement, sites culturels, etc.). N&apos;hésitez pas à
            nous contacter pour étudier la faisabilité d&apos;un dispositif adapté.
          </p>
        </div>
      </div>
    </div>
  );
}