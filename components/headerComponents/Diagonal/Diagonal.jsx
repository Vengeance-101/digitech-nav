import React from "react";
import { useData } from "@/utils/context/StateContext";
import Image from "next/image";
import { CompanyLogo } from "@/utils/media/MediaImport";
const Diagonal = () => {
  const { isScrolled } = useData();
  return (
    <div
      className={`diagonal-shapes  ${
        isScrolled ? "hidden" : "block"
      }  max-lg:hidden   `}
    >
      <div className="absolute w-[25%] z-30  d-shape-1  flex justify-center items-center top-0 left-0  h-full bg-[#ffffff] ">
        <Image
          src={CompanyLogo}
          width={300}
          height={200}
          alt="companyimg"
          className=" object-contain w-[55%]"
        />
      </div>
      <div className="absolute w-[25.6%] z-[29]  d-shape-2 top-0 left-0  h-[88%] bg-[#c2c2c2] "></div>
    </div>
  );
};

export default Diagonal;
