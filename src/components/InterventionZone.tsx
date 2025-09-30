import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const departments = [
  { code: '75', name: 'Paris', highlight: true },
  { code: '92', name: 'Hauts-de-Seine' },
  { code: '93', name: 'Seine-Saint-Denis' },
  { code: '94', name: 'Val-de-Marne' },
  { code: '91', name: 'Essonne' },
  { code: '95', name: 'Val-d\'Oise' },
  { code: '77', name: 'Seine-et-Marne' },
  { code: '78', name: 'Yvelines' }
];

const InterventionZone: React.FC = () => {
  return (
    <section id="zone-intervention" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre Zone d'Intervention
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous intervenons dans toute l'Île-de-France pour vos projets d'accès toiture 
              et d'aménagement de terrasses.
            </p>

            {/* Departments Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {departments.map((dept) => (
                <div 
                  key={dept.code}
                  className={`flex items-center p-4 rounded-lg transition-colors ${
                    dept.highlight 
                      ? 'bg-blue-100 border-2 border-blue-300' 
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-3 ${
                    dept.highlight ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {dept.code}
                  </div>
                  <span className="font-medium text-gray-900">{dept.name}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Déplacement gratuit pour devis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Intervention sous 48h en urgence</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Connaissance parfaite des réglementations locales</span>
              </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl relative overflow-hidden">
                {/* Simplified IDF Map */}
                <div className="absolute inset-4 bg-blue-200 rounded-lg opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 w-4 h-4 rounded-full animate-pulse"></div>
                </div>
                
                {/* Points on map */}
                <div className="absolute top-6 right-8">
                  <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 left-6">
                  <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className="absolute top-1/3 left-8">
                  <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
                </div>
                
                {/* Center icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Île-de-France
                </h3>
                <p className="text-gray-600">
                  Couverture complète des 8 départements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZone;