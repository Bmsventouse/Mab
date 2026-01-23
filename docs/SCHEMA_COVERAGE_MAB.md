# Couverture Schema.org & SEO Technique – MAB SECURITE

Ce document résume, pour chaque page stratégique du site, les types de données structurées (Schema.org) implémentés, ainsi que les éléments SEO techniques principaux : balises, maillage interne et statut.

> **Note** : les URLs sont données en chemin relatif (`/...`). En production, elles seront préfixées par l’URL du site (ex. `https://www.mab-securite.fr`).

---

## 1. Pages globales

| Page | URL | Types Schema.org | Détails principaux |
| --- | --- | --- | --- |
| Layout global (toutes pages) | (global) | `LocalBusiness`, `SecurityService` | Dans `layout.tsx` : JSON-LD global pour MAB SECURITE (siège Nîmes), zone servie, coordonnées, identifiants légaux. |
| Accueil | `/` | (hérite du global) | H1 unique, sections BTP / solutions, liens vers Prestations, Secteurs, Solutions, locales, solutions détaillées. |
| Prestations | `/prestations` | (hérite du global) | Présente les prestations BTP, lien vers `/gardiennage-chantiers-btp-paris` et plusieurs pages solutions. |
| Secteurs | `/secteurs` | (hérite du global) | Secteurs BTP, entreprises, acteurs publics, retail, événementiel ; maillage vers solutions. |
| À propos | `/a-propos` | (hérite du global) | Positionne la direction générale, structure Nord/Sud, mention explicite B2B-only. |
| Contact | `/contact` | (hérite du global) | Texte orienté B2B, rappel que MAB n’intervient pas pour particuliers ; formulaire. |
| Mentions légales | `/mentions-legales` | (hérite du global) | Contenu légal classique. |
| Politique de confidentialité | `/politique-de-confidentialite` | (hérite du global) | Explication RGPD / traitement des données. |

---

## 2. Pages locales (Agences / Zones)

### 2.1. Paris

- **URL** : `/securite-privee-paris`  
- **Fichier** : `src/app/securite-privee-paris/page.tsx`

**Schema.org :**

- `LocalBusiness` – `getParisLocalBusinessJsonLd()` :
  - `name`: `MAB SECURITE Paris`
  - `description`: sécurité privée, gardiennage BTP & incendie à Paris / IDF.
  - `address`: adresse de Nîmes avec `addressLocality: "Paris"`, `postalCode: "75000"`.
  - `telephone`, `url`, `openingHours`, `areaServed: "Paris et Île-de-France"`.
  - `hasOfferCatalog` avec `Gardiennage de chantier` et `Sécurité Incendie SSIAP`.

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Sécurité BTP à Paris` → `/securite-privee-paris`

**Remarques SEO / contenu :**

- Cible BTP + sièges / sites sensibles.
- Maillage vers :
  - `/solutions/expertise-conseil/audit-surete-siege-social-paris`
  - `/solutions/securite-electronique/videosurveillance-entreprise-paris`
  - `/solutions/securite-humaine/gardiennage-ile-de-france`
  - `/gardiennage-chantiers-btp-paris`
  - autres villes (Marseille, Montpellier, Nîmes).

---

### 2.2. Marseille

- **URL** : `/securite-privee-marseille`  
- **Fichier** : `src/app/securite-privee-marseille/page.tsx`

**Schema.org :**

- `LocalBusiness` – `getMarseilleLocalBusinessJsonLd()` :
  - `name`: `MAB SECURITE Marseille`
  - `description`: sécurité BTP, industrielle, logistique, événementielle à Marseille / Bouches-du-Rhône.
  - `addressLocality: "Marseille"`, `postalCode: "13000"`.
  - `areaServed: "Marseille et Bouches-du-Rhône"`.
  - `hasOfferCatalog` identique (gardiennage / SSIAP).

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Sécurité privée à Marseille` → `/securite-privee-marseille`

