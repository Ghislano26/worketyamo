import React from 'react'
import FormationCard from './formationCard'
import { useNavigate } from 'react-router'
import { useState, useEffect, useRef } from 'react';


function ScrollAnimate({ children, delay = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // On arrête d'observer après l'apparition
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
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
    <section className='w-full mt-15 h-150 flex flex-col gap-10 md:pt-30 md:mt-0'>

      <div className='pl-5 md:pl-48 flex-1 flex'>
        <ScrollAnimate>
          <FormationText/>
        </ScrollAnimate>
      </div>


      <div className='pl-5 p-5 gap-8 md:pl-45 md:pr-42 flex-2 flex flex-col md:flex-row md:gap-0 justify-between'>
        <ScrollAnimate>
          <FormationCard 
            titre={'Développement Web FullStack'}
            description={'HTML, CSS, Javascript, React, Nodejs, Express, MongoDB. Construis des applications web complètes de A à Z.'}
            duree={'8 mois'}
            tarif={150000}
            onReserver={()=>navigate('/contact')}
        />
        </ScrollAnimate>


          <ScrollAnimate>
            <FormationCard 
              titre={'DevOps & Cloud'}
              description={'Linux, Docker, CI/CD, GitHub Actions, déploiement cloud. Maitrise l\'infrastructure des applications modernes'}
              duree={'10 mois'}
              tarif={250000}
              onReserver={()=>navigate('/contact')}
            />
          </ScrollAnimate>

      </div>

      
    </section>
  )
}

export default Formations


function FormationText(){
  return (
    <div className='w-[85%] h-full flex flex-col justify-center gap-5'>
        <h1 className='text-2xl md:text-5xl font-bold text-blue-950'>Formations Présentielles</h1>
        <hr  className='w-[10%] h-1 bg-orange-400 border-0'/>
        <p className='text-gray-500'>Apprenez dans notre cente à Yaoundé, entouré d'une communauté motivée et encadré par des formateurs experts.</p>
    </div>
  )
}
