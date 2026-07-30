import React from 'react'

const Heading = ({children, vari, className = "" }) => {
    const variants = {
        pri: "text-charcoal-green xl:text-46 lg:text-42 md:text-38 sm:text-36 text-30",
        sec: "text-charcoal-green lg:text-45 md:text-36 sm:text-30 text-25",
        dan: "text-white lg:text-45 md:text-36 sm:text-30 text-25",
        
        
    }
  return (

    <h2 className={`font-black leading-131 ${variants[vari]} ${className}`}> {children} </h2>

  )
}

export default Heading