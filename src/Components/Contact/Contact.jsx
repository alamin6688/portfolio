import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0D1224]">
      <div className="max-w-screen-2xl px-6 w-full pt-4 pb-16 md:pb-20 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase py-6 md:py-8 lg:pb-16 text-zinc-200">
          Get In Touch
        </h1>
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center">
          <div className="md:w-1/2 border-2 border-[#45428d] rounded-2xl px-4 md:px-6 lg:px-8 py-8 md:py-10 shadow-[0_0_30px_rgba(127,72,230,0.2)] w-full" data-aos="zoom-out-right" data-aos-duration="2000">
            <h1 className="text-2xl font-semibold text-zinc-200 lg:text-3xl capitalize text-center md:text-left">
              Contact me for collaboration
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-purple-600"
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
                <span className="mx-2 text-gray-300 truncate max-w-[12rem] md:max-w-xs lg:max-w-md">
                  Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-purple-600"
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
                <span className="mx-2 text-gray-300 truncate max-w-[12rem] md:max-w-xs lg:max-w-md">
                  +8801836429252 (WhatsApp)
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-purple-600"
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
                <span className="mx-2 text-gray-300 truncate max-w-[12rem] md:max-w-xs lg:max-w-md">
                  alamin.kzs06@gmail.com
                </span>
              </p>
            </div>

            <div className="flex items-center justify-start gap-4 w-full mt-4 md:mt-6">
              <ul className="flex items-center justify-center space-x-4">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1UEylT5h3rivwBGprB97GWHwp0XMOdy_i/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="flex justify-center gap-2 bg-gray-800 px-3 py-3 rounded-full text-white shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 w-[140px]">
                      Resume
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 animate-bounce-slow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1wkeanCJbqCWDxVrtoFxfe3Cqd5AjBV0b/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="flex justify-center gap-2 bg-gray-800 px-3 py-3 rounded-full text-white shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 w-[100px]">
                      CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 animate-bounce-slow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-start gap-4 w-full mt-6">
              <ul className="flex items-center justify-center space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/fuade-hasan-alamin"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <ImLinkedin className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/alamin6688"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/fuade.hasan.alamin.06"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <FaFacebook className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 lg:w-1/2 w-full lg:mt-0 border-2 border-[#45428d] rounded-2xl p-8 shadow-[0_0_30px_rgba(127,72,230,0.2)]"data-aos="zoom-out-left" data-aos-duration="2000">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-200 ">
                Let's Work Togther!
              </h2>
            </div>
            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="block w-full bg-[#10172D] h-14 px-4 border-2 border-[#45428d] rounded-xl focus:outline-none focus:border-2 focus:border-[#7F48E6]"
              />
              <input
                type="email"
                placeholder="Your email"
                className="block w-full bg-[#10172D] h-14 px-4 border-2 border-[#45428d] rounded-xl focus:outline-none focus:border-2 focus:border-[#7F48E6]"
              />
              <textarea
                placeholder="Your message"
                className="block w-full bg-[#10172D] h-32 px-4 py-4 border-2 border-[#45428d] rounded-xl focus:outline-none focus:border-2 focus:border-[#7F48E6]"
              ></textarea>

              <button class="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out btn">
                <span className="flex items-center justify-center gap-1">
                  Send Message
                  <IoIosSend className="text-xl mt-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
