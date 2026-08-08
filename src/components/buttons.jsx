import React from 'react'

function Buttons({content, className = "", ...props}) {
  return (
    <button 
    className={`sm:px-4 sm:py-2 bg-orange-500 text-[0.8rem] sm:text-[1rem] transition-all rounded-lg p-2 hover:cursor-pointer hover:scale-95 ${className}`}
    {...props}
    >
        {content}
    </button>
)
}

export default Buttons
