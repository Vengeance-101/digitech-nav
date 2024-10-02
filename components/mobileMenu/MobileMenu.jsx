import React from "react";
import MobileSublink from "../headerComponents/headerlinks/ProductsMenu/sublinks/MobileSublink";
import MobileMain from "../headerComponents/headerlinks/ProductsMenu/MobileMain";
import { useData } from "@/utils/context/StateContext";

const MobileMenu = () => {
  const { toggle, slider } = useData();

  return (
    <div
      className={`absolute transition-all duration-300 ease-in-out z-50 top-[100%] ${
        toggle ? "right-3 max-sm:right-0" : "right-[-38%] max-sm:right-[-100%]"
      } max-xl:w-[36%] max-lg:w-[38%] max-md:w-[38%] max-sm:w-full h-auto sm:py-2 ${
        !toggle
          ? " opacity-0 pointer-events-none"
          : "  opacity-100 pointer-events-auto"
      }  block xl:hidden  `}
    >
      <div className="bg-white   border-4 border-gray-400 w-full h-full relative overflow-hidden px-3 shadow-2xl py-10 rounded-2xl max-sm:rounded-none">
        <div
          className={`transition-all duration-300 ease-in-out w-full ${
            slider ? "-translate-x-[105%]" : "translate-x-0"
          }`}
        >
          <h1 className="font-extralight mt-5 text-xs text-gray-700">
            SERVICES
          </h1>
          <MobileMain />

          <div className="hidden max-md:flex w-full items-center justify-center py-3">
            <button className="bg-red-600 py-3 px-4 text-base transition-all duration-300 ease-in-out hover:bg-black rounded-md font-extrabold text-white">
              Get Consultant
            </button>
          </div>
        </div>
        <MobileSublink />
      </div>
    </div>
  );
};

export default MobileMenu;
