import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { company } from '../../content/company';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Guides & conseils – Sécurité privée B2B',
  description:
    "Guides pratiques et conseils de MAB SECURITE pour sécuriser vos chantiers BTP, sièges sociaux, entrepôts et événements : bonnes pratiques, check-lists et retours d'expérience.",
  canonicalPath: '/guides',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Guides & conseils', path: '/guides' },
]);

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) des guides
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="section">
        <div className="section-inner space-y-8">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/guides', label: 'Guides & conseils' },
              ]}
            />
            <p className="badge">Guides &amp; conseils</p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Guides pratiques pour sécuriser vos sites et vos projets
            </h1>
            <p className="max-w-2xl text-sm text-muted">
              Ces guides s&apos;adressent aux décideurs B2B (maîtres d&apos;ouvrage, directions
              générales, HSE, directions de sites, responsables logistiques) qui souhaitent
              mieux structurer leurs dispositifs de sécurité : gardiennage de chantiers BTP,
              audits de sûreté de sièges sociaux, sécurisation d&apos;entrepôts et
              événements à forte visibilité.
            </p>
          </header>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="card p-5 text-sm text-slate-300">
              <h2 className="text-base font-semibold text-slate-50">
                Sécuriser un chantier BTP la nuit : checklist opérationnelle
              </h2>
              <p className="mt-2 text-sm text-muted">
                Un guide pratique pour les maîtres d&apos;ouvrage et entreprises du BTP qui
                doivent protéger leurs chantiers contre les vols, intrusions et dégradations
                en horaires de nuit et week-end, sans bloquer l&apos;avancement des travaux.
              </p>
              <div className="mt-3">
                <Link
                  href="/guides/securiser-chantier-btp-nuit"
                  className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Lire le guide
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>

            <article className="card p-5 text-sm text-slate-300">
              <h2 className="text-base font-semibold text-slate-50">
                Préparer un audit de sûreté de siège social
              </h2>
              <p className="mt-2 text-sm text-muted">
                Un guide destiné aux directions générales, directions de la sûreté et services
                généraux qui souhaitent préparer un audit de sûreté de leur siège social,
                structurer les échanges avec les auditeurs et prioriser les actions à mener.
              </p>
              <div className="mt-3">
                <Link
                  href="/guides/preparer-audit-surete-siege-social"
                  className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Lire le guide
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          </section>

          <p className="text-[11px] text-slate-400">
            Ces contenus complètent les pages solutions de {company.name}. Pour passer d&apos;un
            guide à une étude de cas concrète ou une demande de devis, vous pouvez à tout
            moment utiliser la page{' '}
            <Link href="/contact#formulaire-devis" className="underline-offset-2 hover:underline">
              Contact &amp; demande de devis
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}