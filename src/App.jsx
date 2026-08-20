import { useState } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Banner from './components/banner'
import Formations from './components/formations'
import OnlineFormations from './components/onlineFormations'
import DemandeStageSection from './components/demandeStageSection'
import Features from './components/features'
import LocationSection from './components/locationSection'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import WhatsappFloatingButton from './components/whatsappFloatingButton'
import RegistrationModal from './components/registrationModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);

  const handleOpenModal = (formation = null) => {
    setSelectedFormation(formation);
    setIsModalOpen(true);
  };

  return (
    <div className='min-h-screen w-full flex flex-col bg-white text-gray-800 antialiased'>
      {/* Barre de navigation */}
      <Navbar onReserver={() => handleOpenModal()} />
      
      {/* Hero Header */}
      <Header onVoirFormations={() => {
        const el = document.getElementById('formations-en-ligne');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Bannière de statistiques d'impact */}
      <Banner />

      {/* Formations Présentielles au Centre de Yaoundé */}
      <Formations />

      {/* Formations en Ligne & Cours Udemy (FullStack, Python, Data Science, IA, DevOps, Mobile) */}
      <OnlineFormations onSelectFormation={(formation) => handleOpenModal(formation)} />

      {/* Espace Demande de Formation & Stage en ligne (Redirection WhatsApp directe) */}
      <DemandeStageSection />

      {/* Pourquoi Choisir Worketyamo (Pédagogie & Méthode) */}
      <Features />

      {/* Localisation Interactive & Hub de Melen Face au CHUY */}
      <LocationSection />

      {/* Témoignages & Avis d'anciens apprenants & stagiaires */}
      <Testimonials />

      {/* Pied de page complet */}
      <Footer />

      {/* Bouton d'assistance WhatsApp Flottant */}
      <WhatsappFloatingButton />

      {/* Modal d'inscription rapide */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultFormation={selectedFormation}
      />
    </div>
  )
}

export default App
