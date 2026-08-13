import React, { useState } from 'react'
import { Links } from '../static/Link'
import { Link } from 'react-router'
import Buttons from './buttons'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='shadow-lg bg-gray-100 w-full sticky top-0 z-50 sm:bg-white'>
        <div className='flex items-center justify-between h-20 px-5 sm:px-0'>
            <div className='flex justify-center items-center ml-45'>
                <h1 className='text-orange-500 text-[1.5rem] font-bold'><span className='text-blue-500 text-[1.5rem] font-bold'>Worket</span>Yamo</h1>
            </div>

            <div className='flex-2 hidden sm:flex justify-center items-center gap-10 '>
                {
                Links.map((i)=>
                 <Link to={i.path} className='hover:border-b-2 hover:text-[#1565C0] hover:border-b-[#1565C0]' href="" key={i.id}>{i.value}</Link>
                 )
                }
            </div>

            <div className='hidden sm:flex justify-center items-center mr-45'>
                <Buttons content={'Reserver ma place'} className='text-white'/>
            </div>

            {/* Hamburger Menu - Mobile Only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='sm:hidden flex flex-col gap-1.5 focus:outline-none'
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='sm:hidden bg-gray-100 px-5 py-4 flex flex-col gap-4'>
            {Links.map((i) => (
              <Link 
                to={i.path} 
                key={i.id}
                onClick={() => setIsMenuOpen(false)}
                className='hover:text-[#1565C0] text-gray-800'
              >
                {i.value}
              </Link>
            ))}
            <div className='mt-2'>
              <Buttons content={'Reserver ma place'} className='text-white w-full'/>
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar
