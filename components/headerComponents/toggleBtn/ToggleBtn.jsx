import { useData } from "@/utils/context/StateContext";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
const ToggleBtn = () => {
  const { handleToggle, toggle } = useData();

  return (
    <div
      className="toggle-button hidden cursor-pointer relative max-xl:block"
      onClick={handleToggle}
    >
      <HiOutlineMenu
        className={`text-4xl opacity-0 transition-all duration-300 pointer-events-none  ease-in-out ${
          toggle == false && "opacity-100"
        } text-black `}
      />
      <div
        className={` ${
          toggle == true && "opacity-100 -rotate-45"
        } pointer-events-none absolute h-[.18rem] w-[83%] opacity-0 rounded-xl  bg-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={` ${
          toggle == true && "opacity-100 rotate-45"
        } pointer-events-none absolute h-[.18rem] w-[83%] opacity-0 rounded-xl bg-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out  `}
      ></div>
    </div>
  );
};

export default ToggleBtn;
