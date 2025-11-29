import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Leaf, Map, Camera } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: "Prime Location",
    desc: "Located in the heart of the leopard conservation zone with exclusive access routes."
  },
  {
    icon: ShieldCheck,
    title: "Expert Guides",
    desc: "Our trackers are locals who know every rock and cave, ensuring high sighting chances."
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    desc: "We practice sustainable tourism, minimizing our footprint on this fragile ecosystem."
  },
  {
    icon: Camera,
    title: "Photographer Friendly",
    desc: "Specialized tours for photographers with optimal positioning and timing."
  }
];

export const Features = () => {
  return (
    <Section className="bg-jawai-sand/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-jawai-green">Why Choose Wild Soul?</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-jawai-green/10 rounded-full flex items-center justify-center text-jawai-green mb-4">
              <feature.icon size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-800 mb-2">{feature.title}</h3>
            <p className="text-stone-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
