import { useState } from 'react'
import { Links } from '../static/Link'
import { Link, useLocation, useNavigate } from 'react-router'
import Buttons from './buttons'

function Navbar({ onReserver }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAction = () => {
    if (onReserver) {
      onReserver()
    } else {
      navigate('/contact')
    }
  }

  return (
    <nav className='shadow-md bg-white/95 backdrop-blur-md w-full sticky top-0 z-50 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8'>
            {/* Logo */}
            <Link to="/" className='flex items-center gap-1 group'>
                <span className='text-blue-600 text-2xl font-black tracking-tight group-hover:text-blue-700 transition-colors'>Worket</span>
                <span className='text-orange-500 text-2xl font-black tracking-tight group-hover:text-orange-600 transition-colors'>Yamo</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className='hidden md:flex items-center gap-8'>
                {
                Links.map((i)=> {
                  const isActive = location.pathname === i.path;
                  return (
                    <Link 
                      to={i.path} 
                      key={i.id}
                      className={`text-sm font-semibold transition-all duration-200 py-1.5 border-b-2 ${
                        isActive 
                          ? 'text-blue-600 border-blue-600 font-bold' 
                          : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300'
                      }`}
                    >
                      {i.value}
                    </Link>
                  );
                })
                }
            </div>

            {/* CTA Button Desktop */}
            <div className='hidden md:flex items-center gap-3'>
                <Buttons 
                  onClick={handleAction}
                  content={'Réserver ma place'} 
                  className='text-white bg-orange-500 hover:bg-orange-600 font-semibold shadow-sm'
                />
            </div>

            {/* Hamburger Menu - Mobile Only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className='md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none'
            >
              <div className='flex flex-col gap-1.5 w-6'>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-b border-gray-200 px-6 py-5 flex flex-col gap-4 shadow-xl animate-fadeIn'>
            {Links.map((i) => {
              const isActive = location.pathname === i.path;
              return (
                <Link 
                  to={i.path} 
                  key={i.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 font-bold' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {i.value}
                </Link>
              );
            })}
            <div className='mt-2 pt-3 border-t border-gray-100'>
              <Buttons 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleAction();
                }}
                content={'Réserver ma place'} 
                className='text-white bg-orange-500 hover:bg-orange-600 font-semibold w-full py-3'
              />
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar
