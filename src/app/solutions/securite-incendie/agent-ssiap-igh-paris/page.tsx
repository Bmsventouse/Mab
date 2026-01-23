import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../content/company';
import { ServicePageTemplate } from '../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Obligations SSIAP en IGH à Paris : le guide complet 2026',
  description:
    "Guide complet des obligations SSIAP pour les immeubles de grande hauteur (IGH) à Paris et en Île-de-France : réglementation, nombre d'agents SSIAP à prévoir, niveaux SSIAP 1, 2, 3, risques spécifiques et rôle de MAB SECURITE pour la conformité sécurité incendie.",
  canonicalPath: '/solutions/securite-incendie/agent-ssiap-igh-paris',
});

function getSsiapIghServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sécurité incendie SSIAP pour IGH à Paris',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      "Accompagnement à la conformité SSIAP pour les immeubles de grande hauteur (IGH) à Paris et en Île-de-France : audit de sûreté incendie, dimensionnement des effectifs SSIAP 1, SSIAP 2, SSIAP 3 et mise à disposition d'agents qualifiés.",
    areaServed: 'Paris, La Défense, Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getSsiapIghFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelles sont les obligations SSIAP en IGH à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les IGH (Immeubles de Grande Hauteur) sont soumis à une réglementation incendie spécifique qui impose la présence permanente d'un service de sécurité incendie. Selon la configuration de l'immeuble, le règlement de sécurité prévoit un nombre minimal d'agents SSIAP 1, encadrés par un chef d'équipe SSIAP 2 et un chef de service SSIAP 3, présents 24/7 pour assurer la prévention, la surveillance et la gestion des alarmes.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment calculer le nombre d'agents SSIAP nécessaires pour un IGH ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le nombre d'agents SSIAP nécessaires dépend de plusieurs paramètres : type d'IGH (bureaux, habitation, mixte), effectifs présents, nombre de niveaux, configuration des locaux, scénarios d'évacuation, etc. La réglementation fournit un cadre minimal, mais un audit de sûreté incendie permet d'ajuster l'effectif SSIAP 1, SSIAP 2 et SSIAP 3 à la réalité du site pour rester conforme tout en restant opérationnel.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Que risque un exploitant en cas de non-conformité SSIAP dans un IGH à Paris ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "En cas de non-conformité SSIAP dans un IGH, l'exploitant s'expose à des observations, mises en demeure ou prescriptions de la commission de sécurité, voire à une fermeture administrative partielle ou totale du bâtiment. En cas de sinistre, la non-conformité peut également avoir des conséquences lourdes sur la responsabilité civile et pénale des dirigeants, ainsi que sur la couverture par les assurances.",
        },
      },
    ],
  };
}

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Obligations SSIAP en IGH à Paris', path: '/solutions/securite-incendie/agent-ssiap-igh-paris' },
]);

export default function SsiapIghParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service de sécurité incendie SSIAP IGH
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSsiapIghServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ SSIAP IGH
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSsiapIghFaqJsonLd()) }}
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
            href: '/solutions/securite-incendie/agent-ssiap-igh-paris',
            label: 'Obligations SSIAP en IGH à Paris',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Obligations SSIAP en IGH à Paris : le guide complet 2026"
        badge="Sécurité incendie · SSIAP · IGH Paris"
        intro={`Ce guide s'adresse aux décideurs qui exploitent ou gèrent un immeuble de grande hauteur (IGH) à Paris, La Défense ou en Île-de-France et qui doivent garantir la conformité SSIAP de leur dispositif de sécurité incendie. L'objectif est de clarifier les obligations réglementaires, de comprendre le rôle des agents SSIAP 1, SSIAP 2 et SSIAP 3 et de savoir comment dimensionner un service de sécurité incendie opérationnel 24/7.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un audit de conformité SSIAP pour votre IGH ?
            </p>
            <p className="text-slate-300">
              {company.name} réalise des audits de sécurité incendie et des diagnostics
              SSIAP pour les IGH situés à Paris, La Défense et en Île-de-France. Nous vous
              aidons à vérifier la conformité de votre organisation, de vos procédures
              et de vos effectifs SSIAP.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez votre audit de conformité IGH gratuit
              </Link>
              <p className="text-[11px] text-slate-400">
                Possibilité de devis personnalisé sous 24&nbsp;heures pour la mise à
                disposition d&apos;agents SSIAP 1, SSIAP 2 et SSIAP 3.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Qu'est-ce qu'un IGH et pourquoi la réglementation est-elle si stricte ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Qu&apos;est-ce qu&apos;un IGH et pourquoi la réglementation est-elle si stricte&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Définition légale d&apos;un Immeuble de Grande Hauteur
            </h3>
            <p>
              En France, un Immeuble de Grande Hauteur (IGH) est un bâtiment dont le plancher
              bas du dernier niveau dépasse une hauteur réglementaire déterminée (par exemple
              28&nbsp;m pour certains immeubles de bureaux). Les IGH sont soumis à un
              règlement de sécurité spécifique qui vient compléter le Code de la construction
              et de l&apos;habitation. Ce cadre impose notamment la présence d&apos;un{' '}
              <strong>service de sécurité incendie dédié</strong>, composé d&apos;agents
              qualifiés SSIAP 1, de chefs d&apos;équipe SSIAP 2 et, le cas échéant, d&apos;un
              chef de service SSIAP 3.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Les risques spécifiques aux IGH
            </h3>
            <p>
              Les IGH présentent des risques particuliers&nbsp;: grande hauteur,
              densité d&apos;occupation, complexité des cheminements d&apos;évacuation,
              dépendance aux installations techniques (ascenseurs, désenfumage, systèmes de
              sécurité incendie). En cas de sinistre, la gestion d&apos;un départ de feu,
              des fumées et de l&apos;évacuation nécessite une organisation très structurée,
              avec un <strong>service SSIAP présent 24/7</strong> pour surveiller les
              installations, gérer les alarmes, assister les occupants et dialoguer avec les
              secours.
            </p>
            <p className="text-[11px] text-slate-400">
              Pour une approche globale (sécurité incendie + sûreté + vidéosurveillance),
              vous pouvez également consulter notre page dédiée au{' '}
              <Link
                href="/gardiennage-chantiers-btp-paris"
                className="underline-offset-2 hover:underline"
              >
                gardiennage de chantiers BTP à Paris
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 : Vos obligations en agents SSIAP : combien, quand et quel niveau ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Vos obligations en agents SSIAP&nbsp;: combien, quand et quel niveau&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Le calcul du nombre d&apos;agents SSIAP
            </h3>
            <p>
              Le <strong>nombre d&apos;agents SSIAP</strong> à prévoir dans un IGH dépend
              de plusieurs paramètres&nbsp;: type de bâtiment (bureaux, habitation, hôtel,
              mixte), effectifs présents, nombre de niveaux, organisation de la sécurité
              incendie, présence éventuelle de locaux à risques particuliers, etc. Le
              règlement de sécurité définit un minimum, mais l&apos;exploitant reste
              responsable d&apos;adapter son organisation pour garantir une{' '}
              <strong>protection 24/7</strong> de l&apos;immeuble.
            </p>
            <p>
              Dans la pratique, un dispositif repose sur un socle d&apos;agents{' '}
              <strong>SSIAP 1</strong> pour la surveillance et les rondes, encadrés par un{' '}
              <strong>chef d&apos;équipe SSIAP 2</strong> (gestion opérationnelle, prise de
              décision en situation d&apos;urgence) et, pour les sites les plus complexes,
              un <strong>chef de service SSIAP 3</strong> chargé de la gestion globale du
              dispositif, de la coordination avec l&apos;exploitant et de la relation avec les
              autorités.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Tableau récapitulatif&nbsp;: type d&apos;IGH vs effectif SSIAP requis
            </h3>
            <p>
              Sans se substituer à un audit détaillé, on peut schématiser ainsi&nbsp;:
            </p>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  IGH de bureaux de taille moyenne&nbsp;: équipe minimale avec plusieurs
                  agents SSIAP 1 en poste et un chef d&apos;équipe SSIAP 2 présent en
                  permanence.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  IGH de grande capacité ou complexe multi-activités (La Défense, Paris La
                  Défense)&nbsp;: renforcement de l&apos;effectif SSIAP 1, présence d&apos;au
                  moins un SSIAP 3 et coordination étroite avec les autres dispositifs
                  (télésurveillance, PC de sûreté, gardiennage et contrôles d&apos;accès).
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Sites sensibles ou à enjeux particuliers&nbsp;: articulation entre{' '}
                  <strong>sécurité incendie (SSIAP)</strong> et <strong>sécurité humaine</strong>{' '}
                  (agents de sécurité, rondes, gardiennage) pour couvrir à la fois le risque
                  feu et les risques de sûreté (intrusions, malveillance).
                </span>
              </li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Pour un dimensionnement fin de votre effectif SSIAP, il est recommandé de
              réaliser un audit de sûreté et de sécurité incendie dédié à votre IGH.
            </p>
          </div>
        </section>

        {/* H2 : MAB Sécurité : votre partenaire conformité SSIAP à Paris et en IDF */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            {company.name}&nbsp;: votre partenaire conformité SSIAP à Paris et en Île-de-France
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Audit de conformité SSIAP de votre IGH
            </h3>
            <p>
              {company.name} accompagne les exploitants d&apos;IGH et de grands ensembles
              tertiaires à Paris, La Défense et en Île-de-France. Nous pouvons intervenir
              pour un <strong>audit de conformité SSIAP</strong>&nbsp;: analyse de votre
              organisation actuelle, vérification des procédures, des consignes et des
              effectifs, revue des plans de gestion de crise et articulation avec votre{' '}
              <strong>plan de continuité d&apos;activité (PCA)</strong>.
            </p>
            <p>
              Cet audit peut inclure des recommandations sur l&apos;articulation entre votre
              service SSIAP, vos équipes de sûreté/gardiennage, votre télésurveillance et vos
              dispositifs techniques (système de sécurité incendie, vidéosurveillance,
              contrôle d&apos;accès). L&apos;objectif est de disposer d&apos;un dispositif
              cohérent, opérationnel et documenté.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Mise à disposition d&apos;agents SSIAP qualifiés
            </h3>
            <p>
              Au-delà du conseil, {company.name} peut mobiliser des{' '}
              <strong>agents SSIAP 1</strong>, des <strong>chefs d&apos;équipe SSIAP 2</strong>{' '}
              et, le cas échéant, des <strong>chefs de service SSIAP 3</strong>, en
              coordination avec vos équipes internes. Les missions peuvent aller de la
              sécurisation ponctuelle (mise en conformité, travaux, situation transitoire)
              jusqu&apos;à des dispositifs 24/7 sur le long terme.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Obtenez un devis personnalisé en 24h
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : Quelles sont les sanctions en cas de non-conformité ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Quelles sont les sanctions en cas de non-conformité SSIAP en IGH&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              En cas de non-respect des obligations SSIAP, la commission de sécurité peut
              émettre des observations, des mises en demeure ou prescrire des travaux et des
              ajustements d&apos;effectifs. Dans les cas les plus graves, la préfecture
              peut décider d&apos;une <strong>fermeture administrative partielle ou totale</strong>{' '}
              de l&apos;immeuble tant que les mesures requises ne sont pas mises en œuvre.
            </p>
            <p>
              En situation de sinistre, une non-conformité avérée (absence d&apos;agents
              SSIAP, procédures inadaptées, maintenance défaillante, etc.) peut également
              avoir des conséquences importantes sur la responsabilité civile et pénale des
              dirigeants et sur la prise en charge par les assureurs. Mettre en place un{' '}
              <strong>dispositif SSIAP conforme</strong> est donc un investissement de
              protection pour l&apos;entreprise autant qu&apos;une obligation réglementaire.
            </p>
          </div>
        </section>

        {/* H2 : FAQ - Questions fréquentes sur la sécurité incendie en IGH */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Questions fréquentes sur la sécurité incendie en IGH
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quelle est la différence entre SSIAP 1, SSIAP 2 et SSIAP 3&nbsp;?
              </p>
              <p>
                Le <strong>SSIAP 1</strong> est l&apos;agent de sécurité incendie chargé des
                rondes, de la surveillance, de l&apos;exploitation du SSI (système de sécurité
                incendie) et de la mise en sécurité des personnes. Le{' '}
                <strong>SSIAP 2</strong> est le chef d&apos;équipe qui encadre les agents,
                coordonne les actions en cas d&apos;incident et assure la gestion opérationnelle
                du poste de sécurité. Le <strong>SSIAP 3</strong> est le chef de service, en
                charge du management global du service sécurité incendie, de la relation avec
                l&apos;exploitant et les autorités.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Mon IGH est-il concerné par les obligations SSIAP si je dispose déjà d&apos;un
                service de sûreté/gardiennage&nbsp;?
              </p>
              <p>
                Oui. Le <strong>service de sécurité incendie SSIAP</strong> est une obligation
                spécifique, distincte de la sûreté et du gardiennage, même si des synergies
                peuvent être organisées. Vos agents de sûreté ne peuvent pas se substituer au
                service SSIAP si les textes imposent la présence d&apos;agents certifiés SSIAP
                sur votre IGH.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Comment démarrer concrètement la mise en conformité SSIAP de mon IGH&nbsp;?
              </p>
              <p>
                La première étape consiste à réaliser un diagnostic de votre situation actuelle
                (organisation, procédures, effectifs, documents) au regard des exigences
                réglementaires. {company.name} peut vous accompagner pour structurer cet audit,
                définir un plan d&apos;actions priorisé et vous proposer, si nécessaire, la mise
                à disposition d&apos;agents SSIAP complémentaires.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre expert SSIAP à Paris
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}