**Remarques SEO / contenu :**

- Maillage vers :
  - `/solutions/securite-humaine/agent-securite-marseille`
  - `/solutions/securite-humaine/securite-entrepots-logistiques`
  - `/solutions/securite-evenementielle/securite-evenementielle-cannes`
  - autres pages locales (Paris, Montpellier, Nîmes).

---

### 2.3. Montpellier

- **URL** : `/securite-privee-montpellier`  
- **Fichier** : `src/app/securite-privee-montpellier/page.tsx`

**Schema.org :**

- `LocalBusiness` – `getMontpellierLocalBusinessJsonLd()` :
  - `name`: `MAB SECURITE Montpellier`
  - `description`: sécurité BTP, tertiaire, événementielle à Montpellier / Hérault.
  - `addressLocality: "Montpellier"`, `postalCode: "34000"`.
  - `areaServed: "Montpellier et Hérault (34)"`.

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Sécurité privée à Montpellier` → `/securite-privee-montpellier`

**Maillage :**

- Vers `/solutions/securite-humaine/agent-securite-montpellier`.
- Vers autres pages locales (Paris, Marseille, Nîmes).

---

### 2.4. Nîmes / Gard

- **URL** : `/securite-privee-nimes`  
- **Fichier** : `src/app/securite-privee-nimes/page.tsx`

**Schema.org :**

- `LocalBusiness` – `getNimesLocalBusinessJsonLd()` :
  - `name`: `MAB SECURITE Nîmes`
  - `description`: BTP, commerces, événements dans le Gard (30).
  - `addressLocality: "Nîmes"`, `postalCode: "30000"`.
  - `areaServed: "Nîmes et Gard (30)"`.

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Sécurité privée à Nîmes` → `/securite-privee-nimes`

**Maillage :**

- Vers global (Contact, Prestations).
- Vers autres villes (Paris, Marseille, Montpellier).

---

## 3. Pages services / solutions

### 3.1. Gardiennage chantiers BTP Paris

- **URL** : `/gardiennage-chantiers-btp-paris`  
- **Fichier** : `src/app/gardiennage-chantiers-btp-paris/page.tsx`

**Schema.org :**

- `Service` – `getGardiennageChantierServiceJsonLd()` :
  - `serviceType`: `Gardiennage de chantier`.
  - `description`: protection 24/7 des chantiers BTP en IDF.
  - `offers.areaServed`: `Paris et Île-de-France`.

- `FAQPage` :
  - Questions :
    - “Comment éviter les vols sur mon chantier la nuit ?”
    - “Quel est le coût d’un agent de sécurité pour un chantier ?”
    - “Comment sécuriser un chantier accessible avec plusieurs points d’entrée ?”

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Prestations` → `/prestations`
  - `Gardiennage de chantiers BTP à Paris` → `/gardiennage-chantiers-btp-paris`

**Maillage :**

- Depuis `Prestations`, `Home`, `Sécurité Paris`.
- Vers `Contact` (devis), autres solutions.

---

### 3.2. Sécurité incendie / SSIAP IGH Paris

- **URL** : `/solutions/securite-incendie/agent-ssiap-igh-paris`  
- **Fichier** : `src/app/solutions/securite-incendie/agent-ssiap-igh-paris/page.tsx`

**Schema.org :**

- `Service` – `getSsiapIghServiceJsonLd()` :
  - `serviceType`: `Sécurité incendie SSIAP pour IGH à Paris`.
  - `areaServed`: `Paris, La Défense, Île-de-France`.

- `FAQPage` – `getSsiapIghFaqJsonLd()` :
  - Obligations SSIAP, calcul des effectifs, risques en cas de non-conformité.

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Solutions` → `/solutions`
  - `Obligations SSIAP en IGH à Paris` → `/solutions/securite-incendie/agent-ssiap-igh-paris`

---

### 3.3. Vidéosurveillance entreprise Paris

