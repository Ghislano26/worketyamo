import React from 'react'
import { Links } from '../static/Link'
import { Link } from 'react-router'
import Buttons from './buttons'

function Navbar() {
  return (
    <div className='shadow-lg bg-gray-100 w-full h-20 sticky top-0 z-50 flex pr-5 sm:pr-0 sm:bg-white'>
        <div className='flex-1 flex justify-center items-center'>
            <h1 className='text-orange-500 text-[1.5rem] font-bold'><span className='text-blue-500 text-[1.5rem] font-bold'>Worket</span>Yamo</h1>
        </div>

        <div className='flex-2 hidden sm:flex justify-center items-center gap-10 '>
            {
            Links.map((i)=>
             <Link to={i.path} className='hover:border-b-2 hover:text-[#1565C0] hover:border-b-[#1565C0]' href="" key={i.id}>{i.value}</Link>
             )
            }
        </div>

        <div className='flex-1 flex justify-center items-center'>
            <Buttons content={'Reserver ma place'} className='text-white'/>
        </div>

      
    </div>
  )
}

export default Navbar
