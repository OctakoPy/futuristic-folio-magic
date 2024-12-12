import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative">
      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-neonBlue/20 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border-2 border-neonBlue/20 absolute -top-16 -left-16 -z-10"
        />
        
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neonBlue to-neonPurple bg-clip-text text-transparent">
          AI Developer
        </h1>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl">
          Creating innovative AI solutions and fun projects that push the boundaries of what's possible
        </p>
        
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-neonBlue/20 rounded-full border border-neonBlue hover:bg-neonBlue/30 transition-colors"
        >
          <RocketIcon className="w-5 h-5" />
          <span>View Projects</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Index;