import React from 'react';
import { Section } from './ui/Section';
import { Mountain, Binoculars, Sunset, PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/media';

const highlights = [
  {
    icon: PawPrint,
    title: "Leopard Safari",
    desc: "Witness the elusive leopards in their natural granite habitat."
  },
  {
    icon: Binoculars,
    title: "Bird Watching",
    desc: "Home to migratory birds, flamingos, and sarus cranes."
  },
  {
    icon: Sunset,
    title: "Dam Sunsets",
    desc: "Breathtaking views over the Jawai Bandh waters."
  },
  {
    icon: Mountain,
    title: "Granite Trekking",
    desc: "Explore the ancient volcanic rock formations."
  }
];

export const About = () => {
  return (
    <Section id="about" className="bg-jawai-light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-jawai-brown font-bold tracking-widest uppercase text-sm">About Jawai</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-jawai-green mt-2 mb-6">
            Land of the Leopards & Shepherds
          </h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Nestled in the rugged Aravalli range, Jawai is a unique wilderness where wild leopards coexist peacefully with the charismatic Rabari shepherds. It is not just a destination; it is a living example of harmony between man and beast.
          </p>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Home to the Jawai Bandh Leopard Conservation Reserve, this region offers a landscape unlike any other—billion-year-old granite hills rising from the earth, surrounding one of the largest reservoirs in western Rajasthan.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-2 bg-white rounded-full shadow-sm text-jawai-brown">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-800">{item.title}</h4>
                  <p className="text-xs text-stone-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
             {/* Leopard resting on rock - Classic Jawai shot */}
             <img 
              src={ASSETS.about.leopard} 
              alt="Leopard on granite rock" 
              className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
              loading="lazy"
            />
            {/* Rabari Shepherd / Rajasthan Portrait vibe */}
            <img 
              src={ASSETS.about.shepherd} 
              alt="Rabari Shepherd of Rajasthan" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-jawai-sand/30 rounded-xl" />
        </motion.div>
      </div>
    </Section>
  );
};
