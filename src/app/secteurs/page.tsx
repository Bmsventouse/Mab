import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Clapperboard, Landmark, Ticket } from 'lucide-react';
import { company, sectors } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Secteurs d’intervention – BTP, entreprises et acteurs publics',
  description:
    "Secteurs accompagnés par MAB SECURITE : entreprises du BTP, sièges sociaux, sites industriels et logistiques, collectivités, acteurs publics et métiers de l'événementiel (y compris tournages et plateaux techniques) à Paris, Marseille, Montpellier, Nîmes et dans leurs régions.",
  canonicalPath: '/secteurs',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Secteurs', path: '/secteurs' },
]);

const iconMap: Record<string, typeof Building2> = {
  entreprises: Building2,
  evenementiel: Ticket,
  collectivites: Landmark,
  'tournages-plateaux': Clapperboard,
};

export default function SecteursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) des secteurs
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-8">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/secteurs', label: 'Secteurs' },
              ]}
            />
            <p className="badge">Secteurs</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Des dispositifs adaptés à vos environnements
            </Heading>
            <Text variant="muted" className="max-w-2xl text-sm">
              {company.name} intervient dans différents environnements professionnels avec
              un souci constant d&apos;adaptation aux contraintes de chaque métier&nbsp;:
              continuité de service, gestion des flux, exigences réglementaires, enjeux
              d&apos;image et de confidentialité, y compris dans le cadre de marchés publics
              ou de conventions pluriannuelles.
            </Text>
          </header>

        <section className="grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => {
            const Icon = iconMap[sector.slug] ?? Building2;

            return (
              <article key={sector.slug} className="card p-6 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <Heading level={2} className="text-base">
                      {sector.name}
                    </Heading>
                    <Text variant="muted" className="text-sm">
                      {sector.description}
                    </Text>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                      {sector.examples.map((example) => (
                        <li key={example}>• {example}</li>
                      ))}
                    </ul>
                    {sector.slug === 'entreprises' && (
                      <Text className="mt-2 text-[11px] text-slate-400">
                        Pour sécuriser vos entrepôts, plateformes logistiques et centres commerciaux,
                        vous pouvez consulter nos solutions dédiées&nbsp;:&nbsp;
                        <Link
                          href="/solutions/securite-humaine/securite-entrepots-logistiques"
                          className="underline-offset-2 hover:underline"
                        >
                          sécurité entrepôts &amp; plateformes logistiques
                        </Link>
                        &nbsp;et&nbsp;
                        <Link
                          href="/solutions/securite-humaine/securite-centres-commerciaux"
                          className="underline-offset-2 hover:underline"
                        >
                          sécurité centres commerciaux &amp; retail
                        </Link>
                        .
                      </Text>
                    )}
                    {sector.slug === 'evenementiel' && (
                      <p className="mt-2 text-[11px] text-slate-400">
                        Pour vos événements à forte visibilité, notamment sur la Côte d&apos;Azur,
                        nos dispositifs de&nbsp;
                        <Link
                          href="/solutions/securite-evenementielle/securite-evenementielle-cannes"
                          className="underline-offset-2 hover:underline"
                        >
                          sécurité événementielle à Cannes
                        </Link>
                        &nbsp;et nos&nbsp;
                        <Link
                          href="/solutions/securite-humaine/agent-securite-nice"
                          className="underline-offset-2 hover:underline"
                        >
                          agents de sécurité à Nice
                        </Link>
                        &nbsp;peuvent être adaptés à vos événements professionnels.
                      </p>
                    )}
                    {sector.slug === 'collectivites' && (
                      <p className="mt-2 text-[11px] text-slate-400">
                        Pour les bâtiments administratifs, équipements culturels ou sportifs,
                        un dispositif structuré de&nbsp;
                        <Link
                          href="/solutions/securite-humaine/gardiennage-ile-de-france"
                          className="underline-offset-2 hover:underline"
                        >
                          gardiennage en Île-de-France
                        </Link>
                        &nbsp;ou de sécurité humaine dédiée peut être mis en place selon vos sites.
                      </p>
                    )}
                    {sector.slug === 'tournages-plateaux' && (
                      <p className="mt-2 text-[11px] text-slate-400">
                        Pour les tournages et plateaux techniques, nos dispositifs de&nbsp;
                        <Link
                          href="/solutions/securite-evenementielle/securite-evenementielle-cannes"
                          className="underline-offset-2 hover:underline"
                        >
                          sécurité événementielle
                        </Link>
                        &nbsp;et d&apos;
                        <Link
                          href="/solutions/securite-humaine/agent-securite-marseille"
                          className="underline-offset-2 hover:underline"
                        >
                          agents de sécurité à Marseille
                        </Link>
                        &nbsp;peuvent être adaptés à la configuration de vos sites.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Vous ne trouvez pas votre secteur dans cette liste&nbsp;?
          </p>
          <p className="mt-2">
            Les besoins en sécurité privée peuvent concerner de nombreux environnements
            spécifiques (santé, enseignement, sites culturels, etc.). N&apos;hésitez pas à
            nous contacter pour étudier la faisabilité d&apos;un dispositif adapté.
          </p>
          <p className="mt-2 text-[11px] text-slate-400">
            Pour des besoins plus ciblés, vous pouvez aussi consulter nos solutions
            dédiées&nbsp;:&nbsp;
            <Link
              href="/solutions/expertise-conseil/audit-surete-siege-social-paris"
              className="underline-offset-2 hover:underline"
            >
              audit de sûreté de siège social à Paris
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
            &nbsp;ou&nbsp;
            <Link
              href="/solutions/securite-evenementielle/securite-evenementielle-cannes"
              className="underline-offset-2 hover:underline"
            >
              sécurité événementielle à Cannes
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
    </>
  );
}