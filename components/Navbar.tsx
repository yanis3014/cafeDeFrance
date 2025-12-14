'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo / Brand */}
            <div className="font-serif text-xl md:text-2xl font-bold text-[#800020]">Grand Café de France</div>
            
            {/* Navigation Links */}
            <ul className="flex space-x-8 uppercase text-sm">
              <li>
                <a 
                  href="#histoire" 
                  className="hover:text-[#800020] transition-colors"
                  onClick={closeMenu}
                >
                  L'Histoire
                </a>
              </li>
              <li>
                <a 
                  href="#carte" 
                  className="hover:text-[#800020] transition-colors"
                  onClick={closeMenu}
                >
                  La Carte
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="hover:text-[#800020] transition-colors"
                  onClick={closeMenu}
                >
                  L'Expérience
                </a>
              </li>
            </ul>
            
            {/* Reservation Button */}
            <Link
              href="/reserve"
              className="bg-[#800020] text-white px-4 py-2 rounded-md font-medium hover:bg-[#800020]/90 transition-colors text-sm"
              onClick={closeMenu}
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo */}
            <div className="font-serif text-lg font-bold text-[#800020]">Grand Café de France</div>
            
            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors relative z-[100]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - En dehors du nav pour éviter les problèmes de z-index */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-[80]"
            onClick={closeMenu}
            style={{ top: 0 }}
          />
          {/* Menu Panel */}
          <div 
            className="md:hidden fixed inset-0 bg-[#FAF9F6] z-[90] overflow-y-auto"
            style={{ top: 0 }}
          >
            <div className="flex flex-col min-h-screen pt-20">
              {/* Close Button */}
              <div className="flex justify-end p-4 absolute top-0 left-0 right-0 bg-[#FAF9F6] border-b border-gray-200">
                <button
                  onClick={closeMenu}
                  className="p-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-4 py-12">
                <a
                  href="#histoire"
                  onClick={closeMenu}
                  className="text-3xl font-serif font-semibold text-[#0F1C2E] hover:text-[#800020] transition-colors"
                >
                  L'Histoire
                </a>
                <a
                  href="#carte"
                  onClick={closeMenu}
                  className="text-3xl font-serif font-semibold text-[#0F1C2E] hover:text-[#800020] transition-colors"
                >
                  La Carte
                </a>
                <a
                  href="#experience"
                  onClick={closeMenu}
                  className="text-3xl font-serif font-semibold text-[#0F1C2E] hover:text-[#800020] transition-colors"
                >
                  L'Expérience
                </a>
                <Link
                  href="/reserve"
                  onClick={closeMenu}
                  className="bg-[#800020] text-white px-10 py-4 rounded-md font-medium hover:bg-[#800020]/90 transition-colors text-xl mt-6"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

