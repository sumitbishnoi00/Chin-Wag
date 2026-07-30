import React from 'react'

const Heading = ({children, vari, className = "" }) => {
    const variants = {
        pri: "text-charcoal-green xl:text-46 lg:text-[42px] md:text-[38px] sm:text-[36px] text-[30px]",
        sec: "text-charcoal-green lg:text-45 md:text-[36px] sm:text-[30px] text-[25px]",
        dan: "text-white lg:text-45 md:text-[36px] sm:text-[30px] text-[25px]",
        
        
    }
  return (

    <h2 className={`font-black leading-131 ${variants[vari]} ${className}`}> {children} </h2>

  )
}

export default Heading