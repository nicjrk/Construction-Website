import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Poza3 from "../Poze Site/Poza6.jpeg"; // Assicurati che l'immagine esista nel progetto.

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/391234567890", "_blank");
  };

  return (
    <div>
      {/* Header della pagina */}
      <div
        className="relative h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Poza3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Contattaci</h1>
          <p className="text-xl mt-2">
            Soluzioni professionali per costruzioni e ristrutturazioni
          </p>
        </div>
      </div>

      {/* Sezione principale */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informazioni di contatto */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informazioni di contatto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
                >
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Indirizzo</h3>
                    <p className="text-gray-600">
                      Via Roma 123, 00100 Roma, Italia
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
                >
                  <Phone className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Telefono</h3>
                    <a
                      href="tel:+393276609094"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      +39 327 660 9094
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
                >
                  <Mail className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:edilpetro22@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      edilpetro22@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
                >
                  <Clock className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Orari</h3>
                    <p className="text-gray-600">Lun - Ven: 08:00 - 18:00</p>
                  </div>
                </motion.div>
              </div>

              {/* Bottone WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 cursor-pointer hover:bg-green-50 transition"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">Inviaci un messaggio su WhatsApp!</p>
                </div>
              </motion.div>
            </div>

            {/* Mappa Google Maps */}
            <div>
              <h2 className="text-3xl font-bold mb-8">La nostra posizione</h2>
              <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Posizione Edil Petro"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.865598683478!2d12.4963655!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b48f9c402f21a5a!2zUm9tYQ!5e0!3m2!1sit!2sit!4v1698765432109!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
