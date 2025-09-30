import React from 'react';
import { Phone, MapPin, FileText, Wrench } from 'lucide-react';
import { processSteps } from '../data/mockData';

const iconMap = {
  Phone,
  MapPin,
  FileText,
  Wrench
};

const Process: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre Processus en 4 Étapes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthode éprouvée pour mener votre projet de bout en bout
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <div key={step.id} className="text-center">
                  {/* Step Circle */}
                  <div className="relative mb-6">
                    <div className="bg-white border-4 border-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow (except for last item on desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                      <div className="text-blue-400">
                        →
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour une première évaluation gratuite 
              et un devis personnalisé sous 48h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Demander un devis
              </button>
              <a 
                href="tel:0123456789"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;