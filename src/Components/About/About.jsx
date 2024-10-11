import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#18181B]">
      <div className="max-w-screen-2xl px-6 w-full pt-4 pb-12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-zinc-200">
          About Me
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
          <div className="w-full md:max-w-xs overflow-hidden bg-white rounded-2xl shadow-lg">
            <img
              className="object-cover w-full h-52"
              src="https://i.postimg.cc/W3b5kTjT/IMG20230806161044-1.jpg"
              alt="Alamin"
            />

            <div className="py-5 text-center bg-[#1C2129]">
              <a
                href="#"
                className="block text-xl font-bold"
                tabIndex="0"
                role="link"
              >
                Fuade Hasan Alamin
              </a>
              <span className="text-sm text-white/70">Frontend Developer</span>
            </div>
          </div>
          <div className="bg-[#1F2937]/50 p-6 rounded-2xl space-y-4">
            <p className="text-lg text-zinc-300 tracking-wide">
              Hi! I'm a Frontend Developer with a passionate love for creating
              amazing user experiences. I believe in being punctual and
              dedicated with a strong commitment to continuous improvement
              mindset.
            </p>
            <p className="text-lg text-zinc-300 tracking-wide">
              My enthusiasm for frontend development shines through in every
              project I take on. I truly believe in the value of collaboration
              and I'm eager to work with others to create innovative solutions
              that meet user needs.
            </p>
            <p className="text-lg text-zinc-300 tracking-wide">
              As a frontend developer, I believe in the power of creativity and
              technology to create seamless user experiences that leave a
              lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
