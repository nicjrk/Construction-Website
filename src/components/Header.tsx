import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Galleria', href: '/galleria' },
    { name: 'Contatti', href: '/contatti' },
  ];

  const handleCall = () => {
    const confirmCall = window.confirm(
      "Vuoi chiamare Edil Petro?\nNumero: +39 123 456 7890"
    );
    if (confirmCall) {
      window.location.href = "tel:+391234567890";
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Edil Petro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Chiama Ora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Call Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                handleCall();
              }}
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Chiama Ora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
