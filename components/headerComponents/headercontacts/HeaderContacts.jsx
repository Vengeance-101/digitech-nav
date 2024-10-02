import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useData } from "@/utils/context/StateContext";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const HeaderContacts = () => {
  const { isScrolled } = useData();

  return (
    <div
      className={`hidden  bg-gray-800  w-full h-auto    overflow-hidden  header-contacts ${
        isScrolled ? "hidden" : " xl:block"
      }`}
    >
      <div className="container mx-auto w-full auto py-2   gap-64   2xl:px-[11rem] lg:px-6 px-5  items-center justify-end   flex ">
        <div className=" flex items-center gap-12 ">
          <button className=" flex gap-2  ">
            <span className="text-[red] text-2xl ">
              <IoLocationOutline />
            </span>
            <span className="text-white"> 700001 Avenue of the Moon </span>
          </button>
          <button className=" flex gap-2 ">
            <span className="text-[red] text-xl ">
              <BsTelephone />
            </span>
            <span className="text-white"> +1234557890</span>
          </button>
        </div>

        <div className="flex gap-5 items-center  text-[white] ">
          <button className="hover:text-[red] transition-all duration-300 ease-in-out  p-1">
            <FaFacebookF />
          </button>
          <button className="hover:text-[red] transition-all duration-300 ease-in-out  p-1">
            <FaXTwitter />
          </button>
          <button className="hover:text-[red] transition-all duration-300 ease-in-out  p-1">
            <FaPinterestP />
          </button>
          <button className="hover:text-[red] transition-all duration-300 ease-in-out  p-1">
            <GrLinkedinOption />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContacts;
