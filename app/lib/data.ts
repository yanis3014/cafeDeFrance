// Types pour les données de menu
export interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image: string; // URL de l'image du plat
}

export interface MenuCategory {
  slug: string;
  titre: string;
  sousTitre: string;
  coverImage: string; // Image de couverture pour la catégorie
  plats: MenuItem[];
}

// Données des menus avec images gourmandes - Carte complète et variée
export const menuData: Record<string, MenuCategory> = {
  'petit-dejeuner': {
    slug: 'petit-dejeuner',
    titre: 'Petit-déjeuner',
    sousTitre: 'Viennoiseries artisanales et cafés raffinés',
    coverImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1920&q=80',
    plats: [
      {
        id: 'pd-1',
        nom: 'Croissant au Beurre',
        description: 'Croissant artisanal au beurre AOP, croustillant et fondant',
        prix: 4.5,
        image: 'https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-2',
        nom: 'Pain au Chocolat',
        description: 'Viennoiserie feuilletée avec barres de chocolat Valrhona',
        prix: 5.0,
        image: 'https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-3',
        nom: 'Oeufs Bénédicte',
        description: 'Oeufs pochés sur muffin anglais, jambon de Parme, sauce hollandaise',
        prix: 18.0,
        image: 'https://images.unsplash.com/photo-1664192579001-4bc426cb8219?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-4',
        nom: 'Assiette de Viennoiseries',
        description: 'Sélection de 4 viennoiseries maison, confiture artisanale, beurre de baratte',
        prix: 16.0,
        image: 'https://images.unsplash.com/photo-1609590981063-d495e2914ce4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-5',
        nom: 'Avocado Toast Premium',
        description: 'Pain de campagne toasté, avocat écrasé, graines de chia, tomates cerises confites, œuf poché',
        prix: 14.0,
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pd-6',
        nom: 'Bowl Granola Maison',
        description: 'Granola artisanal, yaourt grec, fruits frais de saison, miel de lavande',
        prix: 12.0,
        image: 'https://images.unsplash.com/photo-1622542086073-dcdc3350cc2b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-7',
        nom: 'Omelette aux Truffes',
        description: 'Omelette baveuse aux truffes noires d\'Alba, parmesan, herbes fraîches',
        prix: 22.0,
        image: 'https://images.unsplash.com/photo-1722239312024-5dead8dec32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-8',
        nom: 'Pain Perdu Brioché',
        description: 'Brioche perdue à la vanille, sirop d\'érable, fruits rouges, glace vanille',
        prix: 13.0,
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'pd-9',
        nom: 'Chocolat Chaud à l\'Ancienne',
        description: 'Chocolat Valrhona 70%, lait entier, chantilly maison, copeaux de chocolat',
        prix: 8.0,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pd-10',
        nom: 'Café Grand Cru',
        description: 'Sélection de cafés d\'exception torréfiés sur place, service à la presse française',
        prix: 6.5,
        image: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  'dejeuner': {
    slug: 'dejeuner',
    titre: 'Déjeuner',
    sousTitre: 'Cuisine française traditionnelle et raffinée',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
    plats: [
      // Entrées
      {
        id: 'dl-1',
        nom: 'Soupe à l\'Oignon Gratinée',
        description: 'Recette traditionnelle, fromage Comté râpé, croûtons dorés, bouillon de bœuf corsé',
        prix: 12.0,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'dl-2',
        nom: 'Escargots de Bourgogne',
        description: 'Escargots au beurre persillé, ail, fines herbes, servis avec baguette fraîche',
        prix: 16.0,
        image: 'https://images.unsplash.com/photo-1624268388739-89fbbfe1b031?q=80&w=2402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'dl-3',
        nom: 'Carpaccio de Loup',
        description: 'Tranches fines de loup de Méditerranée, huile d\'olive, câpres, roquette, parmesan',
        prix: 18.0,
        image: 'https://plus.unsplash.com/premium_photo-1693262738292-b53143561923?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      // Plats
      {
        id: 'dl-4',
        nom: 'Sole Meunière',
        description: 'Sole de ligne, beurre noisette, citron, persil, pommes vapeur',
        prix: 32.0,
        image: 'https://images.unsplash.com/photo-1602022131768-033a8796e78d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'dl-5',
        nom: 'Tartare de Boeuf',
        description: 'Tartare de boeuf Charolais, câpres, cornichons, jaune d\'oeuf, frites maison',
        prix: 24.0,
        image: 'https://plus.unsplash.com/premium_photo-1661438359424-8f90385561c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFydGFyZSUyMGRlJTIwQm9ldWZ8ZW58MHx8MHx8fDA%3D',
      },
      {
        id: 'dl-6',
        nom: 'Magret de Canard au Miel',
        description: 'Magret grillé, sauce au miel de lavande, gratin dauphinois, haricots verts',
        prix: 28.0,
        image: 'https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFncmV0JTIwZGUlMjBDYW5hcmR8ZW58MHx8MHx8fDA%3D',
      },
      {
        id: 'dl-7',
        nom: 'Pâtes aux Truffes',
        description: 'Tagliatelles fraîches, crème, truffes noires d\'Alba, parmesan, persil',
        prix: 26.0,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'dl-8',
        nom: 'Pavé de Saumon',
        description: 'Pavé de saumon sauvage, sauce hollandaise, légumes de saison, riz basmati',
        prix: 30.0,
        image: 'https://plus.unsplash.com/premium_photo-1726768907990-d3cbc8efdee5?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'dl-9',
        nom: 'Burger Signature',
        description: 'Pain brioche, steak haché Charolais, cheddar affiné, bacon, oignons confits, frites maison',
        prix: 22.0,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      },
      // Desserts
      {
        id: 'dl-10',
        nom: 'Crème Brûlée',
        description: 'Crème brûlée à la vanille de Madagascar, caramel croquant, fruits rouges',
        prix: 10.0,
        image: 'https://plus.unsplash.com/premium_photo-1713840472256-44579289f607?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'dl-11',
        nom: 'Tarte au Citron Meringuée',
        description: 'Tarte citron jaune, meringue italienne, zeste de citron confit',
        prix: 11.0,
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'dl-12',
        nom: 'Café Gourmand',
        description: 'Expresso, assortiment de 3 mini desserts du jour, mignardises',
        prix: 12.0,
        image:'https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  'vins-cocktails': {
    slug: 'vins-cocktails',
    titre: 'Vins & Cocktails',
    sousTitre: 'Sélection de vins d\'exception et créations cocktails',
    coverImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80',
    plats: [
      // Champagnes
      {
        id: 'vc-1',
        nom: 'Champagne Dom Pérignon',
        description: 'Vintage 2013, élégance et complexité, bouteille',
        prix: 320.0,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'vc-2',
        nom: 'Champagne Veuve Clicquot',
        description: 'Brut Yellow Label, coupe',
        prix: 18.0,
        image: 'https://images.unsplash.com/photo-1630771496884-46ce7c270a52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'vc-3',
        nom: 'Champagne Moët & Chandon',
        description: 'Impérial Brut, coupe',
        prix: 16.0,
        image: 'https://images.unsplash.com/photo-1643618829236-a23857519fb6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      // Vins locaux
      {
        id: 'vc-4',
        nom: 'Chablis Premier Cru',
        description: 'Domaine Dauvissat, 2020, minéralité et fraîcheur',
        prix: 85.0,
        image: 'https://images.unsplash.com/photo-1595511690771-476d00d95d42?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'vc-5',
        nom: 'Côtes de Provence Rosé',
        description: 'Château Minuty, 2023, fraîcheur et fruits rouges',
        prix: 45.0,
        image: 'https://images.unsplash.com/photo-1629478752030-f57d060f96cc?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'vc-6',
        nom: 'Bandol Rouge',
        description: 'Domaine Tempier, 2019, puissance et épices, bouteille',
        prix: 75.0,
        image: 'https://images.unsplash.com/photo-1757691746416-72459af600a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      // Cocktails
      {
        id: 'vc-7',
        nom: 'French 75',
        description: 'Gin, champagne, citron, sucre - Classique parisien',
        prix: 18.0,
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'vc-8',
        nom: 'Kir Royal',
        description: 'Champagne, crème de cassis - Élégance française',
        prix: 16.0,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'vc-9',
        nom: 'Mojito',
        description: 'Rhum blanc, menthe fraîche, citron vert, eau gazeuse, sirop de canne',
        prix: 14.0,
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'vc-10',
        nom: 'Negroni',
        description: 'Gin, Campari, vermouth rouge, zeste d\'orange',
        prix: 15.0,
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'vc-11',
        nom: 'Saint-Germain Spritz',
        description: 'Liqueur de sureau, prosecco, eau gazeuse, citron',
        prix: 16.0,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
};
