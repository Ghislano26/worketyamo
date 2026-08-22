import { useState } from 'react';
import { onlineFormationsList } from '../static/formationsData';
import { 
  Sparkles, 
  Star, 
  Clock, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';

function OnlineFormations({ onSelectFormation }) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const categories = ["Tous", "Développement Web", "Data & IA", "Mobile", "Cloud & DevOps", "Design"];

  const filteredCourses = selectedCategory === "Tous" 
    ? onlineFormationsList 
    : onlineFormationsList.filter(c => c.categorie === selectedCategory);

  const handleWhatsAppInquiry = (course) => {
    const phoneNumber = "237675541573";
    const text = encodeURIComponent(
      `Bonjour Worketyamo ! Je suis très intéressé(e) par votre cours en ligne "${course.titre}" (Réf: ${course.plateforme}). J'aimerais avoir plus de détails sur les modalités d'accès et le suivi par mentor.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="formations-en-ligne" className="w-full py-16 md:py-24 bg-linear-to-b from-blue-50/60 via-white to-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-4">
            <span>Apprenez à votre rythme, où que vous soyez</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            Formations & Cours en Ligne <span className="text-blue-600">Certifiants</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mt-4 mb-5"></div>
          <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed">
            Accédez à nos programmes en ligne de haut niveau (Udemy) en <span className="font-semibold text-blue-900">Dev FullStack, Python, Data Science, IA, Mobile et DevOps</span>, enrichis par un accompagnement direct par nos mentors basés à Yaoundé.
          </p>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des cartes de cours en ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Header card avec badge & note */}
                <div className="p-6 pb-4 bg-linear-to-r from-blue-950 via-blue-900 to-slate-900 text-white relative">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-orange-500 text-white px-3 py-1 rounded-full shadow-sm">
                      {course.badge}
                    </span>
                    <span className="text-xs text-blue-200 font-medium flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      <BookOpen size={13} className="text-orange-400" />
                      {course.plateforme}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors line-clamp-2">
                    {course.titre}
                  </h3>

                  <div className="flex items-center gap-3 mt-4 text-xs text-blue-100">
                    <div className="flex items-center gap-1 text-amber-300 font-semibold bg-amber-400/20 px-2 py-0.5 rounded">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span>{course.note}</span>
                      <span className="text-blue-200 font-normal">({course.avisCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={13} />
                      <span>{course.duree}</span>
                    </div>
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Badges des technologies */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Layers size={13} className="text-blue-500" />
                      Technologies enseignées
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.technos.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ce qui est inclus */}
                  <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                      <Award size={14} className="text-orange-500" />
                      Inclus avec Worketyamo :
                    </p>
                    <ul className="space-y-1.5">
                      {course.inclus.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer de la carte avec tarif et actions */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                <div className="flex items-baseline justify-between py-4">
                  <div>
                    <span className="text-xs text-gray-400 line-through block">{course.prixOriginal}</span>
                    <span className="text-2xl font-black text-orange-500">{course.prix}</span>
                  </div>
                  {/* <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    -50% Offre Spéciale
                  </span> */}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleWhatsAppInquiry(course)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-colors hover:cursor-pointer shadow-sm"
                  >
                    <MessageCircle size={16} />
                    <span>Discuter WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectFormation) {
                        onSelectFormation(course);
                      } else {
                        handleWhatsAppInquiry(course);
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-950 hover:bg-blue-900 text-white font-medium py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-colors hover:cursor-pointer shadow-sm"
                  >
                    <span>S'inscrire</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière de réassurance WhatsApp & Support */}
        <div className="mt-14 bg-linear-to-r from-blue-950 to-indigo-300 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-700/50">
          <div className="flex flex-col gap-2 text-center md:text-left">
            {/* <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
              Assistance & Orientation Gratuite
            </span> */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Besoin d'aide pour choisir votre formation ?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              Nos conseillers pédagogiques à Yaoundé vous guident selon vos objectifs pro, votre niveau et vos disponibilités.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/237675541573?text=Bonjour, je souhaite être conseillé pour choisir la formation ou le stage tech le plus adapté à mon profil."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OnlineFormations;
