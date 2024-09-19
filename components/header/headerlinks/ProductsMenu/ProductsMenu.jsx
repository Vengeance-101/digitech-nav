"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Sublink from "./sublinks/Sublink";
const ProductsMenu = ({
  mouseEnter,
  mouseLeave,
  handleActiveLink,
  activeSub,
}) => {
  // -------------------------------------------------
  const sublinks = [
    { title: "Development Training" },
    { title: "Designing Training" },
    { title: "Database & CMS Training" },
    { title: "Marketing Training" },
    { title: "Cyber Security" },
  ];
  // -------------------------------------------------

  const active = true;

  return (
    <div
      className="absolute productsMenu top-[100%] -translate-x-1/2 left-[50%]   z-[99]"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="w-full py-1"></div>
      <div
        className="w-full h-auto product_content border-2 border-[black] overflow-hidden bg-white rounded-2xl flex shadow-xl shadow-slate-400 "
        title={activeSub}
      >
        <div className="main-products flex w-full   h-auto">
          <ul className="flex flex-col items-start    bg-black  py-12">
            {sublinks.map((sublink) => {
              return (
                <li
                  key={sublink.title}
                  className={` ${sublink.title} pl-8   w-full  `}
                >
                  <button
                    href="#"
                    className={` sublink-anchor relative    outline-none  w-full transition-all duration-300 ease-in-out  text-sm px-2   py-3  ${
                      sublink.title == activeSub && active
                        ? "bg-white"
                        : "bg-transparent"
                    }  ${sublink.title}  ${
                      active && sublink.title == activeSub
                        ? "text-[red]"
                        : "text-white"
                    } 
                       `}
                    onMouseEnter={() => {
                      handleActiveLink(sublink.title);
                    }}
                  >
                    <span className="w-full  text-left inline-flex mr-20">
                      {sublink.title}
                    </span>
                  </button>
                </li>
              );
            })}

            <Link
              href="#"
              className="mt-24 py-3 all-products inline-flex w-full pl-10 items-center gap-1 text-sm text-[white]"
            >
              {" "}
              See all Products
              <MdOutlineArrowRightAlt className="rightArrow text-lg" />
            </Link>
          </ul>
          <div className="sub-products  w-full  h-full relative">
            <Sublink title={activeSub} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
