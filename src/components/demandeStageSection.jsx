import { useState } from 'react';
import { phoneNumber } from '../static/phoneNumber';
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  GraduationCap, 
  Briefcase, 
  Laptop, 
  Calendar, 
  Phone, 
  User, 
  BookOpen, 
  MapPin
} from 'lucide-react';

function DemandeStageSection() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    typeDemande: 'Formation Présentielle (Melen, Yaoundé)',
    filiere: 'Développement Web FullStack',
    etablissement: '',
    dateDebut: 'Dès que possible',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const filieresOptions = [
    "Développement Web FullStack (React & Node.js)",
    "DevOps, Docker & Cloud Infrastructure",
    "Data Science, IA & Machine Learning",
    "Développement Mobile Flutter & Dart",
    "Stage Académique (Rapport / Mémoire Ingénieur/BTS)",
    "Stage Professionnel & Immersion Start-up",
    "UI/UX Design & Prototypage Figma",
    "Autre projet sur-mesure"
  ];

  const typesDemandes = [
    { id: "pres", label: "Formation Présentielle", icon: GraduationCap, desc: "Au centre Worketyamo à Melen (Face CHUY)" },
    { id: "online", label: "Formation En Ligne", icon: Laptop, desc: "À distance via vidéos, Udemy & coaching WhatsApp" },
    { id: "stage_acad", label: "Stage Académique", icon: BookOpen, desc: "BTS, Licence, Master, Ingénieur (ENSPY, IUT...)" },
    { id: "stage_pro", label: "Stage Professionnel", icon: Briefcase, desc: "Immersion start-up pour booster l'employabilité" }
  ];

  const generateWhatsAppMessage = () => {
    const text = `👋 *Nouvelle Demande via le site Worketyamo*
----------------------------------------
👤 *Nom complet :* ${formData.nom || 'Non renseigné'}
📱 *Téléphone / WhatsApp :* ${formData.telephone || 'Non renseigné'}
📧 *Email :* ${formData.email || 'Non renseigné'}
🎯 *Type de demande :* ${formData.typeDemande}
💻 *Filière / Programme :* ${formData.filiere}
🏫 *Établissement / Profil :* ${formData.etablissement || 'Étudiant / Professionnel'}
📅 *Date souhaitée :* ${formData.dateDebut}
📝 *Message / Objectif :* ${formData.message || 'Je souhaite rejoindre Worketyamo et débuter ma formation / mon stage.'}
----------------------------------------
📍 *Lieu :* Worketyamo - Melen, Yaoundé (Face au CHUY)`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Ouvre automatiquement WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="candidature-demande" className="w-full py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Éléments de décor d'arrière-plan */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Titre de section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles size={15} />
            <span>Portail Apprenants & Stagiaires</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Faites votre demande de <span className="text-orange-400">Formation</span> ou <span className="text-blue-400">Stage</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-300 text-base md:text-lg">
            Remplissez ce formulaire express pour réserver votre session ou postuler à un stage chez Worketyamo à Melen (Yaoundé). Vous serez instantanément redirigé vers WhatsApp pour finaliser votre inscription.
          </p>
        </div>

        {/* Grille principale : Formulaire + Carte de présentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne de gauche : Formulaire interactif */}
          <div className="lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Demande prête à être envoyée !</h3>
                <p className="text-slate-300 max-w-md text-sm sm:text-base">
                  Votre demande pour <span className="text-orange-400 font-semibold">{formData.filiere}</span> a été formatée. Si la fenêtre WhatsApp ne s'est pas ouverte automatiquement, cliquez sur le bouton ci-dessous :
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:cursor-pointer"
                  >
                    <MessageCircle size={20} />
                    <span>Ouvrir WhatsApp ({phoneNumber})</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-xl transition-colors hover:cursor-pointer text-sm"
                  >
                    Modifier mes infos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Choix du type de demande */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    1. Choisissez le type de parcours souhaité *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {typesDemandes.map((t) => {
                      const IconComponent = t.icon;
                      const isSelected = formData.typeDemande.includes(t.label);
                      return (
                        <div
                          key={t.id}
                          onClick={() => setFormData({ ...formData, typeDemande: `${t.label} (${t.desc})` })}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isSelected
                              ? "bg-green-200/30 border-blue-400 ring-2 ring-blue-500/50"
                              : "bg-slate-900/50 border-slate-700 hover:border-slate-500 hover:bg-slate-900/80"
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 ${isSelected ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400"}`}>
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{t.label}</p>
                            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{t.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Choix de la filière */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    2. Sélectionnez votre programme ou spécialité *
                  </label>
                  <select
                    value={formData.filiere}
                    onChange={(e) => setFormData({ ...formData, filiere: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    {filieresOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Informations personnelles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className=" text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User size={14} />
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ghislain Ateba Chouacha"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className=" text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Phone size={14} />
                      Numéro WhatsApp / Téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: 697 71 24 93 / 670 00 00 00"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      required
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className=" text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <GraduationCap size={14} />
                      École / Université / Profession actuelle
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Université Yaoundé I, ENSPY, Pro..."
                      value={formData.etablissement}
                      onChange={(e) => setFormData({ ...formData, etablissement: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className=" text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar size={14}  />
                      Date de début souhaitée
                    </label>
                    <select
                      value={formData.dateDebut}
                      onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="Dès que possible">Dès que possible</option>
                      <option value="Dans les 2 prochaines semaines">Dans les 2 prochaines semaines</option>
                      <option value="Le mois prochain">Le mois prochain</option>
                      <option value="Période des vacances scolaires/universitaires">Période des vacances scolaires/universitaires</option>
                    </select>
                  </div>
                </div>

                {/* Message optionnel */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Précisions ou questions (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: J'aimerais savoir si les cours du soir sont disponibles, ou des infos sur le stage..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Bouton de validation & action directe WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:cursor-pointer text-sm sm:text-base"
                  >
                    <Send size={18} />
                    <span>Envoyer & Valider ma demande</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors hover:cursor-pointer text-sm sm:text-base"
                  >
                    <MessageCircle size={20} />
                    <span>Discuter directement sur WhatsApp</span>
                  </button>
                </div>

                <p className="text-xs text-center text-slate-400">
                  Réponse garantie sous 24h par notre équipe pédagogique de Yaoundé Melen.
                </p>

              </form>
            )}
          </div>

          {/* Colonne de droite : Carte de réassurance, Localisation & Avantages */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Box Localisation Melen */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 text-white space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Campus Worketyamo</h4>
                  <p className="text-xs text-orange-400 font-semibold">Melen, Yaoundé ,  Face CHUY</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Situé stratégiquement en face du Centre Hospitalier Universitaire de Yaoundé (CHUY), à 5 minutes des campus universitaires.
              </p>
              <div className="pt-2 border-t border-slate-700 flex justify-between text-xs text-slate-400">
                <span>Horaires d'accueil :</span>
                <span className="text-slate-200 font-medium">Lun - Sam : 13h00 - 20h</span>
              </div>
            </div>

            {/* Box Avantages Clés */}
            <div className="bg-linear-to-br from-blue-900/60 to-slate-800 border border-blue-700/40 rounded-3xl p-6 text-white space-y-4">
              <h4 className="font-bold text-lg text-white flex items-center gap-2">
                Pourquoi nous choisir ?
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Pratique :</strong> , vous codez dès le 1er jour sur des projets réels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Mentorat personnalisé :</strong> Un encadrement bienveillant pour débloquer chaque étape de votre apprentissage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Insertion & Stages :</strong> Partenariats avec des start-ups et ESN camerounaises et internationales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Paiement flexible :</strong> Modalités échelonnées en 2 à 4 tranches pour tous les étudiants.</span>
                </li>
              </ul>
            </div>

            {/* Contact direct rapide */}
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-emerald-300 font-medium">Hotline WhatsApp directe</p>
                  <p className="text-sm font-bold text-white">{phoneNumber}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/+237675541573?text=Bonjour Worketyamo, je souhaite avoir un renseignement sur les formations.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Écrire
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DemandeStageSection;
