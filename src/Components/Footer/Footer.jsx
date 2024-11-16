import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoAmplify } from "react-icons/io5";

const Footer = () => {
  return (
    <section id="footer" className="bg-[#0D1224] border-t-2 border-[#45428d]">
      <footer className="footer text-neutral-content items-center md:justify-center p-4 py-10 max-w-screen-2xl mx-auto">
        <aside className="grid-flow-col items-center">
          <div className="flex-shrink-0 flex justify-start">
            <a
              href="#home"
              className="flex items-center justify-center hover:shadow-lg duration-300 hover:scale-[1.25] transition-all"
            >
              <IoLogoAmplify className="md:hidden text-5xl text-white bg-gradient-to-r from-pink-600 to-purple-700 mr-2 bg-zinc-100 px-1 rounded-lg" />
            </a>
          </div>
          <div className="tracking-widest md:text-center">
            <p>Developer Portfolio by Fuade Hasan Alamin</p>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
          </div>
        </aside>
        {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end hover:shadow-xl duration-300 hover:scale-[1.15] transition-all">
          <a
            href="https://www.linkedin.com/in/fuade-hasan-alamin"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <ImLinkedin className="w-8 h-8" />
          </a>

          <a
            href="https://github.com/alamin6688"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/fuade.hasan.alamin.06"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
        </nav> */}
      </footer>
    </section>
  );
};

export default Footer;
