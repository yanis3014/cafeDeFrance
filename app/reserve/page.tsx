'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Calendar, Clock, Users, User, Phone, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

interface FormData {
  date: string;
  time: string;
  guests: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  specialRequest: string;
}

type FormState = 'idle' | 'loading' | 'success';

export default function ReservePage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    guests: '2',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    specialRequest: '',
  });

  // Générer les heures disponibles (12:00 à 21:30 par tranches de 30 min)
  const timeSlots = [];
  for (let hour = 12; hour <= 21; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 21) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  // Générer les options de nombre de personnes (1 à 12)
  const guestOptions = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation basique
    if (!formData.date || !formData.time || !formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Simulation : passer en état loading
    setFormState('loading');

    // Simuler une requête serveur avec setTimeout
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  // Date minimale = aujourd'hui
  const today = new Date().toISOString().split('T')[0];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0F1C2E]">
      <div className="max-w-7xl mx-auto">
        {/* Header avec bouton retour */}
        <div className="px-4 pt-8 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F1C2E] hover:text-[#C5A059] transition-colors group"
          >
            <svg
              className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-120px)]">
          {/* Image d'ambiance */}
          <div className="hidden lg:block relative">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero/restaurant-hero.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-[#0F1C2E]/40"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <FadeIn delay={0.3}>
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-serif font-bold mb-4">
                      Réservez votre table
                    </h2>
                    <p className="text-lg opacity-90">
                      Un moment d'exception vous attend
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="px-4 md:px-8 py-8 lg:py-16 lg:px-12 flex items-center justify-center">
            {formState === 'success' ? (
              /* Écran de succès */
              <FadeIn>
                <div className="max-w-md mx-auto text-center">
                  <div className="mb-6 flex justify-center">
                    <CheckCircle2 className="h-16 w-16 md:h-20 md:w-20 text-[#C5A059]" />
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 text-[#0F1C2E]">
                    Merci {formData.firstName}, votre table est réservée !
                  </h1>
                  <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                    Un email de confirmation vient de vous être envoyé à{' '}
                    <span className="font-semibold text-[#C5A059]">{formData.email}</span>.
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
                    <div className="text-left space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Date :</span> {new Date(formData.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Heure :</span> {formData.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Nombre de personnes :</span> {formData.guests}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/"
                    className="inline-block bg-[#C5A059] text-white px-8 py-3 rounded-md font-medium hover:bg-[#b38a4d] transition-colors"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              </FadeIn>
            ) : (
              /* Formulaire */
              <div className="w-full max-w-lg">
                <FadeIn delay={0.2}>
                  <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-2 text-[#0F1C2E]">
                      Réservez votre table
                    </h1>
                    <p className="text-sm md:text-base text-gray-600">
                      Remplissez le formulaire ci-dessous pour confirmer votre réservation
                    </p>
                  </div>
                </FadeIn>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date et Heure */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={today}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Heure *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                      >
                        <option value="">Sélectionnez une heure</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Nombre de personnes */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      Nombre de personnes *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                    >
                      {guestOptions.map((num) => (
                        <option key={num} value={num}>
                          {num} {num === '1' ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nom et Prénom */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* Demande particulière */}
                  <div>
                    <label htmlFor="specialRequest" className="block text-sm font-medium text-[#0F1C2E] mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Demande particulière (optionnel)
                    </label>
                    <textarea
                      id="specialRequest"
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Allergies, anniversaire, demande spéciale..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full bg-[#C5A059] text-white px-6 py-4 rounded-md font-medium hover:bg-[#b38a4d] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Vérification des disponibilités...
                      </>
                    ) : (
                      'Confirmer la réservation'
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

