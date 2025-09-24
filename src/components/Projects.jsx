import React from 'react';
import weatherapp from '../assets/weatherapp.jpg';
import Temp from '../assets/temp.png';
import Portfloio from '../assets/portfolio.png';
import Bajaja from '../assets/Bajaja.png';
import Expense from '../assets/Expense.png';
import MezmurDebter from '../assets/mezmurdebter.png'; // Add this import
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "MezmurDebter App",
    technologies: "Flutter, Dart, Firebase",
    image: MezmurDebter,
    github: "https://github.com/Yo13ni/mezmurdebter-app",
    live: "https://github.com/Yo13ni/mezmurdebter-app" // or your live demo link
  },
  {
    id: 2,
    name: "Temperature Converter",
    technologies: "JavaScript",
    image: Temp,
    github: "https://github.com/Yo13ni/temperature-converter",
    live: "https://temperature-converter-jaxt8ju41-yonatans-projects-7076f5d2.vercel.app"
  },
  {
    id: 3,
    name: "Portfolio Website",
    technologies: "React JS, Tailwind CSS",
    image: Portfloio,
    github: "https://github.com/Yo13ni/portfolio",
    live: "https://your-portfolio-live-url.com"
  },
  {
    id: 4,
    name: "Bajaja App UI Design",
    technologies: "Figma UI Design",
    image: Bajaja,
    github: "", // no GitHub repo for UI design
    live: "https://www.figma.com/design/gsKNqiE00FCzyz14rbcjle/bajaj-app?node-id=0-1&t=LS1RobqEaw4YRgto-1" 
  },
  {
    id: 5,
    name: "Daily Expense UI Design",
    technologies: "Figma UI Design",
    image: Expense,
    github: "", // no GitHub repo for UI design
    live: "https://www.figma.com/design/XLSGZtVdyyrdnYhTa8GsnU/Untitled?node-id=0-1&t=u9D36zi0FwhkBxUw-1" 
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 overflow-x-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projec<span className='text-yellow-400'>ts</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed to 3 columns */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden hover:shadow-yellow-400/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4 flex-1">{project.technologies}</p>
                <div className="flex gap-4 mt-auto">
                  {project.github && project.github.trim() !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors text-sm flex-1 text-center"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors text-sm flex-1 text-center"
                  >
                    {project.technologies.toLowerCase().includes("figma") 
                      ? "Figma" 
                      : project.technologies.toLowerCase().includes("flutter")
                      ? "View App"
                      : "Live Demo"}
                  </a>
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
