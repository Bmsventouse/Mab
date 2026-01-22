# MAB SECURITE – Site vitrine B2B

Ce dépôt contient le site vitrine institutionnel de **MAB SECURITE**, société de sécurité privée basée à Nîmes (France).

L’application vise un positionnement clair sur la **sécurité privée B2B**, avec un focus particulier sur :

- le **gardiennage de chantiers BTP à Paris et en Île-de-France** ;
- la sécurisation de sites à **Marseille** (BTP, sites industriels, logistiques, commerciaux, événements) ;
- les missions de proximité sur **Nîmes / Gard** et plus largement la côte sud.

Le site est construit avec **Next.js 14 (App Router)**, **React 18**, **TypeScript** et **Tailwind CSS** et est conçu pour un usage en production (Vercel ou autre hébergeur Node.js).

---

## Sommaire

- [1. Présentation & périmètre fonctionnel](#1-présentation--périmètre-fonctionnel)
- [2. Stack technique](#2-stack-technique)
- [3. Démarrage rapide](#3-démarrage-rapide)
- [4. Scripts npm disponibles](#4-scripts-npm-disponibles)
- [5. Architecture du projet](#5-architecture-du-projet)
- [6. Contenu métier & personnalisation](#6-contenu-métier--personnalisation)
- [7. SEO, métadonnées & conformité](#7-seo-métadonnées--conformité)
- [8. Formulaire de contact & API](#8-formulaire-de-contact--api)
- [9. Design system & styles](#9-design-system--styles)
- [10. Qualité de code & standards](#10-qualité-de-code--standards)
- [11. Déploiement & exploitation](#11-déploiement--exploitation)
- [12. Images, photos & logo](#12-images-photos--logo)
- [13. Checklist de mise en production](#13-checklist-de-mise-en-production)
- [14. Conventions de contribution & discipline documentaire](#14-conventions-de-contribution--discipline-documentaire)

---

## 1. Présentation & périmètre fonctionnel

L’application a pour objectif de présenter l’offre de **MAB SECURITE** auprès d’un public de décideurs B2B :

- entreprises du **BTP** (maîtres d’ouvrage, entreprises générales, sous‑traitants) ;
- **sites industriels** et **plateformes logistiques** ;
- **acteurs publics** (collectivités, établissements publics) ;
- **organisateurs d’événements** et métiers de la production (tournages, plateaux).

Le périmètre fonctionnel couvre :

- un **site vitrine** institutionnel (présentation de la société, légales, confidentialité) ;
- des pages de **présentation d’offres et de secteurs** (prestations, secteurs d’intervention, zones géographiques ciblées) ;
- un **formulaire de contact** structuré orienté demande de devis / qualification de besoin ;
- un socle **SEO** optimisé pour les requêtes liées au gardiennage BTP et à la sécurité privée par zone géographique.

Les contenus sont rédigés et structurés pour répondre à des enjeux :

- **institutionnels** (crédibilité, conformité, transparence) ;
- **business** (compréhension de l’offre, facilité de contact, ciblage géographique) ;
- **SEO** (pages dédiées par zone et par typologie de besoin).

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

---

## 14. Conventions de contribution & discipline documentaire

Cette section s’adresse à toute personne (ou outil automatisé) amenée à faire évoluer le projet.  
L’objectif est de maintenir un niveau de qualité professionnelle et une documentation fiable dans la durée.

### 14.1. Routine en début de session

Avant toute modification significative :

1. **Consulter le présent README**  
   - vérifier que l’architecture et les conventions décrites sont cohérentes avec l’état du code ;
   - identifier les sections potentiellement impactées (architecture, contenu métier, SEO, API, scripts…).

2. **Identifier le point d’ancrage de la modification**  
   - contenu métier : `src/content/company.ts` (ajout/modification de services, secteurs, engagements, coordonnées) ;
   - UI / pages : fichiers sous `src/app/...` ;
   - composants réutilisables : `src/components/...`.

3. **Déterminer les impacts sur la documentation**  
   - toute création ou évolution d’une page clé, d’un script ou d’un flux métier doit, le cas échéant, s’accompagner d’une mise à jour de ce README.

### 14.2. Routine en fin de session

Avant de considérer un développement comme terminé :

1. **Mettre à jour la documentation**
   - ajouter ou ajuster les sections pertinentes dans ce README (architecture, scripts, SEO, API, conventions, etc.) ;
   - documenter explicitement toute nouvelle convention ou tout changement de comportement global.

2. **Exécuter les commandes de contrôle**
   - `npm run lint`  
   - `npm run typecheck`  
   - `npm run build` (au minimum avant un déploiement).

3. **Vérifier la cohérence globale**
   - confirmer le respect des patterns existants (structure des pages, organisation des composants, style Tailwind, conventions de typage) ;
   - s’assurer que la logique métier reste centralisée dans les fichiers prévus à cet effet (notamment `src/content`) ;
   - évaluer la lisibilité du code pour un développeur ou un outil qui reprendrait le projet ultérieurement.

### 14.3. Principes à respecter en continu

- **Centralisation du contenu métier**  
  - les éléments configurables (texte institutionnel, listes de prestations et de secteurs, engagements, coordonnées) doivent, autant que possible, rester dans `src/content/company.ts` ou dans des fichiers de contenu dédiés ;
  - les pages consomment ces données, elles ne les dupliquent pas.

- **Respect du design system existant**  
  - utiliser en priorité les primitives définies dans `globals.css` (`.section`, `.section-inner`, `.card`, `.card-muted`, `.badge`, `.text-muted`, etc.) plutôt que créer de nouvelles variantes locales ;
  - s’appuyer sur la palette définie dans `tailwind.config.js` (`brand`, `accent`) pour les couleurs principales et les états.

- **SEO et accessibilité**  
  - définir systématiquement des métadonnées (`metadata`) pour toute nouvelle page de contenu stratégique ;
  - respecter une hiérarchie de titres logique (`h1`, `h2`, `h3`, …) ;
  - utiliser des libellés explicites pour les liens, boutons d’appel à l’action et champs de formulaire.

- **Qualité de code**  
  - privilégier des composants simples, clairement nommés et facilement testables ;
  - éviter les abstractions excessives et les comportements implicites difficiles à suivre ;
  - limiter l’introduction de nouvelles dépendances à ce qui est strictement nécessaire.

Le présent README doit être considéré comme la **référence documentaire** du projet.  
Toute évolution structurelle, fonctionnelle ou technique significative doit y être répercutée afin de garantir une prise en main rapide et fiable du code, maintenant et à l’avenir.
