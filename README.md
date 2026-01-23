# MAB SECURITE – Site vitrine

Ce dépôt contient le site vitrine de **MAB SECURITE**, société de sécurité privée basée à Nîmes (France).  
Le site est construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

L’orientation principale est la **sécurité privée B2B**, avec un focus particulier sur :

- le **gardiennage de chantiers BTP et la mise en sécurité de sites sensibles à Paris et en Île-de-France (France Nord)** ;
- les missions de sécurité à **Marseille et Montpellier** (BTP, sites industriels, logistiques, commerciaux, événements) au sein de la **zone Sud** ;
- les missions de proximité sur **Nîmes / Gard** et plus largement la **côte méditerranéenne (France Sud)**.

## Stack technique

- Next.js 14 – App Router
- React 18
- TypeScript
- Tailwind CSS
- Icons : lucide-react

## Démarrage du projet

### Prérequis

- Node.js 18+ recommandé
- npm (ou un autre gestionnaire de paquets compatible)

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

### Build de production

```bash
npm run build
npm start
```

## Structure principale

- `src/content/company.ts`  
  Informations centrales sur l’entreprise (identité, coordonnées, baseline, zone desservie, prestations, secteurs).

- `src/app`  
  - `page.tsx` : page d’accueil  
  - `prestations/page.tsx` : détail des prestations (gardiennage BTP & sites professionnels)  
  - `secteurs/page.tsx` : secteurs d’intervention (BTP, entreprises, acteurs publics, événementiel)  
  - `a-propos/page.tsx` : présentation de l’entreprise  
  - `contact/page.tsx` : contact & demande de devis  
  - `securite-privee-paris/page.tsx` : page locale Paris / Île-de-France (sécurité BTP & sites sensibles)  
  - `gardiennage-chantiers-btp-paris/page.tsx` : landing dédiée au gardiennage de chantiers BTP à Paris / IDF  
  - `securite-privee-marseille/page.tsx` : page locale Marseille (BTP, sites industriels, commerciaux, événements)  
  - `securite-privee-montpellier/page.tsx` : page locale Montpellier (BTP, sites tertiaires et événements économiques)  
  - `securite-privee-nimes/page.tsx` : page locale Nîmes / Gard (BTP & proximité)  
  - `mentions-legales/page.tsx` : mentions légales  
  - `politique-de-confidentialite/page.tsx` : politique de confidentialité  
  - `api/contact/route.ts` : API interne pour le formulaire de contact  
  - `sitemap.ts` / `robots.ts` : SEO technique (sitemap XML, directives robots)

- `src/components`  
  Composants du site organisés de manière modulaire :
  - `atoms/` : primitives UI de base (boutons, textes, conteneurs…)
  - `molecules/` : petits ensembles réutilisables (liens de navigation, etc.)
  - `organisms/` : blocs structurants (header, footer, formulaires…)
  - `templates/` : gabarits de pages (pages services, pages locales, articles)
  - `forms/` : formulaires, dont le formulaire de contact principal.

## Champs à personnaliser en priorité

Dans `src/content/company.ts` :

- **Téléphone** : `contact.phone.label` et `contact.phone.value`
- **Email** : `contact.email`
- **URL du site** : `contact.websiteUrl`
- **Zone d’intervention** : `areaServed` (Paris / IDF, Marseille, Montpellier, Nîmes / Gard, etc.)
- **Logo** : `branding.logoUrl` (si un logo est disponible)

Une fois ces informations complétées, le site sera prêt à être utilisé comme vitrine B2B pour MAB SECURITE, avec un positionnement clair sur le **gardiennage de chantiers BTP à Paris / IDF**, la **sécurité de sites professionnels** sur Marseille, Montpellier et Nîmes, ainsi que la structuration opérationnelle **France Nord / France Sud** (responsables par zone).

## Images et photos (libres de droit)

Aucune photo n’est embarquée directement dans le dépôt afin d’éviter tout risque lié aux droits d’auteur.  
Une section de **galerie photo** est déjà prévue sur la page d’accueil (grille de vignettes placeholder) afin de pouvoir intégrer facilement, à terme, des visuels de chantiers, sites et événements sécurisés par MAB SECURITE.

Pour ajouter des visuels en adéquation avec le sujet (sécurité privée, BTP, sites industriels, événements), vous pouvez utiliser des banques d’images **libres de droits** comme :

- [Unsplash](https://unsplash.com/) – collections “construction”, “security”, “industrial” ;
- [Pexels](https://www.pexels.com/fr-fr/) – mots-clés “chantier BTP”, “gardiennage”, “security guard” ;
- [Pixabay](https://pixabay.com/fr/) – photos et illustrations libres de droit.

Recommandations :

1. Placer les images dans `public/images/` (par exemple `public/images/chantier-btp-paris.jpg`).  
2. Utiliser ces images dans les pages via le composant `next/image` ou des balises `<img />` classiques.  
3. Mettre à jour `branding.logoUrl` si vous ajoutez un logo dans `public/images/`.

De cette façon, le site reste simple à maintenir, tout en permettant d’ajouter des visuels professionnels en totale adéquation avec le thème de la sécurité privée et du BTP.
