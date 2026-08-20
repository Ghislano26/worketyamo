import { useState } from 'react';
import { X, MessageCircle, CheckCircle } from 'lucide-react';

function RegistrationModal({ isOpen, onClose, defaultFormation = null }) {
  const initialFormationTitle = typeof defaultFormation === 'string' 
    ? defaultFormation 
    : (defaultFormation?.titre || '');

  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    formation: initialFormationTitle,
    mode: 'Présentiel à Yaoundé (Melen)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentFormation = formData.formation || initialFormationTitle;

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `👋 *Demande d'inscription / réservation Worketyamo*
----------------------------------------
👤 *Nom :* ${formData.nom || 'Non renseigné'}
📱 *Téléphone :* ${formData.telephone || 'Non renseigné'}
📧 *Email :* ${formData.email || 'Non renseigné'}
💻 *Formation / Cours :* ${currentFormation || 'Orientation générale'}
📍 *Modalité :* ${formData.mode}
📝 *Remarque :* ${formData.message || 'Je souhaite réserver ma place pour la prochaine session.'}
----------------------------------------
📍 *Lieu :* Worketyamo - Melen, Yaoundé (Face CHUY)`;

    const url = `https://wa.me/237697712493?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto">
        
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors hover:cursor-pointer"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Demande initialisée avec succès !</h3>
            <p className="text-sm text-gray-600">
              Votre réservation pour <strong className="text-blue-600">{currentFormation || 'la formation'}</strong> est prête. Vous pouvez finaliser l'échange sur WhatsApp.
            </p>
            <div className="flex gap-3 w-full mt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="flex-1 py-3 bg-blue-950 text-white rounded-xl font-semibold text-sm hover:bg-blue-900"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Inscription Rapide
              </span>
              <h3 className="text-2xl font-extrabold text-blue-950 mt-2">
                Réserver votre place chez <span className="text-orange-500">Worketyamo</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Centre de Melen (Face CHUY, Yaoundé) & Formations en ligne certifiantes
              </p>
            </div>

            <form onSubmit={handleWhatsAppDirect} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Formation ou Programme choisi *
                </label>
                <input
                  type="text"
                  value={formData.formation || initialFormationTitle}
                  onChange={(e) => setFormData({ ...formData, formation: e.target.value })}
                  placeholder="Ex: Développeur FullStack, DevOps, Stage..."
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    placeholder="Votre nom complet"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Numéro Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    placeholder="Ex: 697 71 24 93"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Modalité d'apprentissage
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Présentiel à Yaoundé (Melen - Face CHUY)">Présentiel à Yaoundé (Melen - Face CHUY)</option>
                  <option value="En ligne (Udemy + Accompagnement WhatsApp)">En ligne (Udemy + Accompagnement WhatsApp)</option>
                  <option value="Stage Académique (Rapport / Mémoire)">Stage Académique (Rapport / Mémoire)</option>
                  <option value="Stage Professionnel">Stage Professionnel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Un commentaire ou question ? (Optionnel)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Disponibilités, questions sur le matériel ou le paiement..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:cursor-pointer text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Confirmer & Discuter sur WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-400">
                🔒 Vos informations sont traitées confidentiellement par l'équipe Worketyamo.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export default RegistrationModal;
