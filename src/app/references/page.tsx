import type { Metadata } from 'next';
import { CheckCircle2, Building2, Warehouse, ShieldCheck, Users } from 'lucide-react';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Références & cas clients – Dispositifs types MAB SECURITE',
  description:
    "Exemples de dispositifs types conçus par MAB SECURITE pour des chantiers BTP, sites logistiques, sièges sociaux tertiaires et événements professionnels. Illustrations des approches possibles en gardiennage, rondes de sûreté, sécurité incendie SSIAP et sécurité événementielle.",
  canonicalPath: '/references',
});

interface CaseStudy {
  slug: string;
  label: string;
  category: string;
  location: string;
  context: string;
  objective: string;
  devices: string[];
  note?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'chantier-btp-idf',
    label: 'Chantier BTP urbain – dispositif type',
    category: 'Chantier BTP',
    location: 'Île-de-France',
    context:
      "Chantier de construction en milieu urbain, avec base-vie, zones de stockage de matériaux et abords accessibles depuis l’espace public.",
    objective:
      'Limiter les intrusions, vols de matériaux et dégradations en dehors des horaires de travail, tout en sécurisant les bases-vie.',
    devices: [
      'Poste de garde aux horaires critiques (ouverture / fermeture de chantier)',
      'Rondes de sûreté à horaires variables de nuit et week-end',
      'Levées de doute sur alarme en lien avec la télésurveillance du client',
      'Contrôle des accès véhicules et piétons pendant certaines phases sensibles',
    ],
    note: "Ce type de dispositif est dimensionné en fonction de la configuration du chantier, de la durée de l'opération et des risques identifiés.",
  },
  {
    slug: 'entrepot-logistique-sud',
    label: 'Site logistique – dispositif type',
    category: 'Logistique',
    location: 'France Sud',
    context:
      'Entrepôt logistique avec flux de camions, zones de chargement, aires de stationnement et zones de stockage sensibles.',
    objective:
      'Sécuriser les accès, prévenir les intrusions sur les zones sensibles et garantir la continuité d’activité.',
    devices: [
      'Poste de contrôle d’accès à l’entrée principale (accueil, badges, registre)',
      'Rondes régulières sur les zones extérieures (clôtures, parkings, quais de chargement)',
      'Surveillance ciblée de certaines zones de stockage à forte valeur',
      'Articulation avec la vidéosurveillance existante et le PC sécurité du client',
    ],
    note: "Les amplitudes horaires et le nombre d'agents sont adaptés au profil d'activité (jour/nuit, 5j/7 ou 7j/7).",
  },
  {
    slug: 'siege-social-paris',
    label: 'Siège social tertiaire – dispositif type',
    category: 'Tertiaire',
    location: 'Paris / Île-de-France',
    context:
      'Immeuble tertiaire accueillant un siège social, avec accueil visiteurs, espaces de travail, salles de réunion et locaux techniques.',
    objective:
      "Assurer un accueil sécurisé, maîtriser les flux visiteurs / prestataires et sécuriser les zones sensibles (locaux techniques, salles serveurs).",
    devices: [
      "Agent(s) d’accueil-sécurité en journée (contrôle d’accès, badges, gestion des visiteurs)",
      'Rondes de sûreté ciblées sur les locaux techniques et zones sensibles',
      'Procédures d’escalade en lien avec les équipes internes (direction de site, IT, HSE)',
      'Intégration éventuelle d’un volet SSIAP selon la configuration du bâtiment',
    ],
    note: "Les procédures d'accueil et de contrôle d'accès sont co-construites avec le client pour rester compatibles avec son image et ses usages.",
  },
  {
    slug: 'evenement-cannes',
    label: 'Événement professionnel – dispositif type',
    category: 'Événementiel',
    location: 'Côte d’Azur',
    context:
      'Événement corporate à forte visibilité, organisé dans un lieu recevant du public (palais des congrès, hôtel, lieu partenaire).',
    objective:
      'Garantir un accueil fluide et sécurisé, gérer les flux d’entrées/sorties et protéger les zones backstage / VIP.',
    devices: [
      "Postes de contrôle d'accès aux entrées principales",
      'Agents dédiés aux zones VIP, backstage et régies',
      'Rondes de sûreté dans les espaces d’exposition et zones techniques',
      'Coordination avec les régies, les équipes internes et les autres prestataires (technique, hôtesses, etc.)',
    ],
    note: "Le dimensionnement dépend du nombre de participants, de la configuration des lieux et des consignes spécifiques de l'organisateur.",
  },
];

const iconByCategory: Record<string, typeof Building2> = {
  'Chantier BTP': ShieldCheck,
  Logistique: Warehouse,
  Tertiaire: Building2,
  Événementiel: Users,
};

export default function ReferencesPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Références &amp; cas clients</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Illustrations de dispositifs types pour vos sites
          </h1>
          <p className="max-w-3xl text-sm text-muted">
            Les exemples ci-dessous illustrent des dispositifs types que {company.name}{' '}
            peut concevoir et piloter pour différents environnements : chantiers BTP,
            sites logistiques, immeubles tertiaires et événements professionnels. Ils
            permettent de visualiser des combinaisons possibles de gardiennage, rondes de
            sûreté, sécurité incendie et sécurité événementielle. Chaque mission réelle
            fait l&apos;objet d&apos;un cadrage spécifique avec le client.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => {
            const Icon = iconByCategory[cs.category] ?? Building2;

            return (
              <article key={cs.slug} className="card p-6 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-50">{cs.label}</h2>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {cs.category} · {cs.location}
                    </p>
                    <p className="text-sm text-muted">{cs.context}</p>
                    <p className="mt-2 text-xs text-slate-300">
                      <span className="font-semibold text-slate-100">Objectif :</span>{' '}
                      {cs.objective}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                      {cs.devices.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {cs.note && (
                      <p className="mt-2 text-[11px] text-slate-400">
                        {cs.note}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Vous souhaitez discuter d&apos;un cas concret ou d&apos;un appel d&apos;offres&nbsp;?
          </p>
          <p className="mt-2">
            Ces exemples ne remplacent pas l&apos;étude de votre contexte réel. Pour un
            chantier précis, un site logistique, un siège social ou un événement,{' '}
            {company.name} analyse vos contraintes (horaires, flux, obligations
            réglementaires, marchés, conventions) et propose un dispositif adapté.
          </p>
          <p className="mt-2 text-[11px] text-slate-400">
            Lorsque des missions sont réalisées dans le cadre de marchés publics ou de
            contrats privés pluriannuels, les références détaillées et attestations de
            capacité peuvent être communiquées aux acheteurs sur demande ou dans le cadre
            des dossiers de consultation.
          </p>
        </section>
      </div>
    </div>
  );
}