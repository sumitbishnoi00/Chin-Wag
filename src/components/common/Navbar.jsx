import React from "react";

const Navbar = () => {
  return (
    <section className="px-4 z-10">
      <div className="max-w-285 w-full mx-auto lg:pt-4.25 pt-8 lg:pb-[17.11px] flex flex-row items-center justify-between">
        <a href="#">
          <img
            src="/assets/images/webg/XMLID_1_.webp"
            width={63.28}
            height={60.89}
            alt="chin-wag"
            className="lg:w-[63.28px] md:w-13.25 sm:w-10.75 w-[32.21px] lg:h-[60.89px] "
          />

        </a>

        <div className="flex flex-row gap-4.75 items-center">
          <button className=" lg:w-51.75 md:w-40 sm:w-31 w-[96.48px]  lg:h-14.5 md:h-12 sm:h-8  h-[23.80px]  font-normal lg:text-16 md:text-14 sm:text-10 text-8 leading-131 rounded-[65px] cursor-pointer  text-white bg-soft-sea-green  border border-transparent hover:text-soft-sea-green hover:border-soft-sea-green hover:bg-white duration-500 transition-all">
            Require Resources?
          </button>
          <button className=" lg:w-50.25 md:w-39 sm:w-30 w-[96.48px] lg:h-14.5 md:h-12 sm:h-8 h-[23.80px]  font-normal lg:text-16 md:text-14 sm:text-10 text-8 leading-131 rounded-[65px] cursor-pointer text-soft-sea-green border-2 border-soft-sea-green hover:bg-soft-sea-green hover:text-white hover:border-transparent duration-500 transition-all">
            Provide Resources?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;