import React from "react";
import { BsEyeFill, BsInfoCircleFill } from "react-icons/bs";

const projects = [
  {
    websiteName: "Job Wave",
    title: "Freelance Marketplace",
    description:
      "An online marketplace connecting freelancers and clients, featuring job posting, bidding and real-time chat functionality.",
    features: [
      "Implemented search and sorting functionality.",
      "Job posting and bidding system.",
      "Profile management for freelancers and clients.",
    ],
    liveLink: "https://job-wave.netlify.app",
    sourceCode: "https://github.com/alamin6688/job-wave-client.git",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Socket.io", "JWT Authentication"],
    status: "Completed",
  },
  {
    websiteName: "Query Hub",
    title: "Alternative Product Information System",
    description:
      "A dynamic system where users can add, update, and delete product queries, with recommendations and personalized filtering.",
    features: [
      "Manage product queries and recommendations.",
      "Search functionality with dynamic sections.",
      "Query management with JWT authentication.",
    ],
    liveLink: "https://query-hub-web.netlify.app",
    sourceCode: "https://github.com/alamin6688/query-hub.git",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "JWT Authentication"],
    status: "Completed",
  },
  // {
  //   websiteName: "Nexus Travel",
  //   title: "Tourism Management Platform",
  //   description:
  //     "A travel website offering destination guides, real-time booking updates, and itinerary planning features, customized for travel businesses.",
  //   features: [
  //     "Custom travel itineraries.",
  //     "Seamless booking experience with live updates.",
  //     "User reviews and feedback integration.",
  //   ],
  //   liveLink: "https://nexus-travel.netlify.app",
  //   sourceCode: "https://github.com/alamin6688/nexus-travel-client.git",
  //   technologies: ["React", "Node.js", "MongoDB", "Firebase"],
  //   tools: ["Tailwind CSS", "Axios", "JWT Authentication"],
  //   status: "Completed",
  // },
  {
    websiteName: "Tech Blaze",
    title: "Blog Website",
    description:
      "A modern blog platform that allows users to read, comment, and share tech-related articles. It features user authentication, article categorization, and a responsive design.",
    features: [
      "Article categorization by tags and topics.",
      "Real-time dynamic updated contents.",
      "User feedback system and bookmarking.",
      // "Responsive design for both mobile, tablet and desktop views.",
    ],
    liveLink: "https://tech-blaze.netlify.app",
    sourceCode: "https://github.com/alamin6688/tech-blaze-client.git",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "Express.js"],
    status: "Completed",
  },
  // {
  //   websiteName: "Recipe Cafe",
  //   title: "Recipe Sharing Platform",
  //   description:
  //     "An interactive platform for food enthusiasts to discover, share, and explore a wide variety of recipes. Features include user submissions, recipe categorization, and a favorites section.",
  //   features: [
  //     "Browse and search recipes by ingredients or categories.",
  //     "Submit and share your own recipes with the community.",
  //     "Add recipes to your favorites for quick access.",
  //     "Responsive design optimized for both mobile and desktop users.",
  //     "User ratings and comments on recipes.",
  //     "Recipe details with step-by-step instructions and ingredient lists.",
  //   ],
  //   liveLink: "https://recipe-cafe.netlify.app",
  //   sourceCode: "https://github.com/alamin6688/recipe-cafe.git",
  //   technologies: ["React", "Node.js", "MongoDB", "Firebase"],
  //   tools: ["Tailwind CSS", "Axios", "Express.js"],
  //   status: "Completed",
  // },
  {
    websiteName: "Book Store Hub",
    title: "Online Bookstore Platform",
    description:
      "A modern and user-friendly platform for browsing, purchasing, and reviewing books. Features include personalized book recommendations, secure payments, and user reviews.",
    features: [
      "Browse books by tags, authors and topics.",
      "Read time tracking by graphical representation.",
      "Wishlist and read-list functionality.",
      // "User reviews and ratings for each book.",
    ],
    liveLink: "https://book-store-hub.netlify.app",
    sourceCode: "https://github.com/alamin6688/book-store.git",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "Express.js"],
    status: "Completed",
  },
];

const Works = () => {
  return (
    <section id="works" className="bg-[#0D1224]">
      <div className="max-w-screen-2xl px-6 pt-4 pb-10 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase py-4 md:py-8 text-zinc-200">
          My Latest Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-16 mt-8 xl:mt-12 xl:gap-12 pb-4 md:pb-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card w-full h-auto bg-[#0b1129] rounded-2xl overflow-hidden relative  hover:border-[#7f48e6] hover:shadow-[0_0_30px_rgba(127,72,230,0.5)] duration-300 hover:scale-[1.05] transition-all border-4 border-[#45428d]" data-aos="flip-up" data-aos-duration="1500"
              data-aos-delay={index * 100} // Adding delay based on index
              data-aos-offset="200" // Adjust the offset to trigger the animation earlier or later
            >
              <div className="card-content p-6 md:p-8 relative z-10 space-y-6">
                {/* Project Title and Status */}
                <div className="mb-4">
                  <h2
                    title={project.title}
                    className="text-2xl font-bold text-white truncate"
                  >
                    {project.websiteName}
                  </h2>
                  <p className="text-xl pt-2 text-white/70">{project.title}</p>
                </div>

                {/* Project Description */}
                {/* <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Description
                  </h3>
                  <p className="text-sm text-white/70">{project.description}</p>
                </div> */}

                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Key Features
                  </h3>
                  <ul className="text-sm text-white/60 grid grid-cols-1 gap-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          className="w-3 h-3 mr-1 mt-0.5 text-white/70 flex-shrink-0"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                        <span title={feature} className="truncate">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies and Tools */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Main Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap -mx-1">
                    {[...project.technologies, ...project.tools].map(
                      (tech, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
                        >
                          {tech}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center space-x-4">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-2 bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
                  >
                    <BsInfoCircleFill />
                    Source Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-2 bg-white/20 text-white rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
                  >
                    <BsEyeFill />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
