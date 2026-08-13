import React, { useState, useEffect } from 'react';
import { infoBanner } from '../static/Link';


function StatItem({ end, suffix, subtitle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 3000; 

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-orange-500 text-3xl font-bold text-fint'>
        {count}{suffix}
      </h1>
      <h2 className='text-white text-font'>{subtitle}</h2>
    </div>
  );
}

function Banner() {
  return (
    <section 
    className='w-full mt-50 flex gap-10 pt-5 p-9 md:p-0 flex-col md:h-45 bg-blue-950 md:flex-row justify-evenly items-center md:mt-8'
    style={{
        // Crée une courbe fluide en bas de la bannière
          clipPath: "ellipse(80% 85% at 50% 15%)"
      }}
    >
      {infoBanner.map(i => (
        <StatItem 
          key={i.id} 
          end={i.end} 
          suffix={i.suffix} 
          subtitle={i.subtitle} 
        />
      ))}
    </section>
  );
}

export default Banner;
