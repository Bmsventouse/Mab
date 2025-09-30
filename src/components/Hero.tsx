import React from 'react';
import { Shield, Award, Clock, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Expert Accès Toiture Île-de-France
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Accédez à Votre Toit en{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Toute Sécurité
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Expert en création d'accès toiture et aménagement de terrasses depuis plus de{' '}
              <span className="font-bold text-blue-600">15 années</span> en Île-de-France
            </p>

            {/* Points de réassurance */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                <CheckCircle2 className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">Normes respectées</span>
              </div>
              <div className="flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full border border-orange-200">
                <Award className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">Devis gratuit</span>
              </div>
              <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
                <Clock className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">Installation rapide</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center"
              >
                Demander un devis gratuit
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:0123456789"
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center hover:shadow-xl"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                01 23 45 67 89
              </a>
            </div>

            {/* Zone d'intervention */}
            <div className="flex items-center justify-center lg:justify-start text-gray-600">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Intervention sur Paris et Île-de-France</div>
                <div className="text-sm text-gray-500">Déplacement gratuit pour devis</div>
              </div>
            </div>
          </div>
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right">
            <img 
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Installation d'accès toit professionnel"
              className="rounded-3xl shadow-2xl w-full h-[450px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600 font-medium">Années d'expertise</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-600 font-medium">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;