import React from 'react'
import { infoBanner } from '../static/Link'




function Banner() {
  return (
    <section className='w-full mt-50 flex gap-10 pt-5 flex-col md:h-35 bg-blue-950 md:flex-row justify-evenly items-center md:mt-8'>
        {
            infoBanner.map(i => (
                <div key={i.id} className='flex flex-col items-center gap-3'>
                    <h1 className='text-orange-500 text-2xl font-bold'>{i.title}</h1>
                    <h2 className='text-white'>{i.subtitle}</h2>
                </div>
            ))
        }

    </section>
  )
}

export default Banner
