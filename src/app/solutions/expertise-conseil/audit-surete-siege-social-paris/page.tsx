import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Audit de sûreté de siège social à Paris – Évaluer le niveau de sécurité',
  description:
    "MAB SECURITE accompagne les directions générales et directions de la sûreté dans l'audit de sûreté de leur siège social à Paris et en Île-de-France : cartographie des risques, analyse des accès, procédures, dispositifs humains et électroniques.",
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
      'Audit de sûreté complet pour les sièges sociaux et immeubles tertiaires à Paris et en Île-de-France : évaluation des risques, accès, flux, procédures et dispositifs de sécurité.',
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
        name: 'À quoi sert un audit de sûreté de siège social à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un audit de sûreté de siège social permet d'évaluer de manière structurée le niveau de sécurité d'un site stratégique (bureaux, direction, fonctions support). Il identifie les vulnérabilités liées aux accès, aux flux de personnes, aux zones sensibles et aux procédures internes, puis propose des actions prioritaires pour réduire les risques de malveillance, de vol ou d'intrusion.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment se déroule un audit de sûreté d'entreprise ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un audit de sûreté d'entreprise se déroule généralement en plusieurs étapes : cadrage avec la direction, visites sur site, entretiens avec les parties prenantes, analyse documentaire (plans, procédures, incidents passés), identification des scénarios de risque et formulation de recommandations opérationnelles. Il peut être complété par des tests d'intrusion ou des exercices de gestion de crise.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quelle différence entre un audit de sûreté et un audit de sécurité incendie ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "L'audit de sûreté se concentre principalement sur les risques de malveillance, d'intrusion, de vol, de sabotage ou de menace sur les personnes. L'audit de sécurité incendie vise les risques liés au feu, à l'évacuation et au fonctionnement des installations de sécurité incendie. Dans les sièges sociaux et IGH, les deux approches sont complémentaires et peuvent être articulées dans une démarche globale.",
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
        // JSON-LD pour le service d'audit de sûreté de siège social
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAuditSiegeSocialServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ audit de sûreté de siège social
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
        h1="Audit de sûreté de siège social à Paris : évaluer votre niveau de sécurité"
        badge="Expertise &amp; conseil · Sûreté · Paris"
        intro={`Cette page s’adresse aux directions générales, directions de la sûreté, directions immobilières et services généraux qui souhaitent évaluer le niveau de sécurité de leur siège social à Paris ou en Île-de-France. L’objectif est de disposer d’une vision claire des risques, des vulnérabilités et des priorités d’action, avant de renforcer ou de transformer le dispositif de sûreté existant.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un audit de sûreté pour votre siège social à Paris&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} réalise des audits de sûreté de sièges sociaux et d&apos;immeubles
              tertiaires : analyse des accès, des flux, des procédures, des dispositifs humains
              et électroniques et de la posture globale de sûreté.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez votre audit de sûreté gratuit
              </Link>
              <p className="text-[11px] text-slate-400">
                Possibilité de devis personnalisé sous 24&nbsp;heures pour un audit sur un ou
                plusieurs sites (siège social, sites secondaires, entrepôts).
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi réaliser un audit de sûreté de votre siège social à Paris ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi réaliser un audit de sûreté de votre siège social à Paris&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Un site stratégique pour l&apos;entreprise
            </h3>
            <p>
              Le siège social concentre des enjeux majeurs&nbsp;: équipes de direction, fonctions
              support, systèmes d&apos;information, données sensibles, voire des zones techniques
              critiques. Un incident (intrusion, vol, agression, sabotage) peut avoir un impact
              direct sur la continuité d&apos;activité, l&apos;image de l&apos;entreprise et la
              confiance des équipes.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Comprendre les risques avant d&apos;investir
            </h3>
            <p>
              Avant de multiplier les investissements dans la technologie ou le gardiennage, il
              est utile de disposer d&apos;une vision structurée des risques et des priorités. Un{' '}
              <strong>audit de sûreté de siège social</strong> fournit un diagnostic argumenté,
              hiérarchise les vulnérabilités et permet d&apos;arbitrer entre différentes options&nbsp;:
              forces de sécurité humaine, <strong>vidéosurveillance d&apos;entreprise</strong>,
              contrôle d&apos;accès, renforcement organisationnel ou mise à jour des procédures.
            </p>
          </div>
        </section>

        {/* H2 : Comment se déroule un audit de sûreté de siège social ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Comment se déroule un audit de sûreté de siège social&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Cadrage et collecte d&apos;informations
            </h3>
            <p>
              La première étape consiste à cadrer le périmètre et les objectifs de l&apos;audit&nbsp;:
              type de siège social (mono-site, multi-sites), profil d&apos;activité, incidents
              passés, contraintes réglementaires et attentes de la direction. {company.name}{' '}
              analyse la documentation disponible (plans, procédures, consignes de sécurité,
              plan de continuité d&apos;activité) et identifie les parties prenantes à rencontrer.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Visites sur site et entretiens
            </h3>
            <p>
              L&apos;équipe d&apos;audit réalise des visites sur site pour observer concrètement les
              accès, les flux (salariés, visiteurs, prestataires), les dispositifs existants
              (accueil, contrôle d&apos;accès, gardiennage, vidéosurveillance, SSIAP) et les zones
              sensibles. Des entretiens peuvent être menés avec la direction, la sûreté, les
              services généraux et, si besoin, des représentants du personnel.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Analyse, scénarios et recommandations
            </h3>
            <p>
              Sur la base des constats, {company.name} structure un diagnostic qui met en
              évidence les points forts et les vulnérabilités, puis propose des scénarios
              d&apos;amélioration. Ces recommandations peuvent inclure des mesures
              organisationnelles, le renforcement de la <strong>sécurité humaine</strong>, des
              évolutions en vidéosurveillance ou contrôle d&apos;accès, ainsi que des liens avec
              votre <strong>plan de gestion de crise</strong> et votre plan de continuité
              d&apos;activité.
            </p>
          </div>
        </section>

        {/* H2 : MAB Sécurité : un partenaire pour l'audit et la mise en œuvre */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            {company.name}&nbsp;: un partenaire pour l&apos;audit et la mise en œuvre
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              De l&apos;analyse à la mise en place des mesures
            </h3>
            <p>
              L&apos;objectif de l&apos;audit n&apos;est pas seulement de produire un rapport, mais
              de permettre à la direction de prendre des décisions opérationnelles. {company.name}{' '}
              peut accompagner la mise en œuvre des mesures recommandées&nbsp;: ajustement des
              contrats de gardiennage, renforcement des rondes de sûreté, mise à niveau de la
              vidéosurveillance, mise en place de procédures d&apos;accueil plus robustes.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Coordination avec la sécurité incendie et les obligations SSIAP
            </h3>
            <p>
              Dans les sièges sociaux parisiens, notamment lorsqu&apos;ils se trouvent dans des
              IGH ou des ensembles complexes, la sûreté et la sécurité incendie sont étroitement
              liées. {company.name} peut articuler l&apos;audit de sûreté avec l&apos;analyse
              de votre dispositif SSIAP ou vous orienter vers la page dédiée aux{' '}
              <Link
                href="/solutions/securite-incendie/agent-ssiap-igh-paris"
                className="underline-offset-2 hover:underline"
              >
                obligations SSIAP en IGH à Paris
              </Link>
              .
            </p>
            <p className="text-[11px] text-slate-400">
              Pour préparer concrètement cette démarche d&apos;audit, vous pouvez également consulter notre
              guide dédié&nbsp;:&nbsp;
              <Link
                href="/guides/preparer-audit-surete-siege-social"
                className="underline-offset-2 hover:underline"
              >
                préparer un audit de sûreté de siège social
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 : Sanctions, responsabilités et enjeux d'image */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Sanctions, responsabilités et enjeux d&apos;image
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Un incident de sûreté mal géré dans un siège social (intrusion, agression,
              fuite d&apos;information, atteinte aux personnes) peut avoir des conséquences
              importantes pour l&apos;entreprise&nbsp;: impact médiatique, perte de confiance
              des équipes, perturbation de l&apos;activité et, dans certains cas, engagement de
              la responsabilité des dirigeants. Structurer une démarche d&apos;audit de sûreté
              permet d&apos;anticiper ces risques et de démontrer un niveau de diligence
              raisonnable.
            </p>
            <p>
              L&apos;objectif n&apos;est pas de tendre vers un risque zéro, mais de mettre en
              place un dispositif de sécurité proportionné, clair et partagé, en cohérence avec
              la culture de l&apos;entreprise et les obligations réglementaires.
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
                À quelle fréquence faut-il réaliser un audit de sûreté de siège social&nbsp;?
              </p>
              <p>
                Il n&apos;existe pas de fréquence unique valable pour tous les sites. En
                pratique, un audit complet tous les 3 à 5 ans, complété par des revues
                intermédiaires lors de changements significatifs (réorganisation, travaux,
                incidents, changement de prestataire), permet de maintenir un niveau de sûreté
                cohérent avec l&apos;évolution des risques.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Qui doit être impliqué dans l&apos;audit de sûreté de siège social&nbsp;?
              </p>
              <p>
                La démarche gagne à impliquer plusieurs acteurs&nbsp;: direction générale,
                direction de la sûreté ou QSE, services généraux, direction des ressources
                humaines, DSI (pour les aspects liés à la sécurité des systèmes d&apos;information)
                et, parfois, des représentants du personnel. Cela permet d&apos;avoir une vision
                globale et de faciliter l&apos;appropriation des mesures proposées.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Un audit de sûreté peut-il couvrir plusieurs sites en même temps&nbsp;?
              </p>
              <p>
                Oui. De nombreuses entreprises disposent d&apos;un siège social et de plusieurs
                sites secondaires (bureaux régionaux, entrepôts, sites de production). Il est
                possible de définir un périmètre d&apos;audit multi-sites, avec une analyse
                commune et des déclinaisons spécifiques par site.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre expert sûreté à Paris
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}