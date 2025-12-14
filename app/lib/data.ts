// Types pour les données de menu
export interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number;
}

export interface MenuCategory {
  slug: string;
  titre: string;
  sousTitre: string;
  plats: MenuItem[];
}

// Données des menus
export const menuData: Record<string, MenuCategory> = {
  'petit-dejeuner': {
    slug: 'petit-dejeuner',
    titre: 'Petit-déjeuner',
    sousTitre: 'Viennoiseries artisanales et cafés raffinés',
    plats: [
      {
        id: 'pd-1',
        nom: 'Croissant au Beurre',
        description: 'Croissant artisanal au beurre AOP, croustillant et fondant',
        prix: 4.5,
      },
      {
        id: 'pd-2',
        nom: 'Pain au Chocolat',
        description: 'Viennoiserie feuilletée avec barres de chocolat Valrhona',
        prix: 5.0,
      },
      {
        id: 'pd-3',
        nom: 'Oeufs Bénédicte',
        description: 'Oeufs pochés sur muffin anglais, jambon de Parme, sauce hollandaise',
        prix: 18.0,
      },
      {
        id: 'pd-4',
        nom: 'Assiette de Viennoiseries',
        description: 'Sélection de 4 viennoiseries maison, confiture artisanale, beurre de baratte',
        prix: 16.0,
      },
    ],
  },
  'dejeuner': {
    slug: 'dejeuner',
    titre: 'Déjeuner',
    sousTitre: 'Cuisine française traditionnelle et raffinée',
    plats: [
      {
        id: 'dl-1',
        nom: 'Sole Meunière',
        description: 'Sole de ligne, beurre noisette, citron, persil, pommes vapeur',
        prix: 32.0,
      },
      {
        id: 'dl-2',
        nom: 'Tartare de Boeuf',
        description: 'Tartare de boeuf Charolais, câpres, cornichons, jaune d\'oeuf, frites maison',
        prix: 24.0,
      },
      {
        id: 'dl-3',
        nom: 'Coq au Vin',
        description: 'Cuisses de poulet fermier, vin rouge, champignons, lardons, pommes de terre',
        prix: 28.0,
      },
      {
        id: 'dl-4',
        nom: 'Bouillabaisse',
        description: 'Assortiment de poissons de roche, rouille, croûtons, fromage râpé',
        prix: 38.0,
      },
    ],
  },
  'vins-cocktails': {
    slug: 'vins-cocktails',
    titre: 'Vins & Cocktails',
    sousTitre: 'Sélection de vins d\'exception et créations cocktails',
    plats: [
      {
        id: 'vc-1',
        nom: 'Champagne Dom Pérignon',
        description: 'Vintage 2013, élégance et complexité',
        prix: 320.0,
      },
      {
        id: 'vc-2',
        nom: 'Chablis Premier Cru',
        description: 'Domaine Dauvissat, 2020, minéralité et fraîcheur',
        prix: 85.0,
      },
      {
        id: 'vc-3',
        nom: 'French 75',
        description: 'Gin, champagne, citron, sucre - Classique parisien',
        prix: 18.0,
      },
      {
        id: 'vc-4',
        nom: 'Kir Royal',
        description: 'Champagne, crème de cassis - Élégance française',
        prix: 16.0,
      },
    ],
  },
};
