'use client';

import FadeIn from './FadeIn';
import { MenuItem } from '@/app/lib/data';

interface MenuPlatsListProps {
  plats: MenuItem[];
}

export default function MenuPlatsList({ plats }: MenuPlatsListProps) {
  return (
    <div className="space-y-8">
      {plats.map((plat, index) => (
        <FadeIn key={plat.id} delay={index * 0.1}>
          <div className="group">
            {/* Ligne avec nom et prix */}
            <div className="flex items-start justify-between gap-4 mb-2">
              {/* Nom du plat */}
              <h3 className="font-serif font-bold text-base md:text-lg lg:text-xl text-[#0F1C2E] flex-shrink-0">
                {plat.nom}
              </h3>

              {/* Ligne de points (dotted leader) */}
              <div className="flex-1 border-b border-dotted border-[#C5A059]/40 mx-2 self-end mb-1"></div>

              {/* Prix */}
              <div className="text-[#C5A059] font-semibold text-base md:text-lg lg:text-xl flex-shrink-0">
                {plat.prix.toFixed(2)} €
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm lg:text-base text-gray-700 font-sans leading-relaxed pl-0 md:pl-4">
              {plat.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

