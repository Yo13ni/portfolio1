import React from 'react';
import weatherapp from '../assets/weatherapp.jpg';
import Temp from '../assets/temp.png';
import Portfloio from '../assets/portfolio.png';
import Bajaja from '../assets/Bajaja.png';
import Expense from '../assets/Expense.png';
import Mezmurdebter from '../assets/MezmurDebter.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "TOM CAT",
    technologies: "FLUTTER ",
    image: cat,
    github: "https://github.com/Yo13ni/Tom-",
  },
  {
    id: 2,
    name: "Portfolio Website",
    technologies: "React JS, Tailwind CSS",
    image: Portfloio,
    github: "https://github.com/Yo13ni/portfolio",
    live: "https://your-portfolio-live-url.com" // Update this with your actual portfolio URL
  },
  {
    id: 3,
    name: "Bajaja App UI Design",
    technologies: "Figma UI Design",
    image: Bajaja,
    github: "", // no GitHub repo for UI design
    live: "https://www.figma.com/design/gsKNqiE00FCzyz14rbcjle/bajaj-app?node-id=0-1&t=LS1RobqEaw4YRgto-1" 
  },
  {
    id: 4,
    name: "Daily Expense UI Design",
    technologies: "Figma UI Design",
    image: Expense,
    github: "", // no GitHub repo for UI design
    live: "https://www.figma.com/design/XLSGZtVdyyrdnYhTa8GsnU/Untitled?node-id=0-1&t=u9D36zi0FwhkBxUw-1" 
  },
  {
    id: 5,
    name: "Mezmurdebter",
    technologies: "Flutter, Dart",
    image: Mezmurdebter,
    github: "https://github.com/Yo13ni/mzmur-debter",
    live: "" // Empty live URL to hide the button
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 overflow-x-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projec<span className='text-yellow-400'>ts</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden hover:shadow-yellow-400/40 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.technologies}</p>
                <div className="flex gap-4">
                  {project.github && project.github.trim() !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
                    >
                      Show on GitHub
                    </a>
                  )}
                  {/* Only show Live button if project has a live URL */}
                  {project.live && project.live.trim() !== "" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                      {project.technologies.toLowerCase().includes("figma") ? "Open Figma" : "Open Live"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
