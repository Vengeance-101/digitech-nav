import { servicesData } from "@/data/headerdata/ProductMenuData";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { useData } from "@/utils/context/StateContext";
const Sublink = () => {
  const { activeSub } = useData();

  return (
    <div
      className={`absolute bg-white h-full  flex items-center justify-center px-14 py-12 w-full top-0 right-0`}
    >
      <div className=" grid grid-cols-2  w-full h-full  grid-rows-6 gap-5 ">
        {servicesData.map((category) => {
          if (category.Sublink == activeSub) {
            return (
              <div
                key={category.title}
                className="flex   justify-center cursor-pointer categoryLink"
              >
                <button className=" border-none outline-none py-1 category-tags">
                  <h1 className="text-lg text-black flex items-center justify-start gap-2 category-main-tag transition-all duration-300 ease-in-out">
                    {category.title}
                    <FaArrowRightLong className="text-[red] " />
                  </h1>
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sublink;
