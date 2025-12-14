import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { menuData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MenuPage({ params }: PageProps) {
  // Next.js 15 : params est maintenant une Promise
  const { slug } = await params;
  
  // Chercher le menu correspondant
  const menu = menuData[slug];

  // Si le menu n'existe pas, afficher une page d'erreur
  if (!menu) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] text-[#0F1C2E] flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Menu introuvable
          </h1>
          <p className="text-gray-700 mb-4 font-sans">
            Désolé, le menu "{slug}" n'existe pas.
          </p>
          <p className="text-sm text-gray-500 mb-8 font-sans">
            Slugs disponibles : petit-dejeuner, dejeuner, vins-cocktails
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#800020] transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0F1C2E]">
      {/* Bouton Retour Fixe sur Mobile */}
      <div className="sticky top-0 z-40 md:hidden bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="px-4 py-3 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#800020] transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </Link>
        </div>
      </div>

      {/* Hero Section avec Image de Couverture */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={menu.coverImage}
            alt={menu.titre}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-[#0F1C2E]/70"></div>
        {/* Contenu */}
        <div className="relative z-10 text-center px-4">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-3 md:mb-4 border-b-2 border-[#800020] pb-2 inline-block">
              {menu.titre}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-sans">
              {menu.sousTitre}
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12 lg:py-16">
        {/* Bouton Retour Desktop */}
        <FadeIn delay={0}>
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#800020] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </FadeIn>

        {/* Grille Gourmande des Plats - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
          {menu.plats.map((plat, index) => (
            <FadeIn key={plat.id} delay={index * 0.1}>
              {/* Mobile: Layout Horizontal | Desktop: Layout Vertical */}
              <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-[#800020]/20 hover:border-[#800020]/50 transition-all duration-300 border border-gray-100 flex flex-row md:flex-col">
                {/* Image du plat */}
                <div className="relative w-28 h-28 md:w-full md:h-64 md:h-72 lg:h-80 flex-shrink-0 md:flex-shrink overflow-hidden rounded-l-lg md:rounded-l-none md:rounded-t-lg">
                  <Image
                    src={plat.image}
                    alt={plat.nom}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay subtil au survol (desktop seulement) */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-4 md:p-6 md:p-8 flex-1 flex flex-col justify-between">
                  {/* Nom et Prix */}
                  <div className="flex items-start justify-between gap-3 md:gap-4 mb-2 md:mb-3">
                    <h3 className="font-serif font-bold text-lg md:text-xl lg:text-2xl text-[#0F1C2E] flex-1 leading-tight">
                      {plat.nom}
                    </h3>
                    <div className="text-[#C5A059] font-semibold text-lg md:text-xl lg:text-2xl flex-shrink-0">
                      {plat.prix.toFixed(2)} €
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 font-sans leading-relaxed">
                    {plat.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer discret */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t-2 border-[#800020]/30 text-center">
          <p className="text-xs md:text-sm text-gray-500 font-sans">
            Tous nos plats sont préparés avec des produits frais et de saison
          </p>
        </div>
      </div>
    </main>
  );
}

// Génération des métadonnées pour le SEO (Next.js 15 : params est une Promise)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const menu = menuData[slug];

  if (!menu) {
    return {
      title: 'Menu introuvable - Grand Café de France',
    };
  }

  return {
    title: `${menu.titre} - Grand Café de France`,
    description: menu.sousTitre,
  };
}

// Génération statique des pages pour les slugs connus
export async function generateStaticParams() {
  return [
    { slug: 'petit-dejeuner' },
    { slug: 'dejeuner' },
    { slug: 'vins-cocktails' },
  ];
}
