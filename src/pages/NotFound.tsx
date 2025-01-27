import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { fadeIn } from '../lib/motion';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Pagina Non Trovata - Edil Petro Roma</title>
        <meta name="description" content="La pagina che stai cercando non esiste." />
      </Helmet>

      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="min-h-[60vh] flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            La pagina che stai cercando non esiste.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Torna alla Home
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound;