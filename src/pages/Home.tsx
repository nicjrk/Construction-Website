import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn, slideIn } from '../lib/motion';
import ServiziiPiastrelle from '../Poze Site/Poza1.jpeg';
import ServiziiParquet from '../Poze Site/Poza15.jpeg';
import ServiziiIntonaci from '../Poze Galerie/PozaGalerie6.jpeg';
import ServiziiCartongesso from '../Poze Galerie/PozaGalerie5.jpeg';
import ServiziiRestauri from '../Poze Galerie/PozaGalerie3.jpeg';
import ServiziiDemolizioni from '../Poze Galerie/PozaGalerie19.jpeg';
import HeroImage from '../PozeCarusel/PozeAbout.jpeg';

const Home = () => {
  const services = [
    {
      title: 'Installazione Piastrelle',
      description: 'Offriamo servizi professionali di posa di piastrelle e rivestimenti per ogni tipo di ambiente, sia residenziale che commerciale.',
      image: ServiziiPiastrelle,
    },
    {
      title: 'Installazione Parquet',
      description: 'Installiamo parquet laminato, stratificato o in legno massello, assicurando un aspetto impeccabile e una lunga durata.',
      image: ServiziiParquet,
    },
    {
      title: 'Intonaci Interni ed Esterni',
      description: 'Il nostro team esegue intonaci interni ed esterni per ogni tipo di progetto.',
      image: ServiziiIntonaci,
    },
    {
      title: 'Installazione di Cartongesso',
      description: 'Eseguiamo lavori in cartongesso e controsoffitti per migliorare l’aspetto di qualsiasi spazio.',
      image: ServiziiCartongesso,
    },
    {
      title: 'Ristrutturazioni e Restauri',
      description: 'Specializzati nel restauro di edifici storici e residenziali.',
      image: ServiziiRestauri,
    },
    {
      title: 'Servizi di Demolizione',
      description: 'Servizi completi di demolizione con attrezzature moderne e sicurezza garantita.',
      image: ServiziiDemolizioni,
    },
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Edil Petro - Servizi di Costruzioni e Ristrutturazioni a Roma</title>
        <meta name="description" content="Edil Petro offre servizi professionali di costruzione e ristrutturazione a Roma. Specializzati in piastrelle, parquet e intonaci." />
        <meta name="keywords" content="costruzioni Roma, ristrutturazioni Roma, posa piastrelle, parquet, intonaci interni ed esterni, edilizia Roma, ristrutturazioni professionali" />
        <meta property="og:title" content="Edil Petro - Servizi di Costruzioni e Ristrutturazioni a Roma" />
        <meta property="og:description" content="Trasformiamo i tuoi spazi con professionalità e passione. Scopri i nostri servizi di posa piastrelle, parquet e intonaci." />
        <meta property="og:image" content={HeroImage} />
        <meta property="og:url" content="https://edilpetro.com/home" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Esperti in costruzioni e ristrutturazioni a Roma
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Trasformiamo i tuoi spazi con professionalità e passione.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Richiedi un Preventivo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section variants={slideIn} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">I Nostri Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garanzia Qualità</h3>
              <p className="text-gray-600">Materiali premium e lavorazioni garantite.</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Puntualità</h3>
              <p className="text-gray-600">Rispetto delle tempistiche concordate.</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Esperto</h3>
              <p className="text-gray-600">Professionisti qualificati.</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Esperienza</h3>
              <p className="text-gray-600">Anni di progetti di successo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto per Iniziare?</h2>
        <Link
          to="/contatti"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Richiedi un Preventivo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </>
  );
};

export default Home;
