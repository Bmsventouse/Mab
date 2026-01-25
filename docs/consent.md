# Consentement & gestion des cookies

Ce document décrit le fonctionnement du _consentement cookies_ dans le site MAB SECURITE, ainsi que les bonnes pratiques à respecter lorsqu’on ajoute de nouveaux scripts (analytics, tags marketing, etc.).

## 1. Architecture globale

- Le **`ConsentProvider`** est monté dans `src/app/layout.tsx` et englobe l’ensemble de l’application.
- La **bannière de consentement** et la gestion des préférences sont pilotées depuis ce provider.
- Un lien “Gestion des cookies” est présent dans le **footer** (voir `SiteFooter`) et doit rester disponible sur toutes les pages.

Objectif : permettre à l’utilisateur de :

- refuser ou accepter la mesure d’audience dès l’arrivée sur le site ;
- modifier son choix à tout moment via “Gestion des cookies”.

## 2. Types de cookies / scripts concernés

Dans l’état actuel du projet :

- Uniquement des cookies de **mesure d’audience** (Google Analytics via Google Tag Manager).
- Pas de cookies publicitaires, pas de tracking tiers hors périmètre analytics.

Si de nouveaux scripts sont ajoutés, ils doivent être classés dans l’une des catégories suivantes :

- **Essentiels** (strictement nécessaires au fonctionnement)  
  → ne dépendent pas du consentement utilisateurs.
- **Mesure d’audience / analytics**  
  → doivent être soumis à consentement explicite (opt-in), IP anonymisée de préférence.
- **Marketing / publicité / retargeting**  
  → non présents à ce jour ; à éviter par défaut, et à soumettre strictement au consentement.

## 3. Intégration d’un nouveau script soumis au consentement

### 3.1. Principe général

1. **Ne jamais** insérer directement un `<script>` tiers dans les pages (ex : `layout.tsx`, `page.tsx`), sans passer par la logique de consentement.
2. Utiliser la mécanique existante (via `ConsentProvider` et, le cas échéant, un composant utilitaire pour GTM/GA) pour n’activer les scripts qu’**après consentement**.

### 3.2. Bonnes pratiques

- Si vous ajoutez un nouveau service de mesure d’audience :
  - le déclarer dans la configuration/logiciel du `ConsentProvider` (catégorie `analytics`) ;
  - vous assurer qu’il **ne s’exécute pas** tant que l’utilisateur n’a pas consenti.
- Éviter de multiplier les outils : privilégier 1 solution stable plutôt que plusieurs scripts.

## 4. Lien “Gestion des cookies”

Le lien “Gestion des cookies” est exposé dans le **footer** (voir `SiteFooter`) et doit :

- rester accessible sur toutes les pages ;
- déclencher l’ouverture du panneau de préférences du `ConsentProvider` (revoir le composant si besoin d’un ajustement d’UI).

Lorsque vous modifiez le footer ou la navigation :

- **Ne pas supprimer** ce lien ;
- Si vous renommez le libellé, conserver une formulation claire (ex. “Gestion des cookies”, “Préférences cookies”).

## 5. Cas d’usage typiques

### 5.1. Ajouter un script de chat (ex. tawk, crisp, etc.)

1. Décider s’il s’agit d’un script **essentiel** ou **marketing** :
   - la plupart du temps, à traiter comme “marketing / confort”, donc soumis au consentement.
2. L’intégrer via un composant React qui :
   - lit l’état de consentement depuis le `ConsentProvider` ;
   - n’injecte le script qu’en cas de consentement positif.

### 5.2. Ajouter un nouveau pixel marketing

1. Vérifier la nécessité (cas par cas).
2. Le placer dans une catégorie “marketing” (dans la logique du provider).
3. Ne jamais le charger avant consentement.

## 6. Checklist avant mise en production

Avant de déployer un nouveau script ou une modification du consentement :

- [ ] Vérifier que le lien “Gestion des cookies” fonctionne toujours.
- [ ] Vérifier que les scripts soumis au consentement **ne sont pas chargés** en cas de refus.
- [ ] Vérifier que le consentement est mémorisé (pas de bannière qui réapparaît sans raison).
- [ ] S’assurer que la documentation (cette page) reste à jour si le comportement global change.