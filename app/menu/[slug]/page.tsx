import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { menuData } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import MenuPlatsList from '@/components/MenuPlatsList';
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
            className="inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors group"
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
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-8 lg:py-12">
        {/* Bouton Retour */}
        <FadeIn delay={0}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </FadeIn>

        {/* Titre */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-3 md:mb-4">
              {menu.titre}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 font-sans">
              {menu.sousTitre}
            </p>
          </div>
        </FadeIn>

        {/* Liste des plats - Style Menu Papier avec animations */}
        <MenuPlatsList plats={menu.plats} />

        {/* Footer discret */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 font-sans">
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
