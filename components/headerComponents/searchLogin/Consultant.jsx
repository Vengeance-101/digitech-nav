import { useData } from "@/utils/context/StateContext";
import React from "react";

const Consultant = () => {
  const { isScrolled } = useData();
  return (
    <div className="max-md:hidden">
      <button
        className={`bg-[red]  border-2 border-[black]  py-3 px-4  consultant-btn text-base transition-all duration-300 ease-in-out  hover:bg-black rounded-md  font-extrabold text-white ${
          isScrolled && "hover:bg-white  hover:text-black"
        } `}
      >
        Get Consultant
      </button>
    </div>
  );
};

export default Consultant;
