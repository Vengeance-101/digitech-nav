import React from "react";
import { TiChevronRight } from "react-icons/ti";

const MobileMain = ({ handleSlider, handleActiveLink }) => {
  // -------------------------------
  const sublinks = [
    { title: "Development Training" },
    { title: "Designing Training" },
    { title: "Database & CMS Training" },
    { title: "Marketing Training" },
    { title: "Cyber Security" },
  ];
  const handleClick = (sub) => {
    handleSlider();
    handleActiveLink(sub);
  };
  // -------------------------------

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto mobile_product_content  ">
        <div className="main-products flex w-full h-auto">
          <ul className="flex flex-col w-full items-start border-t-2 border-gray-300 mt-3 py-3">
            {sublinks.map((sublink) => {
              return (
                <li
                  key={sublink.title}
                  className={` ${sublink.title}  w-full  `}
                >
                  <button
                    href="#"
                    className={` mobile-sublink-anchor  inline-flex items-center justify-between w-full h-auto text-base   py-3   ${sublink.title} font-extralight text-black `}
                    onClick={() => handleClick(sublink.title)}
                  >
                    {sublink.title}
                    <TiChevronRight className="text-lg" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMain;
