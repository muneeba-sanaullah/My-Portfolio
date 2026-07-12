import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import GradientText from "./GradientText";

import bloomImage from "../assets/bloom&blossom.png";
import portfolioImage from "../assets/my-portfolio.png";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Bloom & Blossom",
      description:
        "A full-stack floral e-commerce platform built with React, Node.js, Express, SQLite, and REST APIs. Designed with responsive UI, intelligent product filtering, secure backend routes, and a smooth shopping experience.",
      image: bloomImage,
      tags: ["React", "Node.js", "Express", "SQLite", "REST API"],
      live: "https://floral-boutique-ui.vercel.app/",
      github:
        "https://github.com/muneeba-sanaullah/Floral-website.git",
    },

    {
      number: "02",
      title: "Personal Portfolio",
      description:
        "A modern developer portfolio featuring animated UI, smooth interactions, responsive layouts, gradient effects, and reusable React components to create a polished user experience.",
      image: portfolioImage,
      tags: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive",
      ],
      live: "https://muneeba-sanaullah.github.io/My-Portfolio/",
      github:
        "https://github.com/muneeba-sanaullah/My-Portfolio.git",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">

            <GradientText
              colors={[
                "#4B0082",
                "#1D4ED8",
                "#E63940",
                "#22D3EE",
                "#A855F7",
              ]}
              animationSpeed={8}
              showBorder={false}
            >
              Selected Projects
            </GradientText>

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-8">
            A collection of full-stack applications crafted with
            performance, scalability and thoughtful user experience
            in mind.
          </p>
        </motion.div>

        <div className="space-y-40">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE */}

              <div className="relative group">

                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-500/10 to-pink-500/20 blur-3xl rounded-[40px] scale-95 transition duration-500 group-hover:scale-105" />

                <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

              </div>

              {/* CONTENT */}

              <div className="relative">

                <h1 className="absolute -top-20 left-0 text-[120px] font-black text-white/5 select-none">
                  {project.number}
                </h1>

                <h3 className="text-4xl font-semibold text-white relative z-10">
                  {project.title}
                </h3>

                <div className="w-24 h-1 rounded-full mt-5 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" />

                <p className="mt-8 text-gray-400 leading-8 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <div className="flex flex-wrap gap-5 mt-10">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition hover:scale-105"
                  >
                    Live Demo

                    <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition"
                  >
                    <FiGithub />

                    GitHub
                  </a>
                </div>
                              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="inline-flex flex-col items-center">

            <p className="text-gray-400 text-lg max-w-xl leading-8">
              I'm always exploring new technologies and building projects
              that combine clean design with practical functionality.
            </p>

            <a
              href="https://github.com/muneeba-sanaullah"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <FiGithub className="text-lg" />
              View More on GitHub
              <FiArrowUpRight />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;