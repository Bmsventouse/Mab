import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, engagements, services } from '../content/company';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title:
    'MAB SECURITE – Sécurité privée & gardiennage BTP à Paris, Marseille, Montpellier, Nîmes',
  description:
    'MAB SECURITE, société de sécurité privée, accompagne les entreprises du BTP, les maîtres d’ouvrage et les donneurs d’ordre publics à Paris, Marseille, Montpellier, Nîmes et sur la côte sud : gardiennage de chantiers, surveillance humaine, rondes de sûreté, vidéosurveillance et sécurisation de sites.',
  canonicalPath: '/',
});

export default function HomePage() {
  const galleryItems = [
    {
      label: 'Exemple de dispositif de sécurité déployé sur un chantier BTP',
      src: '/images/securite-chantier-btp-nuit.png',
    },
    {
      label: 'Exemple de dispositif de sécurité pour un site industriel ou logistique',
      src: '/images/securite-entrepot-plateforme-logistique.png',
    },
    {
      label: 'Exemple de dispositif de sécurité pour un événement professionnel',
      src: '/images/securite-evenementiel-salon-professionnel.png',
    },
    {
      label: 'Exemple de dispositif de sécurité pour un site tertiaire ou administratif',
      src: '/images/securite-siege-social-site-tertiaire.png',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section pb-8">
        <div className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="badge">
              Sécurité privée · B2B · Nîmes &amp; région
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Sécuriser durablement vos sites, vos équipes et vos publics.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                {company.name}, société de sécurité privée basée à Nîmes, conçoit et pilote
                des dispositifs de sécurité pour les entreprises privées, les donneurs
                d&apos;ordre publics et les organisateurs d&apos;événements. Notre
                expérience de terrain et notre connaissance des appels d&apos;offres privés
                et publics garantissent des interventions traçables, fiables et conformes
                au cadre réglementaire. Nous intervenons notamment pour le{' '}
                <strong>gardiennage de chantiers BTP en Île-de-France</strong>, la mise à
                disposition d&apos;
                <strong>agents de sécurité à Marseille, Montpellier et Nice</strong>, la{' '}
                <strong>vidéosurveillance d&apos;entreprise à Paris</strong> et la{' '}
                <strong>sécurité événementielle à Cannes</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-emerald-500"
              >
                Découvrir nos prestations
              </Link>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Sécurité événementielle
                </div>
                <p className="mt-1 text-muted">
                  Dispositifs dimensionnés pour salons, conventions, événements
                  institutionnels et tournages.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Gardiennage &amp; rondes
                </div>
                <p className="mt-1 text-muted">
                  Présence sur site, rondes de sûreté et levées de doute pour vos locaux,
                  chantiers et sites techniques.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">
                  Interlocuteur unique
                </div>
                <p className="mt-1 text-muted">
                  Un référent dédié pour coordonner les missions, centraliser les échanges
                  et assurer le suivi opérationnel.
                </p>
              </div>
            </div>
          </div>

          <aside className="card space-y-4 p-6 text-sm animate-fade-up-delayed">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Coordonnées
            </div>
            <div className="space-y-1 text-slate-200">
              <p>{company.address.line1}</p>
              {company.address.line2 && <p>{company.address.line2}</p>}
              <p>
                {company.address.postalCode} {company.address.city}
              </p>
              <p>{company.address.country}</p>
            </div>
            <div className="space-y-2 pt-2 text-slate-200">
              <p>
                Tél. :{' '}
                <a
                  href={`tel:${company.contact.phone.value}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.phone.label}
                </a>
              </p>
              <p>
                E-mail :{' '}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
            <p className="text-xs text-muted">
              Zone d’intervention : {company.areaServed}
            </p>
          </aside>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="section pt-0">
        <div className="section-inner space-y-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Pour quels types d&apos;organisations ?
              </h2>
              <p className="text-xs text-muted sm:text-sm">
                {company.name} intervient pour des structures privées comme publiques,
                dans le cadre de relations contractuelles récurrentes ou d&apos;appels
                d&apos;offres.
              </p>
            </div>
          </div>
          <div className="grid gap-4 text-xs text-slate-300 md:grid-cols-3">
            <div className="card-muted p-4 animate-fade-in-soft">
              <div className="text-[13px] font-semibold text-slate-100">
                Entreprises privées
              </div>
              <p className="mt-1.5 text-muted">
                Sièges sociaux, sites industriels, entrepôts, plateformes logistiques,
                réseaux d&apos;agences, sites techniques.
              </p>
            </div>
            <div className="card-muted p-4 animate-fade-in-soft">
              <div className="text-[13px] font-semibold text-slate-100">
                Collectivités &amp; établissements publics
              </div>
              <p className="mt-1.5 text-muted">
                Mairies, intercommunalités, établissements scolaires et universitaires,
                équipements culturels et sportifs.
              </p>
            </div>
            <div className="card-muted p-4 animate-fade-in-soft">
              <div className="text-[13px] font-semibold text-slate-100">
                Événementiel &amp; production
              </div>
              <p className="mt-1.5 text-muted">
                Organisateurs d&apos;événements, agences, producteurs, sociétés de
                production audiovisuelle, tournages et plateaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations clés */}
      <section className="section">
        <div className="section-inner space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Prestations clés pour les organisations professionnelles
              </h2>
              <p className="text-sm text-muted">
                Des solutions de sécurité structurées pour vos bâtiments, sites
                opérationnels, événements et environnements sensibles, qu&apos;il s&apos;agisse
                de <strong>gardiennage en Île-de-France</strong>, de sécurité BTP à Paris,
                d&apos;<strong>agents de sécurité à Marseille ou Montpellier</strong>, ou de{' '}
                <strong>sécurité événementielle à Cannes</strong>.
              </p>
            </div>
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
            >
              Voir le détail des prestations
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.slug} className="card-muted flex flex-col p-5">
                <h3 className="text-sm font-semibold text-slate-50">{service.name}</h3>
                <p className="mt-2 text-xs text-muted">{service.shortDescription}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {service.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Pour des besoins très ciblés, vous pouvez également consulter nos pages
            dédiées&nbsp;:&nbsp;
            <Link
              href="/solutions/securite-incendie/agent-ssiap-igh-paris"
              className="underline-offset-2 hover:underline"
            >
              obligations SSIAP en IGH à Paris
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-electronique/videosurveillance-entreprise-paris"
              className="underline-offset-2 hover:underline"
            >
              vidéosurveillance d&apos;entreprise à Paris
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
              className="underline-offset-2 hover:underline"
            >
              audit de sûreté de siège social à Paris
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/gardiennage-ile-de-france"
              className="underline-offset-2 hover:underline"
            >
              gardiennage en Île-de-France
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/securite-entrepots-logistiques"
              className="underline-offset-2 hover:underline"
            >
              sécurité des entrepôts et plateformes logistiques
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/securite-centres-commerciaux"
              className="underline-offset-2 hover:underline"
            >
              sécurité centres commerciaux &amp; retail
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/agent-securite-marseille"
              className="underline-offset-2 hover:underline"
            >
              agents de sécurité à Marseille
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/agent-securite-montpellier"
              className="underline-offset-2 hover:underline"
            >
              agents de sécurité à Montpellier
            </Link>
            ,&nbsp;
            <Link
              href="/solutions/securite-humaine/agent-securite-nice"
              className="underline-offset-2 hover:underline"
            >
              agents de sécurité à Nice
            </Link>
            &nbsp;et&nbsp;
            <Link
              href="/solutions/securite-evenementielle/securite-evenementielle-cannes"
              className="underline-offset-2 hover:underline"
            >
              sécurité événementielle à Cannes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Galerie photo */}
      <section className="section pt-0">
        <div className="section-inner space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Galerie photo
              </h2>
              <p className="text-xs text-muted sm:text-sm">
                Exemples de dispositifs de sécurité déployés sur des chantiers BTP, sites
                industriels, sites tertiaires et événements sécurisés par {company.name}.
              </p>
            </div>
            <Link
              href="/galerie"
              className="mt-2 inline-flex items-center text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
            >
              Voir la galerie complète
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1200}
                  height={480}
                  loading="lazy"
                  className="h-32 w-full object-cover opacity-90"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section pb-16">
        <div className="section-inner space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Nos engagements
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {engagements.map((item) => (
              <article key={item.title} className="card-muted p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}