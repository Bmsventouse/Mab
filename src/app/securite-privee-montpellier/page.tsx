import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Sécurité privée à Montpellier – BTP, sites tertiaires & événements',
  description:
    "MAB SECURITE, société de sécurité privée, sécurise vos chantiers BTP, sites tertiaires et événements à Montpellier, dans l'Hérault (34) et sur le littoral méditerranéen : gardiennage, agents de sécurité, maîtres-chiens, vidéosurveillance et dispositifs de sécurité incendie.",
};

export default function SecuritePriveeMontpellierPage() {
  const keyServices = services.filter((service) =>
    ['gardiennage-surveillance', 'rondes-prevention', 'securisation-sites-perimetres'].includes(
      service.slug,
    ),
  );

  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Montpellier · Hérault (34)</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Sécurité privée à Montpellier pour chantiers BTP, sites tertiaires et événements
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} accompagne les entreprises du BTP, les propriétaires et gestionnaires
            d&apos;immeubles tertiaires ainsi que les organisateurs d&apos;événements à
            Montpellier, dans l&apos;Hérault et sur le littoral méditerranéen. Les dispositifs
            combinent présence humaine, vidéosurveillance et sécurité incendie pour protéger
            vos sites, équipes et publics.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-50">
              Une approche adaptée aux sites montpelliérains
            </h2>
            <p>
              La zone de Montpellier concentre des chantiers BTP, des parcs d&apos;activités,
              des immeubles tertiaires et des équipements recevant du public. Les missions de
              sécurité doivent tenir compte de la coactivité, des flux de salariés et de
              visiteurs, ainsi que des contraintes réglementaires propres à chaque site.
            </p>
            <p>
              {company.name} met en place des dispositifs combinant agents de sécurité,
              maîtres-chiens, rondes de sûreté et moyens techniques (caméras de surveillance,
              détecteurs de mouvement, contrôle d&apos;accès). La dimension sécurité
              incendie est intégrée dès la conception du dispositif, avec la possibilité de
              mobiliser des agents SIAP/SSIAP selon le profil de risque.
            </p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-50">
                France Sud – Montpellier &amp; Hérault (34)
              </p>
              <p className="mt-1 text-slate-200">
                Responsable opérationnel : <span className="font-semibold">Sofiane</span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Téléphone direct zone Sud : à compléter (numéro dédié Montpellier / Hérault).
              </p>
              <p className="mt-2 text-xs text-muted">
                Pour toute première prise de contact, vous pouvez également utiliser le
                numéro principal indiqué sur le site ou le formulaire de contact.
              </p>
            </div>
          </div>

          <aside className="card p-5 text-xs text-slate-200">
            <h2 className="text-sm font-semibold text-slate-50">
              Exemples de situations prises en charge à Montpellier
            </h2>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Gardiennage de chantiers BTP et opérations immobilières</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Surveillance de sites tertiaires et parcs d&apos;activités</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Protection de dépôts, zones de stockage et locaux techniques</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Dispositifs de sécurité pour événements professionnels et institutionnels</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Prestations clés mobilisables à Montpellier
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {keyServices.map((service) => (
              <article key={service.slug} className="card-muted p-4 text-xs text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">{service.name}</h3>
                <p className="mt-1.5 text-muted">{service.shortDescription}</p>
                <ul className="mt-2 space-y-1.5">
                  {service.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Expertises locales pour vos sites à Montpellier
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Caméras de surveillance &amp; détecteurs de mouvement
              </h3>
              <p className="mt-1.5 text-muted">
                Installation et supervision de caméras de surveillance, détecteurs de
                mouvement et contrôle d&apos;accès pour sécuriser chantiers, parkings,
                halls et zones de stockage autour de Montpellier.
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Agents de sécurité &amp; maîtres-chiens
              </h3>
              <p className="mt-1.5 text-muted">
                Agents de sécurité présents sur site et possibilité d&apos;engager des
                maîtres-chiens pour les zones les plus exposées (sites isolés, grandes
                emprises, chantiers sensibles).
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Protection incendie &amp; agents SIAP/SSIAP
              </h3>
              <p className="mt-1.5 text-muted">
                Prise en compte de la sécurité incendie dans vos dispositifs&nbsp;: rondes
                de sécurité incendie, surveillance des issues de secours et mobilisation
                d&apos;agents SIAP/SSIAP lorsque la réglementation le requiert.
              </p>
            </article>
          </div>
        </section>

        <section className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Un projet de sécurité à Montpellier ou dans l&apos;Hérault (34) ?
          </p>
          <p className="mt-2">
            Nous étudions vos besoins en gardiennage, rondes de sûreté, vidéosurveillance
            et protection incendie, en tenant compte de la nature de vos sites, de vos
            contraintes horaires et des cadres réglementaires applicables.
          </p>
          <div className="mt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Échanger sur un projet à Montpellier
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}