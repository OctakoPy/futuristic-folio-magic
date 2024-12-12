import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-space text-white overflow-hidden">
      <div className="fixed inset-0 bg-circuit opacity-5 pointer-events-none" />
      <Navigation />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 pt-20"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;