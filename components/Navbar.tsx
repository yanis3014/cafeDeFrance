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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="font-serif text-xl md:text-2xl font-bold">Grand Café de France</div>
          
          {/* Navigation Links */}
          <ul className="flex space-x-8 uppercase text-sm">
            <li>
              <a 
                href="#histoire" 
                className="hover:text-[#C5A059] transition-colors"
                onClick={closeMenu}
              >
                L'Histoire
              </a>
            </li>
            <li>
              <a 
                href="#carte" 
                className="hover:text-[#C5A059] transition-colors"
                onClick={closeMenu}
              >
                La Carte
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="hover:text-[#C5A059] transition-colors"
                onClick={closeMenu}
              >
                L'Expérience
              </a>
            </li>
          </ul>
          
          {/* Reservation Button */}
          <Link
            href="/reserve"
            className="bg-[#C5A059] text-white px-4 py-2 rounded-md font-medium hover:bg-[#b38a4d] transition-colors text-sm"
            onClick={closeMenu}
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="font-serif text-lg font-bold">Grand Café de France</div>
          
          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-[60]"
              onClick={closeMenu}
            />
            {/* Menu Panel */}
            <div className="md:hidden fixed inset-0 top-[73px] bg-[#FAF9F6] z-[70] overflow-y-auto">
              <div className="flex flex-col min-h-full">
                {/* Close Button */}
                <div className="flex justify-end p-4 sticky top-0 bg-[#FAF9F6] z-10 border-b border-gray-200">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center justify-center flex-1 space-y-6 px-4 py-8">
                  <a
                    href="#histoire"
                    onClick={closeMenu}
                    className="text-2xl font-serif font-semibold text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
                  >
                    L'Histoire
                  </a>
                  <a
                    href="#carte"
                    onClick={closeMenu}
                    className="text-2xl font-serif font-semibold text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
                  >
                    La Carte
                  </a>
                  <a
                    href="#experience"
                    onClick={closeMenu}
                    className="text-2xl font-serif font-semibold text-[#0F1C2E] hover:text-[#C5A059] transition-colors"
                  >
                    L'Expérience
                  </a>
                  <Link
                    href="/reserve"
                    onClick={closeMenu}
                    className="bg-[#C5A059] text-white px-8 py-3 rounded-md font-medium hover:bg-[#b38a4d] transition-colors text-lg mt-4"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

