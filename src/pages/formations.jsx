import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import WhatsappFloatingButton from '../components/whatsappFloatingButton';
import RegistrationModal from '../components/registrationModal';
import { allFormationsCatalog, onlineFormationsList } from '../static/formationsData';
import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award 
} from 'lucide-react';

function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('tous');
  const [expandedProgramId, setExpandedProgramId] = useState(null);
  
  // État pour la modale d'inscription
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormationForModal, setSelectedFormationForModal] = useState(null);

  // Fusionner les formations présentielles/stages et en ligne
  const combinedCatalog = [
    ...allFormationsCatalog,
    ...onlineFormationsList.map(o => ({
      id: o.id,
      titre: o.titre,
      type: "online",
      categorie: o.categorie,
      duree: o.duree,
      tarif: o.prix,
      badge: `En ligne — ${o.plateforme}`,
      description: o.description,
      pointsForts: o.inclus,
      prerequis: `Niveau : ${o.niveau}. Ordinateur et connexion Internet.`,
      programme: [
        "Accès immédiat aux vidéos HD complètes",
        "Ateliers et projets pratiques guidés",
        "Groupe WhatsApp privé d'entraide avec un mentor dédié",
        "Évaluation continue et validation de certificat"
      ],
      lienUdemy: o.lienUdemy
    }))
  ];

  // Filtrage combiné par texte et catégorie
  const filteredFormations = combinedCatalog.filter((item) => {
    const matchesSearch = item.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.categorie.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;

    if (selectedFilter === 'tous') return true;
    if (selectedFilter === 'presentiel') return item.type === 'presentiel';
    if (selectedFilter === 'online') return item.type === 'online';
    if (selectedFilter === 'stage') return item.type === 'stage';
    if (selectedFilter === 'data_ia') return item.categorie.includes('Data') || item.categorie.includes('IA');
    if (selectedFilter === 'web_mobile') return item.categorie.includes('Web') || item.categorie.includes('Mobile');
    if (selectedFilter === 'devops') return item.categorie.includes('Cloud') || item.categorie.includes('DevOps');

    return true;
  });

  const handleOpenRegistration = (item) => {
    setSelectedFormationForModal(item);
    setIsModalOpen(true);
  };

  const handleWhatsAppContact = (item) => {
    const phoneNumber = "237697712493";
    const text = encodeURIComponent(
      `Bonjour Worketyamo ! J'aimerais m'inscrire ou avoir des informations détaillées sur le programme : "${item.titre}" (${item.badge}).`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const toggleProgram = (id) => {
    setExpandedProgramId(expandedProgramId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased text-gray-800">
      <Navbar onReserver={() => handleOpenRegistration(null)} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Catalogue Officiel Worketyamo 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Formations & Stages <span className="text-orange-400">Tech d'Excellence</span>
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
            Explorez nos cursus présentiels à <strong className="text-white">Melen, Yaoundé (Face au CHUY)</strong>, nos stages académiques/professionnels et nos programmes certifiants en ligne.
          </p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation (ex: React, DevOps, Python, Stage, Flutter...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white text-gray-900 rounded-2xl shadow-xl border-2 border-blue-400/40 focus:outline-none focus:border-orange-500 text-sm sm:text-base placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filtres par onglets */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Filter size={16} className="text-gray-400 shrink-0 mr-1" />

            {[
              { id: 'tous', label: 'Toutes les formations' },
              { id: 'presentiel', label: 'Présentiel (Melen - Yaoundé)' },
              { id: 'online', label: 'En Ligne & Udemy' },
              { id: 'stage', label: 'Stages (Académique & Pro)' },
              { id: 'web_mobile', label: 'Web & Mobile' },
              { id: 'devops', label: 'DevOps & Cloud' },
              { id: 'data_ia', label: 'Data & IA' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all hover:cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille du catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500 font-medium">
            <strong className="text-gray-900">{filteredFormations.length}</strong> formation(s) et programme(s) trouvé(s)
          </p>
        </div>

        {filteredFormations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs">
            <p className="text-lg font-bold text-gray-800">Aucune formation ne correspond à votre recherche.</p>
            <p className="text-sm text-gray-500 mt-2">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('tous');
              }}
              className="mt-4 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700"
            >
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFormations.map((item) => {
              const isExpanded = expandedProgramId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    
                    {/* Header de la carte */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        item.type === 'presentiel'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : item.type === 'stage'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {item.badge}
                      </span>

                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <Clock size={14} className="text-orange-500" />
                        {item.duree}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-3">
                      {item.titre}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Points forts */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5 flex items-center gap-1.5">
                        <Award size={14} className="text-orange-500" />
                        Ce que vous allez acquérir :
                      </h4>
                      <ul className="space-y-2">
                        {item.pointsForts.map((pt, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prérequis */}
                    {item.prerequis && (
                      <p className="text-xs text-gray-500 italic mb-4">
                        <strong className="text-gray-700 font-semibold not-italic">Prérequis : </strong>
                        {item.prerequis}
                      </p>
                    )}

                    {/* Déroulé du programme / Accordéon */}
                    {item.programme && item.programme.length > 0 && (
                      <div className="border-t border-gray-100 pt-3">
                        <button
                          onClick={() => toggleProgram(item.id)}
                          className="w-full flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800 py-1 hover:cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <BookOpen size={14} />
                            {isExpanded ? 'Masquer le programme détaillé' : 'Voir le programme détaillé des modules'}
                          </span>
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 pl-2 space-y-2 text-xs text-gray-600 border-l-2 border-blue-400 animate-fadeIn">
                            {item.programme.map((module, mIdx) => (
                              <p key={mIdx} className="leading-relaxed">
                                • {module}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Footer de la carte avec Tarif & Boutons */}
                  <div className="bg-gray-50/90 border-t border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-semibold block">Tarif & Investissement</span>
                      <span className="text-2xl font-black text-orange-500">{item.tarif}</span>
                    </div>

                    <div className="flex gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => handleWhatsAppContact(item)}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all hover:cursor-pointer shadow-sm"
                        title="Discuter sur WhatsApp"
                      >
                        <MessageCircle size={17} />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>

                      <button
                        onClick={() => handleOpenRegistration(item)}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm transition-all hover:cursor-pointer shadow-sm"
                      >
                        <span>S'inscrire / Postuler</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Bannière de réassurance & contact direct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              Vous avez un projet spécifique ou une demande de stage sur-mesure ?
            </h3>
            <p className="text-orange-100 text-sm sm:text-base max-w-2xl">
              Notre équipe vous accueille directement dans nos locaux à Melen (Yaoundé, face CHUY) du lundi au samedi pour échanger sur vos objectifs.
            </p>
          </div>

          <a
            href="https://wa.me/237697712493?text=Bonjour, je souhaite prendre rendez-vous ou discuter d'un besoin de formation particulier."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-orange-600 font-extrabold py-4 px-8 rounded-2xl shadow-lg hover:bg-orange-50 transition-all transform hover:scale-105"
          >
            <MessageCircle size={22} className="text-emerald-600" />
            <span>Discuter maintenant</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsappFloatingButton />

      {/* Modal d'inscription */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultFormation={selectedFormationForModal}
      />
    </div>
  );
}

export default FormationsPage;
