import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Sécurité BTP à Paris – Gardiennage de chantiers & sites sensibles',
  description:
    "MAB SECURITE, agence de sécurité privée, accompagne les entreprises du BTP, les maîtres d’ouvrage et les donneurs d’ordre publics à Paris et en Île-de-France : gardiennage de chantiers, surveillance humaine, rondes de sûreté et protection de sites sensibles.",
};

export default function SecuritePriveeParisPage() {
  const keyServices = services.filter((service) =>
    ['gardiennage-surveillance', 'rondes-prevention', 'securisation-sites-perimetres'].includes(
      service.slug,
    ),
  );

  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Paris · Île-de-France</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Sécurité BTP à Paris : gardiennage de chantiers et sites sensibles
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} accompagne en priorité les entreprises du BTP, les maîtres
            d&apos;ouvrage et les donneurs d&apos;ordre publics implantés à Paris et en
            Île-de-France. Nos dispositifs de gardiennage, de surveillance et de rondes de
            sûreté sont dimensionnés pour les environnements à enjeux&nbsp;: chantiers
            urbains, bases-vie, bâtiments en construction, mais aussi sièges sociaux,
            immeubles tertiaires et sites techniques.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-50">
              Sécurité privée pour les organisations basées à Paris
            </h2>
            <p>
              Nous intervenons en renfort des directions générales, directions immobilières,
              directions de la sûreté et services généraux pour sécuriser les bâtiments,
              les équipes et les flux de visiteurs. Les missions sont cadrées en amont
              (périmètre, consignes, reporting) afin d&apos;assurer une continuité
              d&apos;activité sans rupture et une traçabilité complète des interventions.
            </p>
            <p>
              {company.name} travaille aussi bien dans le cadre de contrats récurrents que
              d&apos;appels d&apos;offres privés ou publics. Notre structure à taille
              humaine permet de proposer une gestion opérationnelle réactive, en lien
              direct avec un interlocuteur identifié.
            </p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-50">
                Responsable sécurité Paris
              </p>
              <p className="mt-1">
                Bena – <a href="tel:+33646005642" className="text-emerald-400 hover:text-emerald-300">+33 6 46 00 56 42</a>
              </p>
            </div>
          </div>

          <aside className="card p-5 text-xs text-slate-200">
            <h2 className="text-sm font-semibold text-slate-50">
              Exemples de situations prises en charge à Paris
            </h2>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Gardiennage de chantiers BTP et bases-vie en milieu urbain</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Surveillance de sites techniques, dépôts de matériaux et zones à accès restreint</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Rondes de sûreté, levées de doute et contrôles d&apos;accès hors horaires ouvrés</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Dispositifs de sécurité pour opérations et événements corporate à Paris</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Prestations clés mobilisables à Paris
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

        <section className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Vous recherchez un partenaire de sécurité pour un site parisien ?
          </p>
          <p className="mt-2">
            Que votre besoin concerne un siège social, un immeuble tertiaire, un site
            technique ou un événement corporate, nous étudions votre contexte et vos
            contraintes (horaires, flux, exigences d&apos;image, appels d&apos;offres
            privés ou publics) avant de proposer un dispositif adapté.
          </p>
          <div className="mt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Échanger sur un projet à Paris
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}