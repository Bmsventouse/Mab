import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité tournages & plateaux à Paris et en Île-de-France – Gardiennage & logistique',
  description:
    "MAB SECURITE sécurise vos tournages, plateaux et shootings à Paris et en Île-de-France : gardiennage de régie et de matériel, agents de sécurité plateaux, rondes de sûreté, protection des zones sensibles, en articulation avec la logistique et le ventousage gérés par des partenaires spécialisés.",
  canonicalPath: '/solutions/securite-evenementielle/securite-tournages-plateaux-paris',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Sécurité tournages & plateaux à Paris',
    path: '/solutions/securite-evenementielle/securite-tournages-plateaux-paris',
  },
]);

function getSecuriteTournagesPlateauxServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sécurité tournages & plateaux à Paris et en Île-de-France',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Dispositifs de sécurité pour tournages, plateaux et shootings à Paris et en Île-de-France : gardiennage de régie et de matériel, agents de sécurité spécialisés, contrôle d'accès, rondes de sûreté et protection des zones sensibles, en complément de la logistique et du ventousage assurés par des partenaires spécialisés.",
    areaServed: 'Paris et Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getSecuriteTournagesPlateauxFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pour quels types de tournages MAB SECURITE peut-elle intervenir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "MAB SECURITE intervient sur des tournages de longs métrages, séries, publicités, shootings photo, contenus digitaux et événements hybrides nécessitant un dispositif de sécurité pour les équipes, les décors, le matériel et les lieux utilisés.",
        },
      },
      {
        '@type': 'Question',
        name:
          'Comment sont articulées la sécurité du tournage et la logistique / ventousage des véhicules ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La sécurité est assurée par des agents de sécurité spécialisés (gardiennage de régie, contrôle d'accès, rondes) tandis que la logistique de stationnement, ventousage, affichage riverains et signalisation temporaire peut être prise en charge par un partenaire spécialisé comme BMS Ventouse. Les dispositifs sont coordonnés en amont avec la régie et la production.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel délai faut-il prévoir pour sécuriser un tournage ou un plateau à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Pour les tournages en rue ou dans des lieux sensibles, il est recommandé de nous solliciter plusieurs semaines avant la date prévue, afin de cadrer le besoin, visiter les lieux, ajuster les consignes et articuler la sécurité avec la logistique. Pour certains besoins plus simples, des délais plus courts peuvent être étudiés.",
        },
      },
    ],
  };
}

