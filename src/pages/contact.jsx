import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import WhatsappFloatingButton from '../components/whatsappFloatingButton';
import RegistrationModal from '../components/registrationModal';
import { faqList } from '../static/formationsData';
import { phoneNumber } from '../static/phoneNumber';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Navigation, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  User,
  GraduationCap
} from 'lucide-react';

function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState(null);
  
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    motif: 'Demande de formation présentielle à Melen',
    etablissement: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const motifsList = [
    "Demande de formation présentielle à Melen (Yaoundé)",
    "Demande de formation en ligne / Cours Udemy",
    "Demande de stage académique (BTS, Licence, Ingénieur, Master)",
    "Demande de stage professionnel",
    "Développement d'application sur-mesure pour entreprise",
    "Partenariat ou recrutement de nos lauréats",
    "Autre demande d'information"
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const messageText = `👋 *Nouvelle prise de contact via le site Worketyamo*
----------------------------------------
👤 *Nom :* ${formData.nom || 'Non renseigné'}
📱 *Téléphone / WhatsApp :* ${formData.telephone || 'Non renseigné'}
📧 *Email :* ${formData.email || 'Non renseigné'}
🎯 *Objet de la demande :* ${formData.motif}
🏫 *Établissement / Profil :* ${formData.etablissement || 'Étudiant / Professionnel'}
📝 *Message :* ${formData.message || 'Bonjour, je souhaite échanger avec un conseiller Worketyamo.'}
----------------------------------------
📍 *Lieu :* Worketyamo - Melen, Yaoundé (Face au CHUY)`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleFaq = (idx) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased text-gray-800">
      <Navbar onReserver={() => setIsModalOpen(true)} />

      {/* Hero Header Contact */}
      <section className="bg-linear-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Contact & Orientation Personnalisée</span>
          </div> */}

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Parlons de votre <span className="text-orange-400">avenir tech</span>
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-base sm:text-lg leading-relaxed">
            Vous souhaitez rejoindre une session de formation, postuler pour un stage ou visiter nos locaux à <strong className="text-white">Melen, Yaoundé (en face du CHUY)</strong> ? Notre équipe vous répond immédiatement.
          </p>
        </div>
      </section>

      {/* Section Principale : Formulaire + Coordonnées */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne Gauche : Formulaire de Contact */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">Envoyez-nous un message</h2>
            <p className="text-sm text-gray-500 mb-6">
              Remplissez le formulaire ci-dessous. Dès validation, notre équipe prendra en charge votre demande sur WhatsApp ou par téléphone sous 24h.
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message transmis !</h3>
                <p className="text-sm text-gray-600 max-w-md">
                  Merci <strong className="text-gray-900">{formData.nom || 'cher apprenant'}</strong> ! Si la fenêtre WhatsApp ne s'est pas ouverte, cliquez ci-dessous pour démarrer le chat :
                </p>

                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Bonjour Worketyamo, je viens d'envoyer un message pour : ${formData.motif}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md mt-2"
                >
                  <MessageCircle size={18} />
                  <span>Ouvrir la conversation WhatsApp</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-gray-500 hover:underline mt-2"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <User size={13} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ghislain Ateba Chouacha"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Phone size={13} />
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: 680 87 86 40"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Mail size={13}  />
                      Email (Optionnel)
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: monemail@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <GraduationCap size={13}  />
                      École / Université / Statut
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: IUT, ENSPY, Université Yaoundé I..."
                      value={formData.etablissement}
                      onChange={(e) => setFormData({ ...formData, etablissement: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Objet de votre demande *
                  </label>
                  <select
                    value={formData.motif}
                    onChange={(e) => setFormData({ ...formData, motif: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 bg-white"
                  >
                    {motifsList.map((m, idx) => (
                      <option key={idx} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Votre message ou vos questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Expliquez-nous votre projet, vos dates de stage, vos disponibilités ou vos questions sur le déroulement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:cursor-pointer text-sm sm:text-base"
                  >
                    <Send size={18} />
                    <span>Envoyer mon message</span>
                  </button>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=Bonjour, je souhaite contacter l'équipe Worketyamo directement.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-sm sm:text-base"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

              </form>
            )}

          </div>

          {/* Colonne Droite : Coordonnées Directes & Infos Locales */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box Adresse Melen */}
            <div className="bg-linear-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl  text-white flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-orange-400 font-bold">Localisation Principale</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Melen, Yaoundé</h3>
                  <p className="text-xs text-blue-200 font-medium">Directement en face du CHUY (Centre Hospitalier Universitaire)</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 border-t border-slate-700/80 pt-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="shrink-0" />
                  <span>Ouvert du Lundi au Samedi : 08h00 – 18h30</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0" />
                  <a href="tel:+237697712493" className="hover:underline text-emerald-300 font-semibold">
                    {phoneNumber} (Appel & WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0" />
                  <a href="mailto:contact@worketyamo.com" className="hover:underline text-blue-300">
                    contact@worketyamo.com
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/80">
                <a
                  href="https://maps.google.com/?q=CHUY+Yaounde+Melen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all"
                >
                  <Navigation size={16} />
                  <span>Ouvrir l'itinéraire Google Maps</span>
                </a>
              </div>
            </div>

            {/* Carte Google Maps Embed */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md h-72 relative">
              <iframe
                title="Carte Google Maps Melen CHUY Yaounde"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7042571342674!2d11.498800075841077!3d3.8643800482594244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9a4563a6a9%3A0xb36efae7a61d1523!2sCentre%20Hospitalier%20Universitaire%20de%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* Section FAQ (Foire Aux Questions) */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-3">
              <HelpCircle size={16} className="text-orange-500" />
              <span>Questions Fréquentes</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Tout ce que vous devez savoir
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Les réponses aux questions les plus posées par nos candidats, apprenants et stagiaires.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-gray-50/50"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-blue-600 transition-colors hover:cursor-pointer text-sm sm:text-base"
                  >
                    <span>{item.q}</span>
                    <span className="p-1 rounded-lg bg-gray-100 text-gray-600 shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsappFloatingButton />

      {/* Modal d'inscription */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ContactPage;
