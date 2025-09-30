import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 bg-blue-600 rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  📍 {testimonial.location}
                </div>
                <div className="text-blue-600 text-sm font-medium">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-3">⭐</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">sur Google Reviews</div>
              </div>
            </div>
            <p className="text-gray-600">
              Basé sur plus de 50 avis clients vérifiés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;