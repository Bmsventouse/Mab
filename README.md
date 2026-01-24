# MAB SECURITE – Site vitrine B2B

Ce dépôt contient le site vitrine de **MAB SECURITE**, société de sécurité privée basée à Nîmes (France).  
Le site est construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

L’orientation principale est la **sécurité privée B2B**, avec un focus particulier sur :

- le **gardiennage de chantiers BTP et la mise en sécurité de sites sensibles à Paris et en Île-de-France (France Nord)** ;
- les missions de sécurité à **Marseille et Montpellier** (BTP, sites industriels, logistiques, commerciaux, événements) au sein de la **zone Sud** ;
- les missions de proximité sur **Nîmes / Gard** et plus largement la **côte méditerranéenne (France Sud)**.

Le site vise à :

- présenter une **offre claire et crédible** aux donneurs d’ordre privés et publics ;
- servir de **pièce de conviction** dans les réponses à appels d’offres ;
- permettre à MAB de **constituer un vivier d’agents de sécurité** qualifiés (formulaire dédié).

---

## 1. Stack technique

- Next.js 14 – App Router
- React 18
- TypeScript
- Tailwind CSS
- Icônes : `lucide-react`
- Supabase (stockage des candidatures agents)
- Nodemailer (envoi d’e-mails via Google Workspace)

---

## 2. Architecture fonctionnelle

### 2.1 Contenus et pages principales

Dans `src/app` :

- `page.tsx`  
  Page d’accueil : positionnement, contextes d’intervention, prestations clés, mini-galerie, engagements.

- `prestations/page.tsx`  
  Présentation des prestations de sécurité (gardiennage BTP, rondes, sécurité événementielle, etc.) et liens vers les solutions détaillées.

- `secteurs/page.tsx`  
  Secteurs d’intervention (entreprises, logisticiens, collectivités, événementiel), avec exemples de sites.

- `references/page.tsx`  
  Illustrations de **dispositifs types** (chantiers BTP, entrepôts logistiques, sièges sociaux, événements).  
  Ces cas servent de base pour rassurer les donneurs d’ordre sans dévoiler d’informations sensibles sur des clients réels.

- Pages “À propos” / “Contact” :

  - `a-propos/page.tsx` : présentation de l’entreprise, organisation **France Nord / France Sud**, sans exposer le gérant.
  - `contact/page.tsx` : formulaire de contact pour **clients exclusivement professionnels**, blocs “Direction générale”, “France Nord – Paris & IDF (Béna)”, “France Sud – Marseille / Montpellier / Nîmes (Sofiane)”.

- Pages locales :

  - `securite-privee-paris/page.tsx` : Paris / Île-de-France (sécurité BTP & sites sensibles).
  - `gardiennage-chantiers-btp-paris/page.tsx` : landing dédiée au gardiennage de chantiers BTP à Paris / IDF.
  - `securite-privee-marseille/page.tsx` : Marseille (BTP, sites industriels, logistiques, commerciaux, événements).
  - `securite-privee-montpellier/page.tsx` : Montpellier (BTP, tertiaire, événements économiques).
  - `securite-privee-nimes/page.tsx` : Nîmes / Gard (BTP & proximité).

- Pages “solutions” :

  - `solutions/page.tsx` : hub des solutions (sécurité incendie SSIAP IGH, vidéosurveillance entreprise, audits de sûreté, gardiennage IDF, sécurité entrepôts & plateformes logistiques, centres commerciaux & retail, agents de sécurité par ville, sécurité événementielle à Cannes).
  - `solutions/securite-incendie/agent-ssiap-igh-paris/page.tsx` : solution sécurité incendie & agents SSIAP pour IGH à Paris.
  - `solutions/securite-electronique/videosurveillance-entreprise-paris/page.tsx` : vidéosurveillance d’entreprise à Paris.
  - `solutions/expertise-conseil/audit-surete-siege-social-paris/page.tsx` : audit de sûreté de siège social à Paris.
  - `solutions/securite-humaine/gardiennage-ile-de-france/page.tsx` : gardiennage en Île-de-France.
  - `solutions/securite-humaine/securite-entrepots-logistiques/page.tsx` : sécurité entrepôts & plateformes logistiques.
  - `solutions/securite-humaine/securite-centres-commerciaux/page.tsx` : sécurité centres commerciaux & retail.
  - `solutions/securite-humaine/agent-securite-marseille/page.tsx` : agents de sécurité à Marseille.
  - `solutions/securite-humaine/agent-securite-montpellier/page.tsx` : agents de sécurité à Montpellier.
  - `solutions/securite-humaine/agent-securite-nice/page.tsx` : agents de sécurité à Nice.
  - `solutions/securite-evenementielle/securite-evenementielle-cannes/page.tsx` : sécurité événementielle à Cannes.

- Pages “Réjoindre MAB” & légales :

  - `rejoindre-mab/page.tsx` : formulaire **candidature agents** (vivier Supabase).
  - `mentions-legales/page.tsx` : mentions légales (données issues INSEE / INPI).
  - `politique-de-confidentialite/page.tsx` : politique de confidentialité (RGPD / CNIL).
  - `galerie/page.tsx` : galerie photo.

- SEO technique :

  - `sitemap.ts` / `robots.ts` : sitemap XML, directives robots.

### 2.2 Contenus structurés

- `src/content/company.ts`  
  Identité, coordonnées, baseline, zone desservie, prestations, secteurs.
- `src/content/intentions.ts`  
  Intentions de recherche / scénarios de devis structurés, utilisés pour guider la stratégie de contenus.

### 2.3 API internes & flux de données

- `src/app/api/contact/route.ts`  
  - Reçoit les demandes du formulaire `/contact`.
  - Valide les champs (raison sociale, contact, e-mail, téléphone, type de besoin).
  - Utilise **SMTP (Nodemailer)** pour envoyer un e-mail à `contact@mab-securite.fr` (Google Workspace).
  - Utilise un **champ honeypot** côté client/serveur pour filtrer les bots sans recourir à un CAPTCHA (meilleure accessibilité).

- `src/app/api/agents/route.ts`  
  - Reçoit les données du formulaire `/rejoindre-mab`.
  - Valide nom, téléphone, e-mail, ville/zone.
  - Insère les candidatures dans la table Supabase `agent_applications`.
  - Tronque le champ “expérience” pour éviter les abus.
  - Utilise également un **honeypot anti-spam**.

---

## 3. Configuration & variables d’environnement

### 3.1 Supabase (vivier agents)

Requis pour `/api/agents` :

- `SUPABASE_URL` : URL du projet Supabase.
- `SUPABASE_SERVICE_ROLE_KEY` : clé “service role” (à garder strictement côté serveur).

Table recommandée (`agent_applications`) :

```sql
create table public.agent_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  email text not null,
  city text not null,
  zone text,
  has_cnaps boolean not null default false,
  ssiap_level text,
  experience text
);
```

### 3.2 SMTP (Google Workspace – contact)

Requis pour `/api/contact` :

- `SMTP_HOST` : `smtp.gmail.com`
- `SMTP_PORT` : `587`
- `SMTP_USER` : `contact@mab-securite.fr`
- `SMTP_PASS` : mot de passe d’application / compte
- `CONTACT_RECIPIENT_EMAIL` : `contact@mab-securite.fr`

Le formulaire `/contact` envoie un e-mail structuré à cette adresse, avec `replyTo` sur l’e-mail du demandeur.

### 3.3 Google Tag Manager (optionnel)

- `NEXT_PUBLIC_GTM_ID` : identifiant GTM (ex. `GTM-XXXXXXX`), uniquement si un conteneur GTM est utilisé.

Le chargement de GTM est géré par `ConsentProvider` (cf. ci-dessous) et ne se fait **qu’après consentement explicite** de l’utilisateur.

---

## 4. Accessibilité & qualité (WCAG / Pa11y / Lighthouse)

Le projet intègre dès le départ des outils et pratiques orientés **accessibilité** :

- `.pa11yci.json`  
  - Standard : `WCAG2AA`
  - URLs testées : `/`, `/prestations`, `/secteurs`, `/contact`, `/securite-privee-paris`, `/securite-privee-marseille`, `/securite-privee-nimes`.
  - Exécution locale possible :

    ```bash
    npx pa11y-ci
    ```

- `lighthouserc.json`  
  - Configuration Lighthouse CI (mode desktop) sur `/`, `/prestations`, `/secteurs`, `/contact`.
  - Exécution possible :

    ```bash
    npx lhci autorun
    ```

- Pratiques d’accessibilité intégrées :
  - hiérarchie de titres claire (un seul H1 par page) ;
  - textes alternatifs descriptifs pour les images importantes ;
  - composants interactifs (boutons, liens) avec états focus et contrastes suffisants ;
  - formulaires avec labels explicites, messages d’erreur textuels et lisibles ;
  - absence de CAPTCHA visuel bloquant : usage de **honeypot invisible** pour limiter le spam.

---

## 5. Données personnelles & conformité (CNIL / RGPD)

La gestion des données et des traceurs est pensée pour être compatible avec les recommandations CNIL.

### 5.1 Formulaires & données collectées

- **Formulaire de contact** (`/contact`)  
  Données collectées :
  - société / organisation,
  - nom & prénom du contact,
  - e-mail professionnel,
  - téléphone,
  - type de besoin, contexte, période souhaitée (optionnel).

  Finalité :
  - analyser la demande,
  - recontacter le demandeur,
  - établir une proposition commerciale si besoin.

  Aucune de ces données n’est stockée côté base de données dans ce projet : elles transitent via l’API et sont transmises par e-mail à `contact@mab-securite.fr`.

- **Formulaire “Rejoindre MAB”** (`/rejoindre-mab`)  
  Données collectées :
  - nom & prénom,
  - e-mail, téléphone,
  - ville / zone géographique, zone préférentielle,
  - informations sur la carte pro (CNAPS) et le niveau SSIAP,
  - expérience et disponibilités (optionnel).

  Finalité :
  - constituer un **vivier d’agents de sécurité**,
  - recontacter les profils pertinents pour des missions ponctuelles ou récurrentes.

  Ces données sont stockées dans la table `agent_applications` de Supabase.

Les droits des personnes (accès, rectification, opposition, effacement) sont décrits dans la page  
`/politique-de-confidentialite`.

### 5.2 Cookies, consentement & GTM

La gestion des cookies et traceurs est centralisée dans :

- `src/components/layout/ConsentProvider.tsx`

Principes :

- par défaut, seuls les **cookies strictement nécessaires** au fonctionnement du site sont utilisés ;
- aucun traceur de mesure d’audience ou marketing (ex. GTM) n’est activé sans consentement explicite ;
- une bannière de cookies permet :
  - d’**accepter** tous les traceurs optionnels,
  - de **refuser** en un clic (“Tout refuser”), conformément aux recommandations CNIL.

Le conteneur GTM n’est chargé que lorsque l’utilisateur :

1. est sur le client,
2. a donné un consentement “granted” stocké localement,
3. et que `NEXT_PUBLIC_GTM_ID` est défini.

---

## 6. Images & galerie

Les visuels sont stockés dans `public/images/` et intégrés via `next/image`.

- La **page d’accueil** affiche une mini-galerie de visuels illustrant les contextes d’intervention (chantier BTP, entrepôt/logistique, événement, siège social).
- La **page `/galerie`** présente l’ensemble des visuels avec noms de fichiers explicites et textes alternatifs descriptifs en français.
- Le **logo** est stocké dans `public/images/logo-mab-securite.svg` et référencé via `company.branding.logoUrl`.

Les images peuvent être remplacées par les photos propres à MAB SECURITE (chantiers, sites clients, événements), ou complétées par des images issues de banques libres de droits, en respectant les licences.

---

## 7. Commandes & vérifications avant livraison

### 7.1 Installation & scripts

Depuis la racine du projet :

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Vérification des types TypeScript
npm run typecheck

# Linting (ESLint)
npm run lint

# Build de production
npm run build

# Démarrage du serveur en mode production
npm start
```

### 7.2 Vérifications fonctionnelles (en local)

- Navigation globale desktop / mobile (header + footer).
- Pages principales : Accueil, Prestations, Secteurs, Références, À propos, Contact.
- Pages locales : Paris, Marseille, Montpellier, Nîmes, Gardiennage BTP Paris.
- Formulaires :
  - `/contact` → envoi d’une demande, affichage du message de succès, réception du mail dans `contact@mab-securite.fr`.
  - `/rejoindre-mab` → soumission d’une candidature de test, apparition d’une ligne dans `agent_applications` (Supabase).

### 7.3 Vérifications SEO & accessibilité

- Vérifier les `<title>`, `<meta name="description">` et `<link rel="canonical">` sur quelques pages clés.
- Vérifier `robots.txt` et `sitemap.xml` :

  ```text
  http://localhost:3000/robots.txt
  http://localhost:3000/sitemap.xml
  ```

- Lancer un audit Pa11y (WCAG2AA) et Lighthouse si nécessaire :

  ```bash
  npx pa11y-ci
  npx lhci autorun
  ```

Si ces checks passent sans erreur critique, le site est prêt pour une utilisation en production, avec un niveau satisfaisant de qualité technique, d’accessibilité et de conformité aux bonnes pratiques CNIL / RGPD.
