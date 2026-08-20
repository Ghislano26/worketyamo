import { testimonials } from '../static/aboutData';
import { Star, Quote, MessageSquare } from 'lucide-react';

function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-3">
            <MessageSquare size={16} className="text-emerald-500" />
            <span>Témoignages & Réussites</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            Ce que disent nos <span className="text-blue-600">apprenants</span> & <span className="text-orange-500">stagiaires</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mt-4 mb-4 mx-auto"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Découvrez comment ils ont développé leurs compétences tech, validé leurs diplômes ou décroché leur premier poste grâce à Worketyamo.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 text-blue-100" size={42} />

              <div className="relative z-10">
                {/* Étoiles */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(t.note)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{t.texte}"
                </p>
              </div>

              {/* Auteur */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.nom}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.nom}</h4>
                  <p className="text-xs text-blue-600 font-medium">{t.role}</p>
                  <span className="text-[11px] text-gray-400">{t.promo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
