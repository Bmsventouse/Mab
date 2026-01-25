import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité entrepôts & plateformes logistiques – Gardiennage & surveillance',
  description:
    "MAB SECURITE sécurise vos entrepôts et plateformes logistiques : agents de sécurité, gardiennage 24/7, rondes de sûreté, contrôle d'accès, surveillance des quais et des zones de stockage pour réduire les vols et incidents.",
  canonicalPath: '/solutions/securite-humaine/securite-entrepots-logistiques',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Sécurité entrepôts & plateformes logistiques',
    path: '/solutions/securite-humaine/securite-entrepots-logistiques',
  },
]);

function getSecuriteEntrepotsLogistiquesServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sécurité entrepôts et plateformes logistiques',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Dispositifs de gardiennage et de surveillance humaine pour entrepôts, plateformes logistiques et zones de stockage.',
    areaServed:
      'Paris et Île-de-France, Marseille et Bouches-du-Rhône, Montpellier et Hérault, Nîmes et Gard, côte sud',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed:
        'Paris et Île-de-France, Marseille et Bouches-du-Rhône, Montpellier et Hérault, Nîmes et Gard, côte sud',
    },
  };
}

function getSecuriteEntrepotsLogistiquesFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quels sont les enjeux de la sécurité pour un entrepôt ou une plateforme logistique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un entrepôt ou une plateforme logistique concentre des stocks de valeur et des flux importants de marchandises et de véhicules. Les enjeux de sécurité portent sur la prévention des vols, la maîtrise des accès, la protection des équipes et la continuité d'activité, notamment en horaires décalés.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Comment dimensionner un dispositif de gardiennage pour un entrepôt logistique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le dimensionnement dépend de la surface, du nombre d'accès, des horaires d'activité, de la sensibilité des marchandises et de l'historique des incidents. Un audit de sûreté permet d'identifier les zones critiques et de déterminer le nombre d'agents de sécurité, les rondes de sûreté et les points de contrôle à mettre en place.",
        },
      },
      {
        '@type': 'Question',
        name:
          'Comment articuler sécurité humaine et vidéosurveillance dans un entrepôt ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La vidéosurveillance permet de couvrir de larges zones et d'appuyer les agents de sécurité dans leurs missions. L'enjeu est d'articuler les rondes, les postes fixes et les systèmes de caméras pour optimiser la détection, la levée de doute et l'intervention, en lien avec les procédures internes et la télésurveillance le cas échéant.",
        },
      },
    ],
  };
}

export default function SecuriteEntrepotsLogistiquesPage() {
  const structuredData = [
    getSecuriteEntrepotsLogistiquesServiceJsonLd(),
    getSecuriteEntrepotsLogistiquesFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service entrepôts & plateformes + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-humaine/securite-entrepots-logistiques',
            label: 'Sécurité entrepôts & plateformes logistiques',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Sécurité entrepôts & plateformes logistiques : gardiennage et surveillance"
        badge="Sécurité humaine · Entrepôts & logistique"
        intro={`Cette page s’adresse aux responsables logistiques, directions industrielles et directions de la sûreté qui exploitent des entrepôts, plateformes logistiques ou zones de stockage et qui souhaitent sécuriser leurs sites contre les intrusions, vols et incidents, tout en préservant la fluidité des opérations.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de sécurité pour un entrepôt ou une plateforme
              logistique&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} conçoit des dispositifs de gardiennage et de surveillance adaptés
              aux contraintes des entrepôts et plateformes logistiques : flux de camions,
              circulation interne, zones de stockage, horaires décalés.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Obtenez un devis sécurité entrepôt / plateforme
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos sites logistiques en Île-de-France et en
                région.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Enjeux de la sécurité pour les entrepôts et plateformes logistiques */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Enjeux de la sécurité pour les entrepôts et plateformes logistiques
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Stocks de valeur et continuité d&apos;activité
            </h3>
            <p>
              Les entrepôts et plateformes logistiques concentrent des stocks de forte valeur,
              des flux importants et des contraintes de délais. Un incident de sécurité
              (intrusion, vol, dégradation, agression) peut avoir des conséquences directes
              sur la continuité d&apos;activité, la satisfaction des clients et l&apos;image de
              l&apos;entreprise.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Multiplicité des accès et zones sensibles
            </h3>
            <p>
              Les sites logistiques disposent souvent de multiples points d&apos;accès
              (portails, quais, issues de secours, accès piétons) et de zones sensibles
              (stocks à forte valeur, zones de préparation, locaux techniques). Un dispositif
              de <strong>sécurité entrepôt</strong> doit prendre en compte cette
              configuration pour définir les priorités de surveillance et de contrôle.
            </p>
          </div>
        </section>

        {/* H2 : Notre approche pour sécuriser vos sites logistiques */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre approche pour sécuriser vos sites logistiques
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Audit de sûreté et définition du dispositif
            </h3>
            <p>
              {company.name} commence par un audit de sûreté du site : analyse des accès,
              flux de camions et de piétons, zones de stockage, historique des incidents.
              Cette analyse permet de proposer un dispositif de{' '}
              <strong>gardiennage entrepôt</strong> adapté : postes fixes, rondes de sûreté,
              levées de doute sur alarme, gestion des accès.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Articulation avec la vidéosurveillance et la télésurveillance
            </h3>
            <p>
              La sécurité humaine est articulée avec la vidéosurveillance et, le cas échéant,
              la télésurveillance. Les agents peuvent effectuer des levées de doute sur
              déclenchement d&apos;alarme, vérifier les zones identifiées par les caméras et
              coordonner leurs actions avec votre PC sécurité ou votre centre de
              télésurveillance.
            </p>
          </div>
        </section>

        {/* H2 : Exemple de prestations pour entrepôts et plateformes logistiques */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Exemple de prestations pour entrepôts et plateformes logistiques
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Postes de garde à l&apos;entrée principale et aux quais.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Contrôle des accès véhicules et piétons.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté dans les zones de stockage et abords.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Levées de doute sur alarme et compte-rendus d&apos;intervention.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : FAQ – Sécurité entrepôts & plateformes logistiques */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Sécurité entrepôts & plateformes logistiques
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quel est le délai de mise en place d&apos;un dispositif sur un entrepôt&nbsp;?
              </p>
              <p>
                Le délai dépend de l&apos;urgence, du nombre de postes à couvrir et de la
                complexité du site. Pour un entrepôt ou une plateforme logistique, un
                minimum de préparation est recommandé pour définir les consignes, les
                procédures d&apos;accès et le dimensionnement du dispositif.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Un même prestataire peut-il sécuriser plusieurs entrepôts d&apos;un réseau&nbsp;?
              </p>
              <p>
                Oui. Travailler avec un prestataire unique pour plusieurs entrepôts permet
                d&apos;harmoniser les procédures, de centraliser le reporting et de bénéficier
                d&apos;une meilleure visibilité globale sur les incidents et les risques.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité logistique
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}