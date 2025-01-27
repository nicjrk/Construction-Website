import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../lib/motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Poza1 from '../Poze Site/Poza1.jpeg';
import Poza15 from '../Poze Site/Poza15.jpeg';
import Poza1Carusel from '../PozeCarusel/Poza1.jpeg';
import Poza2Carusel from '../PozeCarusel/Poza2.jpeg';
import Poza3Carusel from '../PozeCarusel/Poza3.jpeg';
import Poza4Carusel from '../PozeCarusel/Poza4.jpeg';

const Services = () => {
  const services = [
    {
      image: Poza1,
      title: 'Installazione Piastrelle',
      description:
        "Offriamo servizi professionali di posa di piastrelle e rivestimenti per ogni tipo di ambiente, sia residenziale che commerciale. Garantiamo un'installazione precisa e duratura, indipendentemente dalla complessità del progetto.",
    },
    {
      image: Poza15,
      title: 'Installazione Parquet',
      description:
        "Installiamo parquet laminato, stratificato o in legno massello, assicurando che ogni listello sia perfettamente allineato e fissato per un aspetto finale impeccabile e una lunga durata.",
    },
    {
      image: Poza1Carusel,
      title: 'Intonaci Interni ed Esterni',
      description:
        "Il nostro team esegue intonaci interni ed esterni per ogni tipo di progetto, assicurando superfici perfettamente preparate per la verniciatura o altre finiture.",
    },
    {
      image: Poza2Carusel,
      title: 'Installazione di Cartongesso',
      description:
        "Eseguiamo lavori in cartongesso e controsoffitti per migliorare l'aspetto e la funzionalità di qualsiasi spazio. Dai divisori alle soluzioni acustiche, offriamo un'esecuzione rapida e di qualità.",
    },
    {
      image: Poza3Carusel,
      title: 'Ristrutturazioni e Restauri',
      description:
        "Siamo specializzati nella ristrutturazione e nel restauro di edifici, riportando alla luce il loro splendore originale. Utilizziamo tecniche tradizionali combinate con soluzioni moderne per garantire qualità e attenzione ai dettagli, sia per edifici storici che per spazi residenziali o commerciali.",
    },
    {
      image: Poza4Carusel,
      title: 'Servizi di Demolizione',
      description:
        "Il nostro team di esperti offre servizi completi di demolizione, adattati alle esigenze di ogni cliente, sia che si tratti di progetti residenziali, commerciali o industriali. Garantiamo che ogni lavoro venga eseguito nelle condizioni di massima sicurezza ed efficienza, utilizzando attrezzature moderne e metodi avanzati per minimizzare l'impatto sull'ambiente e rispettare gli standard di qualità e sicurezza.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servizi - Edil Petro Roma</title>
        <meta
          name="description"
          content="Scopri i nostri servizi di costruzione e ristrutturazione a Roma. Specialisti in ristrutturazioni, finiture e manutenzione."
        />
        <meta
          name="keywords"
          content="servizi costruzione, ristrutturazioni Roma, posa piastrelle, installazione parquet, intonaci, demolizioni"
        />
        <meta property="og:title" content="Servizi - Edil Petro Roma" />
        <meta
          property="og:description"
          content="Scopri i nostri servizi di costruzione e ristrutturazione a Roma. Specialisti in ristrutturazioni, finiture e manutenzione."
        />
        <meta property="og:image" content="/PozeCarusel/Poza1.jpeg" />
        <meta property="og:url" content="https://edilpetro.com/servizi" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://edilpetro.com/servizi" />
      </Helmet>

      <motion.section
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Servizi</h1>
            <p className="text-xl text-gray-600">
              Offriamo una gamma completa di servizi di costruzione e ristrutturazione, garantendo qualità e
              professionalità in ogni progetto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={slideIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centrat */}
          <div className="text-center mt-12">
            <Link
              to="/contatti"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
            >
              Richiedi un Preventivo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;
