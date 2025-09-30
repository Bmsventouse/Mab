import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    postalCode: '',
    projectType: '',
    description: '',
    consent: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Trappe d\'accès toit',
    'Escalier escamotable',
    'Échelle de toit',
    'Aménagement terrasse',
    'Mise aux normes',
    'Autre projet'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Code postal requis';
    if (!formData.projectType) newErrors.projectType = 'Type de projet requis';
    if (!formData.consent) newErrors.consent = 'Vous devez accepter le traitement des données';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demande envoyée avec succès !
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Merci pour votre demande. Nous vous contacterons dans les plus brefs délais.
            </p>
            <p className="text-gray-600">
              Pour toute urgence, appelez-nous directement au{' '}
              <a href="tel:0123456789" className="text-blue-600 font-semibold">
                01 23 45 67 89
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez ce formulaire et recevez votre devis personnalisé sous 48h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <a href="tel:0123456789" className="text-blue-600 hover:text-blue-700">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:contact@acces-rooftop.fr" className="text-blue-600 hover:text-blue-700">
                      contact@acces-rooftop.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Horaires</div>
                    <div className="text-gray-600">
                      Lun - Ven : 8h - 18h<br />
                      Sam : 8h - 12h
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Zone d'intervention</div>
                    <div className="text-gray-600">
                      Paris et Île-de-France
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="text-sm font-medium text-green-800">Assurance décennale</div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-medium text-blue-800">Devis 48h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre numéro de téléphone"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.postalCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="75001"
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Type de projet *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.projectType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Sélectionnez votre projet</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description de votre projet
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez-nous votre projet, vos contraintes, vos attentes..."
                />
              </div>

              <div className="mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. 
                    Conformément à la RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression. *
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma demande de devis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

export default ContactForm