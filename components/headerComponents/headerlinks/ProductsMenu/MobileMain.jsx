import React from "react";
import { useData } from "@/utils/context/StateContext";
import { TiChevronRight } from "react-icons/ti";

const MobileMain = () => {
  const { handleActiveLink, handleSlider } = useData();

  const sublinks = [
    "Development Training",
    "Designing Training",
    "Database & CMS Training",
    "Marketing Training",
    "Cyber Security",
  ];

  const handleClick = (sub) => {
    handleSlider();
    handleActiveLink(sub);
  };

  return (
    <ul className="flex flex-col w-full items-start border-t-2 border-gray-300 mt-3 py-3">
      {sublinks.map((title) => (
        <li key={title} className="w-full">
          <button
            className="mobile-sublink-anchor inline-flex items-center justify-between w-full h-auto text-base py-3 font-extralight text-black"
            onClick={() => handleClick(title)}
          >
            {title}
            <TiChevronRight className="text-lg" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MobileMain;
