import React from 'react'
import Heading from '../common/Heading'
import { BENEFIT_DATA } from '@/utils/helper'
import Image from 'next/image'
import Para from '../common/Para'

const Benefit = () => {
  return (
    <section className=' relative px-7.5 md:px-4 pt-[71.87px] sm:pt-20 md:pt-30 lg:pt-40'>
      <Image src={"/assets/images/webg/benefit-left.webp"} width={66.6} height={78} alt='benefit-left' className='w-[37.43px] sm:w-[66.6px] h-[42.94px] sm:h-19.5  absolute left-0 md:left-7 xl:left-19 top-38 md:top-37 lg:top-50 animate-benefit-left' />
      <Image src={"/assets/images/webg/benefit-right.webp"} width={74} height={74} alt='benefit-right' className='w-11 md:w-18.5 h-[41.36px] md:h-18.5 absolute right-6 xl:right-11 -bottom-12 xl:bottom-0 animate-benefit-right' />
      <div className='max-w-285 w-full mx-auto flex flex-col items-center justify-center'>
        <Heading vari={"sec"} className='max-w-202 w-full text-center'>
          Benefit from the Power of Choice. Built for Startups, SMEs & Enterprise
        </Heading>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27.16px] sm:gap-6 mt-[41.99px] sm:mt-11.5 md:mt-13 lg:mt-15 max-md:pl-[14.3px] max-md:pr-[13.7px]'>
          {BENEFIT_DATA.map((item) => (

            <div key={item.id} className='group border border-pale-silver rounded-lg bg-white pt-8.5 px-4 sm:px-5 md:px-6.75 pb-7 sm:pb-7.5 md:pb-7.75 text-center transition-all duration-500 hover:bg-soft-sea-green cursor-pointer'>
              <Image src={item.image} width={178.23} height={185.45} alt={item.title} className='sm:w-[178.23px] w-[162.99px] h-[154.24px] sm:h-[185.45px] mx-auto' />

              <h2 className='font-semibold text-18 sm:text-21 md:text-25 leading-138 text-black mt-[27.76px] sm:mt-[21.84px] transition-colors duration-500 group-hover:text-white'>
                {item.title}
              </h2>

              <Para vari={"pri"} className='mt-2.5 transition-colors duration-500 group-hover:text-ice-white'>
                {item.desc}
              </Para>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefit