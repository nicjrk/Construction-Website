import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: '/src/Poze Site/Poza10.jpeg',
    alt: 'Appartamento Moderno',
    description: 'Ristrutturazione completa per un appartamento moderno.',
  },
  {
    src: '/src/Poze Site/Poza11.jpeg',
    alt: 'Villa Residenziale',
    description: 'Progetto complesso per la sostituzione delle finestre.',
  },
  {
    src: '/src/PozeCarusel/PozaFinal.jpeg',
    alt: 'Spazio Commerciale',
    description: 'Modernizzazione completa di uno spazio commerciale.',
  },
  {
    src: '/src/PozeCarusel/PozaFinal1.jpeg',
    alt: 'Cantiere Edile',
    description: 'Progresso del lavoro in un cantiere residenziale.',
  },
  {
    src: '/src/Poze Site/Poza16.jpeg',
    alt: 'Pavimentazione',
    description: 'Installazione di pavimenti di alta qualità.',
  },
  {
    src: '/src/PozeCarusel/PozaFinal2.jpeg',
    alt: 'Facciata Esterna',
    description: 'Rifacimento della facciata esterna.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie17.jpeg',
    alt: 'Progetto Facciata',
    description: 'Ristrutturazione e rifacimento della facciata.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie22.jpeg',
    alt: 'Cantiere Attivo',
    description: 'Lavori in corso in un grande cantiere.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie21.jpeg',
    alt: 'Interni Moderni',
    description: 'Progetto di rinnovo di interni di alta qualità.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie10.jpeg',
    alt: 'Esterni Rifiniti',
    description: 'Rinnovamento degli esterni di un edificio.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie8.jpeg',
    alt: 'Dettagli Interni',
    description: 'Lavori di precisione sugli interni.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie2.jpeg',
    alt: 'Progetto in Corso',
    description: 'Progresso dei lavori di costruzione.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie6.jpeg',
    alt: 'Progetto Terminato',
    description: 'Immagini del progetto completato.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie7.jpeg',
    alt: 'Cantiere Residenziale',
    description: 'Progetti di rinnovo in un cantiere residenziale.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie14.jpeg',
    alt: 'Interni Rifiniti',
    description: 'Lavori terminati sugli interni.',
  },
  {
    src: '/src/Poze Galerie/PozaGalerie12.jpeg',
    alt: 'Dettagli di Qualità',
    description: 'Ristrutturazione curata nei dettagli.',
  },
];

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1) : 0
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1) : 0
    );
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <Helmet>
        <title>Galleria - Edil Petro</title>
        <meta
          name="description"
          content="Scopri la nostra galleria con immagini dei nostri progetti di ristrutturazione e costruzione a Roma."
        />
      </Helmet>

      <section className="gallery-section pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Galleria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
                <p className="mt-2 text-gray-700 text-sm">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2">
              {galleryImages[selectedImageIndex].description}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button onClick={handlePrevious} className="text-white bg-gray-700 rounded-full p-2">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={handleNext} className="text-white bg-gray-700 rounded-full p-2">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
