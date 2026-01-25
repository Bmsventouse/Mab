import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Agent de sécurité Montpellier – Gardiennage & surveillance de sites',
  description:
    "MAB SECURITE met à disposition des agents de sécurité à Montpellier et dans l'Hérault (34) pour le gardiennage de chantiers BTP, de sites tertiaires, de dépôts et d'événements : présence sur site, rondes de sûreté, contrôles d'accès.",
  canonicalPath: '/solutions/securite-humaine/agent-securite-montpellier',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Agents de sécurité à Montpellier',
    path: '/solutions/securite-humaine/agent-securite-montpellier',
  },
]);

function getAgentSecuriteMontpellierServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Agent de sécurité Montpellier',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Fourniture d'agents de sécurité pour le gardiennage et la surveillance de sites à Montpellier et dans l'Hérault (34) : chantiers BTP, sites tertiaires, dépôts, zones de stockage et événements.",
    areaServed: "Montpellier et Hérault (34)",
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: "Montpellier et Hérault (34)",
    },
  };
}

function getAgentSecuriteMontpellierFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel est le coût d'un agent de sécurité à Montpellier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le coût d'un agent de sécurité à Montpellier dépend du type de site (chantier BTP, immeuble tertiaire, dépôt, événement), de l'amplitude horaire et de la durée de la mission. MAB SECURITE étudie votre besoin pour proposer un dispositif adapté et un devis détaillé.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Pour quels types de sites peut-on faire appel à des agents de sécurité à Montpellier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les agents de sécurité à Montpellier peuvent intervenir sur des chantiers BTP, des immeubles tertiaires, des parcs d'activités, des dépôts, des zones de stockage, des parkings et des événements professionnels ou institutionnels. Le dispositif est ajusté à la configuration de chaque site.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Peut-on combiner agents de sécurité et maîtres-chiens à Montpellier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Oui. Sur des sites sensibles ou étendus, il peut être pertinent de combiner la présence d'agents de sécurité avec des équipes cynophiles (maîtres-chiens) pour renforcer la dissuasion et la capacité de réaction, notamment la nuit.",
        },
      },
    ],
  };
}

export default function AgentSecuriteMontpellierPage() {
  const structuredData = [
    getAgentSecuriteMontpellierServiceJsonLd(),
    getAgentSecuriteMontpellierFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service Agent de sécurité Montpellier + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-humaine/agent-securite-montpellier',
            label: 'Agents de sécurité à Montpellier',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Agent de sécurité à Montpellier : gardiennage et surveillance de sites"
        badge="Sécurité humaine · Montpellier"
        intro={`Cette page s’adresse aux responsables de sites, directions immobilières et organisateurs d’événements qui recherchent des agents de sécurité à Montpellier et dans l’Hérault (34) pour sécuriser leurs chantiers BTP, sites tertiaires, dépôts ou événements.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;agents de sécurité à Montpellier&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} conçoit et pilote des dispositifs d&apos;agents de sécurité pour
              les sites montpelliérains : postes fixes, rondes de sûreté, contrôle d&apos;accès
              et gestion des incidents.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Obtenez un devis agent de sécurité Montpellier
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos besoins de gardiennage et de surveillance
                à Montpellier et dans l&apos;Hérault (34).
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi recourir à des agents de sécurité à Montpellier ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi recourir à des agents de sécurité à Montpellier&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Un territoire en développement et des sites variés
            </h3>
            <p>
              Montpellier et sa métropole regroupent des chantiers BTP, des parcs
              d&apos;activités, des zones tertiaires, des équipements recevant du public et
              des zones logistiques. Les risques de vols, intrusions, dégradations ou
              agressions nécessitent la présence d&apos;
              <strong>agents de sécurité à Montpellier</strong> formés et encadrés.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Un dispositif humain complémentaire aux moyens techniques
            </h3>
            <p>
              Caméras de surveillance, détecteurs de mouvement et contrôle d&apos;accès
              constituent un socle technique important, mais ne remplacent pas la présence
              humaine. Les agents de sécurité assurent l&apos;accueil sécurisé, les rondes,
              la gestion des anomalies et l&apos;interface avec vos équipes et les secours.
            </p>
          </div>
        </section>

        {/* H2 : Nos prestations d'agents de sécurité à Montpellier */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Nos prestations d&apos;agents de sécurité à Montpellier
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Gardiennage de chantiers et sites tertiaires
            </h3>
            <p>
              {company.name} déploie des dispositifs d&apos;
              <strong>agents de sécurité à Montpellier</strong> pour surveiller les chantiers
              BTP, les immeubles tertiaires, les parcs d&apos;activités et les dépôts.
              Présence sur site, rondes, levées de doute sur alarme et contrôle des accès
              sont dimensionnés en fonction de vos contraintes opérationnelles.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Sécurité d&apos;événements et de sites recevant du public
            </h3>
            <p>
              Nos agents peuvent également intervenir lors d&apos;événements professionnels
              ou institutionnels, ainsi que sur des équipements recevant du public, en
              coordination avec vos équipes et, le cas échéant, avec des dispositifs de
              sécurité incendie et des agents SSIAP.
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Postes de contrôle d&apos;accès et d&apos;accueil sécurisé.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté et levées de doute, notamment la nuit.</span>
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

        {/* H2 : Tarifs et dimensionnement de vos agents à Montpellier */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Tarifs et dimensionnement de vos agents à Montpellier
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Le coût d&apos;un <strong>agent de sécurité à Montpellier</strong> varie selon
              l&apos;amplitude horaire, la nature du site, le niveau de risque et les
              compétences attendues (agent de sécurité simple, maître-chien, SSIAP, etc.).
              {` `}{company.name} privilégie une approche sur-mesure plutôt qu&apos;un tarif
              standard, afin de garantir un équilibre entre niveau de protection et
              contraintes budgétaires.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Demandez un devis agent de sécurité Montpellier
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ – Agents de sécurité à Montpellier */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Agents de sécurité à Montpellier
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Peut-on adapter le dispositif d&apos;agents en fonction des saisons ou de
                l&apos;activité&nbsp;?
              </p>
              <p>
                Oui. Il est fréquent d&apos;adapter le dispositif en fonction des pics
                d&apos;activité, de la saisonnalité ou de phases particulières (chantier,
                travaux, événements). Le dimensionnement peut être revu périodiquement en
                concertation avec vos équipes.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Les agents de sécurité peuvent-ils intervenir sur des sites isolés en
                périphérie de Montpellier&nbsp;?
              </p>
              <p>
                Oui, sous réserve d&apos;une analyse du risque et de la faisabilité
                opérationnelle. Des dispositifs spécifiques (rondes renforcées, équipes
                cynophiles) peuvent être envisagés pour ces sites isolés.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Un même prestataire peut-il gérer plusieurs sites sur Montpellier et
                alentour&nbsp;?
              </p>
              <p>
                C&apos;est précisément l&apos;intérêt de travailler avec un partenaire comme{' '}
                {company.name} : coordonner la sûreté de plusieurs sites (sièges, agences,
                dépôts, chantiers) avec un seul interlocuteur et une vision globale des
                risques.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité à Montpellier
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}