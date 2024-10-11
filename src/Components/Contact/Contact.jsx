import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#18181B]">
      <div className="max-w-screen-2xl px-6 w-full pt-4 pb-12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-zinc-200">
          Get In Touch
        </h1>
        <div className="lg:flex lg:items-center lg:-mx-6 mt-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold text-zinc-200 lg:text-3xl">
              Contact me for <br /> collaboration
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate  dark:text-gray-400">
                  Khajanagar, Jagati, Kushtia, Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  +8801836429252 (WhatsApp)
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  alamin.kzs06@gmail.com
                </span>
              </p>
            </div>

            <div className="flex items-center justify-start gap-8 w-full md:w-1/2 mt-4 md:mt-6 md:px-0">
              <ul class="flex items-center justify-center mt-5 space-x-4 hover:shadow-lg duration-300 hover:scale-[1.15] transition-all">
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
                  <a href="#" target="_blank">
                    <button class="cursor-pointer flex justify-center gap-2 bg-gray-800 px-3 py-3 rounded-full text-white  tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[140px] font-poppins">
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
                {/* CV Download Button */}
                <li>
                  <a href="#" target="_blank">
                    <button class="cursor-pointer flex justify-center gap-2 bg-gray-800 px-3 py-3 rounded-full text-white  tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[100px] font-poppins">
                      CV
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
          </div>
          {/* Form */}
          <div className="mt-12 lg:w-1/2 lg:mx-6 lg:mt-0">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-200 ">
                Let's talk!
              </h2>
            </div>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="block w-full bg-[#1C2129] h-14 px-4  rounded-xl dark:border-gray-600 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your email"
                className="block w-full bg-[#1C2129] h-14 px-4 rounded-xl dark:border-gray-600 focus:outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Your message"
                className="block w-full bg-[#1C2129] h-32 px-4 py-4 rounded-xl dark:border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>

              <button className="w-full px-4 py-3 font-semibold text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
