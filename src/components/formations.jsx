import FormationCard from './formationCard'
import { useNavigate } from 'react-router'
import { useState, useEffect, useRef } from 'react';


function ScrollAnimate({ children, delay = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const node = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (node) observer.unobserve(node);
        }
      });
    }, { threshold: 0.1 });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${delay} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}



function Formations() {

  const navigate = useNavigate()

  return (
    <section className='w-full py-16 md:py-24 flex flex-col gap-10 bg-white'>

      <div className='px-5 md:px-24 max-w-7xl mx-auto w-full'>
        <ScrollAnimate>
          <FormationText titre={'Formations Présentielles'} description={"Apprenez dans notre centre à Yaoundé (Melen, Face CHUY), entouré d'une communauté motivée et encadré par des formateurs experts de l'industrie."}/>
        </ScrollAnimate>
      </div>


      <div className='px-5 md:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ScrollAnimate>
          <FormationCard 
            titre={'Développement Web FullStack'}
            description={'HTML, CSS, Javascript, React, Nodejs, Express, MongoDB. Construis des applications web complètes de A à Z.'}
            duree={'8 mois'}
            tarif={350000}
            onReserver={()=>navigate('/contact')}
          />
        </ScrollAnimate>


        <ScrollAnimate>
          <FormationCard 
            titre={'DevOps'}
            description={'Linux, Docker, CI/CD, GitHub Actions, déploiement cloud. Maitrise l\'infrastructure des applications modernes.'}
            duree={'12 mois'}
            tarif={500000}
            onReserver={()=>navigate('/contact')}
          />
        </ScrollAnimate>

         <ScrollAnimate>
          <FormationCard 
            titre={'Frontend'}
            description={'HTML, CSS, JavaScript, React, Tailwind CSS. Création d\'interfaces modernes, interactives et responsives centrés sur l\'espérience utilisateur'}
            duree={'6 mois'}
            tarif={175000}
            onReserver={()=>navigate('/contact')}
          />
        </ScrollAnimate>

        <ScrollAnimate>
          <FormationCard 
            titre={'Backend'}
            description={'Node.js, Express, MongoDB, PostgreSQL API REST, authentification JWT. Développement de la logique serveur, gestion des bases de données et sécurisations des applications'}
            duree={'4 mois'}
            tarif={175000}
            onReserver={()=>navigate('/contact')}
          />
        </ScrollAnimate>

        

      </div>

    {/* section prepa certifs */}

      <div className='px-5 md:px-24 max-w-7xl mx-auto w-full'>
        <ScrollAnimate>
          <FormationText titre={'Prépa certifs internationales'}/>
        </ScrollAnimate>
      </div>
      <div className='px-5 md:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ScrollAnimate>
          <FormationCard 
            titre={'Formation Cloud + Passage certification SAA'}
            description={'Linux, Docker, CI/CD, GitHub Actions, déploiement cloud. Maitrise l\'infrastructure des applications modernes.'}
            duree={'7 mois'}
            tarif={350000}
            onReserver={()=>navigate('/contact')}
          />
        </ScrollAnimate>

        

      </div>

      


      <div className="text-center mt-4">
        <button
          onClick={() => navigate('/formations')}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors hover:cursor-pointer"
        >
          <span>Découvrir l'ensemble du catalogue présentiel & stages</span>
          <span>→</span>
        </button>
      </div>

      
    </section>
  )
}

export default Formations


function FormationText({titre, description}){
  return (
    <div className='w-full flex flex-col justify-center gap-4'>
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-blue-200 text-blue-700 text-xs font-semibold w-fit">
          <span>Campus Yaoundé Melen</span>
        </div> */}
        <h2 className='text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight'>{titre}</h2>
        <div className='w-20 h-1.5 bg-orange-400 rounded-full border-0'></div>
        <p className='text-gray-500 text-font text-base md:text-lg max-w-3xl'>{description}</p>
    </div>
  )
}
