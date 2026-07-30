import React from "react";
import FeatureSection from "../common/FeatureSection";
import { FEATURES_DATA } from "@/utils/helper";
import Image from "next/image";


const Reverse = () => {
  return (
    <section className=" relative overflow-hidden px-5.25 md:px-4 lg:pt-44.75 md:pt-40.5 sm:pt-38 pt-[145.31px] pb-[94.45px] sm:pb-27.5 md:pb-32.5 lg:pb-[143.04px]">
      <Image src={"/assets/images/webg/reverse-left.webp"} width={74} height={74} alt="reverse-left" className=" absolute left-7 top-20 animate-benefit-left" />
      <Image src={"/assets/images/webg/reverse-right.webp"} width={66.6} height={78} alt="reverse-right" className=" absolute right-13 bottom-96 animate-benefit-right" />
      <div className="max-w-[1177.32px] w-full mx-auto flex flex-col items-center justify-end lg:gap-[145.3px] md:gap-35 sm:gap-33.75 gap-[131.52px]">
        {FEATURES_DATA.map((item) => (
          <FeatureSection key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Reverse;