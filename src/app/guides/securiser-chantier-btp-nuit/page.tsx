import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '../../../content/company';
import { BlogArticleTemplate } from '../../../components/templates/BlogArticleTemplate';
import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../lib/breadcrumbs';
import { buildMetadata } from '../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécuriser un chantier BTP la nuit – Guide opérationnel',
  description:
    "Checklist pratique pour sécuriser un chantier BTP la nuit : analyse des risques, gardiennage, rondes de sûreté, vidéosurveillance et coordination avec les équipes travaux.",
  canonicalPath: '/guides/securiser-chantier-btp-nuit',
});

function getSecuringNightSiteFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Pourquoi sécuriser un chantier BTP la nuit est-il critique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La nuit, les chantiers BTP sont particulièrement exposés aux intrusions, vols de matériaux, dégradations et risques d'accidents. L'absence d'activité apparente en fait une cible privilégiée. Un dispositif structuré de gardiennage et de rondes de sûreté permet de réduire fortement ces risques, de protéger l'investissement et de limiter les retards liés à des incidents.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment dimensionner un dispositif de gardiennage de nuit pour un chantier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le dimensionnement dépend de la superficie du chantier, du nombre d'accès possibles, de la valeur des matériels et matériaux stockés, de l'environnement urbain ou isolé et de l'historique des incidents. En pratique, on combine souvent un poste de garde la nuit avec des rondes à horaires variables, éventuellement renforcées par de la vidéosurveillance, pour optimiser la dissuasion et la réactivité.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il forcément des caméras pour sécuriser un chantier la nuit ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Les caméras ne sont pas systématiquement obligatoires, mais elles peuvent compléter efficacement un dispositif de sécurité humaine, notamment sur les chantiers étendus ou difficiles d'accès. L'essentiel est d'articuler les moyens techniques (clôtures, éclairage, caméras) avec des agents de sécurité qui effectuent des rondes, des levées de doute et une gestion rigoureuse des accès.",
        },
      },
    ],
  };
}

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Guides & conseils', path: '/guides' },
  {
    name: 'Sécuriser un chantier BTP la nuit',
    path: '/guides/securiser-chantier-btp-nuit',
  },
]);

export default function SecuringNightConstructionSiteGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ du guide chantier de nuit
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSecuringNightSiteFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="section pb-0">
        <div className="section-inner max-w-3xl">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/guides', label: 'Guides & conseils' },
              { href: '/guides/securiser-chantier-btp-nuit', label: 'Sécuriser un chantier BTP la nuit' },
            ]}
          />
        </div>
      </section>
      <BlogArticleTemplate
        title="Sécuriser un chantier BTP la nuit : checklist opérationnelle"
        intro={`Ce guide s’adresse aux maîtres d’ouvrage, entreprises générales et responsables de travaux qui exploitent des chantiers BTP en milieu urbain ou périurbain. L’objectif est de disposer d’une ligne directrice claire pour sécuriser le chantier la nuit et les week-ends, en combinant gardiennage, rondes de sûreté et mesures techniques, sans gêner l’avancement des travaux.`}
      >
        <h2>1. Comprendre les risques spécifiques d’un chantier la nuit</h2>
        <p>
          Un chantier de jour est un lieu d’activité intense. La nuit, il devient un site vulnérable : matériels
          et matériaux stockés, accès provisoires, clôtures parfois fragilisées par les travaux, voisinage proche.
          Les risques les plus fréquents sont les vols (outillage, câbles, métaux, matériaux structurels),
          les intrusions, les dégradations et, plus rarement, les intrusions accidentelles de personnes
          extérieures.
        </p>
        <p>
          La première étape consiste à poser les bonnes questions : quelles zones sont les plus sensibles ?
          Combien de points d’accès existent réellement (y compris les accès “informels”) ? Quelles seraient
          les conséquences d’un vol ou d’une dégradation (retard, surcoûts, image, litiges) ?
        </p>

        <h2>2. Cartographier les accès et définir le périmètre de sécurité</h2>
        <p>
          Avant de définir un dispositif de nuit, il est recommandé de cartographier le chantier :
        </p>
        <ul>
          <li>Recenser les portails, portes et accès possibles, y compris les accès de service.</li>
          <li>Identifier les zones de stockage critiques (matériaux de valeur, outillage, câbles, métaux).</li>
          <li>Repérer les zones peu visibles depuis la voirie ou le voisinage.</li>
          <li>Prendre en compte les phases de travaux à venir (ouvertures temporaires, échafaudages, etc.).</li>
        </ul>
        <p>
          Cette cartographie servira de base à la définition des consignes pour les agents de sécurité et les
          rondes de sûreté. Elle peut être intégrée au plan d’organisation général du chantier (PGC / PPSPS).
        </p>

        <h2>3. Choisir entre gardiennage de nuit, rondes ou combinaison des deux</h2>
        <p>
          Il n’existe pas de modèle unique. Sur certains chantiers, un poste de garde à l’entrée suffit ;
          sur d’autres, un gardiennage de nuit avec rondes intérieures s’impose. En pratique, de nombreuses
          entreprises combinent :
        </p>
        <ul>
          <li>
            un <strong>gardien en poste de nuit</strong> pour gérer les accès, surveiller la base-vie et
            dissuader les intrusions ;
          </li>
          <li>
            des <strong>rondes de sûreté</strong> à horaires variables pour vérifier clôtures, portails,
            zones de stockage et abords immédiats ;
          </li>
          <li>
            éventuellement, des <strong>levées de doute sur alarme</strong> si des détecteurs sont en place.
          </li>
        </ul>
        <p>
          Pour les chantiers les plus exposés en Île-de-France, {company.name} a structuré une offre dédiée,
          présentée en détail sur la page&nbsp;
          <Link href="/gardiennage-chantiers-btp-paris">Gardiennage de chantiers BTP à Paris et en IDF</Link>.
        </p>

        <h2>4. Intégrer la vidéosurveillance dans le dispositif (sans la surévaluer)</h2>
        <p>
          La vidéosurveillance peut être un support précieux, notamment pour :
        </p>
        <ul>
          <li>couvrir les zones périphériques difficiles à surveiller en permanence ;</li>
          <li>assurer une levée de doute rapide en cas de déclenchement ;</li>
          <li>conserver une trace exploitable en cas d’incident.</li>
        </ul>
        <p>
          Elle ne remplace toutefois pas la présence humaine. L’enjeu est d’articuler les caméras, détecteurs
          de mouvement et éclairages avec un dispositif de gardiennage. Pour les sites en exploitation
          (bureaux, entrepôts, sièges), vous pouvez consulter notre page&nbsp;
          <Link href="/solutions/securite-electronique/videosurveillance-entreprise-paris">
            vidéosurveillance d&apos;entreprise à Paris
          </Link>
          .
        </p>

        <h2>5. Formaliser des consignes claires pour les agents de nuit</h2>
        <p>
          Une bonne sécurisation de nuit repose autant sur la qualité des consignes que sur la présence
          d’agents. Il est utile de formaliser :
        </p>
        <ul>
          <li>les horaires de prise et de fin de poste ;</li>
          <li>le périmètre précis à contrôler sur chaque ronde ;</li>
          <li>la procédure en cas d’intrusion ou de suspicion d’intrusion ;</li>
          <li>les contacts d’astreinte (conducteurs de travaux, direction de chantier) ;</li>
          <li>les points à vérifier avant la fin de poste (fermetures, alarmes, éclairage).</li>
        </ul>
        <p>
          Ces consignes peuvent être intégrées à la main courante et faire l’objet d’un retour d’expérience
          en fin de chantier pour améliorer les dispositifs suivants.
        </p>

        <h2>6. Adapter le dispositif aux phases de chantier</h2>
        <p>
          La sécurisation d’un chantier n’est pas figée : un dispositif pertinent en phase de terrassement
          peut devenir insuffisant en phase de second œuvre, lorsque les matériels de valeur et les finitions
          sont en place. Il est donc utile de prévoir des points de révision du dispositif :
        </p>
        <ul>
          <li>au démarrage du chantier ;</li>
          <li>lors de l’arrivée de matériels sensibles (ascenseurs, climatisation, équipements techniques) ;</li>
          <li>avant les périodes sensibles (ponts, congés, fêtes, etc.).</li>
        </ul>

        <h2>7. Checklist synthétique avant de lancer le gardiennage de nuit</h2>
        <p>Avant de démarrer un dispositif de nuit, vous pouvez vérifier :</p>
        <ul>
          <li>La cartographie des accès et des zones sensibles est à jour.</li>
          <li>Le périmètre des rondes a été défini et validé par le conducteur de travaux.</li>
          <li>Les consignes en cas d’incident sont écrites et partagées.</li>
          <li>Les coordonnées d’astreinte sont à jour.</li>
          <li>Les moyens techniques disponibles (clôtures, éclairage, alarmes) ont été vérifiés.</li>
        </ul>
        <p>
          Pour des chantiers complexes ou multi-sites, il peut être pertinent de confier cette analyse à un
          prestataire spécialisé qui aidera à dimensionner le dispositif en fonction du risque réel.
        </p>

        <h2>Passer du guide à un dispositif concret</h2>
        <p>
          Ce guide a pour objectif de vous aider à structurer votre réflexion. Pour passer à l’action, vous
          pouvez vous appuyer sur les offres opérationnelles de {company.name}, notamment pour le&nbsp;
          <Link href="/gardiennage-chantiers-btp-paris">
            gardiennage de chantiers BTP à Paris et en Île-de-France
          </Link>
          &nbsp;ou pour des dispositifs de gardiennage en région.
        </p>
        <p>
          Pour qualifier un besoin précis ou obtenir un devis sous 24&nbsp;heures, vous pouvez utiliser
          directement le formulaire dédié sur la page&nbsp;
          <Link href="/contact#formulaire-devis">Contact &amp; demande de devis</Link>.
        </p>
      </BlogArticleTemplate>
    </>
  );
}