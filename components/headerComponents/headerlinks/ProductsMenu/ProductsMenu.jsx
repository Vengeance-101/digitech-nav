"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Sublink from "./sublinks/Sublink";
import { useData } from "@/utils/context/StateContext";

const ProductsMenu = () => {
  const { handleActiveLink, activeSub } = useData();

  const sublinks = [
    "Development Training",
    "Designing Training",
    "Database & CMS Training",
    "Marketing Training",
    "Cyber Security",
  ];

  return (
    <div className="absolute productsMenu w-full bg-red-500 top-full -translate-x-1/2 left-1/2 z-99">
      <div className="container mx-auto h-full py-5 px-11">
        <div
          className="w-[65%] h-auto mx-auto product_content border-2 border-black overflow-hidden bg-black rounded-2xl flex"
          title={activeSub}
        >
          <div className="main-products flex w-full h-auto">
            <ul className="flex flex-col items-start overflow-hidden bg-[#121212] py-12">
              {sublinks.map((title) => (
                <li key={title} className="pl-8 w-full">
                  <button
                    className={`sublink-anchor relative border-none outline-none w-full transition-all duration-300 ease-in-out text-sm px-2 py-3 ${
                      title === activeSub
                        ? "bg-white text-red-500"
                        : "bg-transparent text-white"
                    }`}
                    onMouseEnter={() => handleActiveLink(title)}
                  >
                    <span className="w-full text-left inline-flex mr-20">
                      {title}
                    </span>
                  </button>
                </li>
              ))}

              <Link
                href="#"
                className="mt-24 py-3 all-products inline-flex w-full pl-10 items-center gap-1 text-sm text-white"
              >
                See all Products
                <MdOutlineArrowRightAlt className="rightArrow text-lg" />
              </Link>
            </ul>
            <div className="sub-products w-full h-full relative">
              <Sublink title={activeSub} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
