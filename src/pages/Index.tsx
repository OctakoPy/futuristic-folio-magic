import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const codes = [
      'def ai_magic():',
      'while True:',
      'import torch',
      'model.train()',
      'async def',
      'useState()',
      'useEffect()',
      '<React.Fragment>',
      'npm install',
      'git commit',
      '0101',
      '1010'
    ];

    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00F0FF';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = codes[Math.floor(Math.random() * codes.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />
      
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
        
        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-neonBlue/20 rounded-full border border-neonBlue hover:bg-neonBlue/30 transition-colors"
        >
          <RocketIcon className="w-5 h-5" />
          <span>View Projects</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Index;