import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Solutions de sécurité – Incendie, sûreté, vidéosurveillance & gardiennage',
  description:
    "Vue d'ensemble des solutions de sécurité proposées par MAB SECURITE : sécurité incendie SSIAP, vidéosurveillance entreprise à Paris, audits de sûreté, gardiennage en Île-de-France et agents de sécurité à Marseille, Montpellier, Nice, sécurité événementielle à Cannes.",
  canonicalPath: '/solutions',
});

const solutionSections = [
  {
    title: 'Sécurité incendie & SSIAP',
    description:
      'Solutions dédiées à la sécurité incendie pour les immeubles de grande hauteur (IGH) et sites à enjeux.',
    items: [
      {
        href: '/solutions/securite-incendie/agent-ssiap-igh-paris',
        label: 'Obligations SSIAP en IGH à Paris',
        description: "Guide et accompagnement pour la conformité SSIAP des IGH à Paris et en IDF.",
      },
    ],
  },
  {
    title: 'Sécurité électronique & vidéosurveillance',
    description: 'Dispositifs techniques pour renforcer la sûreté de vos sites professionnels.',
    items: [
      {
        href: '/solutions/securite-electronique/videosurveillance-entreprise-paris',
        label: "Vidéosurveillance d'entreprise à Paris",
        description:
          'Audit, conception, installation et maintenance de systèmes de vidéosurveillance pour les entreprises parisiennes.',
      },
    ],
  },
  {
    title: 'Expertise & conseil en sûreté',
    description:
      'Audits et accompagnement pour structurer vos dispositifs de sûreté et plans de continuité.',
    items: [
      {
        href: '/solutions/expertise-conseil/audit-surete-siege-social-paris',
        label: 'Audit de sûreté de siège social à Paris',
        description:
          'Évaluation du niveau de sûreté de votre siège social et priorisation des actions à mener.',
      },
    ],
  },
  {
    title: 'Sécurité humaine & gardiennage',
    description:
      'Agents de sécurité et dispositifs de gardiennage pour vos sites en Île-de-France et en région.',
    items: [
      {
        href: '/solutions/securite-humaine/gardiennage-ile-de-france',
        label: 'Gardiennage en Île-de-France',
        description:
          'Agents de sécurité, rondes et levées de doute pour vos chantiers, sites tertiaires et entrepôts franciliens.',
      },
      {
        href: '/solutions/securite-humaine/securite-centres-commerciaux',
        label: 'Sécurité centres commerciaux & retail',
        description:
          'Dispositifs de sécurité pour centres commerciaux, galeries marchandes et enseignes retail.',
      },
      {
        href: '/solutions/securite-humaine/agent-securite-marseille',
        label: 'Agents de sécurité à Marseille',
        description:
          'Dispositifs d’agents de sécurité pour chantiers, sites industriels, commerces et événements à Marseille.',
      },
      {
        href: '/solutions/securite-humaine/agent-securite-montpellier',
        label: 'Agents de sécurité à Montpellier',
        description:
          'Gardiennage et surveillance de sites à Montpellier et dans l’Hérault (34).',
      },
      {
        href: '/solutions/securite-humaine/agent-securite-nice',
        label: 'Agents de sécurité à Nice',
        description:
          "Gardiennage de sites professionnels, commerces et événements à Nice et sur la Côte d'Azur.",
      },
    ],
  },
  {
    title: 'Sécurité événementielle',
    description:
      'Dispositifs de sécurité pour salons, festivals, événements corporate et tournages.',
    items: [
      {
        href: '/solutions/securite-evenementielle/securite-evenementielle-cannes',
        label: 'Sécurité événementielle à Cannes',
        description:
          "Dispositifs de sécurité pour festivals, salons et événements corporate à Cannes et sur la Côte d'Azur.",
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Solutions</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Solutions de sécurité pour vos sites et vos événements
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            Retrouvez ici les principales solutions de sécurité proposées par MAB SECURITE,
            organisées par thématique : sécurité incendie, vidéosurveillance, audits de
            sûreté, gardiennage et sécurité événementielle. Chaque page détaille les enjeux,
            les prestations et les modalités de mise en œuvre, avec la possibilité de
            demander un devis en ligne.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {solutionSections.map((section) => (
            <article key={section.title} className="card p-5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold text-slate-50">{section.title}</h2>
                  <p className="text-muted">{section.description}</p>
                  <ul className="mt-2 space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
                        >
                          {item.label}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                        <p className="text-[11px] text-slate-400">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}