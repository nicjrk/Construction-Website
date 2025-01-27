import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { staggerContainer } from '../lib/motion';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-grow pt-20" // Added padding-top to account for fixed header
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;