- **URL** : `/solutions/securite-electronique/videosurveillance-entreprise-paris`  
- **Schema.org :**

  - `Service` – `getVideoSurveillanceServiceJsonLd()`
  - `FAQPage` – `getVideoSurveillanceFaqJsonLd()`
  - `BreadcrumbList` : Accueil → Solutions → Vidéosurveillance entreprise à Paris.

---

### 3.4. Audit de sûreté siège social Paris

- **URL** : `/solutions/expertise-conseil/audit-surete-siege-social-paris`  
- **Schema.org :**

  - `Service` – `getAuditSiegeSocialServiceJsonLd()`
  - `FAQPage` – `getAuditSiegeSocialFaqJsonLd()`
  - `BreadcrumbList` : Accueil → Solutions → Audit de sûreté de siège social à Paris.

---

### 3.5. Gardiennage & sécurité humaine

Pour chacune des pages suivantes :

- `/solutions/securite-humaine/gardiennage-ile-de-france`
- `/solutions/securite-humaine/securite-entrepots-logistiques`
- `/solutions/securite-humaine/securite-centres-commerciaux`
- `/solutions/securite-humaine/agent-securite-marseille`
- `/solutions/securite-humaine/agent-securite-montpellier`
- `/solutions/securite-humaine/agent-securite-nice`

**On a** :

- `Service` JSON-LD adapté (gardiennage IDF, entrepôts, centres commerciaux, agents par ville…).
- `FAQPage` JSON-LD avec 2–3 questions ciblées.
- `BreadcrumbList` :

  - Toujours `Accueil` → `/`
  - `Solutions` → `/solutions`
  - Puis le libellé de la solution (ex. “Gardiennage en Île-de-France”, “Sécurité centres commerciaux & retail”, “Agents de sécurité à Marseille / Montpellier / Nice”).

---

### 3.6. Sécurité événementielle Cannes

- **URL** : `/solutions/securite-evenementielle/securite-evenementielle-cannes`  
- **Schema.org :**

  - `Service` – sécurité événementielle Cannes.
  - `FAQPage` – questions sur types d’événements, délais de préparation, missions des agents.
  - `BreadcrumbList` : Accueil → Solutions → Sécurité événementielle à Cannes.

---

## 4. Page “Solutions” (hub)

- **URL** : `/solutions`  
- **Fichier** : `src/app/solutions/page.tsx`

**Schema.org :**

- `BreadcrumbList` :
  - `Accueil` → `/`
  - `Solutions` → `/solutions`

**Rôle :**

- Hub thématique listant :
  - Sécurité incendie & SSIAP.
  - Sécurité électronique & vidéosurveillance.
  - Expertise & conseil.
  - Sécurité humaine & gardiennage.
  - Sécurité événementielle.

Chaque bloc renvoie vers les pages solutions détaillées correspondantes.

---

## 5. Synthèse couverture Schema.org

- **LocalBusiness :**
  - Global (layout) + 4 agences (Paris, Marseille, Montpellier, Nîmes).

- **Service :**
  - Toutes les pages “solutions” et la page dédiée `gardiennage-chantiers-btp-paris`.

- **FAQPage :**
  - Implémenté sur les pages solutions à forte valeur ajoutée (gardiennage BTP Paris, SSIAP IGH, vidéosurveillance, audit siège social, gardiennage IDF, entrepôts, centres commerciaux, agents par ville, sécurité événementielle Cannes).

- **BreadcrumbList :**
  - Hub `/solutions`.
  - Toutes les pages solutions.
  - Toutes les pages locales.
  - `gardiennage-chantiers-btp-paris`.

---

Ce document peut servir :

- d’**audit interne** pour montrer au client la qualité technique SEO (données structurées complètes, cohérentes et alignées avec la stratégie),  
- de base pour tout futur enrichissement (nouvelles solutions, nouveaux schémas si besoin).\n