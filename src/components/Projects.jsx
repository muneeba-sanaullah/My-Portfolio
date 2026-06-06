import React from 'react';
import bloomImage from '../assets/bloom&blossom.png'; 
import portfolioImage from '../assets/my-portfolio.png';

function Projects() {
  // 1. Array of your project data to keep the code clean and scalable
  const projectsData = [
{
  title: "Bloom & Blossom (E-Commerce)",
  description: 
  "Full-stack floral e-commerce platform featuring a custom Node.js/Express API, SQLite persistence, and secure RESTful endpoints. Includes intelligent search filtering, real-time responsive UI, and robust backend error handling.",
  image: bloomImage,
  tags: ["React", "Node.js", "Express", "SQLite", "REST API"],
  liveLink: "https://floral-boutique-ui.vercel.app/",
  codeLink: "https://github.com/muneeba-sanaullah/Floral-website.git"
},
    {
  title: "Personal Portfolio Website",
  description:
    "Fully responsive personal portfolio built with React and Tailwind CSS featuring dark/light mode, smooth UI, and project showcase.",
  image: portfolioImage, // or your own screenshot
  tags: ["React", "Tailwind CSS", "Responsive Design"],
  liveLink: "https://muneeba-sanaullah.github.io/My-Portfolio/",
  codeLink: "https://github.com/muneeba-sanaullah/My-Portfolio.git"
},
    // {
    //   title: "AI Dashboard",
    //   description: "Modern admin dashboard built with React, TypeScript, and charts for data visualization and analytics UI.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60", // Replace with your project image path
    //   tags: ["React", "TypeScript", "Recharts"],
    //   liveLink: "#",
    //   codeLink: "#"
    // }
  ];

  return (
    <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Selected Projects
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          A mix of UI design, full-stack systems, and interactive web apps
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          /* Project Card */
          <div 
            key={index} 
            className="group border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition cursor-pointer"
          >
            {/* Project Image Box */}
            <div className="h-48 w-full overflow-hidden bg-gray-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content Box */}
            <div className="p-5">
              <h3 className="text-white text-lg font-medium">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="border border-white/10 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-5">
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(project.liveLink); }}
                  className="text-sm text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition cursor-pointer"
                >
                  Live
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(project.codeLink); }}
                  className="text-sm text-gray-300 hover:text-white transition cursor-pointer"
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;