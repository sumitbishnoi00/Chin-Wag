import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";


const Hero = () => {
  return (
    <section className=" relative ">
      <div className="lg:h-202.5 sm:h-110 h-102.25 max-lg:hidden lg:w-170.75 w-full absolute rounded-r-2xl bg-storm-gray -left-4  -top-23.75 -z-20 "></div>
      <div className="lg:hidden bg-storm-gray sm:h-110 h-59.75 w-full  absolute  -top-23.75"></div>
      <Image
        src={"/assets/images/webg/hero4.webp"}
        alt="downarror"
        width={20.54}
        height={151.65}
        className="animate-hero4 lg:top-0 sm:top-90 top-39 lg:right-0  absolute lg:mr-4  max-lg:ml-2  lg:h-[151.65px] md:h-37 sm:h-30 h-10.25 lg:w-[20.54px] md:w-7 w-auto "
      />

      <div className="max-w-342.5  relative pl-[17.3px] pr-[16.7px] sm:px-4 w-full mx-auto lg:mt-29.5 md:mt-26 sm:mt-22 mt-12 flex lg:flex-row flex-col lg:pb-35.25 justify-between max-xl:gap-[23.5px]  items-center ">
        <div className="relative">
          <Image
            src={"/assets/images/webg/hero1.webp"}
            width={715}
            height={456}
            className="relative xl:w-178.75 lg:w-150 md:w-140 sm:w-130 w-82.5 z-10 lg:h-114 md:h-111 sm:h-110 h-auto object-cover object-center  rounded-2xl"
          />
          <Image
            src={"/assets/images/webg/hero3.webp"}
            width={146.46}
            height={118.7}
            className="absolute md:-top-12  sm:-top-8 -top-2.5  lg:w-[146.46px] lg:h-[118.7px] md:w-30 sm:w-25 w-10 sm:-right-6 -right-3 "
          />
        </div>

        <div className="max-w-104.75 w-full min-[1300px]:mr-26.25 flex lg:gap-3 gap-[13.58px] flex-col lg:mt-10 max-lg:text-center max-lg:justify-center max-lg:items-center">
          <Heading
            children={"Introductions that save you money."}
            vari={"pri"}
          />
          <Para
            children={
              "Avoid inflated costs, keep your identity hidden while searching for Partners, and get rewarded for paying on-time."
            }
            vari={"pri"}
          />
          <button className="lg:py-[16.5px] md:py-3.75 sm:py-3 py-[11.27px] lg:px-5 md:px-4.75 sm:px-4 px-[15.5px] rounded-[65px] font-normal max-w-max  lg:text-16 md:text-14 sm:text-13 text-12 leading-120 text-white bg-storm-gray lg:mt-4.25 md:mt-4 sm:mt-3.5 mt-2.75 cursor-pointer border border-transparent hover:text-storm-gray hover:bg-white hover:border-storm-gray duration-500 transition-all">
            Publish your Requirement
          </button>
        </div>
        <Image
          src={"/assets/images/webg/hero2.webp"}
          width={111}
          height={112.07}
          className="animate-rotate-scroll cursor-pointer absolute bottom-0 right-0 max-lg:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;