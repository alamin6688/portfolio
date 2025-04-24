import React from "react";
import { FaBookReader } from "react-icons/fa";

const Blogs = () => {
  return (
    <section id="blogs" className="bg-[#0D1224]">
      <div className="max-w-screen-2xl px-6 pt-4 pb-10 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase py-4 md:py-8 text-zinc-200 tracking-wider mb-10">
          Blogs
        </h1>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <article className="flex transition bg-[#0D1224] shadow-[0_0_30px_rgba(127,72,230,0.5)] rounded-lg">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                datetime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
              >
                <span>2024</span>
                <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-64">
              <img
                alt=""
                src="https://i.postimg.cc/1Xr499q1/DALL-E-2024-10-13-20-14-52-A-futuristic-cover-image-featuring-a-sleek-3-D-React-js-logo-in-the-cen.webp"
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 md:p-8 sm:!border-l-transparent sm:p-6 space-y-4">
                <a
                  href="https://www.linkedin.com/posts/fuade-hasan-alamin_react-frontenddevelopment-webdevelopment-activity-7197636254841122816-POQZ?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  <h1 className="text-xl font-medium text-gray-900 dark:text-white hover:underline">
                    Why should we use React for the front-end?
                  </h1>
                </a>

                <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300">
                  In the dynamic world of web development, choosing the right
                  front-end framework can significantly impact the success of a
                  project. Among the myriad of options available, React has
                  emerged as one of the most popular and influential libraries
                  for building user interfaces. Developed and maintained by
                  Facebook, React has garnered a massive following due to its
                  unique approach to front-end development. This article delves
                  into the reasons why React stands out as an excellent choice
                  for front-end development.
                </p>

                <p className="line-clamp-3 text-sm/relaxed text-purple-400 flex items-center gap-2">
                  <span>
                    <FaBookReader />
                  </span>{" "}
                  5 Min Read
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <a
                  href="https://www.linkedin.com/posts/fuade-hasan-alamin_react-frontenddevelopment-webdevelopment-activity-7197636254841122816-POQZ?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  className="block  px-5 py-3 text-center text-xs font-bold capitalize  bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-600 hover:to-purple-700 text-white  rounded-l-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Read Blog
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
