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
- `src/content/intentions.ts`  
  Base de données structurée des principales **intentions de devis** (50 scénarios SEO scorés) servant de socle au plan de contenu et à l’architecture SEO.

- `src/app`  \n  - `page.tsx` : page d’accueil  \n  - `prestations/page.tsx` : détail des prestations (gardiennage BTP & sites professionnels)  \n  - `secteurs/page.tsx` : secteurs d’intervention (BTP, entreprises, acteurs publics, événementiel)  \n  - `a-propos/page.tsx` : présentation de l’entreprise  \n  - `contact/page.tsx` : contact & demande de devis (clients exclusivement professionnels)  \n  - `securite-privee-paris/page.tsx` : page locale Paris / Île-de-France (sécurité BTP & sites sensibles)  \n  - `gardiennage-chantiers-btp-paris/page.tsx` : landing dédiée au gardiennage de chantiers BTP à Paris / IDF  \n  - `securite-privee-marseille/page.tsx` : page locale Marseille (BTP, sites industriels, logistiques, commerciaux, événements)  \n  - `securite-privee-montpellier/page.tsx` : page locale Montpellier (BTP, sites tertiaires et événements économiques)  \n  - `securite-privee-nimes/page.tsx` : page locale Nîmes / Gard (BTP & proximité)  \n  - `solutions/page.tsx` : hub des solutions (sécurité incendie SSIAP IGH, vidéosurveillance entreprise, audits de sûreté, gardiennage IDF, sécurité entrepôts & plateformes logistiques, sécurité centres commerciaux & retail, agents de sécurité par ville, sécurité événementielle à Cannes)  \n  - `solutions/securite-incendie/agent-ssiap-igh-paris/page.tsx` : solution sécurité incendie & agents SSIAP pour IGH à Paris  \n  - `solutions/securite-electronique/videosurveillance-entreprise-paris/page.tsx` : solution vidéosurveillance d’entreprise à Paris  \n  - `solutions/expertise-conseil/audit-surete-siege-social-paris/page.tsx` : solution audit de sûreté de siège social à Paris  \n  - `solutions/securite-humaine/gardiennage-ile-de-france/page.tsx` : solution gardiennage en Île-de-France (chantiers, sites tertiaires, entrepôts)  \n  - `solutions/securite-humaine/securite-entrepots-logistiques/page.tsx` : solution sécurité entrepôts & plateformes logistiques  \n  - `solutions/securite-humaine/securite-centres-commerciaux/page.tsx` : solution sécurité centres commerciaux & retail (prévention des vols et démarque inconnue)  \n  - `solutions/securite-humaine/agent-securite-marseille/page.tsx` : solution agents de sécurité à Marseille  \n  - `solutions/securite-humaine/agent-securite-montpellier/page.tsx` : solution agents de sécurité à Montpellier  \n  - `solutions/securite-humaine/agent-securite-nice/page.tsx` : solution agents de sécurité à Nice  \n  - `solutions/securite-evenementielle/securite-evenementielle-cannes/page.tsx` : solution sécurité événementielle à Cannes (festivals, salons, événements corporate)  \n  - `mentions-legales/page.tsx` : mentions légales  \n  - `politique-de-confidentialite/page.tsx` : politique de confidentialité  \n  - `api/contact/route.ts` : API interne pour le formulaire de contact  \n  - `sitemap.ts` / `robots.ts` : SEO technique (sitemap XML, directives robots)\npp`  
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

## Images et photos

Les photos utilisées sur le site sont stockées dans `public/images/` et intégrées via le composant `next/image` de Next.js.

- La **page d’accueil** affiche une mini-galerie de 4 visuels illustrant les principaux contextes d’intervention (chantier BTP, entrepôt / logistique, événement professionnel, site tertiaire / siège social).  
- Une page dédiée **`/galerie`** présente l’ensemble des visuels disponibles, avec des noms de fichiers et des textes alternatifs descriptifs en français (ex. `securite-chantier-btp-nuit.png`, `securite-entrepot-plateforme-logistique.png`, `securite-evenementiel-salon-professionnel.png`, etc.).
- Le **logo** est stocké dans `public/images/logo-mab-securite.svg` et référencé via `company.branding.logoUrl`.

Les visuels peuvent être remplacés par des photos propres à MAB SECURITE (chantiers, sites clients, événements), en conservant les mêmes noms de fichiers ou en adaptant les chemins dans le code. Il reste possible d’utiliser des banques d’images **libres de droits** pour compléter la galerie si nécessaire (Unsplash, Pexels, Pixabay), en respectant les licences associées.

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
