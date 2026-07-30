import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";

const Demo = () => {
  return (
    <section className=" relative px-4 bg-cadet-gray max-md:pb-[38.08px] lg:pt-[102.6px] md:pt-20 sm:pt-15 pt-11.25 lg:pb-[104.07px] md:pb-20 sm:pb-15 pb-[38.08px">
      <Image src={"/assets/images/webg/growth-left.webp"} width={53.66} height={60.55} alt='growth-left' className=" absolute top-14 left-9 animate-benefit-left" />
      <div className="max-w-[1181.42px] w-full mx-auto flex md:flex-row flex-col items-center justify-center ">
        <div className="max-w-149 w-full flex flex-col max-md:text-center max-md:justify-center max-md:items-center">
          <Heading vari={"dan"}>
            Save on Cost. <br></br> Supercharge Your Growth
          </Heading>

          <Para vari={"sec"} className="max-w-141.5 w-full md:mt-3.5  mt-2.5">
            Secure the best rates and get rewarded for on-time payments with 5%
            discount against your next invoice. The equivalent to 1 free days
            work, for 20 days paid.
          </Para>

          <button className="max-w-max lg:py-[15.5px] md:py-3.5 sm:py-3 py-[11.27px] lg:px-[27.5px] px-5.5 border border-none rounded-[65px] bg-storm-gray hover:bg-white font-bold lg:text-16 md:text-14 sm:text-13 text-12 leading-131 text-white hover:text-storm-gray lg:mt-10.25 md:mt-9.5 sm:mt-8.75 mt-8 transition-all duration-500 cursor-pointer">
            Book a Demo
          </button>
        </div>

        <div className="md:-ml-5.25 max-md:mt-[46.99px]">
          <Image
            src={"/assets/images/webg/growth.webp"}
            width={606.42}
            height={440.34}
            alt="growth"
            className="w-[606.42px] h-[440.35px] max-xl:h-auto max-xl:w-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;