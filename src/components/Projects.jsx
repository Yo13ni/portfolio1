import React from 'react';
import Bajaja from '../assets/Bajaja.png';
import Expense from '../assets/Expense.png';
import cat from '../assets/cat.jpg';
import Mezmurdebter from '../assets/MezmurDebter.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Mezmurdebter",
    technologies: "Flutter, Dart",
    image: Mezmurdebter,
    github: "https://github.com/Yo13ni/mzmur-debter",
    live: "" // Empty live URL to hide the button
  },
  {
    id: 2,
    name: "TOM CAT",
    technologies: "Flutter, Dart",
    image: cat,
    github: "https://github.com/Yo13ni/Tom-",
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
  }
];

const Projects = () => {
  return (
    <div className="bg-gray-50 py-20" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 overflow-x-hidden">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projec<span className='text-primary-600'>ts</span>
        </motion.h2>
        <motion.p
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A showcase of my recent work and projects
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-6">{project.technologies}</p>
                <div className="flex flex-wrap gap-3">
                  {project.github && project.github.trim() !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.live && project.live.trim() !== "" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                    >
                      {project.technologies.toLowerCase().includes("figma") ? "Open Figma" : "View Live"}
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
