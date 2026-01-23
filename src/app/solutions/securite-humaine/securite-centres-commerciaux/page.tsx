import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sécurité centres commerciaux & retail – Prévention des vols et démarque inconnue',
  description:
    "MAB SECURITE accompagne les centres commerciaux, galeries marchandes et enseignes retail pour sécuriser leurs sites : agents de sécurité, prévention des vols et démarque inconnue, contrôle d'accès, gestion des flux et coordination avec vos équipes internes.",
  canonicalPath: '/solutions/securite-humaine/securite-centres-commerciaux',
});

function getSecuriteCentresCommerciauxServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sécurité centres commerciaux et retail',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Sécurité des centres commerciaux, galeries marchandes et enseignes retail : agents de sécurité, prévention des vols, contrôle des accès et gestion des flux.',
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

function getSecuriteCentresCommerciauxFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quels sont les objectifs d'un dispositif de sécurité pour centre commercial ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Un dispositif de sécurité pour centre commercial vise à protéger les personnes (clients, équipes, prestataires), à réduire les vols et la démarque inconnue, à gérer les flux et les situations de tension et à sécuriser les accès et zones sensibles (réserves, locaux techniques, parkings).",
        },
      },
      {
        '@type': 'Question',
        name:
          "Comment la sécurité peut-elle contribuer à réduire la démarque inconnue en retail ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La présence d'agents de sécurité formés, la maîtrise des accès, la surveillance des zones sensibles et la coordination avec les équipes en magasin permettent de prévenir les vols internes et externes et de réduire la démarque inconnue. La vidéosurveillance et des procédures claires complètent ce dispositif.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Des dispositifs peuvent-ils être mutualisés entre plusieurs enseignes d'un même centre ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Oui, il est possible d'articuler un dispositif de sécurité global pour le centre commercial (accès, parkings, galeries) avec des mesures spécifiques par enseigne. La clé réside dans la coordination entre l'exploitant du centre, les enseignes et le prestataire de sécurité.",
        },
      },
    ],
  };
}

export default function SecuriteCentresCommerciauxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service Sécurité centres commerciaux & retail
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSecuriteCentresCommerciauxServiceJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ Sécurité centres commerciaux & retail
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSecuriteCentresCommerciauxFaqJsonLd()),
        }}
      />
      <ServicePageTemplate
        h1="Sécurité centres commerciaux & retail : réduire les risques et la démarque inconnue"
        badge="Sécurité humaine · Centres commerciaux & retail"
        intro={`Cette page s’adresse aux directeurs de centres commerciaux, gestionnaires de galeries marchandes, directions retail et directions de la sûreté qui souhaitent sécuriser leurs sites et réduire les risques de vols, d’incivilités et de démarque inconnue, tout en préservant l’expérience client.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un dispositif de sécurité pour un centre commercial ou un réseau
              de magasins&nbsp;?
            </p>
            <p className="text-slate-300">
              {company.name} conçoit et pilote des dispositifs de sécurité pour les centres
              commerciaux et le retail, en coordination avec vos équipes internes, vos
              enseignes et vos prestataires techniques.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez un audit sécurité retail
              </Link>
              <p className="text-[11px] text-slate-400">
                Devis sous 24&nbsp;heures pour un centre commercial, une galerie ou un réseau
                de magasins.
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Enjeux de la sécurité pour les centres commerciaux et le retail */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Enjeux de la sécurité pour les centres commerciaux et le retail
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Protection des personnes et de l&apos;image
            </h3>
            <p>
              Un centre commercial ou une galerie marchande accueille quotidiennement un
              public nombreux et varié. La sécurité doit protéger les clients, les équipes
              et les prestataires, tout en préservant une expérience agréable et fluide.
              Les agents de sécurité jouent un rôle clé dans l&apos;accueil, la prévention
              des tensions et la gestion des situations sensibles.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Réduction des vols et de la démarque inconnue
            </h3>
            <p>
              La <strong>démarque inconnue</strong> (vols internes, externes, erreurs
              d&apos;inventaire) représente un enjeu financier important pour les enseignes
              retail. Un dispositif de <strong>sécurité centre commercial</strong> bien
              pensé permet de réduire ces risques&nbsp;: présence d&apos;
              <strong>agents de sécurité</strong> dans les galeries, contrôles discrets,
              coordination avec les équipes en magasin, procédures d&apos;intervention
              documentées.
            </p>
          </div>
        </section>

        {/* H2 : Notre approche pour la sécurité des centres commerciaux */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre approche pour la sécurité des centres commerciaux
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Audit de sûreté et cartographie des zones sensibles
            </h3>
            <p>
              {company.name} commence par un audit de sûreté du centre&nbsp;: accès,
              parkings, galeries, locaux techniques, réserves, flux de personnes et
              livraisons. Cette étape permet de cartographier les zones sensibles et de
              déterminer les priorités (prévention des vols, gestion des attroupements,
              sécurisation des fermetures, etc.).
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Dispositif humain et articulation avec les moyens techniques
            </h3>
            <p>
              Le dispositif repose sur des <strong>agents de sécurité</strong> positionnés
              à des points clés (accueils, parkings, galeries, accès sensibles) et sur des
              rondes régulières. Il s&apos;articule avec vos moyens techniques (caméras de
              vidéosurveillance, contrôles d&apos;accès, alarmes), en concertation avec vos
              prestataires et vos équipes internes.
            </p>
          </div>
        </section>

        {/* H2 : Exemple de prestations pour centres commerciaux et retail */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Exemple de prestations pour centres commerciaux et retail
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Postes d&apos;accueil et de surveillance des entrées principales.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Rondes de sûreté dans les galeries et parkings.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>
                  Coordination avec les équipes des enseignes pour la prévention des vols et
                  de la démarque inconnue.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Gestion des fermetures et des situations de crise (évacuation, etc.).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 : FAQ – Sécurité des centres commerciaux & retail */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Sécurité des centres commerciaux & retail
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                La sécurité peut-elle être mutualisée entre plusieurs enseignes d&apos;un
                même centre&nbsp;?
              </p>
              <p>
                Oui. Un dispositif global de sécurité pour le centre (accès, galeries,
                parkings) peut être complété par des mesures spécifiques pour certaines
                enseignes (emplacements sensibles, horaires étendus). La coordination entre
                l&apos;exploitant du centre, les enseignes et le prestataire est alors
                essentielle.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Quel niveau d&apos;information est attendu de la part des enseignes ou du
                centre pour dimensionner le dispositif&nbsp;?
              </p>
              <p>
                Plus les informations sont précises (profil de clientèle, historique des
                incidents, périodes de forte activité, contraintes spécifiques), plus le
                dispositif peut être ajusté au juste besoin. Un échange préliminaire permet
                de qualifier ces éléments avant de proposer un dispositif et un devis.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre équipe sécurité retail
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}