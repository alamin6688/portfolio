import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import image from "../../images/svgImage.png";

const About = () => {
  return (
    <section id="about" className="bg-[#0D1224]">
      <div className="max-w-screen-2xl w-full py-4 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase py-4 md:py-8 text-zinc-200">
          About Me
        </h1>

        <div className="flex items-center justify-between mt-12">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12  px-6">
            {/* Card */}
            <div class="flex items-center justify-center duration-300 hover:scale-[1.05] transition-all">
              <div class="w-64 rounded-xl border-2 border-[#45428d] hover:border-[#7f48e6] shadow-[0_0_30px_rgba(127,72,230,0.2)] bg-[#0D1224] p-4 text-center  duration-300 transition-all">
                <div className="flex items-center justify-center">
                  <img
                    className="object-cover w-52 h-52 rounded-full"
                    src="https://i.postimg.cc/W3b5kTjT/IMG20230806161044-1.jpg"
                    alt="Alamin"
                  />
                </div>

                <h2 class="mt-4 text-xl font-bold text-zinc-200 font-poppins">
                  Fuade Hasan Alamin
                </h2>
                <p class="pt-1 pb-4 text-zinc-300 font-poppins">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="w-full">
              <div>
                <h1 className="text-2xl font-semibold text-zinc-200 lg:text-3xl uppercase pb-12 text-center md:text-left">
                  What I DO
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center w-full">
                {/* 01 */}
                <div className="service-card h-44  w-full cursor-pointer snap-start shrink-0 py-8 px-6 flex flex-col items-center gap-3 transition-all duration-300 group border-2 border-[#45428d] hover:border-[#7f48e6] shadow-[0_0_30px_rgba(127,72,230,0.2)] bg-[#0D1224] rounded-xl text-center ">
                  <RiComputerLine className="text-4xl text-center text-purple-500 hover:text-purple-400" />

                  <p className="font-semibold text-xl capitalize tracking-widest bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                    Web Development
                  </p>
                </div>
                {/* 03 */}
                <div className="service-card h-44  w-full cursor-pointer snap-start shrink-0 py-8 px-6 flex flex-col items-center gap-3 transition-all duration-300 group border-2 border-[#45428d] hover:border-[#7f48e6] shadow-[0_0_30px_rgba(127,72,230,0.2)] bg-[#0D1224] rounded-xl text-center ">
                  <MdOutlineDesignServices className="text-4xl text-center text-purple-500 hover:text-purple-400" />

                  <p className="font-semibold text-xl capitalize tracking-widest bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                    Graphic Design
                  </p>
                </div>
                {/* 03 */}
                <div className="service-card h-44 w-full cursor-pointer snap-start shrink-0 py-8 px-6 flex flex-col items-center gap-3 transition-all duration-300 group border-2 border-[#45428d] hover:border-[#7f48e6] shadow-[0_0_30px_rgba(127,72,230,0.2)] bg-[#0D1224] rounded-xl text-center ">
                  <RiToolsFill className="text-4xl text-center text-purple-500 hover:text-purple-400" />

                  <p className="font-semibold text-xl capitalize tracking-widest bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                    UI/UX Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Description */}
        <div className="px-6">
          <div className="space-y-4 mt-12 pt-14 w-full rounded-2xl">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent font-poppins tracking-wide capitalize text-start mb-8 font-bold">
                  Why Choose Me
                </h2>
                <p className="text-[20px] text-zinc-300 tracking-wide leading-loose">
                  Hi! I'm a Frontend Developer with a passionate love for
                  creating amazing user experiences. I believe in being punctual
                  and dedicated with a strong commitment to continuous
                  improvement mindset. My enthusiasm for frontend development
                  shines through in every project I take on. I truly believe in
                  the value of collaboration and I'm eager to work with others
                  to create innovative solutions that meet user needs. As a
                  frontend developer, I believe in the power of creativity and
                  technology to create seamless user experiences that leave a
                  lasting impact.
                </p>{" "}
              </div>
              <img src={image} alt="" className="w-[500px] animate-zoom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
