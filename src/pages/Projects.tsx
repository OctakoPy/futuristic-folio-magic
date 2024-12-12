import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by machine learning",
      tags: ["AI", "NLP", "React"],
      link: "#"
    },
    {
      title: "Image Generator",
      description: "Generate unique images using AI",
      tags: ["AI", "Computer Vision", "Python"],
      link: "#"
    },
    {
      title: "Code Assistant",
      description: "AI-powered code completion and suggestions",
      tags: ["AI", "VSCode", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-neonBlue to-neonPurple bg-clip-text text-transparent">
          Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 rounded-lg border border-neonBlue/20 bg-space/50 backdrop-blur-lg 
                             transform transition-all duration-300 hover:scale-105 hover:border-neonBlue/50">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;