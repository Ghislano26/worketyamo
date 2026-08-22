import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import WhatsappFloatingButton from '../components/whatsappFloatingButton';
import RegistrationModal from '../components/registrationModal';
import { structureGallery, structureGallery2, teamMembers } from '../static/aboutData';
import APropos from '../components/textAbout';
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Users, 
  CheckCircle, 
  MessageCircle,
  Heart
} from 'lucide-react';
// import CountUp from 'react-countup';

function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageModal, setActiveImageModal] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased text-gray-800">

      <Navbar onReserver={() => setIsModalOpen(true)} />

        
      {/* Hero Header À Propos */}
      <section className="bg-linear-to-r font-about text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800/60 border border-blue-700 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
            <Building2 size={16} className="text-orange-400" />
            <span>À Propos de Worketyamo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Bâtir l'élite technologique de <span className="text-orange-400">demain</span> au Cameroun
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
           Dans un monde où les compétences technologiques sont devenues indispensables, l'Afrique fait face à un défi majeur : combler le fossé numérique pour permettre à sa jeunesse de saisir les opportunités offertes par l'économie numérique. Worketyamo se positionne comme une réponse innovante à ce défi.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#galerie-structure"
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
            >
              Visiter notre structure en images
            </a>

            <a
              href={`https://wa.me/237675541573?text=Bonjour, j'aimerais en savoir plus sur l'histoire et les locaux de Worketyamo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl backdrop-blur-sm transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>Contacter l'équipe</span>
            </a>
          </div>
        </div>
      </section>

     <APropos/>

    

      {/* Section Vision, Mission & Valeurs */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <textAbout/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Notre Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combler le fossé entre les enseignements académiques traditionnels et les exigences réelles du marché de l'emploi technologique en Afrique et à l'international.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-blue-900 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-blue-600" />
                Formation par la pratique intensive
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-blue-600" />
                Accompagnement aux stages universitaires
              </li>
            </ul>
          </div>

          <div className="bg-orange-50/70 border border-orange-100 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-6 shadow-md">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Notre Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Faire de Yaoundé un pôle d'ingénierie logicielle reconnu, en fournissant aux jeunes talents les outils pour créer leurs propres start-ups ou travailler à distance pour les leaders mondiaux.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-orange-950 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-600" />
                Plein essor des compétences IA & Cloud
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-orange-600" />
                Rayonnement de la tech camerounaise
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-100 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Nos Valeurs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rigueur technique, bienveillance, partage communautaire, humilité et passion d'apprendre. Ici, chaque erreur de code est une opportunité de grandir.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-emerald-950 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-600" />
                Entraide continue entre promos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-600" />
                Culture du code propre (Clean Code)
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION GALERIE DE LA STRUCTURE EN GRID */}
      <section id="galerie-structure" className="py-16 md:py-24 bg-gray-50/80 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold mb-3">
              <Building2 size={16} className="text-orange-500" />
              <span>Visite Virtuelle & Espaces</span>
            </div> */}

            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
              Découvrez la structure <span className="text-orange-500">Worketyamo</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4 mb-4 mx-auto"></div>
            <p className="text-gray-600 text-base md:text-lg">
              Un cadre de travail moderne situé à <span className="font-semibold text-gray-900">Melen, Yaoundé (Face au CHUY)</span>, pensé pour stimuler la créativité, la concentration et la collaboration tech.
            </p>
          </div>

          {/* GRID BENTO D'IMAGES DE LA STRUCTURE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-70">
            {structureGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImageModal(item)}
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${item.span}`}
              >
                {/* Image d'arrière plan */}
                <img
                  src={item.image}
                  alt={item.titre}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    {item.categorie}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {item.titre}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Badge d'agrandissement */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  Cliquer pour agrandir 🔍
                </div>
              </div>
            ))}
          </div>


          <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-70 mt-10 md:mt-25">
            {structureGallery2.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImageModal(item)}
                className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${item.span}`}
              >
                {/* Image d'arrière plan */}
                <img
                  src={item.image}
                  alt={item.titre}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay dégradé */}
                <div dir="ltr" className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    {item.categorie}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {item.titre}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Badge d'agrandissement */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  Cliquer pour agrandir 🔍
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              📍 Adresse du centre : <strong>Melen, Yaoundé — Directement en face de l'entrée principale du CHUY</strong>
            </p>
          </div> */}

        </div>

        
      </section>

      {/* Section L'Équipe & Mentors */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold mb-3">
            <Users size={16} className="text-orange-500" />
            <span>Formateurs & Mentors Experts</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            Une équipe dévouée à votre <span className="text-blue-600">succès</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mt-4 mb-4 mx-auto"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Nos encadreurs sont des ingénieurs seniors et des praticiens passionnés qui vous accompagnent pas à pas sur chaque ligne de code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.nom}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.nom}</h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">{member.role}</p>
                  
                  <div className="mt-3">
                    <span className="text-[11px] font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md inline-block">
                      {member.specialite}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Appel à l'action */}
      {/* <section className="bg-linear-to-r font-about text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-blue-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Envie de nous rejoindre ou de visiter les locaux à Melen ?
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-sm sm:text-base">
            Passez prendre un café au centre ou contactez-nous directement sur WhatsApp pour planifier votre session de découverte.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105 hover:cursor-pointer text-sm sm:text-base"
            >
              Réserver ma place
            </button>

            <a
              href={`https://wa.me/${phoneNumber}?text=Bonjour, je souhaite visiter le centre Worketyamo à Melen face au CHUY.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-xl transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Direct {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
      <WhatsappFloatingButton />

      {/* Modal Zoom Image Structure */}
      {activeImageModal && (
        <div 
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden border border-slate-700 shadow-2xl p-4">
            <img
              src={activeImageModal.image}
              alt={activeImageModal.titre}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl mb-4"
            />
            <div className="p-2 text-white">
              <span className="text-xs text-orange-400 font-bold uppercase">{activeImageModal.categorie}</span>
              <h3 className="text-2xl font-bold mt-1">{activeImageModal.titre}</h3>
              <p className="text-sm text-slate-300 mt-2">{activeImageModal.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'inscription */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default AboutPage;
