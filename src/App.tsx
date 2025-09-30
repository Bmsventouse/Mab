import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import InterventionZone from './components/InterventionZone';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <InterventionZone />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;