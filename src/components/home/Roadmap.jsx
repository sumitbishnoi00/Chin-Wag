import React from "react";
import Image from "next/image";
import Icon from "../common/Icons";

const Roadmap = () => {
  return (
    <div>
      <div className="pt-16.25 sm:pt-20 md:pt-25 lg:pt-33 px-4 pb-[95.96px] sm:pb-25 md:pb-[116.6px] text-center max-w-[1074.1px] w-full mx-auto ">
        <p className="text-storm-gray font-normal text-14 sm:text-18 md:text-xl leading-129 sm:leading-117">
          The Best Business Partnerships
        </p>
        <h2 className="text-25 sm:text-32 md:text-36 lg:text-45 font-black mt-0.5 leading-132 sm:leading-117">
          Start with a Chin-Wag
        </h2>
        <div className="min-[960px]:flex hidden flex-row justify-between  mt-23.25 text-center">
          <div className="flex flex-col relative z-20 items-center">
            <Image
              src={"/assets/images/webg/roadmapone.png"}
              width={136.28}
              height={105.63}
            />
            <p className="max-w-[133.1px] text-charcoal-green font-normal leading-138 mt-8.25">
              Describe your Business
            </p>
          </div>
          <div className="flex flex-col mt-[129.1px] relative z-20 items-center">
            <Image
              src={"/assets/images/webg/roadmaptwo.png"}
              width={136.28}
              height={105.63}
            />
            <p className="max-w-[204.1px] text-charcoal-green font-normal leading-138 mt-8.25">
              Pseudonymously Publish your Requirement{" "}
            </p>
          </div>
          <div className="flex flex-col relative z-20 items-center">
            <Image
              src={"/assets/images/webg/roadmapthree.png"}
              width={136.28}
              height={105.63}
            />
            <p className="max-w-[177.1px] text-charcoal-green font-normal leading-138 mt-[35.51px]">
              Schedule Introductions with Providers of Interest
            </p>
          </div>
          <div className="flex flex-col relative z-20 mt-[141.1px] items-center">
            <Image
              src={"/assets/images/webg/roadmapfour.png"}
              width={136.28}
              height={105.63}
            />
            <p className="max-w-[161.1px] text-charcoal-green font-normal leading-138 mt-8.25">
              Negotiate Engagement Terms Directly{" "}
            </p>
          </div>
          <div className="flex flex-col relative z-20 items-center">
            <Image
              src={"/assets/images/webg/roadmapfive.png"}
              width={136.28}
              height={105.63}
            />
            <p className="max-w-[149.1px] text-charcoal-green font-normal leading-138 mt-[19.06px]">
              Benefit from Pay-on-Time Rewards.
            </p>
          </div>

          <div className=" absolute z-10 min-[1060px]:ml-27 min-[910.1px]:mr-0 min-[950.1px]:ml-25 ml-20 min-[1060px]:mt-19 min-[950.1px]:mt-18 mt-14">
            <Icon icon={"roadmap"} />
          </div>
        </div>

        <div className="flex relative min-[960px]:hidden max-w-[530.1px] w-full mx-auto gap-[53.83px] flex-wrap flex-col justify-between mt-[41.71px] sm:mt-15 md:mt-18.75 lg:mt-23 text-start">
          <div className="flex flex-row gap-[46.14px] relative z-20 items-center">
            <Image
              src={"/assets/images/webg/roadmapone.png"}
              width={136.28}
              height={105.63}
              className="sm:w-[136.28px] w-[76.87px] h-[68.15px] sm:h-[105.63px]"
            />
            <p className=" text-charcoal-green font-normal text-18 leading-138">
              Describe your Business
            </p>
          </div>

          <div className="flex flex-row gap-[46.14px] relative z-20 items-center ">
            <Image
              src={"/assets/images/webg/roadmaptwo.png"}
              width={136.28}
              height={105.63}
              className="sm:w-[136.28px] w-[76.87px] h-[69.97px] sm:h-[105.63px]"
            />
            <p className=" text-charcoal-green font-normal text-18 leading-138 ">
              Pseudonymously Publish your Requirement{" "}
            </p>
          </div>

          <div className="flex flex-row gap-[46.14px] relative z-20 items-center ">
            <Image
              src={"/assets/images/webg/roadmapthree.png"}
              width={136.28}
              height={105.63}
              className="sm:w-[136.28px] w-[76.87px] h-[66.64px] sm:h-[105.63px]"
            />
            <p className="] text-charcoal-green font-normal text-18 leading-138 ">
              Schedule Introductions with Providers of Interest
            </p>
          </div>
          <div className="flex flex-row gap-[46.14px] relative z-20 items-center ">
            <Image
              src={"/assets/images/webg/roadmapfour.png"}
              width={136.28}
              height={105.63}
              className="sm:w-[136.28px] w-[76.87px] h-[60.46px] sm:h-[105.63px]"
            />
            <p className=" text-charcoal-green font-normal text-18 leading-138 ">
              Negotiate Engagement Terms Directly{" "}
            </p>
          </div>
          <div className="flex flex-row gap-[46.14px] relative z-20 items-center ">
            <Image
              src={"/assets/images/webg/roadmapfive.png"}
              width={136.28}
              height={105.63}
              className="sm:w-[136.28px] w-[76.87px] h-[69.96px] sm:h-[105.63px]"
            />
            <p className=" text-charcoal-green font-normal text-18 leading-138 ">
              Benefit from Pay-on-Time Rewards.
            </p>
          </div>
          <div className=" absolute top-10.75 sm:left-12 left-9">
            <Icon icon={"strateline"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
