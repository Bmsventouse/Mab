import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Audit de sûreté de siège social à Paris – Analyse & plan d’actions',
  description:
    "MAB SECURITE réalise des audits de sûreté de sièges sociaux à Paris et en Île-de-France : analyse des accès, des flux, des dispositifs de sécurité existants et élaboration d'un plan d’actions priorisé pour renforcer la protection de vos équipes et de vos actifs.",
  canonicalPath: '/solutions/expertise-conseil/audit-surete-siege-social-paris',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  {
    name: 'Audit de sûreté de siège social à Paris',
    path: '/solutions/expertise-conseil/audit-surete-siege-social-paris',
  },
]);

function getAuditSiegeSocialServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Audit de sûreté de siège social à Paris',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Audit de sûreté pour sièges sociaux implantés à Paris et en Île-de-France : analyse des accès, des flux, des procédures de sécurité, articulation avec la vidéosurveillance, le gardiennage et les obligations SSIAP.",
    areaServed: 'Paris et Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getAuditSiegeSocialFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Pourquoi réaliser un audit de sûreté de siège social à Paris ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un audit de sûreté de siège social à Paris permet d'identifier les vulnérabilités relatives aux accès, aux flux de personnes, aux zones sensibles et aux dispositifs existants (gardiennage, vidéosurveillance, contrôle d'accès, SSIAP) afin de prioriser les actions à mener pour réduire les risques.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle est la durée d'un audit de sûreté de siège social ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La durée d'un audit de sûreté dépend de la taille du siège social, du nombre de sites concernés et du niveau de détail attendu. Elle peut aller de quelques jours pour un site unique à plusieurs semaines pour un patrimoine immobilier étendu.",
        },
      },
      {
        '@type': 'Question',
        name: "Que contient un rapport d'audit de sûreté ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un rapport d'audit de sûreté comprend généralement une description du contexte, un état des lieux des dispositifs existants, une analyse des risques, des recommandations détaillées et un plan d'actions priorisé assorti, le cas échéant, d'estimations budgétaires.",
        },
      },
    ],
  };
}

export default function AuditSureteSiegeSocialParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service Audit de sûreté de siège social à Paris
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAuditSiegeSocialServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ Audit de sûreté de siège social à Paris
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAuditSiegeSocialFaqJsonLd()) }}
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
            href: '/solutions/expertise-conseil/audit-surete-siege-social-paris',
            label: 'Audit de sûreté de siège social à Paris',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Audit de sûreté de siège social à Paris : clarifier les risques et prioriser les actions"
        badge="Expertise & conseil · Paris"
        intro={`Cette page s’adresse aux directions générales, directions immobilières, directions de la sûreté et services généraux qui pilotent un siège social à Paris ou en Île-de-France et souhaitent disposer d’un diagnostic structuré de leur niveau de sûreté. L’objectif : comprendre les risques, qualifier les scénarios critiques et disposer d’un plan d’actions concret pour renforcer la protection des équipes, des actifs et des informations sensibles.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un audit de sûreté pour votre siège social parisien&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} réalise des audits de sûreté sur mesure, en prenant en compte
              les spécificités de votre organisation (sites uniques, campus, immeubles
              multi-occupants, directions régionales, etc.).
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez votre audit de sûreté de siège social
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour les sièges sociaux situés à Paris, La Défense
                et en Île-de-France.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi réaliser un audit de sûreté de siège social à Paris ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi réaliser un audit de sûreté de siège social à Paris&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Les sièges sociaux parisiens concentrent des enjeux majeurs : direction
              générale, fonctions stratégiques, données sensibles, visiteurs et prestataires
              nombreux, accès multiples et parfois une forte exposition médiatique. Un
              incident de sûreté (intrusion, vol de matériel, agression, dégradation,
              atteinte à l&apos;image) peut avoir des conséquences importantes sur la
              continuité d&apos;activité et la réputation de l&apos;organisation.
            </p>
            <p>
              Un <strong>audit de sûreté de siège social</strong> permet de dépasser les
              perceptions subjectives pour disposer d&apos;un diagnostic structuré, partagé
              et argumenté, qui facilitera les arbitrages budgétaires et la priorisation des
              actions à mener.
            </p>
          </div>
        </section>

        {/* H2 : Notre méthodologie d’audit de sûreté */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre méthodologie d&apos;audit de sûreté
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              1. Cadrage et recueil documentaire
            </h3>
            <p>
              L&apos;audit commence par un cadrage avec vos équipes (DG, sûreté, services
              généraux, IT, HSE) et par le recueil des documents existants : plans, procédures
              d&apos;accès, contrats de gardiennage, conventions avec la télésurveillance,
              documents liés à la sécurité incendie (SSIAP), etc.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              2. Visite de site et analyse des flux
            </h3>
            <p>
              Nous réalisons une visite détaillée du siège social : accès piétons et
              véhicules, parkings, halls, plateaux de bureaux, zones sensibles (locaux
              techniques, salles serveurs, salles de réunion stratégiques), circuits des
              visiteurs et prestataires. L&apos;objectif est de comprendre comment le site
              vit réellement au quotidien.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              3. Cartographie des risques et scénarios critiques
            </h3>
            <p>
              Sur la base de ces observations, nous identifions les scénarios de risque
              principaux : intrusion, vol ciblé, agression, intrusion de nuit, exploitation
              des faiblesses d&apos;accès, etc. Ces scénarios sont croisés avec vos enjeux
              métier pour prioriser les zones à traiter.
            </p>
          </div>
        </section>

        {/* H2 : Livrables et plan d’actions priorisé */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Livrables et plan d&apos;actions priorisé
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              À l&apos;issue de l&apos;audit, vous disposez d&apos;un rapport structuré
              comprenant les constats, les risques identifiés et des recommandations
              détaillées. Chaque action est positionnée dans le temps (court, moyen, long
              terme) et, lorsque cela est possible, assortie d&apos;ordres de grandeur
              budgétaires.
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Ajustements organisationnels (procédures d&apos;accès, accueil, gestion des
                  visiteurs et prestataires).
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Évolutions des dispositifs humains (postes de gardiennage, rondes,
                  articulation avec la sécurité incendie et les services SSIAP).
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Renforcement des dispositifs techniques (contrôle d&apos;accès,
                  vidéosurveillance, alarmes) en cohérence avec vos standards IT et RGPD.
                </span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-400">
              L&apos;audit peut être articulé avec la mise en place de dispositifs de{' '}
              <Link
                href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
                className="underline-offset-2 hover:underline"
              >
                vidéosurveillance d&apos;entreprise à Paris
              </Link>{' '}
              et de{' '}
              <Link
                href="/solutions/securite-humaine/gardiennage-ile-de-france"
                className="underline-offset-2 hover:underline"
              >
                gardiennage en Île-de-France
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 : FAQ – Audit de sûreté de siège social à Paris */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Audit de sûreté de siège social à Paris
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quand est-il pertinent de lancer un audit de sûreté de siège social&nbsp;?
              </p>
              <p>
                Un audit est particulièrement utile lors d&apos;un déménagement de siège,
                d&apos;une réorganisation, après un incident marquant ou lorsqu&apos;un
                dispositif historique n&apos;a pas été revisité depuis plusieurs années.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Qui doit être impliqué côté client pendant l&apos;audit&nbsp;?
              </p>
              <p>
                Idéalement, la direction générale ou la direction de site, la sûreté ou les
                services généraux, la DSI, le cas échéant la direction juridique / RGPD et
                les responsables de la maintenance et des prestataires de sécurité.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                L&apos;audit aboutit-il toujours à des investissements lourds&nbsp;?
              </p>
              <p>
                Pas nécessairement. De nombreuses actions peuvent concerner l&apos;organisation,
                les procédures, l&apos;exploitation des dispositifs existants ou les
                contrats de services. L&apos;objectif est de prioriser les actions à impact,
                qu&apos;elles soient organisationnelles ou techniques.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe pour un audit de sûreté de siège social
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}