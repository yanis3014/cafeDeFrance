import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0F1C2E] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Menu introuvable
        </h1>
        <p className="text-gray-700 mb-8 font-sans">
          Désolé, cette catégorie de menu n'existe pas.
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

