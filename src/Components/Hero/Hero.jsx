import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-20 max-w-screen-2xl mx-auto w-full">
      <div className="w-full bg-[#18181B] rounded-md relative flex flex-col items-center justify-center">
        {/* header */}
        <header className="px-4 mt-10 w-full md:text-center flex items-center justify-center">
          <div className="w-full md:w-3/4 mx-auto">
            <h1 className="text-[30px] sm:text-[60px] font-semibold leading-[40px] sm:leading-[80px]">
              <span className="text-[#DC0155]">
                Hi there! <br />
              </span>{" "}
              I'm Fuade Hasan Alamin
            </h1>
            <h2 className="text-2xl md:text-3xl font-poppins py-4 tracking-wide">
              A Frontend Developer specializing in the MERN stack.
            </h2>
            <p className="mt-2 text-[1rem] font-poppins tracking-wider  w-full md:w-[80%] mx-auto">
              I build and develop seamless web experiences, create dynamic user
              interfaces and develop applications using React, Node.js, MongoDB
              and the latest technologies.
            </p>
          </div>
        </header>

        <div className="flex items-center justify-start md:justify-center gap-8 w-full md:w-1/2 mt-6 md:mt-8 px-4 md:px-0">
          <button className="btn btn-primary">
            <span className="flex items-center justify-center gap-2">
              <FaDownload /> Resume
            </span>
          </button>
          <button className="btn btn-primary">
            <span className="flex items-center justify-center gap-2">
              <FaDownload /> CV
            </span>
          </button>
        </div>

        {/* right blur shadow */}
        <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;
