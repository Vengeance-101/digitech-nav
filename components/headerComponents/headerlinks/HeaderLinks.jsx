"use client";
import Link from "next/link";
import React from "react";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import { PiCaretDownDuotone } from "react-icons/pi";
import { useData } from "@/utils/context/StateContext";
const HeaderLinks = () => {
  const { isScrolled } = useData();
  const navlink = [
    { title: "Home" },
    { title: "Pages" },
    { title: "Projects" },
    { title: "Services" },
    { title: "Blog" },
  ];

  return (
    <div className="flex  items-center text-base  ">
      {navlink.map((links) => {
        return (
          <li key={links.title}>
            <button
              href="#"
              className={`flex items-center gap-2 py-6 px-4 anchor-links transition-colors duration-300 ease-in-out ${
                isScrolled ? "text-white" : "text-[#253858]"
              }`}
              key={links.title}
              id={links.title}
            >
              {links.title}
              <PiCaretDownDuotone className="arrow transition-transform duration-500 ease-in-out" />
            </button>
            {links.title == "Services" && <ProductsMenu />}
          </li>
        );
      })}
      <Link
        href="#"
        className={`${
          isScrolled ? "text-white" : "text-[#253858] "
        }  py-6 px-5 Enterprise-link hover:text-[red] transition-all duration-300 ease-in-out`}
      >
        Contact
      </Link>
    </div>
  );
};

export default HeaderLinks;
