import React from 'react'

const Para = ({children, vari, className = "" }) => {
    const variants = {
        pri: "leading-178 sm:leading-175 text-dark-gray",
        sec: "leading-178 sm:leading-175 text-white",
        dan: "leading-150 text-charcoal",


    }
  return (

    <p className={`font-light text-14 sm:text-16  ${variants[vari]} ${className} `}> {children} </p>

  )
}

export default Para