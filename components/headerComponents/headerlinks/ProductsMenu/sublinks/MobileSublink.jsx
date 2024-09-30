import { servicesData } from "@/data/headerdata/ProductMenuData";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useData } from "@/utils/context/StateContext";

const MobileSublink = () => {
  const { handleSlider, slider, activeSub } = useData();

  return (
    <div
      className={`w-full h-full absolute overflow-y-auto top-0 transition-all duration-300 ease-in-out ${
        slider ? "left-0" : "left-[100%]"
      } py-5 px-3`}
    >
      <button
        className="text-xl text-red-500 inline-flex items-center gap-2 py-2"
        onClick={handleSlider}
      >
        <IoIosArrowBack />
        Back
      </button>
      <h1 className="text-xl my-3">{activeSub}</h1>
      <div className="h-0.5 w-full bg-red-500" />
      <div className="h-auto w-full flex flex-col">
        {servicesData
          .filter((category) => category.Sublink === activeSub) // Use filter for better clarity
          .map((category) => (
            <div
              key={category.title}
              className="flex gap-4 py-2 cursor-pointer categoryLink"
            >
              <div className="py-1 category-tags">
                <h1 className="text-base text-black flex items-center gap-2 category-main-tag transition-all duration-300 ease-in-out">
                  <GoDotFill className="text-red-500" />
                  {category.title}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileSublink;
