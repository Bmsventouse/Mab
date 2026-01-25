# TODO – audit MAB Sécurité
&gt; Une seule PR, commits itératifs : 1 commit = 1 bloc

## GLOBAL
- [ ] (P1) Uniformiser l’usage du design system (Heading/Text/Button) : remplacer les titres et CTA stylés en dur sur les principales pages (HOME, Prestations, Secteurs, Solutions hub, Locales, Contact) par les composants `Heading`, `Text` et un composant CTA standard basé sur `Button`.
- [ ] (P1) Navigation mobile : améliorer l’accessibilité du menu (`src/components/organisms/SiteHeader.tsx`) en ajoutant `aria-expanded`/`aria-controls`, un focus trap dans le panneau mobile, la fermeture par ESC et un overlay cliquable pour fermer le menu.
- [ ] (P1) SEO global : vérifier que toutes les pages importantes (Solutions, Locales, Guides, Références) utilisent `buildMetadata` avec un `canonicalPath` explicite et des titres/descriptions uniques.
- [ ] (P1) JSON-LD global : systématiser l’usage de `BreadcrumbList` (via `buildBreadcrumbJsonLd`) sur toutes les pages hiérarchisées (Prestations, Secteurs, Solutions, Locales, Guides, Légal) et ajouter des schémas `Service`/`FAQPage` pour les pages Solutions et locales qui s’y prêtent.
- [ ] (P1) Sécurité API : ajouter un rate limiting simple pour les endpoints `/api/contact` et `/api/agents` (par IP et par fenêtre de temps) afin de limiter les abus en cas de contournement du honeypot.
- [ ] (P1) Validation serveur : renforcer la validation des payloads des routes API (format email minimal côté serveur, contraintes basiques sur le téléphone, taille maximale explicite sur certains champs) tout en gardant les messages utilisateurs actuels.
- [ ] (P1) Consentement & cookies : vérifier l’intégration globale de `CookiePreferencesLink` (footer) et documenter le comportement dans la doc interne pour que toute nouvelle page garde cette surface de reparamétrage du consentement.
- [ ] (P2) Headers de sécurité : ajouter, via Next.js ou Netlify, des headers HTTP de sécurité (CSP adaptée à GTM, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) pour durcir la surface d’attaque sans casser les fonctionnalités existantes.
- [ ] (P2) Performance images : remplacer le logo `<img>` par `next/image` avec tailles adaptées et, le cas échéant, définir des images `priority` sur les futures images de hero lourdes si elles sont ajoutées.
- [ ] (P2) Perf JS : limiter les scripts JSON-LD inline aux composants serveur dès que possible (éviter d’alourdir les composants client uniquement pour injecter du JSON-LD).

## HOME
- [ ] (P1) /src/app/page.tsx — remplacer les titres principaux (H1/H2) par le composant `Heading` et les textes d’intro par `Text` pour aligner la home sur le design system.
- [ ] (P1) /src/app/page.tsx — factoriser les CTA principaux (“Demander un devis”, “Découvrir nos prestations”, CTA vers gardiennage BTP, CTA galerie) en utilisant `Button` ou un composant de lien-CTA standard, au lieu de classes Tailwind dupliquées.
- [ ] (P2) /src/app/page.tsx — vérifier les classes responsives pour éviter tout overflow sur petits écrans (vérifier en particulier les grilles `md:grid-cols-…` et la mini-galerie d’images).

## PRESTATIONS
- [ ] (P1) /src/app/prestations/page.tsx — ajouter un fil d’Ariane visuel (`Breadcrumbs`) et un JSON-LD `BreadcrumbList` (Accueil > Prestations) en utilisant `buildBreadcrumbJsonLd`.
- [ ] (P1) /src/app/prestations/page.tsx — vérifier la cohérence des titres de sections secondaires (utiliser `Heading` niveau 2/3 au lieu de h2/h3 stylés manuellement).
- [ ] (P2) /src/app/prestations/page.tsx — ajouter un JSON-LD `Service` ou `OfferCatalog` décrivant les grandes familles de prestations (sécurité événementielle, gardiennage/surveillance, rondes, sécurisation de sites).

## SECTEURS
- [ ] (P1) /src/app/secteurs/page.tsx — uniformiser les titres (H1 + H2) via `Heading` et `Text` pour aligner la page Secteurs sur la home.
- [ ] (P1) /src/app/secteurs/page.tsx — ajouter `Breadcrumbs` (Accueil > Secteurs) + script JSON-LD `BreadcrumbList`.
- [ ] (P2) /src/app/secteurs/page.tsx — envisager un schéma JSON-LD de type `Service` ou `ItemList` présentant les secteurs d’intervention, si cela s’aligne avec la stratégie SEO.

## SOLUTIONS
- [ ] (P1) /src/app/solutions/page.tsx — vérifier l’utilisation de `buildMetadata` et ajouter `Breadcrumbs` (Accueil > Solutions) + JSON-LD `BreadcrumbList`.
- [ ] (P1) /src/app/solutions/** — pour chaque page de solution (SSIAP Paris, vidéosurveillance entreprise, audit sûreté, gardiennage IDF, sécurité entrepôts, centres commerciaux, agents ville, sécurité événementielle Cannes) : s’assurer que `buildMetadata` est utilisé avec un `canonicalPath` unique et un title/description ciblés.
- [ ] (P1) /src/app/solutions/** — ajouter des JSON-LD `Service` cohérents (serviceType, description, areaServed, provider LocalBusiness MAB) et, lorsque des sections FAQ existent, un JSON-LD `FAQPage`.
- [ ] (P1) /src/app/solutions/** — ajouter systématiquement des `Breadcrumbs` visuels et les scripts `BreadcrumbList` correspondants (Accueil > Solutions > [Solution]).
- [ ] (P2) /src/app/solutions/** — harmoniser les CTA cross-pages (ex. renvois entre pages Solutions et pages locales) en utilisant un pattern commun de lien-CTA.

## LOCALES (villes)
- [ ] (P1) /src/app/securite-privee-paris/page.tsx — vérifier et, si besoin, basculer les titres de section sur `Heading` + `Text` pour aligner la page sur les autres templates, sans casser les JSON-LD existants.
- [ ] (P1) /src/app/securite-privee-marseille/page.tsx — ajouter scripts JSON-LD `LocalBusiness` ou `Service` spécifiques à Marseille (description locale, areaServed) et un `BreadcrumbList` (Accueil > Marseille), ainsi que le composant `Breadcrumbs` visuel.
- [ ] (P1) /src/app/securite-privee-montpellier/page.tsx — idem Marseille : JSON-LD local, `BreadcrumbList` et `Breadcrumbs`, en s’alignant sur la structure de la page Paris.
- [ ] (P1) /src/app/securite-privee-nimes/page.tsx — idem : JSON-LD local (Nîmes/Gard), `BreadcrumbList` et `Breadcrumbs`.
- [ ] (P1) /src/app/gardiennage-chantiers-btp-paris/page.tsx — vérifier la cohérence des sections (titres via `Heading`, textes via `Text`), tout en conservant les JSON-LD `Service`, `BreadcrumbList` et `FAQPage` déjà en place.
- [ ] (P2) /src/app/** (locales) — harmoniser la structure des blocs (“Prestations clés mobilisables”, “Expertises locales”, CTA vers Contact et vers autres villes) pour que toutes les pages locales aient une expérience comparable à Paris.

## GUIDES
- [ ] (P1) /src/app/guides/page.tsx — s’assurer que la page hub utilise `buildMetadata` avec un `canonicalPath` et, si utile, `Breadcrumbs` (Accueil > Guides) + `BreadcrumbList`.
- [ ] (P1) /src/app/guides/** — pour chaque guide (ex. `securiser-chantier-btp-nuit`, `preparer-audit-surete-siege-social`) : ajouter JSON-LD de type `Article` (ou `HowTo`), avec `headline`, `description`, `datePublished` et `author` générique.
- [ ] (P2) /src/app/guides/** — renforcer le maillage interne en ajoutant des liens vers les pages Solutions/Locales pertinentes (et réciproquement, ajouter un bloc “Ressources / Guides” en bas des pages business stratégiques).

## CONTACT
- [ ] (P1) /src/app/contact/page.tsx — uniformiser H1/H2 via `Heading`/`Text` et vérifier que la structure des sections est cohérente avec la home (section introductive, bandeau zones Nord/Sud, formulaire, aside coordonnées).
- [ ] (P1) /src/app/contact/page.tsx — ajouter `Breadcrumbs` (Accueil > Contact) et le script JSON-LD `BreadcrumbList` correspondant.
- [ ] (P1) /src/app/api/contact/route.ts — mettre en place un rate limiting simple sur le POST `/api/contact` et renforcer la validation serveur (email au format minimal, contrôle de longueur pour `companyName`, `contactName`, `phone`).
- [ ] (P2) /src/components/forms/ContactForm.tsx — vérifier les messages d’erreur d’accessibilité (assurer que l’état d’erreur est bien annoncé visuellement et que le focus se positionne sur le premier champ en erreur après submit).

## LÉGAL
- [ ] (P2) /src/app/mentions-legales/page.tsx — passer les titres (H1/H2) sur `Heading` + `Text` pour rester aligné avec le design system et assurer une hiérarchie de titres homogène sur tout le site.
- [ ] (P2) /src/app/mentions-legales/page.tsx — ajouter éventuellement `Breadcrumbs` (Accueil > Mentions légales) et un JSON-LD `BreadcrumbList`.
- [ ] (P2) /src/app/politique-de-confidentialite/page.tsx — idem : standardiser titres via `Heading`, ajouter `Breadcrumbs` et `BreadcrumbList` si jugé utile pour la cohérence SEO.
- [ ] (P2) /src/app/politique-de-confidentialite/page.tsx — relire le contenu en lien avec la gestion du consentement GTM pour s’assurer qu’il est parfaitement aligné avec l’implémentation actuelle du `ConsentProvider`.

## Validation suite
- [ ] (P0) Accessibilité (pa11y/axe si présent) : lancer `npx pa11y-ci` sur les URLs configurées (.pa11yci.json) après les modifications, corriger tout écart WCAG 2.1 AA critique (contraste, focus, aria, ordre des titres, formulaires).
- [ ] (P1) HTML lint : exécuter un lint HTML / audit manual (via DevTools ou un outil dédié) pour vérifier la structure des Hn, l’unicité du H1, l’absence de IDs dupliqués, et corriger les anomalies détectées.
- [ ] (P1) Lighthouse/LHCI : lancer `npx lhci autorun` (lighthouserc.json) et viser des scores >= 90 sur Performance / Accessibilité / Best Practices / SEO ; ajuster les points identifiés (images, JS, contrastes).
- [ ] (P1) SEO : tester les JSON-LD (Rich Results Test / Search Console) + vérifier les titles/canonicals sur un échantillon de pages (HOME, Prestations, Secteurs, Solutions clés, Locales, Guides, Légal) pour confirmer l’absence de conflit ou de duplication.