"use client";
import React, { useState } from 'react'
import { FAQ_DATA } from '@/utils/helper'
import Para from '../common/Para'

const Faq = () => {

  const [active, setActive] = useState(2);
  return (
    <section className='px-7.5 sm:px-4 pt-18.75 sm:pt-20 md:pt-22.5 lg:pt-[105.4px] pb-16.5 sm:pb-20 md:pb-30 lg:pb-[142.5px]'>
      <div className='max-w-198.25 w-full mx-auto flex flex-col items-center justify-center'>
        <h2 className='font-black xl:text-45 lg:text-42 md:text-36 sm:text-30 text-25 leading-131 text-charcoal-green mb-7.25 sm:mb-8 md:mb-9.5 lg:mb-[47.5px]'>FAQ’S</h2>

        <div className="flex flex-col gap-2.25">
          {FAQ_DATA.map((item) => (
            <div key={item.id}>
              <div className="bg-white border border-light-gray rounded-sm">
                <button
                  onClick={() => setActive(active === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between md:py-4 sm:py-3.5 py-3.25 pr-4.25 sm:pr-5 lg:pl-5 md:pl-4.25 sm:pl-3.75 pl-3.25  text-left cursor-pointer gap-7"
                >
                  <h3 className="font-normal text-14 sm:text-16 leading-131 text-dark-charcoal">
                    {item.question}
                  </h3>

                  <span className="font-bold text-14 sm:text-16 leading-146 text-blue-gray">
                    {active === item.id ? "−" : "+"}
                  </span>
                </button>
              </div>

              {/* Accordion */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${active === item.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className={`overflow-hidden lg:pl-5 md:pl-4.5 sm:pl-4 pl-3.5 max-md:pr-2.5 transition-all duration-500 ${active === item.id ? "pb-2.5" : "pb-0"}`}>
                  <Para vari={"dan"}>
                    {item.answer}
                  </Para>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq