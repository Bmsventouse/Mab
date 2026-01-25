import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '../../../content/company';
import { BlogArticleTemplate } from '../../../components/templates/BlogArticleTemplate';
import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../lib/breadcrumbs';
import { buildMetadata } from '../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Préparer un audit de sûreté de siège social – Guide pour directions générales',
  description:
    "Guide pratique pour préparer un audit de sûreté de siège social : cadrage, collecte d'informations, parties prenantes, déroulé de la mission et exploitation du rapport.",
  canonicalPath: '/guides/preparer-audit-surete-siege-social',
});

function getAuditPreparationArticleJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';
  const url = `${baseUrl.replace(/\/$/, '')}/guides/preparer-audit-surete-siege-social`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Préparer un audit de sûreté de siège social : guide pour directions générales et services généraux',
    headline:
      'Préparer un audit de sûreté de siège social : guide pour directions générales et services généraux',
    description:
      "Guide pratique pour préparer un audit de sûreté de siège social : cadrage, collecte d'informations, parties prenantes, déroulé de la mission et exploitation du rapport.",
    url,
    publisher: {
      '@type': 'Organization',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    inLanguage: 'fr-FR',
  };
}

function getAuditPreparationFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Pourquoi réaliser un audit de sûreté de siège social ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un audit de sûreté de siège social permet d'évaluer le niveau de protection des personnes, des actifs et de l'information, d'identifier les vulnérabilités et de prioriser les actions à mener. Il constitue un outil d'aide à la décision pour les directions générales et de la sûreté.",
        },
      },
      {
        '@type': 'Question',
        name: "Qui doit être impliqué dans un audit de sûreté ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "L'audit gagne à impliquer plusieurs parties prenantes : direction générale, direction de la sûreté ou QSE, services généraux, ressources humaines, DSI, ainsi que les interlocuteurs en charge des sites secondaires le cas échéant. Cette approche facilite l'appropriation des recommandations.",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire après la remise du rapport d'audit de sûreté ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Après la remise du rapport, il est recommandé de prioriser les actions en fonction du risque et des contraintes opérationnelles, de définir un plan d'action réaliste (court, moyen et long terme) et de suivre régulièrement l'avancement des mesures mises en œuvre.",
        },
      },
    ],
  };
}

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Guides & conseils', path: '/guides' },
  {
    name: 'Préparer un audit de sûreté de siège social',
    path: '/guides/preparer-audit-surete-siege-social',
  },
]);

export default function PrepareAuditSureteSiegeSocialGuidePage() {
  const structuredData = [
    getAuditPreparationArticleJsonLd(),
    getAuditPreparationFaqJsonLd(),
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD combiné : article de guide audit de sûreté + FAQ + fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <section className="section pb-0">
        <div className="section-inner max-w-3xl">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/guides', label: 'Guides & conseils' },
              {
                href: '/guides/preparer-audit-surete-siege-social',
                label: 'Préparer un audit de sûreté de siège social',
              },
            ]}
          />
        </div>
      </section>
      <BlogArticleTemplate
        title="Préparer un audit de sûreté de siège social : guide pour directions générales et services généraux"
        intro={`Ce guide s’adresse aux directions générales, directions de la sûreté, directions immobilières et services généraux qui envisagent de lancer un audit de sûreté de leur siège social. L’objectif est de clarifier les étapes clés, les parties prenantes à mobiliser et la meilleure manière d’exploiter le rapport d’audit pour prendre des décisions opérationnelles.`}
      >
        <h2>1. Définir le périmètre et les objectifs de l’audit</h2>
        <p>
          Avant de lancer un audit de sûreté, il est essentiel de définir clairement son périmètre : siège social
          seul ou incluant des sites secondaires ? Périmètre purement physique ou intégrant également certains
          aspects organisationnels (procédures, gestion de crise, continuité d’activité) ? L’audit peut être ciblé
          sur un enjeu précis (accès, accueil, zones sensibles) ou plus global.
        </p>
        <p>
          Un cadrage formalisé permet d’aligner les attentes des différentes parties prenantes (direction générale,
          sûreté, services généraux, DSI, etc.) et de limiter les incompréhensions au moment de la restitution.
        </p>

        <h2>2. Identifier les parties prenantes à associer</h2>
        <p>
          Un siège social concentre souvent plusieurs fonctions stratégiques : direction, fonctions support,
          systèmes d’information, parfois des plateaux techniques. Impliquer en amont les bons interlocuteurs
          facilite la collecte d’informations et la mise en œuvre des recommandations :
        </p>
        <ul>
          <li>Direction générale ou direction de la sûreté / QSE.</li>
          <li>Services généraux / direction immobilière.</li>
          <li>Ressources humaines (accès, badges, visiteurs, prestataires).</li>
          <li>DSI (sécurité des SI et interactions physique / logique).</li>
          <li>Éventuellement, représentants du personnel ou CSE.</li>
        </ul>
        <p>
          La coopération de ces acteurs permet de croiser les points de vue et d’ancrer l’audit dans la réalité
          opérationnelle de l’entreprise.
        </p>

        <h2>3. Organiser la collecte d’informations</h2>
        <p>
          L’audit s’appuie généralement sur trois piliers : la documentation existante, les visites sur site et
          les entretiens. Il est utile de préparer à l’avance :
        </p>
        <ul>
          <li>Les plans du site (plan masse, plans des niveaux, évacuation).</li>
          <li>Les procédures existantes (accueil, gestion des badges, visiteurs, prestataires, incidents).</li>
          <li>Les contrats de gardiennage, de vidéosurveillance, de télésurveillance.</li>
          <li>Les éventuels rapports d’incident ou retours d’expérience récents.</li>
        </ul>
        <p>
          Plus ces éléments sont disponibles et structurés, plus l’audit peut se concentrer sur l’analyse de fond
          et la formulation de recommandations concrètes.
        </p>

        <h2>4. Anticiper le déroulé des visites et entretiens</h2>
        <p>
          L’équipe d’audit devra visiter le siège social (et éventuellement certains sites secondaires) pour
          observer les flux, les accès, l’accueil, les dispositifs de sécurité humaine et technique, ainsi que les
          zones sensibles. Il est souvent utile de prévoir :
        </p>
        <ul>
          <li>Une visite en période normale d’activité.</li>
          <li>Éventuellement, une visite en horaires décalés (tôt le matin, soir, voire nuit).</li>
          <li>Des entretiens avec les équipes en charge de l’accueil, de la sécurité, des services généraux.</li>
        </ul>
        <p>
          Ces observations complètent la documentation et permettent de vérifier la manière dont les procédures
          sont appliquées au quotidien.
        </p>

        <h2>5. Préparer la restitution et la prise de décision</h2>
        <p>
          Le rapport d’audit doit être exploitable pour les décideurs. Il est souvent structuré autour :
        </p>
        <ul>
          <li>d’un diagnostic global (points forts, vulnérabilités majeures) ;</li>
          <li>d’une hiérarchisation des risques (critique / important / à surveiller) ;</li>
          <li>de recommandations opérationnelles, idéalement priorisées et chiffrables.</li>
        </ul>
        <p>
          En amont de la restitution, il peut être utile de prévoir un comité interne (direction, sûreté,
          services généraux, DSI) chargé d’examiner le rapport, de valider les priorités et de préparer un plan
          d’action réaliste.
        </p>

        <h2>6. Articuler l’audit de sûreté avec les autres démarches</h2>
        <p>
          L’audit de sûreté ne vit pas isolément. Il doit être articulé avec :
        </p>
        <ul>
          <li>le plan de continuité d’activité (PCA) et le plan de gestion de crise,</li>
          <li>l’audit de sécurité incendie et les obligations SSIAP (notamment en IGH),</li>
          <li>les démarches de sécurité des systèmes d’information.</li>
        </ul>
        <p>
          Cette approche intégrée permet d’éviter des dispositifs contradictoires ou redondants et de mieux
          utiliser les ressources disponibles (humaines, matérielles, budgétaires).
        </p>
        <p>
          Pour les enjeux spécifiques aux IGH et à la sécurité incendie, vous pouvez vous appuyer sur notre page
          dédiée&nbsp;
          <Link href="/solutions/securite-incendie/agent-ssiap-igh-paris">
            obligations SSIAP en IGH à Paris
          </Link>
          .
        </p>

        <h2>7. Passer du rapport d’audit au plan d’action</h2>
        <p>
          La valeur d’un audit se mesure dans sa mise en œuvre. Une fois le rapport remis, il est recommandé de :
        </p>
        <ul>
          <li>classer les recommandations par urgence et impact ;</li>
          <li>établir un plan d’action (court, moyen, long terme) ;</li>
          <li>désigner des responsables pour chaque action ;</li>
          <li>prévoir des points de suivi réguliers (comité sûreté / comité de direction).</li>
        </ul>
        <p>
          Certaines mesures pourront être mises en œuvre directement (ajustement de consignes, renforcement de
          la surveillance humaine, mise à jour de procédures), d’autres nécessiteront des investissements ou
          des évolutions plus structurelles.
        </p>

        <h2>Aller plus loin : se faire accompagner par un partenaire spécialisé</h2>
        <p>
          {company.name} réalise des audits de sûreté de sièges sociaux et de sites sensibles, avec une approche
          à la fois opérationnelle et pédagogique. Pour en savoir plus sur notre démarche, vous pouvez consulter
          la page&nbsp;
          <Link href="/solutions/expertise-conseil/audit-surete-siege-social-paris">
            Audit de sûreté de siège social à Paris
          </Link>
          .
        </p>
        <p>
          Pour qualifier un besoin précis, multi-sites ou hors Île-de-France, vous pouvez nous contacter via la
          page&nbsp;
          <Link href="/contact#formulaire-devis">Contact &amp; demande de devis</Link>
          &nbsp;afin d&apos;organiser un premier échange et définir le périmètre le plus pertinent pour votre
          audit.
        </p>
      </BlogArticleTemplate>
    </>
  );
}