// Types pour les données de menu
export type MenuCategory = 'petit-dejeuner' | 'dejeuner' | 'vins-cocktails';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  section?: string; // Pour organiser par sections (Entrées, Plats, Desserts, etc.)
}

export interface MenuData {
  category: MenuCategory;
  title: string;
  items: MenuItem[];
}

// Données des menus
export const menuData: Record<MenuCategory, MenuData> = {
  'petit-dejeuner': {
    category: 'petit-dejeuner',
    title: 'Petit-déjeuner',
    items: [
      {
        id: 'pd-1',
        name: 'Oeufs Bénédicte à la Truffe',
        description: 'Oeufs pochés sur muffin anglais, jambon de Parme, sauce hollandaise et copeaux de truffe noire',
        price: 28,
      },
      {
        id: 'pd-2',
        name: 'Assiette de Viennoiseries Maison',
        description: 'Croissant au beurre, pain au chocolat, brioche feuilletée, confiture artisanale et beurre de baratte',
        price: 18,
      },
      {
        id: 'pd-3',
        name: 'Avocado Toast Premium',
        description: 'Pain de campagne toasté, avocat écrasé, graines de chia, tomates cerises confites, œuf poché',
        price: 22,
      },
      {
        id: 'pd-4',
        name: 'Pancakes à la Française',
        description: 'Stack de pancakes moelleux, sirop d\'érable, fruits frais de saison, chantilly vanille',
        price: 20,
      },
      {
        id: 'pd-5',
        name: 'Omelette aux Fines Herbes',
        description: 'Omelette baveuse aux herbes fraîches du jardin, salade verte, jambon cru',
        price: 24,
      },
      {
        id: 'pd-6',
        name: 'Café Grand Cru',
        description: 'Sélection de cafés d\'exception torréfiés sur place',
        price: 8,
      },
      {
        id: 'pd-7',
        name: 'Thé Mariage Frères',
        description: 'Sélection de thés premium, infusion à la carte',
        price: 12,
      },
      {
        id: 'pd-8',
        name: 'Jus de Fruits Pressés',
        description: 'Orange, pamplemousse rose, ou mélange du jour',
        price: 9,
      },
    ],
  },
  'dejeuner': {
    category: 'dejeuner',
    title: 'Déjeuner',
    items: [
      // Entrées
      {
        id: 'dl-1',
        name: 'Foie Gras de Canard Maison',
        description: 'Terrine de foie gras mi-cuit, chutney de figues, pain brioche toasté',
        price: 32,
        section: 'Entrées',
      },
      {
        id: 'dl-2',
        name: 'Soupe à l\'Oignon Gratinée',
        description: 'Recette traditionnelle, fromage Comté râpé, croûtons dorés',
        price: 18,
        section: 'Entrées',
      },
      {
        id: 'dl-3',
        name: 'Salade Niçoise Revisitée',
        description: 'Thon rouge, œufs mollets, haricots verts, olives de Nice, anchois, vinaigrette au citron',
        price: 24,
        section: 'Entrées',
      },
      {
        id: 'dl-4',
        name: 'Tartare de Saumon',
        description: 'Saumon frais, avocat, coriandre, citron vert, chips de patate douce',
        price: 26,
        section: 'Entrées',
      },
      // Plats
      {
        id: 'dl-5',
        name: 'Sole Meunière',
        description: 'Sole de ligne, beurre noisette, citron, persil, pommes vapeur',
        price: 42,
        section: 'Plats',
      },
      {
        id: 'dl-6',
        name: 'Entrecôte Grillée au Poivre Vert',
        description: 'Entrecôte Charolaise, sauce au poivre vert, frites maison, salade verte',
        price: 38,
        section: 'Plats',
      },
      {
        id: 'dl-7',
        name: 'Coq au Vin de Bourgogne',
        description: 'Cuisses de poulet fermier, vin rouge, champignons, lardons, pommes de terre',
        price: 34,
        section: 'Plats',
      },
      {
        id: 'dl-8',
        name: 'Bouillabaisse Traditionnelle',
        description: 'Assortiment de poissons de roche, rouille, croûtons, fromage râpé',
        price: 48,
        section: 'Plats',
      },
      {
        id: 'dl-9',
        name: 'Risotto aux Cèpes',
        description: 'Risotto crémeux, cèpes frais, parmesan, huile de truffe',
        price: 32,
        section: 'Plats',
      },
      {
        id: 'dl-10',
        name: 'Magret de Canard aux Cerises',
        description: 'Magret grillé, sauce aux cerises, gratin dauphinois, haricots verts',
        price: 36,
        section: 'Plats',
      },
      // Desserts
      {
        id: 'dl-11',
        name: 'Soufflé Grand Marnier',
        description: 'Soufflé chaud au Grand Marnier, glace vanille',
        price: 18,
        section: 'Desserts',
      },
      {
        id: 'dl-12',
        name: 'Tarte Tatin',
        description: 'Tarte aux pommes renversée, caramel, crème fraîche',
        price: 16,
        section: 'Desserts',
      },
      {
        id: 'dl-13',
        name: 'Millefeuille Maison',
        description: 'Pâte feuilletée, crème pâtissière vanille, glaçage au chocolat',
        price: 17,
        section: 'Desserts',
      },
      {
        id: 'dl-14',
        name: 'Assiette de Fromages Affinés',
        description: 'Sélection de fromages d\'exception, confiture de figues, noix',
        price: 22,
        section: 'Desserts',
      },
    ],
  },
  'vins-cocktails': {
    category: 'vins-cocktails',
    title: 'Vins & Cocktails',
    items: [
      // Vins Blancs
      {
        id: 'vc-1',
        name: 'Chablis Premier Cru',
        description: 'Domaine Dauvissat, 2020 - Minéralité et fraîcheur',
        price: 85,
        section: 'Vins Blancs',
      },
      {
        id: 'vc-2',
        name: 'Sancerre',
        description: 'Domaine Vacheron, 2021 - Notes de pamplemousse et de pierre à fusil',
        price: 72,
        section: 'Vins Blancs',
      },
      {
        id: 'vc-3',
        name: 'Champagne Dom Pérignon',
        description: 'Vintage 2013 - Élégance et complexité',
        price: 320,
        section: 'Vins Blancs',
      },
      {
        id: 'vc-4',
        name: 'Chardonnay Côte de Beaune',
        description: 'Puligny-Montrachet, 2019 - Beurré et toasté',
        price: 95,
        section: 'Vins Blancs',
      },
      // Vins Rouges
      {
        id: 'vc-5',
        name: 'Châteauneuf-du-Pape',
        description: 'Domaine du Vieux Télégraphe, 2018 - Puissance et épices',
        price: 110,
        section: 'Vins Rouges',
      },
      {
        id: 'vc-6',
        name: 'Bordeaux Saint-Julien',
        description: 'Château Léoville Barton, 2017 - Tanins soyeux, fruits noirs',
        price: 145,
        section: 'Vins Rouges',
      },
      {
        id: 'vc-7',
        name: 'Bourgogne Pinot Noir',
        description: 'Gevrey-Chambertin, 2019 - Élégance et finesse',
        price: 125,
        section: 'Vins Rouges',
      },
      {
        id: 'vc-8',
        name: 'Côtes du Rhône',
        description: 'Gigondas, 2020 - Fruits mûrs et structure',
        price: 68,
        section: 'Vins Rouges',
      },
      // Cocktails
      {
        id: 'vc-9',
        name: 'French 75',
        description: 'Gin, champagne, citron, sucre - Classique parisien',
        price: 18,
        section: 'Cocktails',
      },
      {
        id: 'vc-10',
        name: 'Kir Royal',
        description: 'Champagne, crème de cassis - Élégance française',
        price: 16,
        section: 'Cocktails',
      },
      {
        id: 'vc-11',
        name: 'Mojito Signature',
        description: 'Rhum blanc, menthe fraîche, citron vert, eau gazeuse',
        price: 15,
        section: 'Cocktails',
      },
      {
        id: 'vc-12',
        name: 'Old Fashioned',
        description: 'Whisky, angostura, sucre, zeste d\'orange',
        price: 17,
        section: 'Cocktails',
      },
      {
        id: 'vc-13',
        name: 'Espresso Martini',
        description: 'Vodka, espresso, liqueur de café, sirop de vanille',
        price: 16,
        section: 'Cocktails',
      },
      {
        id: 'vc-14',
        name: 'Aperol Spritz',
        description: 'Aperol, prosecco, eau gazeuse, orange',
        price: 14,
        section: 'Cocktails',
      },
    ],
  },
};

// Fonction helper pour obtenir les données d'une catégorie
export function getMenuByCategory(category: string): MenuData | null {
  const validCategory = category as MenuCategory;
  if (menuData[validCategory]) {
    return menuData[validCategory];
  }
  return null;
}

// Fonction helper pour obtenir les sections uniques d'un menu
export function getMenuSections(items: MenuItem[]): string[] {
  const sections = items
    .map((item) => item.section)
    .filter((section): section is string => section !== undefined);
  return Array.from(new Set(sections));
}

