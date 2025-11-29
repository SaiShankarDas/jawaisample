import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Clock, Users } from 'lucide-react';
import { ASSETS } from '../data/media';

const packages = [
  {
    id: 1,
    title: "Sunset Leopard Safari",
    image: ASSETS.packages.safari,
    desc: "Track leopards in a 4x4 open gypsy as the sun sets over the granite hills.",
    price: "From ₹3,500/person",
    duration: "3-4 Hours",
    group: "Private or Shared"
  },
  {
    id: 2,
    title: "Birding & Dam Visit",
    image: ASSETS.packages.dam,
    desc: "Early morning excursion to Jawai Bandh to spot flamingos, cranes, and crocodiles.",
    price: "From ₹2,500/person",
    duration: "3 Hours",
    group: "Small Group"
  },
  {
    id: 3,
    title: "Full Wilderness Stay",
    image: ASSETS.packages.stay,
    desc: "Luxury tent/lodge stay with all meals, 2 safaris, and a village walk included.",
    price: "From ₹12,000/night",
    duration: "2 Days / 1 Night",
    group: "Couples / Families"
  }
];

export const Packages = () => {
  return (
    <Section id="experiences" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-jawai-brown font-bold tracking-widest uppercase text-sm">Experiences</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-jawai-green mt-2">
          Curated Wild Adventures
        </h2>
        <p className="text-stone-600 mt-4">
          Choose from our carefully designed packages to experience the best of Jawai's wildlife and culture.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="group bg-stone-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-jawai-green shadow-sm">
                {pkg.price}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">{pkg.title}</h3>
              <p className="text-stone-600 text-sm mb-4 line-clamp-2">{pkg.desc}</p>
              
              <div className="flex items-center justify-between text-xs text-stone-500 mb-6 border-t border-stone-200 pt-4">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{pkg.group}</span>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  const form = document.getElementById('booking');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book This Experience
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
