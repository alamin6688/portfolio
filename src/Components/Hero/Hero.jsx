import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleDone = () => {
    console.log(`Done after 25 loops!`);
  };

  return (
    <section id="home" className="pt-20 bg-[#0D1224]">
      <div className="max-w-screen-2xl mx-auto w-full rounded-md relative flex flex-col items-center justify-center pb-12 px-6">
        {/* header */}
        <header className="mt-10 w-full md:text-center flex items-center justify-center">
          <div className="w-full md:w-3/4 mx-auto">
            <h1 className="text-[30px] sm:text-[60px] font-semibold leading-[40px] sm:leading-[80px]">
              <span className="bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                Hello!
                <br />
              </span>
              I'm Fuade Hasan Alamin
            </h1>
            <h2 className="text-2xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent font-poppins py-4 tracking-wider capitalize font-semibold">
              <span className="text-zinc-200">A</span> <span>{""}</span>
              <Typewriter
                words={["Frontend Developer_", "MERN Stack Developer_"]}
                loop={25}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
                onLoopDone={handleDone}
              >
                Frontend Developer
              </Typewriter>
            </h2>
            <p className="mt-2 text-[1rem] text-zinc-300 font-poppins tracking-wider  w-full md:w-[80%] mx-auto">
              I build and develop seamless websites using React, Tailwind CSS,
              Node.js, Express.js, MongoDB and the latest technologies.
            </p>
          </div>
        </header>

        <div className="flex items-center justify-start md:justify-center gap-8 w-full md:w-1/2 mt-4 md:mt-6 md:px-0">
          <ul class="flex items-center justify-center mt-5 space-x-4 hover:shadow-lg duration-300 transition-all">
            {/* Linkedin Icon */}
            <li>
              <a
                href="https://www.linkedin.com/in/fuade-hasan-alamin"
                target="_blank"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <ImLinkedin className="w-8 h-8" />
              </a>
            </li>
            {/* Github Icon */}
            <li>
              <a
                href="https://github.com/alamin6688"
                target="_blank"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </li>

            {/* Resume Download Button */}
            <li>
              <a
                href="https://drive.google.com/file/d/1UEylT5h3rivwBGprB97GWHwp0XMOdy_i/view?usp=sharing"
                target="_blank"
              >
                <button class="cursor-pointer flex justify-center gap-2 bg-gray-800 px-3 py-2 rounded-full text-white  tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[130px]">
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 animate-bounce-slow"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* right blur shadow */}
        <div className="w-[100px] h-[100px] bg-[#45428D] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;
