import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle, 
  Building2, 
  Car, 
  Wifi, 
  Zap
} from 'lucide-react';
import { phoneNumber } from '../static/phoneNumber';

function LocationSection() {
  return (
    <section id="localisation" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-3">
            <Building2 size={16} className="text-orange-500" />
            <span>Notre Centre & Hub Technologique</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            Venez nous rencontrer à <span className="text-blue-600">Yaoundé</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mt-4 mb-4"></div>
          <p className="max-w-2xl text-gray-600 text-base md:text-lg">
            Situé en plein cœur universitaire de la capitale politique, notre campus de <span className="font-semibold text-gray-900">Melen (En face du CHUY)</span> vous offre un cadre moderne propice à l'apprentissage et à l'innovation.
          </p>
        </div>

        {/* Grille Contenu : Informations & Carte Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Colonne de gauche : Infos d'accès & services */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Carte adresse */}
            <div className="bg-linear-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin size={26} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-orange-400 font-bold">Adresse Principale</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">Melen, Yaoundé</h3>
                  <p className="text-sm text-blue-200 font-medium">En face du Centre Hospitalier Universitaire (CHUY)</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 border-t border-slate-700/80 pt-5">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Horaires d'ouverture :</p>
                    <p className="text-xs text-slate-300">Lundi au Samedi : 14h00 – 20h</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Téléphone & WhatsApp :</p>
                    <a href="tel:+237697712493" className="text-xs text-emerald-300 hover:underline">
                     {phoneNumber} / 6 55 19 35 30
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className=" shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email de contact :</p>
                    <a href="worketyamo.dev@gmail.com" className="text-xs text-blue-300 hover:underline">
                      worketyamo.dev@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bouton ouvrir Itinéraire */}
              <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=CHUY+Yaounde+Melen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all"
                >
                  <Navigation size={16} />
                  <span>Ouvrir l'itinéraire GPS</span>
                </a>

                <a
                  href="https://wa.me/237675541573?text=Bonjour, je souhaite venir visiter le centre Worketyamo à Melen face au CHUY aujourd'hui."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Prendre RDV</span>
                </a>
              </div>
            </div>

            {/* Équipements du campus */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-6">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap size={16} />
                Infrastructures sur place
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100/60 shadow-xs">
                  <Wifi size={16} className="text-blue-600" />
                  <span>Fibre optique haut débit</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100/60 shadow-xs">
                  <Zap size={16} className="text-amber-500" />
                  <span>Énergie & groupe de secours</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100/60 shadow-xs">
                  <Car size={16} className="text-emerald-600" />
                  <span>Accès taxis & parking aisé</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100/60 shadow-xs">
                  <Building2 size={16} className="text-purple-600" />
                  <span>Salles climatisées & lab</span>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Carte Google Maps Embed */}
          <div className="lg:col-span-7 bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden shadow-lg flex flex-col min-h-105 relative">
            
            {/* Header de la carte */}
            <div className="bg-white px-5 py-3 border-b border-gray-200 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold text-gray-800">Localisation GPS : Melen, Yaoundé (Face CHUY)</span>
              </div>
              <span className="text-xs text-gray-500 font-medium hidden sm:inline">Cameroun</span>
            </div>

            {/* Iframe Google Maps */}
            <div className="flex-1 w-full h-full relative">
              <iframe
                title="Localisation Worketyamo Melen Yaoundé Face CHUY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7042571342674!2d11.498800075841077!3d3.8643800482594244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf9a4563a6a9%3A0xb36efae7a61d1523!2sCentre%20Hospitalier%20Universitaire%20de%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
                className="w-full h-full min-h-100 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>

              {/* Badge flottant sur la map */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-200 max-w-xs pointer-events-none hidden sm:block">
                <p className="text-xs font-extrabold text-blue-950 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Worketyamo Tech Hub
                </p>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  Melen — Directement en face du CHUY
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LocationSection;
