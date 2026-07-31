import React from "react";
import Para from "./Para";
import Image from "next/image";
import Heading from "./Heading";
import Icon from "./Icons";

const FeatureSection = ({
    title,
    titleWidth,
    description,
    descWidth,
    image,
    reverse,
    imageClass,
    imageWidth,
    imageHeight,
}) => {
    return (
        <div
            className={`flex  items-center max-lg:justify-center max-lg:text-center flex-col lg:flex-row xl:gap-[203.5px] lg:gap-9 md:gap-30 sm:gap-25 gap-[39.56px]   ${reverse ? "lg:flex-row-reverse " : ""}`}
        >


            <div className="max-w-107 w-full flex flex-col gap-3.75 sm:gap-5 ">
                <Heading vari={"sec"} className={titleWidth}>
                    {title}
                </Heading>

                <div className={`space-y-2 sm:space-y-3 ${descWidth} `}>
                    {description.map((item, index) => (
                        <Para key={index} vari={"pri"}>
                            {item}
                        </Para>
                    ))}
                </div>
            </div>



            <div className={` relative  ${imageClass} `}>
                <Image
                    src={image}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                    className="w-full h-auto object-contain z-1"
                />
                <div className="absolute inset-0 max-w-136.25 -top-10 h-107.25 z-[-1] scale-180">
                    <Icon icon={"shadow"} />
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;