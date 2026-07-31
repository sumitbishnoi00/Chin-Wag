import { CONVERSATIONS_DATA } from "@/utils/helper";
import Image from "next/image";
import React from "react";


const Conversations = () => {
  return (
    <section className=" relative px-4 bg-light-aqua lg:pt-34 md:pt-25 sm:pt-25 pt-9.25 lg:pb-[136.92px] md:pb-25  sm:pb-18 pb-11">
      <Image src={"/assets/images/webg/conversations-left.webp"} width={53.66} height={61.09} alt="conversations-left" className=" absolute top-17.5 left-0 sm:left-7 max-sm:hidden animate-benefit-left" />
      <Image src={"/assets/images/webg/conversations-right.webp"} width={64.12} height={63.82} alt="conversations-right" className=" absolute right-14 bottom-27 max-xl:hidden animate-benefit-right" />
      <div className="max-w-[895.34px] w-full mx-auto flex flex-col items-center justify-center">
        <h2 className="max-w-[284.05px] sm:max-w-173 w-full font-black lg:text-45 md:text-38 sm:text-32 text-25 md:leading-120 leading-142 text-charcoal-green text-center md:mb-[38.5px] mb-9.25">
          Share or Connect.<br></br> Create Conversations that Count
        </h2>

        <div className="grid md:grid-cols-2 lg:gap-10 md:gap-8.5 sm:gap-7 gap-5.75">
          {CONVERSATIONS_DATA.map((item, index) => (
            <div
              key={index}
              className="group border border-none rounded-[5px] lg:pt-[42.79px] md:pt-9 sm:pt-8 pt-7.25 px-7.75 md:pb-[31.08px] pb-10 bg-storm-gray hover:bg-soft-sea-green flex flex-col items-center justify-center md:gap-[34.71px] gap-5.75 transition-all duration-500 cursor-pointer"
            >
              <p className="font-light md:text-18 text-16  leading-133 text-white text-center">
                {item.title}
              </p>
              <button className="md:py-[15.5px] py-3.25 w-full lg:px-21.25 md:px-12 sm:px-10 px-[23.5px] border border-none rounded-[138px] font-bold lg:text-16 md:text-14 sm:text-13 text-12 leading-131 text-charcoal-green bg-pale-aqua group-hover:text-white group-hover:bg-storm-gray transition-all duration-500 cursor-pointer">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conversations;