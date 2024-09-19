"use client";
import Link from "next/link";
import React from "react";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import { PiCaretDownDuotone } from "react-icons/pi";
const HeaderLinks = ({
  mouseEnter,
  mouseLeave,
  handleActiveLink,
  activeSub,
}) => {
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
              className={`text-[#253858] flex items-center gap-2  py-6 px-4 anchor-links  ${links.title} `}
              key={links.title}
              id={links.title}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              {links.title}
              <PiCaretDownDuotone className="arrow transition-all duration-300 ease-in-out" />
            </button>
            {links.title == "Services" && (
              <ProductsMenu
                mouseEnter={mouseEnter}
                mouseLeave={mouseLeave}
                handleActiveLink={handleActiveLink}
                activeSub={activeSub}
              />
            )}
          </li>
        );
      })}
      <Link
        href="#"
        className="text-[#253858]  py-6 px-5 Enterprise-link hover:text-[red] transition-all duration-300 ease-in-out"
      >
        Contact
      </Link>
    </div>
  );
};

export default HeaderLinks;
