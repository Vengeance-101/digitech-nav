import { servicesData } from "@/data/headerdata/ProductMenuData";
import { FaArrowRightLong } from "react-icons/fa6";

import React from "react";
const Sublink = ({ title }) => {
  return (
    <div
      className={`absolute bg-white h-full px-14 py-12 w-full top-0  grid grid-cols-2  grid-rows-6 gap-2 right-0`}
    >
      {servicesData.map((category) => {
        if (category.Sublink == title) {
          return (
            <div
              key={category.title}
              className="flex gap-4 cursor-pointer categoryLink"
            >
              <button className=" border-none outline-none py-1 category-tags">
                <h1 className="text-sm text-black flex items-center justify-start gap-2 category-main-tag transition-all duration-300 ease-in-out">
                  {category.title}
                  <FaArrowRightLong className="text-[red] " />
                </h1>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Sublink;
