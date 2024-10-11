import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoLogoAmplify, IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY; // Get the absolute position
      const offsetPosition = sectionPosition - offset; // Subtract the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => {
          setMenu("home");
          scrollToSection("home");
        }}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-[#2b69be]" : ""
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        onClick={() => {
          setMenu("about");
          scrollToSection("about");
        }}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-[#2b69be]" : ""
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="#work"
        onClick={() => {
          setMenu("works");
          scrollToSection("works");
        }}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-[#2b69be]" : ""
          }`
        }
      >
        Works
      </NavLink>
      <NavLink
        to="#reviews"
        onClick={() => {
          setMenu("reviews");
          scrollToSection("reviews");
        }}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-[#2b69be]" : ""
          }`
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="#contact"
        onClick={() => {
          setMenu("contact");
          scrollToSection("contact");
        }}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-[#2b69be]" : ""
          }`
        }
      >
        Contact Me
      </NavLink>
    </>
  );

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full h-24 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 px-6"
    >
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-start">
          <a
            href="/"
            className="flex items-center justify-center hover:shadow-lg duration-300 hover:scale-[1.25] transition-all"
          >
            <IoLogoAmplify className="text-6xl text-[#2b69be] mr-2" />
          </a>
        </div>

        {/* Menu Button (visible on mobile) */}
        <div className="relative md:justify-self-center flex items-center justify-end gap-2 flex-1">
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className="btn md:hidden bg-zinc-50/10 rounded-xl hover:bg-zinc-50/15"
          >
            <span className="text-2xl">
              {navOpen ? <RiCloseLargeFill /> : <IoMenu />}
            </span>
          </button>

          {/* Navigation Items (hidden on mobile, visible on medium and larger) */}
          <div className="hidden md:flex items-center gap-4 bg-zinc-900/90 px-6 py-3 rounded-xl hover:shadow-lg duration-300 hover:scale-[1.05] transition-all">
            {navLinks}
          </div>
        </div>

        {/* Mobile Navigation (visible only if navOpen is true) */}
        {navOpen && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 md:hidden flex flex-col items-center py-4 text-sm font-medium tracking-wide text-zinc-50/50 gap-4 bg-zinc-900/90 rounded-lg shadow-xl animate__animated animate__zoomIn">
            {navLinks}
          </div>
        )}

        {/* Contact Button (hidden on mobile) */}
        <div className="flex-shrink-0 flex justify-end">
          <Link to="#resume">
            <button className="btn bg-[#2b69be] text-white hidden md:block">
              <span className="flex items-center justify-center gap-2">
                <FaDownload /> Resume
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
