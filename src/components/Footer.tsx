import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Accès Rooftop
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert en création d'accès toiture et aménagement de terrasses en Île-de-France depuis plus de 15 ans.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:0123456789" className="text-gray-300 hover:text-white">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:contact@acces-rooftop.fr" className="text-gray-300 hover:text-white">
                  contact@acces-rooftop.fr
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Trappes d'accès</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Escaliers escamotables</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Échelles de toit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aménagement terrasse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mise aux normes</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('realisations')}
                  className="hover:text-white transition-colors text-left"
                >
                  Réalisations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('zone-intervention')}
                  className="hover:text-white transition-colors text-left"
                >
                  Zone d'intervention
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Suivez-nous
            </h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>SIRET: 123 456 789 00012</p>
              <p>Assurance décennale</p>
              <p>Artisan certifié RGE</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Accès Rooftop. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;