import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award } from 'lucide-react';
import { fadeIn, slideIn } from '../lib/motion';
import PozeAbout from '../PozeCarusel/PozeAbout.jpeg';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Qualità',
      description: 'Utilizziamo solo materiali di prima qualità e tecniche all\'avanguardia.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Esperienza',
      description: 'Il nostro team vanta anni di esperienza nel settore delle costruzioni.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Puntualità',
      description: 'Rispettiamo sempre le tempistiche concordate con i nostri clienti.'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Professionalità',
      description: 'Garantiamo un servizio professionale e attento alle esigenze del cliente.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Chi Siamo - Edil Petro Roma</title>
        <meta name="description" content="Scopri la storia e i valori di Edil Petro, la tua impresa di costruzioni di fiducia a Roma." />
        <meta
          name="keywords"
          content="Edil Petro, costruzioni Roma, ristrutturazioni, qualità, puntualità, professionalità"
        />
        <meta property="og:title" content="Chi Siamo - Edil Petro Roma" />
        <meta
          property="og:description"
          content="Dal 2012, Edil Petro è sinonimo di qualità e professionalità nel settore delle costruzioni e ristrutturazioni a Roma."
        />
        <meta property="og:image" content={PozeAbout} />
        <meta property="og:url" content="https://edilpetro.com/chi-siamo" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://edilpetro.com/chi-siamo" />
      </Helmet>

      <motion.section
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="py-12"
      >
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Chi è <span className="text-blue-600">Edil</span> <span className="text-orange-500">Petro</span>
            </h1>
            <p className="text-xl text-gray-600">
              Siamo un'azienda con esperienza nelle opere di costruzione civile e industriale a Roma, Italia. 
              La missione e la visione della nostra azienda si fondano sulla puntualità, correttezza e serietà 
              nell'adempimento dei tuoi progetti.
            </p>
            <hr className="w-20 mx-auto my-6 border-blue-600" />
          </div>

          {/* Story Section */}
          <motion.div
            variants={slideIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <img
                src={PozeAbout}
                alt="Edil Petro al lavoro"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">La Nostra Storia</h2>
              <p className="text-gray-600 mb-4">
                Fondata nel 2012, Edil Petro è nata dalla passione per l'edilizia e dalla volontà di offrire
                servizi di costruzione e ristrutturazione di alta qualità nella città di Roma.
              </p>
              <p className="text-gray-600 mb-4">
                Nel corso degli anni, abbiamo realizzato numerosi progetti, dalla ristrutturazione di appartamenti
                alla costruzione di edifici commerciali, guadagnandoci la fiducia dei nostri clienti.
              </p>
              <p className="text-gray-600">
                Oggi, continuiamo a crescere e innovare, mantenendo sempre lo stesso impegno per la qualità e
                la soddisfazione del cliente che ci ha contraddistinto fin dall'inizio.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <div className="bg-gray-50 py-16 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">I Nostri Valori</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
