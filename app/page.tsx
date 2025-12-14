"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Coffee, Wine, Utensils, MapPin } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Navbar from '@/components/Navbar';
/**
 * This is the landing page for the “Grand Café de France” demonstration.
 *
 * The component is structured according to the provided design and layout
 * specifications. It utilises Tailwind CSS for styling and lucide‑react
 * icons for visual accents. All sections are composed within a single
 * React component to meet the requirement of a single‑file page.
 */
export default function Page() {
  // Retrieve the current year for the footer. Evaluated at runtime.
  const year = new Date().getFullYear();

  return (
    <main className="bg-[#FAF9F6] text-[#0F1C2E]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/images/hero/restaurant-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F1C2E]/70"></div>
        <div className="relative z-10 px-4 md:px-8">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Bienvenue au Grand Café de France
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-base md:text-lg lg:text-2xl text-white mb-6 md:mb-8">
              Luxe &amp; Tradition au cœur de Nice
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <a
              href="#histoire"
              className="inline-block bg-[#C5A059] text-white px-6 py-3 rounded-md font-medium hover:bg-[#b38a4d] transition-colors text-sm md:text-base"
            >
              Découvrir
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Histoire Section */}
      <section id="histoire" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4 border-b-2 border-[#800020] pb-2 inline-block">
              L'Histoire
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Depuis plus d’un siècle, le Grand Café de France est un symbole de l’élégance
              niçoise. Niché sur la Promenade des Anglais, ce lieu emblématique a accueilli
              artistes, écrivains et voyageurs du monde entier. Dans une ambiance Belle Époque,
              nous perpétuons la tradition d’un accueil chaleureux et d’une cuisine raffinée,
              mêlant saveurs de la Provence et influences internationales.
            </p>
            <p className="leading-relaxed text-gray-700">
              Venez découvrir notre histoire, savourer un instant hors du temps et partager un
              moment d’exception dans un décor somptueux.
            </p>
          </div>
          <div className="w-full overflow-hidden relative h-64 md:h-96 rounded-lg shadow-md">
            <Image
              src="/images/histoire/restaurant-histoire.jpg"
              alt="Histoire du Grand Café de France"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* La Carte Section */}
      <section id="carte" className="py-12 md:py-16 px-4 md:px-8 bg-[#F2EFEA]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-8 md:mb-12 border-b-2 border-[#800020] pb-2 inline-block">
            La Carte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Petit-déj */}
            <FadeIn delay={0}>
              <Link
                href="/menu/petit-dejeuner"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-[#800020]/20 hover:border-[#800020]/50 transition-all duration-300 cursor-pointer hover:scale-105 border border-transparent"
              >
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
                <Image
                  src="/images/menu/petit-dejeuner.jpg"
                  alt="Petit-déjeuner"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4 text-[#800020]">
                  <Coffee className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  <h3 className="text-lg md:text-xl font-serif font-semibold">Petit-déjeuner</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  Viennoiseries artisanales, cafés raffinés et jus frais pour commencer la journée en
                  douceur.
                </p>
              </div>
              </Link>
            </FadeIn>
            {/* Déjeuner */}
            <FadeIn delay={0.2}>
              <Link
                href="/menu/dejeuner"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-[#800020]/20 hover:border-[#800020]/50 transition-all duration-300 cursor-pointer hover:scale-105 border border-transparent"
              >
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
                <Image
                  src="/images/menu/dejeuner.jpg"
                  alt="Déjeuner"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4 text-[#800020]">
                  <Utensils className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  <h3 className="text-lg md:text-xl font-serif font-semibold">Déjeuner</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  Une sélection de plats gourmands qui célèbrent les produits locaux et les recettes
                  authentiques.
                </p>
              </div>
              </Link>
            </FadeIn>
            {/* Vins & Cocktails */}
            <FadeIn delay={0.4}>
              <Link
                href="/menu/vins-cocktails"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-[#800020]/20 hover:border-[#800020]/50 transition-all duration-300 cursor-pointer hover:scale-105 border border-transparent"
              >
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
                <Image
                  src="/images/menu/vin.jpg"
                  alt="Vins et Cocktails"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4 text-[#800020]">
                  <Wine className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  <h3 className="text-lg md:text-xl font-serif font-semibold">Vins &amp; Cocktails</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  Découvrez notre cave exceptionnelle et nos créations cocktails pour sublimer chaque
                  instant.
                </p>
              </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* L'Expérience Section */}
      <section
        id="experience"
        className="relative py-20 md:py-32 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/experience/restaurant-presentation.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F1C2E]/70"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-white mb-4 border-b-2 border-[#800020] pb-2 inline-block">
            L'Expérience
          </h2>
          <p className="text-base md:text-lg text-white mb-6 md:mb-8">
            Installez-vous sur notre terrasse ensoleillée et laissez-vous bercer par le bruit des
            vagues. Un moment privilégié pour savourer un café, un cocktail ou un repas complet,
            avec le spectacle de la mer en toile de fond.
          </p>
          <Link
            href="/reserve"
            className="inline-block bg-[#800020] text-white px-6 py-3 rounded-md font-medium hover:bg-[#800020]/90 transition-colors text-sm md:text-base"
          >
            Vivre l'instant
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1C2E] text-gray-200 py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-white">
              Grand Café de France
            </h3>
            <p className="text-sm">
              Luxe et tradition au cœur de Nice depuis 1920. Un lieu d'exception où chaque moment
              devient un souvenir précieux.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-3 text-white">Nous Trouver</h4>
            <p className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-[#800020]" /> 12 Promenade des Anglais
              <br />
              06000 Nice, France
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-3 text-white">Horaires</h4>
            <p>
              <strong className="text-[#800020]">Lundi - Dimanche :</strong> 08h00 - 23h00
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-3 text-white">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#histoire" className="hover:text-[#800020] transition-colors">
                  L'Histoire
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#800020] transition-colors">
                  La Carte
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#800020] transition-colors">
                  L'Expérience
                </a>
              </li>
              <li>
                <Link href="/reserve" className="hover:text-[#800020] transition-colors">
                  Réserver
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; {year} Grand Café de France. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}