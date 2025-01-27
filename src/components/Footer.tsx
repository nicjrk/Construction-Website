import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapPin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Secțiunea Logo și Descriere */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Edil Petro</span>
            </div>
            <p className="text-gray-400">
              Esperti in costruzioni e ristrutturazioni di alta qualità a Roma.
            </p>
          </div>

          {/* Secțiunea Link-uri rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/servizi" className="text-gray-400 hover:text-white transition-colors">Servizi</Link></li>
              <li><Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link to="/galleria" className="text-gray-400 hover:text-white transition-colors">Galleria</Link></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Secțiunea Contact și Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti e Social</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4" />
                <a href="tel:+39 327 660 9094" className="text-gray-400 hover:text-white transition-colors">+39 327 660 9094</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4" />
                <a href="mailto:edilpetro22@gmail.com" className="text-gray-400 hover:text-white transition-colors">edilpetro22@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapPin className="h-4 w-4" />
                <span className="text-gray-400">Roma, Italia</span>
              </li>
            </ul>

            {/* Secțiunea Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/393276609094" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@edilpetro" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok className="h-6 w-6" />
              </a>
             
            </div>
          </div>

          {/* Secțiunea Orari di Lavoro */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Orari di Lavoro</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunedì - Venerdì: 8:00 - 18:00</li>
              <li>Sabato: 9:00 - 14:00</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Edil Petro. Tutti i diritti riservati.</p>
          <div className="mt-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            {' '}&middot;{' '}
            <Link to="/termini" className="hover:text-white transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
