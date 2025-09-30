import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Accès Rooftop
              </h1>
              <div className="text-xs text-gray-500 font-medium tracking-wide">EXPERT TOITURE</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
              >
                Services
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
              >
                Réalisations
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </button>
              <button 
                onClick={() => scrollToSection('zone-intervention')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
              >
                Zone d'intervention
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
              >
                Contact
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </button>
            </nav>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:0123456789" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold">01 23 45 67 89</div>
                  <div className="text-xs text-gray-500">Appel gratuit</div>
                </div>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Devis gratuit
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('zone-intervention')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Zone d'intervention
              </button>
              <div className="border-t border-gray-200 my-4"></div>
              <a 
                href="tel:0123456789" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">01 23 45 67 89</div>
                  <div className="text-sm text-gray-500">Appel gratuit</div>
                </div>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg"
              >
                Devis gratuit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky CTA for mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 font-semibold transform hover:scale-105 animate-pulse"
        >
          Devis gratuit
        </button>
      </div>
    </>
  );
};

export default Header;