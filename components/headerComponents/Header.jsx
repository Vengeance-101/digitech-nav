"use client";
import Image from "next/image";
import { useEffect } from "react";
import HeaderLinks from "./headerlinks/HeaderLinks";
import MobileMenu from "../mobileMenu/MobileMenu";
import Consultant from "./searchLogin/Consultant";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import { useData } from "@/utils/context/StateContext";
import compLogo from "../../public/company_logo/logo.svg";

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
        isScrolled ? "bg-black" : "bg-white"
      }`}
    >
      <nav
        className={`container mx-auto flex justify-between items-center px-[11rem] max-xl:px-10 max-lg:px-5 text-2xl`}
      >
        {/* Logo */}
        <div>
          <Image
            src={compLogo}
            alt="Company Logo"
            width={185}
            height={100}
            priority
            className="max-xl:w-44"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden   xl:block">
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
