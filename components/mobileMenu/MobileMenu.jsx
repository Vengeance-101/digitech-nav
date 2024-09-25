import React from "react";
import MobileSublink from "../headerComponents/headerlinks/ProductsMenu/sublinks/MobileSublink";
import MobileMain from "../headerComponents/headerlinks/ProductsMenu/MobileMain";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const MobileMenu = ({
  toggle,
  slider,
  handleSlider,
  title,
  handleActiveLink,
}) => {
  return (
    <div
      className={`absolute transition-all duration-300 ease-in-out z-[50] top-[100%] ${
        toggle ? "right-3 max-sm:right-0" : "right-[-38%] max-sm:right-[-100%]"
      } max-xl:w-[36%] max-lg:w-[38%] max-md:w-[38%] max-sm:w-[100%] h-auto py-2 max-sm:py-0 ${
        !toggle && "opacity-0 pointer-events-none"
      } max-xl:opacity-100 max-xl:pointer-events-auto`}
    >
      <div className="bg-[white] w-full h-full relative overflow-hidden max-md:pt-0 px-3 shadow-2xl py-10  rounded-[1.2rem] max-sm:rounded-none">
        <div
          className={`main_link_mobile  transition-all duration-300 ease-in-out w-full ${
            slider ? "-translate-x-[105%]" : "-translate-x-0"
          }`}
        >
          <h1 className="font-extralight mt-5 text-[.75rem] text-gray-700">
            SERVICES
          </h1>
          <MobileMain
            handleSlider={handleSlider}
            handleActiveLink={handleActiveLink}
          />
          <div className="hidden max-md:inline-flex w-full items-center justify-center py-3">
            <button className="bg-[red] py-3 px-4 text-base transition-all duration-300 ease-in-out  hover:bg-black rounded-md  font-extrabold text-white">
              Get Consultant
            </button>
          </div>
        </div>
        <MobileSublink
          handleSlider={handleSlider}
          slider={slider}
          title={title}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
