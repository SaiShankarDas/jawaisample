import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-jawai-sand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <Gallery />
        <Features />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
