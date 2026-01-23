export type ServiceSlug =
  | 'securite-evenementielle'
  | 'gardiennage-surveillance'
  | 'rondes-prevention'
  | 'securisation-sites-perimetres';

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
}

export interface Sector {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  examples: string[];
}

export interface Engagement {
  title: string;
  description: string;
}

export interface Address {
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Company {
  name: string;
  legalName: string;
  legalForm: string;
  nafApe: string;
  siren: string;
  siret: string;
  vatNumber: string;
  shareCapital: string;
  creationDate: string;
  address: Address;
  description: string;
  shortDescription: string;
  contact: {
    phone: {
      label: string;
      value: string;
    };
    email: string;
    websiteUrl: string;
  };
  branding: {
    baseline: string;
    logoUrl: string;
  };
  areaServed: string;
}

export const company: Company = {
  name: 'MAB SECURITE',
  legalName: 'MAB SECURITE',
  legalForm: 'SAS',
  nafApe: '80.10Z',
  siren: '951 084 078',
  siret: '951 084 078 00017',
  vatNumber: 'FR59 951 084 078',
  shareCapital: '1 000 €',
  creationDate: '2023-03-29',
  address: {
    line1: 'PAVILLON 45',
    line2: '186 RUE JACQUES RIVIERE',
    postalCode: '30900',
    city: 'NIMES',
    country: 'France',
  },
  description:
    "MAB SECURITE est une société de sécurité privée basée à Nîmes. Elle accompagne en priorité les entreprises du BTP, les maîtres d’ouvrage, les collectivités et les organisateurs d’événements dans la protection de leurs chantiers, sites, collaborateurs et publics, avec une présence structurée à Paris (France Nord), Marseille, Montpellier et dans le Gard (France Sud).",
  shortDescription:
    'Sécurité privée pour le BTP et les sites professionnels : gardiennage de chantiers, rondes de sûreté, dispositifs de vidéosurveillance et sécurité incendie à Paris, Marseille, Montpellier, Nîmes et sur la côte sud.',
  contact: {
    // À personnaliser : coordonnées de contact définitives
    phone: {
      label: '+33 (0)4 00 00 00 00',
      value: '+33400000000',
    },
    email: 'contact@mab-securite.fr',
    websiteUrl: 'https://www.mab-securite.fr',
  },
  branding: {
    baseline: 'Sécurité privée pour entreprises et événements',
    logoUrl: '/images/logo-mab-securite.svg', // À remplacer si un logo est disponible
  },
  areaServed:
    'Paris et Île-de-France (France Nord), Marseille et Bouches-du-Rhône, Montpellier et Hérault (34), Nîmes et Gard (30), ainsi que la côte sud et régions limitrophes.',
};

export const services: Service[] = [
  {
    slug: 'securite-evenementielle',
    name: 'Sécurité événementielle',
    shortDescription: 'Protection des publics et des équipes sur vos événements professionnels.',
    description:
      "MAB SECURITE sécurise vos événements professionnels et grand public : salons, conventions, inaugurations, manifestations culturelles ou sportives. Nous mettons en place des dispositifs adaptés au profil de risque et au public attendu.",
    highlights: [
      "Analyse des risques et définition du dispositif de sécurité",
      'Contrôle d’accès et filtrage des entrées',
      'Gestion des flux de personnes et files d’attente',
      'Protection des zones sensibles (backstage, régie, loges)',
    ],
  },
  {
    slug: 'gardiennage-surveillance',
    name: 'Gardiennage / surveillance',
    shortDescription: 'Surveillance continue de vos sites, locaux et équipements sensibles.',
    description:
      'Nos agents de sécurité assurent une présence dissuasive et professionnelle sur vos sites tertiaires, industriels ou logistiques, de jour comme de nuit.',
    highlights: [
      'Postes de garde et gestion des accès',
      'Accueil et contrôle des visiteurs et prestataires',
      'Rondes préventives à horaires fixes ou variables',
      'Main courante et reporting réguliers',
      'Mise en place d’agents de sécurité et de maîtres-chiens sur les sites à risque',
      'Articulation avec les dispositifs techniques (caméras de surveillance, détecteurs de mouvement, contrôle d’accès)',
    ],
  },
  {
    slug: 'rondes-prevention',
    name: 'Rondes et prévention',
    shortDescription: 'Rondes de sûreté, levées de doute et sécurisation ponctuelle.',
    description:
      "Les rondes de sécurité permettent d'assurer un passage régulier sur vos sites fermés, en complément d'un dispositif de gardiennage ou en solution autonome.",
    highlights: [
      'Rondes d’ouverture et de fermeture de sites',
      'Levées de doute sur alarme',
      'Vérification des accès, clôtures et éclairages',
      'Compte-rendu systématique après intervention',
    ],
  },
  {
    slug: 'securisation-sites-perimetres',
    name: 'Sécurisation de sites et périmètres',
    shortDescription: 'Dispositifs de sûreté pour vos chantiers, sites sensibles et zones temporaires.',
    description:
      'MAB SECURITE accompagne les entreprises et maîtres d’ouvrage dans la sécurisation de sites permanents ou temporaires, en coordination avec vos autres prestataires.',
    highlights: [
      'Étude de vulnérabilité et recommandations',
      'Surveillance de chantiers et zones de stockage',
      'Protection des accès et des abords immédiats',
      'Coordination avec les autres acteurs de la sûreté',
      'Intégration de solutions de vidéosurveillance (caméras de surveillance, détecteurs de mouvement) en coordination avec vos prestataires spécialisés',
      'Prise en compte des dispositifs de sécurité incendie (agents SSIAP, plans de prévention incendie) dans le dispositif global de sûreté',
    ],
  },
];

export const sectors: Sector[] = [
  {
    slug: 'entreprises',
    name: 'Entreprises',
    shortDescription: 'Sécurisation des sièges sociaux, bureaux, sites industriels et logistiques.',
    description:
      'Nous accompagnons les PME, ETI et grands comptes dans la protection de leurs collaborateurs, visiteurs et actifs matériels, en cohérence avec leurs procédures internes.',
    examples: [
      'Sièges sociaux et bureaux',
      'Sites industriels',
      'Entrepôts et plateformes logistiques',
      'Centres commerciaux et galeries marchandes',
    ],
  },
  {
    slug: 'evenementiel',
    name: 'Événementiel',
    shortDescription: 'Sécurité des événements professionnels et grand public.',
    description:
      "De la réception d’entreprise au salon professionnel en passant par les manifestations ouvertes au public, MAB SECURITE adapte ses dispositifs à la nature et à la taille de vos événements.",
    examples: ['Salons et conventions', "Lancements de produits", 'Événements culturels ou sportifs'],
  },
  {
    slug: 'collectivites',
    name: 'Collectivités',
    shortDescription: 'Protection des sites et événements des acteurs publics.',
    description:
      "Nous intervenons aux côtés des collectivités et organismes publics pour sécuriser les bâtiments, accueils du public et événements institutionnels.",
    examples: [
      'Bâtiments administratifs',
      'Équipements culturels et sportifs',
      'Cérémonies et événements institutionnels',
    ],
  },
  {
    slug: 'tournages-plateaux',
    name: 'Tournages / plateaux',
    shortDescription: 'Sécurisation des lieux de tournage et dispositifs techniques.',
    description:
      'Les tournages nécessitent une sécurisation fine des accès, des matériels et des équipes. MAB SECURITE met en place des dispositifs adaptés aux contraintes opérationnelles du plateau.',
    examples: ['Tournages cinéma et télévision', 'Captations live', 'Studios et plateaux temporaires'],
  },
];

export const engagements: Engagement[] = [
  {
    title: 'Réactivité opérationnelle',
    description:
      "Réponse rapide à vos demandes et mise en place de dispositifs adaptés à vos contraintes horaires et opérationnelles.",
  },
  {
    title: 'Conformité réglementaire',
    description:
      "Prestations réalisées dans le respect du cadre légal français de la sécurité privée (Code de la sécurité intérieure, livre VI).",
  },
  {
    title: 'Interlocuteur unique',
    description:
      "Un contact dédié qui suit votre dossier de l’étude du besoin jusqu’au retour d’expérience en fin de mission.",
  },
  {
    title: 'Proximité et connaissance du terrain',
    description:
      'Une entreprise implantée à Nîmes, au plus près de vos sites et de vos réalités opérationnelles.',
  },
];