import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ClipboardList, HardHat, MapPinned } from 'lucide-react';
import { company } from '../../content/company';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gardiennage de chantiers BTP à Paris et en Île-de-France',
  description:
    "MAB SECURITE est spécialisée dans le gardiennage de chantiers BTP à Paris et en Île-de-France (75, 92, 93, 94, 95, 77, 78, 91) : sécurité de nuit, levées de doute, rondes de sûreté, protection des bases-vie, dépôts de matériaux et périmètres sensibles.",
  canonicalPath: '/gardiennage-chantiers-btp-paris',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Prestations', path: '/prestations' },
  {
    name: 'Gardiennage de chantiers BTP à Paris',
    path: '/gardiennage-chantiers-btp-paris',
  },
]);

function getGardiennageChantierServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gardiennage de chantier',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Protection 24/7 de vos chantiers BTP contre le vol, le vandalisme et les intrusions en Île-de-France.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

export default function GardiennageChantiersBtpParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service de gardiennage de chantier
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getGardiennageChantierServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/prestations', label: 'Prestations' },
          {
            href: '/gardiennage-chantiers-btp-paris',
            label: 'Gardiennage de chantiers BTP à Paris',
          },
        ]}
      />
      <ServicePageTemplate
        h1="Gardiennage de chantiers BTP à Paris et en Île-de-France"
        badge="Paris · BTP · Chantiers"
        intro={`${company.name} accompagne les entreprises du BTP et les maîtres d'ouvrage dans la sécurisation de leurs chantiers en Île-de-France. Nos dispositifs de gardiennage de chantiers BTP combinent présence humaine, rondes de sûreté et levées de doute pour protéger vos matériels, vos installations et vos équipes, notamment en horaires de nuit et week-end.`}
        sidebar={
          <>
            <h2 className="text-sm font-semibold text-slate-50">
              Exemples de chantiers pris en charge
            </h2>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <HardHat className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Opérations immobilières (logements, tertiaire, réhabilitation)</span>
              </li>
              <li className="flex gap-2">
                <HardHat className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Chantiers d&apos;infrastructure et de VRD</span>
              </li>
              <li className="flex gap-2">
                <HardHat className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Bases-vie et dépôts de matériaux en périphérie de Paris</span>
              </li>
              <li className="flex gap-2">
                <HardHat className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Sites occupés en travaux (bureaux, commerces, équipements publics)</span>
              </li>
            </ul>
          </>
        }
      >
        <section className="space-y-4 text-sm text-slate-300">
        <h2 className="text-base font-semibold text-slate-50">
          Une approche conçue pour les chantiers BTP parisiens
        </h2>
        <p>
          Les chantiers en milieu urbain concentrent des enjeux importants : valeur des
          matériels et matériaux stockés, complexité des accès, proximité des riverains,
          coactivité avec d&apos;autres intervenants. Le gardiennage de chantiers BTP
          doit être pensé pour sécuriser le site sans bloquer l&apos;avancement des
          travaux ni dégrader les relations avec l&apos;environnement immédiat.
        </p>
        <p>
          {company.name} met en place des dispositifs de sécurité adaptés à chaque
          chantier : consignes de poste claires, périmètres de contrôle définis,
          modalités de rondes et de levées de doute, points de contact avec vos équipes
          travaux. L&apos;objectif : limiter les intrusions, vols et dégradations tout
          en conservant un fonctionnement fluide du chantier.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          Prestations de gardiennage de chantiers BTP proposées à Paris
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card-muted p-5 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Présence de gardiens de nuit et week-end
                </h3>
                <p className="mt-1.5 text-muted">
                  Agents de sécurité BTP en poste sur site, contrôle des accès, gestion des
                  entrées-sorties, surveillance des zones sensibles et des stockages
                  critiques (matériels, matériels de chantier, câbles, métaux, etc.).
                </p>
              </div>
            </div>
          </article>

          <article className="card-muted p-5 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Rondes de sûreté et levées de doute
                </h3>
                <p className="mt-1.5 text-muted">
                  Rondes régulières sur le chantier, vérification des clôtures, portails,
                  accès et éclairages, levées de doute sur alarme, compte-rendus après
                  chaque passage ou intervention.
                </p>
              </div>
            </div>
          </article>

          <article className="card-muted p-5 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Gestion des clés, badges et accès chantier
                </h3>
                <p className="mt-1.5 text-muted">
                  Gestion des clés et moyens d&apos;accès, tenue d&apos;une main courante,
                  enregistrement des passages, liaison avec vos conducteurs de travaux,
                  chefs de chantier et coordinateurs SPS.
                </p>
              </div>
            </div>
          </article>

          <article className="card-muted p-5 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <MapPinned className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Dispositifs adaptés à votre planning travaux
                </h3>
                <p className="mt-1.5 text-muted">
                  Dispositifs de sécurité ajustables en fonction des phases de chantier
                  (terrassement, gros œuvre, second œuvre, finitions) et des zones
                  critiques à protéger en priorité.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="card-muted space-y-3 p-5 text-xs text-slate-300">
        <p className="font-medium text-slate-100">
          Vous préparez un chantier BTP à Paris ou en Île-de-France ?
        </p>
        <p>
          En amont de la consultation ou de l&apos;ouverture de chantier, nous pouvons
          vous aider à définir le besoin en gardiennage : plages horaires, périmètre à
          sécuriser, modalités de rondes, gestion des alarmes et des accès. Cette
          analyse permet de dimensionner un dispositif réaliste, compatible avec vos
          contraintes budgétaires et opérationnelles.
        </p>
        <p className="text-[11px] text-slate-400">
          Pour approfondir ces points côté maîtrise d&apos;ouvrage, vous pouvez également consulter notre guide&nbsp;:&nbsp;
          <Link
            href="/guides/securiser-chantier-btp-nuit"
            className="underline-offset-2 hover:underline"
          >
            sécuriser un chantier BTP la nuit
          </Link>
          .
        </p>
        <p>
          {company.name} intervient aussi bien dans le cadre d&apos;appels d&apos;offres
          BTP, de marchés publics que de besoins ponctuels sur des opérations
          spécifiques.
        </p>
        <div className="pt-2">
          <Link
            href="/contact#formulaire-devis"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
          >
            Parler de mon chantier avec MAB SECURITE
          </Link>
        </div>
      </section>

      <section className="space-y-3 text-xs text-slate-300">
        <h2 className="text-sm font-semibold text-slate-50">
          Questions fréquentes sur le gardiennage de chantiers BTP à Paris
        </h2>
        <div className="card-muted space-y-2 p-4">
          <p className="font-medium text-slate-100">
            Comment éviter les vols sur mon chantier la nuit ?
          </p>
          <p>
            La première réponse consiste à mettre en place un dispositif de{' '}
            <strong>gardiennage de chantier de nuit</strong> dimensionné au profil de
            risque&nbsp;: présence d&apos;un <strong>agent de sécurité chantier</strong>
            , rondes de sûreté à horaires variables, levées de doute sur alarme et
            contrôle des accès. Sur les chantiers BTP urbains, la combinaison d&apos;une{' '}
            <strong>sécurité chantier BTP</strong> humaine et de moyens techniques
            (éclairage, clôtures, vidéosurveillance) limite fortement les intrusions et
            les vols de matériaux.
          </p>
        </div>
        <div className="card-muted space-y-2 p-4">
          <p className="font-medium text-slate-100">
            Quel est le coût d&apos;un agent de sécurité pour un chantier ?
          </p>
          <p>
            Le <strong>tarif de gardiennage de chantier</strong> dépend de plusieurs
            paramètres&nbsp;: amplitude horaire (nuit, week-end, 24/7), nombre de postes à
            couvrir, complexité des accès, niveau de risque et durée de la mission. Plutôt
            qu&apos;un prix unique, {company.name} établit un{' '}
            <strong>devis de sécurité BTP</strong> sur mesure pour chaque site, en
            détaillant le coût d&apos;un <strong>agent de sécurité chantier</strong> ou
            d&apos;une équipe, ainsi que les éventuelles rondes de sûreté complémentaires.
          </p>
        </div>
        <div className="card-muted space-y-2 p-4">
          <p className="font-medium text-slate-100">
            Comment sécuriser un chantier accessible avec plusieurs points d&apos;entrée ?
          </p>
          <p>
            La <strong>sécurisation d&apos;un chantier</strong> avec plusieurs accès
            passe par une cartographie précise des zones sensibles et la définition de
            périmètres de contrôle&nbsp;: clôtures, portails, badges ou clés, points de
            contrôle pour les livraisons. Nous dimensionnons une{' '}
            <strong>surveillance de chantier multi-accès</strong> mêlant gardiennage
            humain, rondes de sûreté et, si besoin, vidéosurveillance autonome sur les
            secteurs les plus exposés afin de limiter les intrusions par des accès
            secondaires.
          </p>
        </div>
        <script
          type="application/ld+json"
          // JSON-LD pour la FAQ (FAQPage)
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Comment éviter les vols sur mon chantier la nuit ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      "La mise en place d'un dispositif de gardiennage de chantier de nuit, combinant présence d'un agent de sécurité, rondes de sûreté à horaires variables, levées de doute sur alarme et contrôle des accès, permet de limiter fortement les intrusions et les vols de matériaux sur les chantiers BTP urbains.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "Quel est le coût d'un agent de sécurité pour un chantier ?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      "Le tarif d'un agent de sécurité pour un chantier dépend de l'amplitude horaire, du nombre de postes à couvrir, de la complexité des accès, du niveau de risque et de la durée de la mission. MAB SECURITE établit un devis de sécurité BTP sur mesure pour chaque site.",
                  },
                },
                {
                  '@type': 'Question',
                  name:
                    "Comment sécuriser un chantier accessible avec plusieurs points d'entrée ?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      "La sécurisation d'un chantier multi-accès passe par une cartographie précise des zones sensibles, la définition de périmètres de contrôle (clôtures, portails, badges ou clés) et la mise en place d'une surveillance de chantier multi-accès combinant gardiennage humain, rondes de sûreté et vidéosurveillance autonome sur les secteurs les plus exposés.",
                  },
                },
              ],
            }),
          }}
        />
      </section>
      </ServicePageTemplate>
    </>
  );
}