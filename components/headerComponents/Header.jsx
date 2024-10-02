"use client";
import Image from "next/image";
import { useEffect } from "react";
import HeaderLinks from "./headerlinks/HeaderLinks";
import MobileMenu from "../mobileMenu/MobileMenu";
import Consultant from "./searchLogin/Consultant";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import { useData } from "@/utils/context/StateContext";
import { CompanyLogo } from "@/utils/media/MediaImport";
import HeaderContacts from "./headercontacts/HeaderContacts";
import Diagonal from "./Diagonal/Diagonal";
const Header = () => {
  const { isScrolled, setIsScrolled } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white" : "bg-[#00000082]"
      } backdrop-blur-[8px]  border-b-2  border-gray-800  shadow-xl max-xl:bg-white `}
    >
      {/* diagonal shapes */}

      <div className=" block max-xl:hidden">
        <Diagonal />
      </div>

      {/* header-contacts */}
      <HeaderContacts />
      <nav
        className={`container w-full    mx-auto flex     justify-between     items-center 2xl:px-[11rem] lg:px-6  max-xl:py-3 px-5 text-2xl`}
      >
        {/* Logo */}
        <div
          className={`max-xl:w-44    max-md:w-32 ${
            isScrolled ? "opacity-100" : "opacity-0"
          } max-xl:opacity-100 transition-all duration-300 ease-in-out `}
        >
          <Image
            src={CompanyLogo}
            alt="Company Logo"
            width={185}
            height={100}
            priority
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden     xl:block">
          <HeaderLinks />
        </div>

        {/* Right Section (Consultant & Toggle) */}
        <div className="flex gap-5 items-center">
          <Consultant />
          <ToggleBtn />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
