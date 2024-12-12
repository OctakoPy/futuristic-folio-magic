import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RocketIcon, UserIcon, CodeIcon } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [lastKeys, setLastKeys] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...lastKeys, e.key].slice(-10);
      setLastKeys(newKeys);
      
      if (newKeys.join(',') === konamiCode.join(',')) {
        document.documentElement.style.animation = 'spin 1s linear';
        setTimeout(() => {
          document.documentElement.style.animation = '';
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lastKeys]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space/80 backdrop-blur-md border-b border-neonBlue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-neonBlue hover:text-neonPurple transition-colors">
            AI Dev
          </Link>
          <div className="flex space-x-8">
            {[
              { to: '/', icon: RocketIcon, label: 'Home' },
              { to: '/about', icon: UserIcon, label: 'About' },
              { to: '/projects', icon: CodeIcon, label: 'Projects' },
            ].map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="relative group flex items-center space-x-2"
              >
                <Icon className="w-5 h-5 text-neonBlue group-hover:text-neonPurple transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {label}
                </span>
                {location.pathname === to && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-neonBlue"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;