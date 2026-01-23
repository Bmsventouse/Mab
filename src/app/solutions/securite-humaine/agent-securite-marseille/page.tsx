import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Agent de sécurité Marseille – Gardiennage & surveillance de sites',
  description:
    "MAB SECURITE met à disposition des agents de sécurité à Marseille et dans les Bouches-du-Rhône pour le gardiennage de chantiers BTP, sites industriels, plateformes logistiques, commerces et événements : présence sur site, rondes de sûreté, contrôles d'accès.",
  canonicalPath: '/solutions/securite-humaine/agent-securite-marseille',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Agents de sécurité à Marseille',
    path: '/solutions/securite-humaine/agent-securite-marseille',
  },
]);

function getAgentSecuriteMarseilleServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Agent de sécurité Marseille',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Fourniture d’agents de sécurité pour le gardiennage et la surveillance de sites à Marseille et dans les Bouches-du-Rhône : chantiers BTP, sites industriels, plateformes logistiques, commerces et événements.',
    areaServed: 'Marseille et Bouches-du-Rhône',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Marseille et Bouches-du-Rhône',
    },
  };
}

function getAgentSecuriteMarseilleFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel est le coût d'un agent de sécurité à Marseille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le coût d'un agent de sécurité à Marseille dépend du type de site (chantier BTP, site industriel, commerce, événement), de l'amplitude horaire (jour, nuit, week-end, 24/7), du nombre de postes à couvrir et du niveau de risque. MAB SECURITE établit un devis personnalisé après analyse de votre besoin afin de dimensionner un dispositif cohérent avec vos enjeux et votre budget.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quels types de sites peuvent être sécurisés par des agents de sécurité à Marseille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les agents de sécurité à Marseille peuvent intervenir sur des chantiers BTP, des sites industriels, des plateformes logistiques, des commerces, des zones portuaires, des sites tertiaires et des événements professionnels ou grand public. Le dispositif est adapté aux contraintes propres à chaque environnement : flux, accès, réglementation, sensibilité du site.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Sous quel délai peut-on mettre en place un dispositif d'agents de sécurité à Marseille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le délai de mise en place d'un dispositif d'agents de sécurité à Marseille dépend de l'urgence, du nombre de postes à pourvoir et de la durée de la mission. Pour des besoins planifiés (chantier, contrat de site), il est recommandé d'anticiper, tandis que pour certains besoins ponctuels ou urgents, une solution peut parfois être trouvée rapidement après qualification du besoin.",
        },
      },
    ],
  };
}

