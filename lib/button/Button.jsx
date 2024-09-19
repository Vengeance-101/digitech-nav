import React from "react";

const Button = ({ children }) => {
  return (
    <button className="outline-none border-2 border-[#0065FF]  rounded-lg py-2  px-5 text-base text-[#0065FF] hover:bg-[#EBECF0] font-extrabold transition-all duration-300 ease-in-out ">
      {children}
    </button>
  );
};

export default Button;
