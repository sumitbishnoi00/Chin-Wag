import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="pt-8.75 sm:pt-9.5 md:pt-[42.6px] pb-[2.04px] sm:pb-2.5 md:pb-[20.75px] bg-[url('/assets/images/webg/footer-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className="max-w-360 mx-auto flex flex-col items-center justify-center w-full">
        <Image src={"/assets/images/webg/XMLID_1_.webp"} width={206.81} height={199} alt='Footer-logo' className='w-[108.08px] sm:w-35 md:w-42.5 lg:w-[206.81px] ' />

        <button className='py-[18.5px] px-[31.5px] border border-none rounded-[65px] bg-cadet-blue hover:bg-white font-normal text-16 leading-131 text-white hover:text-cadet-blue mt-6.25 sm:mt-7 md:mt-8.5 transition-all duration-500 cursor-pointer'>
          Book a Demo
        </button>
      </div>

      <div className='w-full max-w-360 mx-auto border-t border-muted-gray mt-[31.96px] sm:mt-[33.43px] mb-[3.04px] sm:mb-2.5 md:mb-[20.26px]'></div>


      <p className='font-normal text-14 md:leading-214 text-ash-gray max-md:hidden'>
        © CHIN WAG INTERNATIONAL LIMITED t/a Chin-wag.com {new Date().getFullYear()}, All Rights Reserved.
      </p>
      <p className='md:hidden font-normal text-10 leading-300 text-ash-gray'>
        ©chin-wag {new Date().getFullYear()}, All Rights Reserved
      </p>
    </section>
  )
}

export default Footer



