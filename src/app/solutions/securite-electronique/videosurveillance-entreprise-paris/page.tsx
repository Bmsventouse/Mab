import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "Vidéosurveillance d'entreprise à Paris – Audit, conception & déploiement",
  description:
    "MAB SECURITE accompagne les entreprises parisiennes dans la mise en place de dispositifs de vidéosurveillance : audit de sûreté, conception du système, choix des caméras, intégration à votre dispositif de sécurité et accompagnement RGPD.",
  canonicalPath: '/solutions/securite-electronique/videosurveillance-entreprise-paris',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: "Vidéosurveillance d'entreprise à Paris",
    path: '/solutions/securite-electronique/videosurveillance-entreprise-paris',
  },
]);

function getVideoSurveillanceServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: "Vidéosurveillance d'entreprise à Paris",
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Audit, conception et déploiement de dispositifs de vidéosurveillance pour les entreprises implantées à Paris et en Île-de-France : caméras, enregistreurs, supervision et intégration à votre dispositif de sûreté.",
    areaServed: 'Paris et Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getVideoSurveillanceFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          "Comment concevoir un système de vidéosurveillance pour une entreprise à Paris ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La conception d'un système de vidéosurveillance pour une entreprise à Paris passe par un audit préalable : cartographie des zones sensibles, définition des objectifs (prévention des intrusions, levée de doute, protection des accès, parkings, réserves), choix des emplacements de caméras, dimensionnement du stockage et modalités d'exploitation des images.",
        },
      },
      {
        '@type': 'Question',
        name: "La vidéosurveillance d'entreprise à Paris est-elle compatible avec le RGPD ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Oui, à condition de respecter les règles applicables : finalités déterminées, information des personnes, proportionnalité des moyens, durée de conservation limitée, sécurisation des accès aux images et tenue d'une documentation adaptée. Un accompagnement permet de concilier exigences de sûreté et conformité RGPD.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quel est le coût d'un dispositif de vidéosurveillance pour un site professionnel à Paris ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le coût d'un dispositif de vidéosurveillance dépend du nombre de caméras, de la complexité du site, du type de matériel (caméras fixes, dômes, infrarouges), des options de stockage et de supervision. Un audit de sûreté permet d'ajuster le dispositif au juste besoin et d'établir un devis détaillé.",
        },
      },
    ],
  };
}

export default function VideoSurveillanceEntrepriseParisPage() {
  const structuredData = [
    getVideoSurveillanceServiceJsonLd(),
    getVideoSurveillanceFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : service vidéosurveillance + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/solutions', label: 'Solutions' },
          {
            href: '/solutions/securite-electronique/videosurveillance-entreprise-paris',
            label: "Vidéosurveillance d'entreprise à Paris",
          },
        ]}
      />
      <ServicePageTemplate
        h1="Vidéosurveillance d'entreprise à Paris : audit, conception et déploiement"
        badge="Sécurité électronique · Paris"
        intro={`Cette page s’adresse aux directions immobilières, directions de la sûreté, DSI et responsables de sites basés à Paris ou en Île-de-France qui souhaitent mettre en place ou faire évoluer un dispositif de vidéosurveillance d’entreprise. L’objectif : renforcer la sûreté de vos bâtiments (sièges sociaux, sites tertiaires, entrepôts, parkings) tout en respectant les contraintes réglementaires, opérationnelles et RGPD.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de vidéosurveillance pour un site à Paris ?
            </p>
            <p className="text-slate-300">
              {company.name} vous accompagne depuis l&apos;audit de sûreté jusqu&apos;au
              déploiement du système de vidéosurveillance et à son articulation avec votre
              dispositif de sécurité humaine et vos procédures internes.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez un audit vidéosurveillance à Paris
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour les sièges sociaux, sites tertiaires et sites
                sensibles situés à Paris et en Île-de-France.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi mettre en place une vidéosurveillance d'entreprise à Paris ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi mettre en place une vidéosurveillance d&apos;entreprise à Paris&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              À Paris et en Île-de-France, de nombreux sites concentrent des enjeux forts :
              sièges sociaux, immeubles tertiaires, entrepôts, parkings, sites techniques,
              surfaces commerciales. La vidéosurveillance permet de renforcer la dissuasion,
              d&apos;améliorer la détection des incidents et de faciliter les levées de doute
              en complément de vos dispositifs de gardiennage et de contrôle d&apos;accès.
            </p>
            <p>
              Un dispositif de <strong>vidéosurveillance d&apos;entreprise à Paris</strong>{' '}
              doit cependant rester proportionné, maîtrisé et documenté, en particulier au
              regard des règles de protection des données (RGPD) et des droits des
              salariés. L&apos;enjeu est donc de trouver le bon équilibre entre sûreté,
              conformité et acceptabilité par les équipes.
            </p>
          </div>
        </section>

        {/* H2 : Notre approche : audit, conception et intégration à votre dispositif de sûreté */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre approche : audit, conception et intégration à votre dispositif de sûreté
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Audit de sûreté et analyse de l&apos;existant
            </h3>
            <p>
              {company.name} commence par un audit de sûreté : cartographie des zones
              sensibles (accès, halls, parkings, espaces de stockage, zones techniques),
              analyse des incidents passés, revue des moyens existants (caméras,
              enregistreurs, contrôle d&apos;accès, gardiennage) et des procédures internes.
              Ce diagnostic permet de définir un socle de <strong>vidéosurveillance</strong>{' '}
              adapté à votre siège social ou à vos sites parisiens.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Conception du système et choix des emplacements de caméras
            </h3>
            <p>
              À partir de cet audit, nous proposons une architecture cible : types de
              caméras (fixes, dômes, infrarouges), zones couvertes, angles de vue, règles
              de conservation des images, supervision et accès aux enregistrements. Les
              plans d&apos;implantation sont élaborés avec vos équipes et vos prestataires
              techniques afin de ne pas perturber le fonctionnement quotidien de vos
              services.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Intégration aux procédures de sûreté et accompagnement RGPD
            </h3>
            <p>
              Le dispositif de vidéosurveillance est intégré à vos procédures de sûreté :
              levée de doute, escalade, gestion des accès en dehors des heures ouvrées,
              coordination avec vos agents de sécurité et, le cas échéant, votre
              télésurveillance. Nous pouvons également vous accompagner sur la partie
              conformité : information des salariés et des visiteurs, documentation des
              finalités, durée de conservation et gestion des droits d&apos;accès aux
              images.
            </p>
          </div>
        </section>

        {/* H2 : Exemples de cas d'usage pour vos sites à Paris et en IDF */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Exemples de cas d&apos;usage pour vos sites à Paris et en Île-de-France
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Surveillance des accès et parkings d&apos;un siège social ou d&apos;un
                  immeuble tertiaire à Paris La Défense.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Vidéosurveillance de zones de stockage, quais de livraison et zones
                  sensibles dans un entrepôt ou une plateforme logistique.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Couverture vidéo renforcée de halls, accueils et zones recevant du public
                  pour faciliter les levées de doute et sécuriser les équipes d&apos;accueil.
                </span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Pour une approche globale, la vidéosurveillance peut être articulée avec nos
              prestations de{' '}
              <Link
                href="/solutions/securite-humaine/gardiennage-ile-de-france"
                className="underline-offset-2 hover:underline"
              >
                gardiennage en Île-de-France
              </Link>{' '}
              et nos{' '}
              <Link
                href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
                className="underline-offset-2 hover:underline"
              >
                audits de sûreté de siège social à Paris
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 : FAQ – Vidéosurveillance d'entreprise à Paris */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Vidéosurveillance d&apos;entreprise à Paris
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Comment concevoir un système de vidéosurveillance pour une entreprise à
                Paris&nbsp;?
              </p>
              <p>
                La conception passe par un audit des risques et des flux, puis par la
                définition des zones à couvrir, des types de caméras et des modalités de
                stockage et de supervision. L&apos;idée n&apos;est pas de tout filmer, mais
                de cibler les points à enjeux (accès, parkings, zones sensibles) et de
                définir des procédures de traitement des images.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                La vidéosurveillance est-elle compatible avec le RGPD&nbsp;?
              </p>
              <p>
                Oui, si les principes de proportionnalité, de transparence et de sécurité
                sont respectés. Cela implique d&apos;informer les personnes filmées, de
                limiter la durée de conservation des images, de contrôler les accès aux
                enregistrements et de documenter les finalités du dispositif.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quel budget prévoir pour un dispositif de vidéosurveillance d&apos;entreprise
                à Paris&nbsp;?
              </p>
              <p>
                Le budget dépend du nombre de caméras, de la complexité architecturale, des
                contraintes techniques (nuit, extérieur, zones étendues) et du niveau de
                service attendu. Un échange préalable permet de cadrer le besoin et de
                proposer un scénario technique avec un devis détaillé.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe vidéosurveillance à Paris
            </Link>
          </div>
        </section>

        <section className="mt-6 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Guides et ressources pour compléter votre projet de vidéosurveillance
          </p>
          <p>
            Pour préparer ou compléter votre projet, vous pouvez également consulter&nbsp;:
          </p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>
              le guide{' '}
              <Link
                href="/guides/preparer-audit-surete-siege-social"
                className="underline-offset-2 hover:underline"
              >
                préparer un audit de sûreté de siège social
              </Link>
              , utile si vos enjeux portent aussi sur la protection globale du siège ;
            </li>
            <li>
              la page{' '}
              <Link
                href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
                className="underline-offset-2 hover:underline"
              >
                audit de sûreté de siège social à Paris
              </Link>
              , lorsque vous souhaitez cadrer en amont la stratégie de sûreté de vos sites ;
            </li>
            <li>
              nos offres de{' '}
              <Link
                href="/solutions/securite-humaine/gardiennage-ile-de-france"
                className="underline-offset-2 hover:underline"
              >
                gardiennage en Île-de-France
              </Link>
              , pour articuler vidéosurveillance et présence d&apos;agents de sécurité.
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
            >
              Discuter d&apos;un projet vidéosurveillance à Paris
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}