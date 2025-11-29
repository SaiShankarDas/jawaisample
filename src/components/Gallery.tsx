import React from 'react';
import { Section } from './ui/Section';
import { ASSETS } from '../data/media';
import { Instagram } from 'lucide-react';

export const Gallery = () => {
  return (
    <Section id="gallery" className="bg-stone-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-jawai-sand font-bold tracking-widest uppercase text-sm">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Captured Moments</h2>
        </div>
        <p className="text-stone-400 max-w-md mt-4 md:mt-0 text-sm md:text-base">
          Glimpses of the raw beauty, wildlife, and serenity that awaits you at Wild Soul Jawai.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {ASSETS.gallery.map((img, idx) => (
          <div key={idx} className={`relative group overflow-hidden rounded-lg ${img.span}`}>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <a 
          href="https://www.instagram.com/jawai_wildsoul/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-jawai-sand hover:text-white transition-colors flex items-center gap-2 text-sm tracking-widest uppercase border-b border-jawai-sand pb-1"
        >
          <Instagram size={16} />
          View More on Instagram
        </a>
      </div>
    </Section>
  );
};
