import React from "react";

const projects = [
  {
    websiteName: "Job Wave",
    title: "Freelance Marketplace",
    description:
      "An online marketplace connecting freelancers and clients, featuring job posting, bidding, and real-time chat functionality.",
    features: [
      "Job posting and bidding system.",
      "Real-time chat between freelancers and clients.",
      "Profile management for freelancers and clients.",
    ],
    liveLink: "https://job-wave.netlify.app",
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
      "Dark/light theme toggle.",
      "Search functionality with dynamic sections.",
      "User-driven query management with JWT authentication.",
    ],
    liveLink: "https://query-hub-web.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "JWT Authentication"],
    status: "Completed",
  },
  {
    websiteName: "Nexus Travel",
    title: "Tourism Management Platform",
    description:
      "A travel website offering destination guides, real-time booking updates, and itinerary planning features, customized for travel businesses.",
    features: [
      "Custom travel itineraries.",
      "Seamless booking experience with live updates.",
      "User reviews and feedback integration.",
    ],
    liveLink: "https://nexus-travel.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "JWT Authentication"],
    status: "Completed",
  },
  {
    websiteName: "Tech Blaze",
    title: "Blog Website",
    description:
      "A modern blog platform that allows users to read, comment, and share tech-related articles. It features user authentication, article categorization, and a responsive design.",
    features: [
      "User authentication for reading and posting comments.",
      "Article categorization by tags and topics.",
      "Responsive design for both mobile and desktop views.",
      "Real-time comment section with user interactions.",
      "Integration with social media for easy sharing.",
    ],
    liveLink: "https://tech-blaze.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "Express.js"],
    status: "Completed",
  },
  {
    websiteName: "Recipe Cafe",
    title: "Recipe Sharing Platform",
    description:
      "An interactive platform for food enthusiasts to discover, share, and explore a wide variety of recipes. Features include user submissions, recipe categorization, and a favorites section.",
    features: [
      "Browse and search recipes by ingredients or categories.",
      "Submit and share your own recipes with the community.",
      "Add recipes to your favorites for quick access.",
      "Responsive design optimized for both mobile and desktop users.",
      "User ratings and comments on recipes.",
      "Recipe details with step-by-step instructions and ingredient lists.",
    ],
    liveLink: "https://recipe-cafe.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "Express.js"],
    status: "Completed",
  },
  {
    websiteName: "Book Store Hub",
    title: "Online Bookstore Platform",
    description:
      "A modern and user-friendly platform for browsing, purchasing, and reviewing books. Features include personalized book recommendations, secure payments, and user reviews.",
    features: [
      "Browse books by genres, authors, and bestsellers.",
      "Personalized book recommendations based on user preferences.",
      "User reviews and ratings for each book.",
      "Secure online payment and order tracking.",
      "Wishlist and cart functionality.",
      "Responsive design for all devices.",
    ],
    liveLink: "https://book-store-hub.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    tools: ["Tailwind CSS", "Axios", "Express.js"],
    status: "Completed",
  },
];

const Works = () => {
  return (
    <section id="projects" className="bg-[#18181B]">
      <div className="max-w-screen-2xl px-6 pt-4 pb-10 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-zinc-200">
          My Latest Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 xl:mt-12 xl:gap-12  pb-6 lg:pb-8 animate__animated animate__zoomIn">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card w-full h-auto bg-[#1F2937] rounded-2xl overflow-hidden relative  hover:shadow-[0_0_30px_rgba(0,183,255,0.5)] duration-300 hover:scale-[1.05] transition-all"
            >
              <div className="card-content p-6 md:p-8 relative z-10">
                {/* Project Title and Status */}
                <div className="mb-4">
                  <h2
                    title={project.title}
                    className="text-2xl font-bold text-white truncate"
                  >
                    {project.websiteName}
                  </h2>
                  <p className="text-xl pt-2 text-white/70">{project.title}</p>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full mt-2 inline-block ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300/90"
                        : "bg-yellow-500/20 text-yellow-300/90"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Description
                  </h3>
                  <p className="text-xs text-white/70">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Key Features
                  </h3>
                  <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
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
                <div className="flex justify-between items-center space-x-2">
                  <button className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border border-white/20">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 3H7a2 2 0 00-2 2v16l5-5h6a2 2 0 002-2V5a2 2 0 00-2-2z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    Comment
                  </button>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/20 text-white rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4.5C6.75 4.5 2.25 9 2.25 12s4.5 7.5 9.75 7.5 9.75-4.5 9.75-7.5S17.25 4.5 12 4.5zm0 12c-2.25 0-4.5-2.25-4.5-4.5S9.75 8.5 12 8.5s4.5 2.25 4.5 4.5-2.25 4.5-4.5 4.5z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
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
