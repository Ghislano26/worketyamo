import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

function WhatsappFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "237675541573";
  const defaultText = encodeURIComponent(
    "Bonjour Worketyamo ! Je viens depuis votre site web et j'aimerais avoir des informations sur vos formations et stages disponibles à Melen (Yaoundé) ou en ligne."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Pop-up Info Bulles */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 transition-all animate-fadeIn text-gray-800">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-900">Conseiller Worketyamo en ligne</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 hover:cursor-pointer p-1"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Besoin d'un renseignement sur une formation, un stage ou nos cours Udemy ? Discutez en direct avec nous sur WhatsApp !
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${defaultText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
          >
            <MessageCircle size={16} />
            <span>Démarrer la discussion (675 54 15 73)</span>
          </a>
        </div>
      )}

      {/* Bouton Rond Flottant */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contacter sur WhatsApp"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:cursor-pointer ring-4 ring-emerald-400/30"
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
        </button>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
          </span>
        )}
      </div>

    </div>
  );
}

export default WhatsappFloatingButton;
