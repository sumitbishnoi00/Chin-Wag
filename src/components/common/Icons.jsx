import React from "react";
import { jsx } from "react/jsx-runtime";

const Icon = ({ icon, className, pathName }) => {
  const icons = {
    backtotop: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    ),
    roadmap: (
      <svg viewBox="0 0 884 124" fill="none" xmlns="http://www.w3.org/2000/svg" className=" min-[1060px]:max-w-[884.1px] w-full max-w-[800.1px] min-h-[124.1px]">
        <path opacity="0.2" d="M2.63184 6.7207L228.474 116.953L441.704 6.7207L665.398 116.953L880.549 7.98119" stroke="#7A9E9F" stroke-width="12" stroke-miterlimit="10" />
      </svg>

    ),
    strateline: (
      <svg
        width="6"
        height="498"
        viewBox="0 0 6 498"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" sm:w-10 sm:h-170 w-1.5 h-124.5"
      >
        <line
          opacity="0.5"
          x1="3"
          y1="3"
          x2="2.99998"
          y2="494.059"
          stroke="#B8D8D8"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
    ),
    shadow: (
      <svg width="645" height="650" viewBox="0 0 1245 1130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_5301_3705)">
          <ellipse cx="622.478" cy="564.603" rx="272.659" ry="214.784" fill="#7A9E9F" />
        </g>
        <defs>
          <filter id="filter0_f_5301_3705" x="0.000183105" y="0.000183105" width="1244.96" height="1129.21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="174.91" result="effect1_foregroundBlur_5301_3705" />
          </filter>
        </defs>
      </svg>
    ),
  };

  return icons[icon];
};

export default Icon;
