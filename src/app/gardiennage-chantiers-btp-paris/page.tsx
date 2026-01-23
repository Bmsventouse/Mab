import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ClipboardList, HardHat, MapPinned } from 'lucide-react';
import { company } from '../../content/company';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gardiennage de chantiers BTP à Paris et en Île-de-France',
  description:
    "MAB SECURITE est spécialisée dans le gardiennage de chantiers BTP à Paris et en Île-de-France (75, 92, 93, 94, 95, 77, 78, 91) : sécurité de nuit, levées de doute, rondes de sûreté, protection des bases-vie, dépôts de matériaux et périmètres sensibles.",
  canonicalPath: '/gardiennage-chantiers-btp-paris',
});

export default function GardiennageChantiersBtpParisPage() {
  return (
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
            Quel est l&apos;intérêt de mettre en place un gardiennage sur un chantier
            BTP ?
          </p>
          <p>
            Le gardiennage réduit significativement les risques de vols, dégradations
            et intrusions sur le chantier, particulièrement en horaires de nuit et
            week-end. Il contribue aussi à sécuriser les périmètres pour les riverains et
            à préserver l&apos;image du maître d&apos;ouvrage et des entreprises
            intervenantes.
          </p>
        </div>
        <div className="card-muted space-y-2 p-4">
          <p className="font-medium text-slate-100">
            À quel moment prévoir le gardiennage dans la planification du chantier ?
          </p>
          <p>
            Il est recommandé d&apos;anticiper le besoin dès la préparation du chantier,
            afin d&apos;intégrer le dispositif de sécurité au planning global et aux
            éventuels appels d&apos;offres. Nous pouvons vous accompagner en amont pour
            cadrer ce besoin.
          </p>
        </div>
        <div className="card-muted space-y-2 p-4">
          <p className="font-medium text-slate-100">
            Intervenez-vous uniquement à Paris intra-muros ?
          </p>
          <p>
            Nous intervenons sur Paris intra-muros et sur l&apos;ensemble de
            l&apos;Île-de-France, en particulier sur les chantiers situés dans les zones
            à forte densité urbaine ou à proximité de sites sensibles.
          </p>
        </div>
      </section>
    </ServicePageTemplate>
  );
}