export default function AgentSecuriteMarseillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service Agent de sécurité Marseille
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAgentSecuriteMarseilleServiceJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ Agent de sécurité Marseille
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAgentSecuriteMarseilleFaqJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-humaine/agent-securite-marseille',
            label: 'Agents de sécurité à Marseille',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Agent de sécurité à Marseille : gardiennage et surveillance de sites"
        badge="Sécurité humaine · Marseille"
        intro={`Cette page s’adresse aux dirigeants, responsables HSE, directions immobilières ou exploitants de sites situés à Marseille et dans les Bouches-du-Rhône qui recherchent un dispositif d’agents de sécurité pour le gardiennage de chantiers BTP, de sites industriels, de plateformes logistiques, de commerces ou d’événements.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;agents de sécurité pour un site à Marseille&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} dimensionne et pilote des dispositifs d&apos;agents de sécurité
              à Marseille : postes de garde, rondes de sûreté, contrôle des accès, gestion
              des incidents et reporting.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Obtenez un devis agent de sécurité Marseille en 24h
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis personnalisé pour gardiennage de chantiers, sites industriels, commerces
                et événements dans les Bouches-du-Rhône.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi faire appel à un agent de sécurité à Marseille ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi faire appel à un agent de sécurité à Marseille&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Un environnement à forte activité et à forts enjeux
            </h3>
            <p>
              Marseille concentre des sites industriels, portuaires, logistiques, des
              chantiers BTP de grande envergure et des zones commerciales à forte
              fréquentation. Dans cet environnement, la présence d&apos;un{' '}
              <strong>agent de sécurité à Marseille</strong> permet de sécuriser les accès,
              dissuader les comportements malveillants et réagir rapidement en cas
              d&apos;incident.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Un maillon clé de votre dispositif de sûreté
            </h3>
            <p>
              L&apos;agent de sécurité est au contact du terrain&nbsp;: il contrôle les
              entrées, effectue des rondes de sûreté, identifie les situations à risque et
              applique les consignes définies avec l&apos;exploitant. Associé à la
              vidéosurveillance, au contrôle d&apos;accès et, le cas échéant, à la présence
              d&apos;agents SSIAP, il contribue à un dispositif global de{' '}
              <strong>gardiennage à Marseille</strong> cohérent et efficace.
            </p>
          </div>
        </section>

        {/* H2 : Nos prestations d'agents de sécurité à Marseille */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Nos prestations d&apos;agents de sécurité à Marseille
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Gardiennage de chantiers BTP et sites industriels
            </h3>
            <p>
              {company.name} met en place des dispositifs d&apos;agents de sécurité pour le
              gardiennage de chantiers BTP, d&apos;usines, de dépôts et de plateformes
              logistiques à Marseille et dans sa métropole. Selon les besoins, ces
              dispositifs combinent postes fixes, rondes à horaires variables, levées de
              doute, gestion des accès et main courante.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Surveillance de commerces, sites tertiaires et événements
            </h3>
            <p>
              Nos agents de sécurité interviennent également sur des sites commerciaux
              (retail, centres commerciaux), des immeubles tertiaires et des événements
              professionnels ou grand public. Les missions peuvent inclure la gestion des
              flux, la prévention des incivilités, le filtrage et le contrôle d&apos;accès.
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Postes de garde et gestion des accès sur sites sensibles.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté, levées de doute et vérification des clôtures.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Coordination avec vos prestataires de vidéosurveillance et de maintenance.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : Tarifs et dimensionnement de votre dispositif à Marseille */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Tarifs et dimensionnement de votre dispositif à Marseille
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Plutôt que de proposer un tarif unique d&apos;
              <strong>agent de sécurité Marseille</strong>, {company.name} étudie votre
              besoin pour dimensionner un dispositif adapté&nbsp;: nombre de postes, profils
              d&apos;agents, amplitudes horaires, présence éventuelle de maîtres-chiens,
              articulation avec des rondes mobiles ou des dispositifs techniques.
            </p>
            <p>
              Cette approche permet de ne pas sous-dimensionner la sécurité sur des sites
              sensibles, tout en évitant des dispositifs surdimensionnés par rapport aux
              risques et aux budgets disponibles.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Demandez un devis agent de sécurité à Marseille
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ – Agents de sécurité à Marseille */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Agents de sécurité à Marseille
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Combien de temps à l&apos;avance faut-il prévoir la mise en place d&apos;un
                dispositif d&apos;agents de sécurité&nbsp;?
              </p>
              <p>
                Pour un chantier ou un contrat de site, il est préférable d&apos;anticiper
                afin de définir correctement le périmètre, les consignes et les profils
                d&apos;agents, et de sécuriser la disponibilité des équipes. Pour certaines
                demandes urgentes, une solution peut être étudiée au cas par cas.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Les agents de sécurité peuvent-ils intervenir aussi sur Nice ou Cannes&nbsp;?
              </p>
              <p>
                Oui. {company.name} intervient prioritairement sur Marseille et les
                Bouches-du-Rhône, mais peut étendre ses dispositifs à la côte méditerranéenne
                (Nice, Cannes) en fonction de la nature des sites et des besoins.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Comment se déroule la relation opérationnelle au quotidien&nbsp;?
              </p>
              <p>
                Un interlocuteur dédié coordonne le dispositif, suit la main courante, traite
                les remontées d&apos;incidents et adapte, si nécessaire, le dispositif en
                concertation avec vos équipes. Des points réguliers peuvent être organisés
                pour ajuster les moyens aux besoins.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité à Marseille
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}