import React from 'react';
import { Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">WILD SOUL JAWAI</h2>
            <p className="max-w-sm mb-6">
              An authentic wilderness lodge in the heart of leopard country. Committed to conservation, community, and unforgettable adventures.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/jawai_wildsoul/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-jawai-sand transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-jawai-sand transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-jawai-sand transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-jawai-sand transition-colors">About Us</a></li>
              <li><a href="#experiences" className="hover:text-jawai-sand transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-jawai-sand transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-jawai-sand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Locate Us</h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="shrink-0 mt-1" size={18} />
              <p>Near Jawai Bandh, Sumerpur,<br/>Pali District, Rajasthan 306126</p>
            </div>
            <p className="text-xs text-stone-500">
              *Visits by appointment/booking only.
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wild Soul Jawai. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