export default function SecuriteTournagesPlateauxParisPage() {
  const structuredData = [
    getSecuriteTournagesPlateauxServiceJsonLd(),
    getSecuriteTournagesPlateauxFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service Sécurité tournages & plateaux + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-evenementielle/securite-tournages-plateaux-paris',
            label: 'Sécurité tournages & plateaux à Paris',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Sécurité tournages & plateaux à Paris et en Île-de-France"
        badge="Tournages & plateaux · Paris & IDF"
        intro={`Cette page s’adresse aux régisseurs, productions, agences et directions de production qui organisent des tournages, plateaux et shootings à Paris ou en Île-de-France et souhaitent sécuriser leurs équipes, leurs décors et leur matériel. L’objectif : combiner gardiennage, sécurité plateaux et logistique de stationnement pour des opérations fluides et maîtrisées.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de sécurité pour un tournage ou un plateau&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} met en place des dispositifs de sécurité pour vos tournages,
              plateaux et shootings à Paris et en Île-de-France, en coordination avec vos
              régies et vos partenaires logistiques.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Parler de mon tournage avec MAB SECURITE
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour vos tournages, shootings et plateaux à Paris
                et en Île-de-France.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Enjeux de la sécurité pour vos tournages & plateaux */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Enjeux de la sécurité pour vos tournages &amp; plateaux
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Un tournage ou un plateau implique des équipes nombreuses, du matériel
              sensible, parfois des invités VIP et des prises de vue en extérieur ou en
              lieux occupés. La sécurité doit protéger les personnes et les biens sans
              alourdir vos contraintes de production.
            </p>
            <p>
              Un dispositif de <strong>sécurité tournage à Paris et en Île-de-France</strong>{' '}
              permet de limiter les intrusions, les vols de matériel, les dégradations et
              les incidents liés aux flux de personnes (curieux, riverains, public) tout en
              préservant l&apos;image de la production et la fluidité des opérations.
            </p>
          </div>
        </section>

        {/* H2 : Notre approche : sécurité plateaux + logistique & ventousage */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre approche : sécurité plateaux + logistique &amp; ventousage
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              {company.name} se concentre sur la <strong>sécurité humaine</strong> :
              gardiennage de régie, agents de sécurité plateaux, rondes de sûreté, contrôle
              d&apos;accès aux zones sensibles (loges, zones techniques, stockages,
              véhicules techniques, etc.).
            </p>
            <p>
              Pour la partie <strong>logistique, ventousage et stationnement</strong> (AOT,
              affichage riverains, signalisation temporaire, neutralisation de rues ou de
              parkings), nous pouvons, lorsque cela est pertinent, nous appuyer sur un
              partenaire spécialisé comme{' '}
              <a
                href="https://bmsventouse.fr"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                BMS Ventouse
              </a>
              . Cela permet de coordonner la sécurité et la logistique sans surcoûts
              d&apos;agence et avec des interlocuteurs identifiés pour chaque périmètre.
            </p>
          </div>
        </section>

        {/* H2 : Exemples de prestations pour la sécurité de vos tournages */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Exemples de prestations pour la sécurité de vos tournages
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Gardiennage de régie, loges, bus techniques et zones de stockage
                  (camions, flight-cases, décors, matériels sensibles).
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Agents de sécurité plateaux pour le contrôle d&apos;accès, la gestion des
                  flux, la protection des zones caméra et la prévention des intrusions.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Rondes de sûreté de nuit sur les lieux de tournage ou de stockage, avec
                  levées de doute en cas d&apos;alarme ou de suspicion d&apos;intrusion.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Coordination avec la régie, la production et les prestataires logistiques
                  (ventousage, convoyage, signalisation) pour garantir la cohérence globale
                  du dispositif.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : FAQ – Sécurité tournages & plateaux */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Sécurité tournages &amp; plateaux
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Pour quels types de tournages intervenez-vous&nbsp;?
              </p>
              <p>
                Nous intervenons sur des tournages de long métrage, séries, fictions
                télévisées, publicités, shootings photo et contenus digitaux, ainsi que sur
                certains événements hybrides mêlant captation et public.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Pouvez-vous sécuriser un tournage nécessitant une neutralisation de rue&nbsp;?
              </p>
              <p>
                Oui, en coordination avec vos prestataires logistiques. Nous assurons le
                gardiennage, la présence d&apos;agents de sécurité et la gestion des flux,
                tandis que des partenaires spécialisés peuvent prendre en charge le
                ventousage, la signalisation et l&apos;affichage riverains.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                À quel moment faut-il vous solliciter pour un tournage&nbsp;?
              </p>
              <p>
                Idéalement dès la phase de repérage ou de préparation, afin de prendre en
                compte les contraintes de sécurité et de stationnement dans le plan de
                tournage. Nous pouvons toutefois étudier des demandes dans des délais plus
                courts, selon la configuration du projet.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe pour sécuriser un tournage ou un plateau
            </Link>
          </div>
        </section>

        {/* H2 : Ressources et partenaires */}
        <section className="mt-6 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Ressources et partenaires pour vos tournages &amp; productions
          </p>
          <p>
            Pour compléter votre dispositif, vous pouvez consulter&nbsp;:
          </p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              la page{' '}
              <Link
                href="/gardiennage-chantiers-btp-paris"
                className="underline-offset-2 hover:underline"
              >
                gardiennage de chantiers BTP à Paris
              </Link>
              , si vos tournages se déroulent sur des sites en travaux ou des
              environnements industriels ;
            </li>
            <li>
              nos offres de{' '}
              <Link
                href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
                className="underline-offset-2 hover:underline"
              >
                vidéosurveillance d&apos;entreprise à Paris
              </Link>
              , pour sécuriser durablement vos sites de production ou de stockage ;
            </li>
            <li>
              les prestations de ventousage et logistique proposées par notre partenaire{' '}
              <a
                href="https://bmsventouse.fr"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                BMS Ventouse
              </a>
              , pour la réservation de stationnement, l&apos;affichage riverains et la
              signalisation temporaire de vos tournages.
            </li>
          </ul>
        </section>
      </ServicePageTemplate>
    </>
  );
}