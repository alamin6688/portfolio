import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoLogoAmplify, IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-primary pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-primary" : ""
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-primary pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-primary" : ""
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="#work"
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-primary pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-primary" : ""
          }`
        }
      >
        Work
      </NavLink>
      <NavLink
        to="#reviews"
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-primary pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-primary" : ""
          }`
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="#contact"
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-primary pb-1 border-b-[2px] border-transparent ${
            isActive ? "text-white border-b-primary" : ""
          }`
        }
      >
        Contact Me
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 px-6">
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-start">
          <a
            href="/"
            className="flex items-center justify-center hover:shadow-lg duration-300 hover:scale-[1.25] transition-all"
          >
            {/* <img
              src="/src/images/logo.svg"
              width={50}
              height={50}
              alt="Alamin"
            /> */}
            <IoLogoAmplify className="text-6xl text-[#3688b4] mr-2" />
            {/* <span className="font-poppins text-4xl md:text-5xl flex items-end">
              Dev
              <GoDotFill className="text-sm mb-1 ml-1 text-[#3688b4]" />
            </span> */}
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
          <div className="hidden md:flex items-center gap-4 bg-white bg-opacity-10 px-6 py-3 rounded-xl hover:shadow-lg duration-300 hover:scale-[1.05] transition-all">
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
            <button className="btn btn-primary hidden md:block">
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
