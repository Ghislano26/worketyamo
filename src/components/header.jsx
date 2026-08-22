import image from '../assets/images/home1.svg'
import Buttons from './buttons'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from 'react-router'
import { phoneNumber } from '../static/phoneNumber'

function Header({ onVoirFormations }) {
  const navigate = useNavigate();

  const handleFormationsClick = () => {
    if (onVoirFormations) {
      onVoirFormations();
    } else {
      navigate('/formations');
    }
  };

  return (
    <header className='w-full min-h130 md:min-h-150 flex flex-col md:flex-row gap-8 md:gap-3 px-4 sm:px-6 md:px-12 py-10 md:py-16 items-center justify-between'>
        
        <div className='flex-1 flex flex-col justify-center gap-6 md:gap-8 md:pl-12 lg:pl-24'>
            
            <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full leading-tight'> 
                <h1 className='text-blue-950'>
                  La clé d'une carrière <br />
                  dans la tech. <br />
                  <span className='text-blue-500'>
                    <Typewriter
                      words={['La fabrique des pros', 'de la tech.', 'Propulse ta carrière.']}
                      loop={0}
                      cursor
                      cursorStyle='|'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </h1>
            </div>

            <div className='text-justify w-full text-sm sm:text-base md:w-[85%] lg:w-[75%]'>
                <p className='text-font text-gray-600 leading-relaxed'>
                  Dans un monde où la technologie redéfinit chaque métier,
                  Worketyamo te donne les compétences concrètes pour ne pas subir
                  le changement, mais pour le créer. Rejoins notre centre dès aujourd'hui.
                </p>
            </div>

            <div className='w-full flex flex-wrap gap-4 pt-2'>
               <Buttons 
                onClick={handleFormationsClick}
                content={'Voir les formations'} 
                className='text-white bg-orange-500 hover:bg-orange-600 shadow-md font-semibold'
               />

               <a 
                href={`https://wa.me/+237675541573?text=Bonjour Worketyamo, je viens de visiter votre site et j'aimerais en savoir plus sur les formations et stages.`}
                target='_blank'
                rel='noopener noreferrer'
               >
                <Buttons 
                  content={'Discuter sur WhatsApp'} 
                  className='bg-white text-emerald-600 border-2 border-emerald-300 hover:bg-emerald-50 font-semibold'
                />
               </a>
            </div>

        </div>
        


        <div className='flex-1 flex md:justify-center justify-center items-center'>
            <img 
              src={image} 
              alt="Worketyamo formation tech et développement au Cameroun" 
              className='w-[80%] sm:w-[70%] md:w-[85%] max-w-md h-auto animate-float object-contain'
            />
        </div>

    </header>
  )
}

export default Header
