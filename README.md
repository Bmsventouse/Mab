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

Les photos illustrant la **galerie de la page d’accueil** sont issues de banques d’images libres de droit (par exemple Unsplash) et sont chargées via leurs URL externes.  
Aucune image n’est stockée directement dans le dépôt, ce qui limite les risques liés aux droits d’auteur et permet de les remplacer facilement par des visuels spécifiques à MAB SECURITE si besoin.

Pour ajouter ou remplacer des visuels en adéquation avec le sujet (sécurité privée, BTP, sites industriels, événements), vous pouvez utiliser des banques d’images **libres de droits** comme :

- [Unsplash](https://unsplash.com/) – collections “construction”, “security”, “industrial” ;
- [Pexels](https://www.pexels.com/fr-fr/) – mots-clés “chantier BTP”, “gardiennage”, “security guard” ;
- [Pixabay](https://pixabay.com/fr/) – photos et illustrations libres de droit.

Recommandations :

1. Placer les images dans `public/images/` (par exemple `public/images/chantier-btp-paris.jpg`).  
2. Utiliser ces images dans les pages via le composant `next/image` ou des balises `<img />` classiques.  
3. Mettre à jour `branding.logoUrl` si vous ajoutez un logo dans `public/images/`.

De cette façon, le site reste simple à maintenir, tout en permettant d’ajouter des visuels professionnels en totale adéquation avec le thème de la sécurité privée et du BTP.

## Débogage & vérifications avant livraison

Cette section résume les commandes et les points de contrôle à effectuer avant de livrer le site.

### 1. Vérifications techniques

À exécuter depuis la racine du projet :

```bash
# Vérifier les types TypeScript
npm run typecheck

# Vérifier la qualité du code (ESLint)
npm run lint

# Vérifier que la build de production passe
npm run build
```

Si ces trois commandes passent sans erreur, le projet est sain côté code (types, lint, build).

### 2. Vérifications fonctionnelles (en local)

Lancer le serveur de développement :

```bash
npm run dev
# http://localhost:3000
```

Puis vérifier manuellement :

1. **Navigation globale**
   - Menu principal (desktop) et menu burger (mobile).
   - Liens vers : Accueil, Prestations, Secteurs, À propos, Contact.
   - Liens vers les pages locales : Paris, Marseille, Montpellier, Nîmes.

2. **Pages principales**
   - Accueil : hero, blocs “Pour quels types d’organisations ?”, prestations clés, galerie photo, engagements.
   - Prestations : liste des prestations et lien vers la page “Gardiennage chantiers BTP Paris”.
   - Secteurs : toutes les cartes secteurs affichées.
   - À propos : bloc direction générale + organisation France Nord / France Sud.
   - Contact : formulaire, blocs Direction / France Nord / France Sud, coordonnées.

3. **Pages locales**
   - `/securite-privee-paris`
   - `/securite-privee-marseille`
   - `/securite-privee-montpellier`
   - `/securite-privee-nimes`
   - `/gardiennage-chantiers-btp-paris`

   Pour chaque page locale :
   - H1 cohérent (ville + activité).
   - Bloc “zone & responsable opérationnel” correct (Béna pour Nord, Sofiane pour Sud).
   - Liens internes entre les pages locales fonctionnels.

4. **Formulaire de contact**
   - Accès au formulaire via `/contact` et via le bouton “Demander un devis” du header.
   - Soumission avec des données de test : vérifier l’affichage du message de confirmation (statut succès côté UI).

### 3. Vérifications SEO rapides

Toujours en local (ou sur un environnement de préproduction) :

- Sur quelques pages clés (Accueil, Prestations, À propos, une page locale) :
  - Vérifier le `<title>` et la `<meta name="description">` dans l’onglet “Éléments” / “Inspector” du navigateur.
  - Vérifier la présence de la balise canonical (`<link rel="canonical" ...>`).
- Vérifier :
  - `http://localhost:3000/robots.txt`
  - `http://localhost:3000/sitemap.xml`

Ils doivent s’afficher sans erreur et lister les principales routes.

Ces vérifications garantissent que le dépôt est prêt pour une livraison propre (technique, fonctionnelle et SEO).
