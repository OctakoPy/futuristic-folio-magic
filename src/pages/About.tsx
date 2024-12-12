import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timelineItems = [
    {
      year: "2024",
      title: "AI Innovation Lead",
      description: "Leading cutting-edge AI projects and research initiatives"
    },
    {
      year: "2023",
      title: "ML Engineer",
      description: "Developed machine learning solutions for real-world problems"
    },
    {
      year: "2022",
      title: "Software Developer",
      description: "Built scalable applications and services"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-neonBlue to-neonPurple bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="glass-card p-6 rounded-lg mb-12 border border-neonBlue/20 bg-space/50 backdrop-blur-lg">
          <p className="text-lg text-white/80 leading-relaxed">
            I'm a passionate AI developer focused on creating innovative solutions that bridge the gap between humans and artificial intelligence. With expertise in machine learning, web development, and UI/UX design, I build projects that are not only functional but also engaging and accessible.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-neonBlue">Journey</h2>
        
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-neonBlue/30"
            >
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-neonBlue animate-glow" />
              <div className="glass-card p-4 rounded-lg border border-neonBlue/20 bg-space/50 backdrop-blur-lg">
                <span className="text-sm text-neonPurple font-mono">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;