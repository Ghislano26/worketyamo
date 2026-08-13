import React from 'react'
import image from '../assets/images/home1.svg'
import Buttons from './buttons'
import { Typewriter } from 'react-simple-typewriter'

function Header() {
  return (
    <div className='w-full h-150 flex flex-col md:flex-row gap-3 md:p-5 md:mt-25 md:flex'>
        
        <div className='flex-1 flex flex-col pl-5 pr-5 p-2 justify-center gap-8 md:pl-40'>
            
            <div className='text-[2.4rem] md:text-6xl font-bold w-full leading-normal'> 
                <h1 className='text-blue-950'>Forme-toi aujourd'hui. <br />Construis demain. <br />  <span className='text-blue-500'>
                     <Typewriter
                        words={['La référence tech du Cameroun.']}
                        loop={0} // 0 signifie une animation infinie (mettez 1 pour l'écrire une seule fois)
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000} // Temps de pause une fois le texte entièrement écrit
                    />
                    
                    </span></h1>
            </div>

            <div className='text-justify w-full pr-2 text-[1rem] md:w-[70%]'>
                <h6 className='text-font text-gray-600'>Dans un monde où la technologie redéfinit chaque métier,
                    Worketyamo te donne les compétences pour ne pas subir
                    le changement — mais pour le créer.
            </h6>
            </div>

            <div className='w-full flex gap-5'>
               <Buttons content={'Voir les formations'} className='text-white'/>

               <a 
                href="https://wa.me/237697712493?text=Bonjour, je viens de visiter votre site et j'aimerais en savoir plus sur les formations"
                target='_blank'
                rel='noopener noreferrer'

               
               >

                <Buttons content={'Discuter sur whatsapp'} className='bg-white text-blue-400 border-2 border-blue-200'/>
               </a>
            </div>

        </div>


        <div className='flex-1 flex md:justify-start justify-center items-center '>
            <img 
            src={image} alt="image accueil" 
            className='w-[70%] mt-4 md:w-[90%] md:mt-0 h-full sm:ml-2 animate-float'
            />
        </div>

    </div>
  )
}

export default Header
