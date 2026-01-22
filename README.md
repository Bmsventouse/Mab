# MAB SECURITE – Site vitrine B2B

Ce dépôt contient le site vitrine institutionnel de **MAB SECURITE**, société de sécurité privée basée à Nîmes (France).

Le site est orienté **sécurité privée B2B**, avec un positionnement clair sur :

- le **gardiennage de chantiers BTP à Paris et en Île-de-France** ;
- les missions de sécurité à **Marseille** (BTP, sites industriels, logistiques, commerciaux, événements) ;
- les missions de proximité sur **Nîmes / Gard et la côte sud**.

Il est construit avec **Next.js 14 (App Router)**, **React 18**, **TypeScript** et **Tailwind CSS**, et prêt à être déployé en production (Vercel ou autre hébergeur Node.js).

---

## Sommaire

- [1. Présentation du projet](#1-présentation-du-projet)
- [2. Stack technique](#2-stack-technique)
- [3. Démarrage rapide](#3-démarrage-rapide)
- [4. Scripts npm disponibles](#4-scripts-npm-disponibles)
- [5. Architecture du projet](#5-architecture-du-projet)
- [6. Personnalisation du contenu métier](#6-personnalisation-du-contenu-métier)
- [7. SEO, métadonnées et structure](#7-seo-métadonnées-et-structure)
- [8. Formulaire de contact et API](#8-formulaire-de-contact-et-api)
- [9. Styles, design system et animations](#9-styles-design-system-et-animations)
- [10. Outils de qualité de code](#10-outils-de-qualité-de-code)
- [11. Déploiement](#11-déploiement)
- [12. Images, photos et logo](#12-images-photos-et-logo)
- [13. Checklist de mise en production](#13-checklist-de-mise-en-production)

---

## 1. Présentation du projet

Le site a pour objectif de présenter l’offre de **MAB SECURITE** auprès de décideurs B2B :

- entreprises du **BTP** (maîtres d’ouvrage, entreprises générales, sous‑traitants) ;
- **sites industriels** et **logistiques** ;
- **acteurs publics** (collectivités, établissements publics) ;
- **organisateurs d’événements** et métiers de la production (tournages, plateaux).

Les contenus sont rédigés dans une logique :

- **institutionnelle** (présentation de la société, mentions légales, politique de confidentialité) ;
- **business** (prestations, secteurs, localisations Paris / Marseille / Nîmes) ;
- **SEO** (pages ciblées gardiennage BTP, sécurité privée par zone géographique).

---

## 2. Stack technique

- **Framework** : Next.js **14** (App Router)
- **Langage** : TypeScript
- **UI** :
  - React 18
  - Tailwind CSS 3
  - Icônes : `lucide-react`
- **Police** : `Inter` (Google Fonts, chargée via `next/font`)
- **Linting & qualité** :
  - ESLint 9 + `typescript-eslint`
  - TypeScript `tsc` pour la vérification de types

---

## 3. Démarrage rapide

### Prérequis

- Node.js **18+** (recommandé)
- `npm` (ou un gestionnaire compatible type `pnpm` / `yarn`)

### Installation des dépendances

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000` (port configurable via la variable d’environnement `PORT` si nécessaire).

### Build et exécution en production

```bash
npm run build
npm start
```

Le build génère un dossier `.next` optimisé pour la production.

---

## 4. Scripts npm disponibles

Depuis la racine du projet :

- `npm run dev`  
  Lance le serveur de développement Next.js.

- `npm run build`  
  Compile l’application pour la production.

- `npm start`  
  Démarre le serveur Next.js sur le build de production.

- `npm run lint`  
  Exécute ESLint sur le projet (`ts`, `tsx`).

- `npm run typecheck`  
  Exécute la vérification de types TypeScript sans émettre de fichiers.

---

## 5. Architecture du projet

Structure principale :

- `src/app`  
  - `page.tsx` : page d’accueil.  
  - `prestations/page.tsx` : détail des prestations (gardiennage BTP & sites professionnels).  
  - `secteurs/page.tsx` : secteurs d’intervention (entreprises, collectivités, événementiel, tournages).  
  - `a-propos/page.tsx` : présentation de l’entreprise (positionnement, informations légales synthétiques).  
  - `contact/page.tsx` : page de contact + formulaire de demande de devis.  
  - `securite-privee-paris/page.tsx` : page locale Paris / Île-de-France.  
  - `gardiennage-chantiers-btp-paris/page.tsx` : landing dédiée au gardiennage de chantiers BTP à Paris / IDF.  
  - `securite-privee-marseille/page.tsx` : page locale Marseille / Bouches‑du‑Rhône.  
  - `securite-privee-nimes/page.tsx` : page locale Nîmes / Gard.  
  - `mentions-legales/page.tsx` : mentions légales du site.  
  - `politique-de-confidentialite/page.tsx` : politique de confidentialité.  
  - `api/contact/route.ts` : endpoint API pour le formulaire de contact.  
  - `layout.tsx` : layout root, header/footer globaux, métadonnées, JSON‑LD.  
  - `globals.css` : styles globaux, design system, animations.  
  - `sitemap.ts` / `robots.ts` : SEO technique (sitemap XML, directives robots).

- `src/components`  
  - `layout/Header.tsx` : en‑tête global (navigation principale, CTA devis, téléphone).  
  - `layout/Footer.tsx` : pied de page global (coordonnées, légales, navigation).  
  - `forms/ContactForm.tsx` : formulaire de contact (client‑side) connecté à l’API `/api/contact`.

- `src/content/company.ts`  
  Fichier centralisant toutes les **données société** et le contenu structurant :
  - identité juridique et coordonnées,
  - description courte/longue,
  - prestations (`services`),
  - secteurs (`sectors`),
  - engagements (`engagements`).

- `public/` (à créer si nécessaire)  
  Répertoire recommandé pour le logo (`/images/logo-mab-securite.svg`) et les visuels.

- Fichiers de configuration à la racine :  
  - `next.config.mjs` : configuration Next (strict mode, suppression des `console` en production).  
  - `tailwind.config.js` : configuration Tailwind (tokens de couleur, fonts, ombres).  
  - `eslint.config.js` : configuration ESLint.  
  - `tsconfig*.json` : configuration TypeScript.  

---

## 6. Personnalisation du contenu métier

La majorité du contenu métier est centralisée dans `src/content/company.ts`.

### 6.1. Données société (`company`)

Les champs suivants sont à adapter en priorité :

- **Identité juridique**
  - `name`, `legalName`, `legalForm`
  - `nafApe`, `siren`, `siret`, `vatNumber`
  - `shareCapital`, `creationDate`

- **Adresse du siège**
  - `address.line1`, `address.line2` (optionnel),
  - `address.postalCode`, `address.city`, `address.country`.

- **Description**
  - `description` : texte long utilisé sur plusieurs pages (À propos, SEO, JSON‑LD).  
  - `shortDescription` : résumé utilisé notamment en footer et métadonnées.

- **Contact**
  - `contact.phone.label` : format lisible pour les humains (`+33 (0)4 …`).  
  - `contact.phone.value` : format “machine” utilisé pour les liens `tel:` (`+334…`).  
  - `contact.email` : adresse de contact principale.  
  - `contact.websiteUrl` : **URL finale du site en production** (ex. `https://www.mab-securite.fr`).

  Ce champ `websiteUrl` est utilisé pour :
  - `metadataBase` et les URLs canoniques,
  - le sitemap (`/sitemap.xml`),
  - le fichier `robots.txt`.

- **Branding**
  - `branding.baseline` : baseline affichée dans le header.  
  - `branding.logoUrl` : chemin vers le logo (ex. `/images/logo-mab-securite.svg`).

- **Zone d’intervention**
  - `areaServed` : texte affiché sur plusieurs pages (homepage, footer, contact…).

### 6.2. Prestations, secteurs et engagements

Toujours dans `src/content/company.ts` :

- `services: Service[]`  
  Décrit les grandes catégories de prestations :
  - `slug` (identifiant),
  - `name` (titre),
  - `shortDescription` (accroche courte),
  - `description` (texte long, détaillé),
  - `highlights` (points clés listés sur les pages).

  Utilisé sur :
  - la **page d’accueil** (section “Prestations clés”),
  - la page **`/prestations`**,
  - les pages locales Paris / Marseille / Nîmes (filtres par `slug`).

- `sectors: Sector[]`  
  Liste des secteurs d’intervention (entreprises, événementiel, collectivités, tournages).  
  Utilisé dans **`/secteurs`**, avec mappage d’icônes.

- `engagements: Engagement[]`  
  Liste des engagements mis en avant sur la homepage (“Nos engagements”).

> Pour ajouter, modifier ou retirer des prestations ou secteurs, il suffit d’ajuster ces tableaux ; les pages consomment ces données dynamiquement.

### 6.3. Pages locales et contenus SEO

Les pages suivantes contiennent du contenu textuel spécifique à chaque zone :

- `src/app/securite-privee-paris/page.tsx`
- `src/app/gardiennage-chantiers-btp-paris/page.tsx`
- `src/app/securite-privee-marseille/page.tsx`
- `src/app/securite-privee-nimes/page.tsx`

Pour adapter le positionnement (zones desservies, interlocuteurs, numéros directs, exemples de situations), modifier les textes dans ces composants.

Les pages **mentions légales** et **politique de confidentialité** s’appuient également sur `company` pour réinjecter les informations juridiques (dénomination, SIREN, adresse…).  
Veillez à les relire avec votre conseil / juriste si une mise à jour réglementaire est nécessaire.

---

## 7. SEO, métadonnées et structure

### 7.1. Métadonnées globales

Dans `src/app/layout.tsx` :

- `metadata.metadataBase`, `title`, `description`, `openGraph`…  
  sont initialisés à partir de `company` et de `company.contact.websiteUrl`.

- Un objet **JSON‑LD** (schema.org `LocalBusiness` + `SecurityService`) est injecté dans le `<head>` pour améliorer la compréhension par les moteurs de recherche (données légales, adresse, zone desservie, SIREN/SIRET…).

### 7.2. Métadonnées par page

Chaque page importante définit son propre :

- `export const metadata: Metadata = { title, description }`

Cela permet de travailler des **titres** et **descriptions** optimisés par typologie de requêtes (prestations, secteurs, localisations).

### 7.3. Sitemap et robots

- `src/app/sitemap.ts`  
  Génére automatiquement un `sitemap.xml` à partir d’une liste de routes clés.  
  L’URL de base est dérivée de `company.contact.websiteUrl`.

- `src/app/robots.ts`  
  Génère le `robots.txt` :
  - `userAgent: '*'`,
  - `allow: '/'`,
  - `sitemap` et `host` basés sur `websiteUrl`.

Assurez-vous de renseigner **l’URL de production définitive** avant mise en ligne.

---

## 8. Formulaire de contact et API

### 8.1. Composant `ContactForm`

Fichier : `src/components/forms/ContactForm.tsx`

- Composant client (`'use client'`).
- Gère :
  - les champs de formulaire (raison sociale, contact, email, téléphone, type de besoin, message, période) ;
  - les validations côté client ;
  - l’envoi des données sur `/api/contact` (POST JSON).

En cas de succès, un message de confirmation est affiché et les coordonnées générales (téléphone / e‑mail) sont proposées en complément.

### 8.2. Endpoint `/api/contact`

Fichier : `src/app/api/contact/route.ts`

- Vérifie le format de la requête (`JSON`) et les champs obligatoires.
- Loggue actuellement la demande côté serveur via `console.info`.
- Retourne un JSON success/failure simple.

```ts
// Extrait simplifié
if (!companyName || !contactName || !email || !phone) {
  return NextResponse.json(
    { success: false, message: 'Certains champs obligatoires sont manquants.' },
    { status: 400 },
  );
}

// TODO métier : branchement vers un CRM, un outil de ticketing, un service d'email, etc.
console.info('[contact] Nouvelle demande reçue', { ... });
return NextResponse.json({ success: true });
```

Pour une utilisation en production, il est recommandé de :

- connecter ce endpoint à :
  - un service d’envoi d’e-mails (SendGrid, Postmark, etc.),
  - et/ou un CRM / outil de ticketing ;
- sécuriser la configuration via des **variables d’environnement** (`process.env.*`) ;
- tracer les demandes dans un système persistant (base de données, pipeline CRM).

---

## 9. Styles, design system et animations

### 9.1. Tailwind & design tokens

Fichier : `tailwind.config.js`

- `content` couvre `src/app`, `src/components`, `src/content`.
- Thème étendu :
  - `fontFamily.sans` basé sur la variable CSS `--font-inter`.
  - Palette `brand` (nuances de gris) et `accent` (vert) pour la couleur principale.
  - Ombre personnalisée `shadow.soft` utilisée pour certains éléments (boutons, cartes).

### 9.2. Styles globaux (`globals.css`)

Définit :

- le background global (dégradés radiaux + fond sombre),
- les helpers de layout :
  - `.section` : marges verticales standard,
  - `.section-inner` : conteneur centré, largeur max, padding horizontal,
- les composants UI génériques :
  - `.card`, `.card-muted` : surfaces et cartes,
  - `.badge` : puce utilisée pour les contextes (secteur, localisation),
  - `.text-muted` : texte secondaire,
- des **focus states** accessibles sur les boutons, liens, champs de formulaire,
- micro‑animations (`fade-up`, `fade-in`) et utilitaires `.animate-*`.

L’ensemble vise un rendu **premium / institutionnel** tout en restant facilement extensible.

---

## 10. Outils de qualité de code

- **ESLint** (`eslint.config.js`)  
  - Base `@eslint/js` + `typescript-eslint`.  
  - Plugins :
    - `react-hooks` (bonnes pratiques hooks),
    - `react-refresh` (développement).

- **TypeScript**  
  - `tsconfig.app.json` pour l’app Next.  
  - `npm run typecheck` pour détecter les erreurs de types.

> Recommandation : lancer `npm run lint && npm run typecheck` avant tout déploiement ou mise en production.

---

## 11. Déploiement

Le projet peut être déployé :

- **Sur Vercel** (recommandé pour Next.js) :  
  - connecter le dépôt,
  - définir les variables d’environnement éventuelles (API de mail, CRM…),
  - laisser Vercel détecter Next.js automatiquement.

- **Sur un autre hébergeur Node.js** :
  1. Builder l’application : `npm run build`.
  2. Démarrer le serveur : `npm start`.
  3. Configurer le reverse proxy (Nginx / Traefik) pour exposer le port du serveur Next.

Avant le déploiement, veiller à :

- renseigner `company.contact.websiteUrl` avec l’URL de production,
- vérifier que l’URL est cohérente avec les fichiers `sitemap` & `robots`.

---

## 12. Images, photos et logo

Aucune photo n’est embarquée directement dans le dépôt afin d’éviter tout risque lié aux droits d’auteur.

Pour ajouter des visuels en adéquation avec le sujet (sécurité privée, BTP, sites industriels, événements), privilégier des banques d’images **libres de droits** :

- [Unsplash](https://unsplash.com/) – collections “construction”, “security”, “industrial” ;
- [Pexels](https://www.pexels.com/fr-fr/) – mots‑clés “chantier BTP”, “gardiennage”, “security guard” ;
- [Pixabay](https://pixabay.com/fr/) – photos et illustrations libres de droit.

Recommandations :

1. Placer les images dans `public/images/` (par exemple `public/images/chantier-btp-paris.jpg`).  
2. Utiliser ces images dans les pages via le composant `next/image` ou des balises `<img />` classiques.  
3. Mettre à jour `branding.logoUrl` dans `company.ts` si vous ajoutez un logo dans `public/images/`.

---

## 13. Checklist de mise en production

Avant de mettre le site en ligne, vérifier les points suivants :

1. **Données société à jour**
   - `company.*` (raison sociale, SIREN/SIRET, TVA, adresse, capital, date de création).
   - Coordonnées : téléphone, e‑mail, zone d’intervention.

2. **URL de production**
   - `company.contact.websiteUrl` pointe vers le domaine définitif (HTTPS).

3. **Contenus métiers**
   - Textes des pages locales Paris / Marseille / Nîmes revus et validés.
   - Liste des prestations / secteurs cohérente avec l’offre réelle.

4. **Pages légales**
   - Mentions légales et politique de confidentialité relues et validées.

5. **Formulaire de contact**
   - Endpoint `/api/contact` connecté à votre système (email / CRM / ticketing).
   - Tests de bout en bout (soumission, réception de la demande, réponse).

6. **Qualité et performance**
   - `npm run lint` sans erreur bloquante.
   - `npm run typecheck` sans erreur.
   - `npm run build` OK.

Une fois ces points validés, le site est prêt à être utilisé comme **vitrine B2B** pour MAB SECURITE, avec un positionnement clair sur le **gardiennage de chantiers BTP à Paris / IDF** et la **sécurité de sites professionnels** à Marseille, Nîmes et sur la côte sud.
