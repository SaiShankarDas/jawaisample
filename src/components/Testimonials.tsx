import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Aditi Rao",
    location: "Mumbai",
    text: "Absolutely magical! We saw 4 leopards on our first drive. The landscape is surreal, like being on another planet.",
    rating: 5
  },
  {
    name: "John Smith",
    location: "UK",
    text: "The hospitality at Wild Soul was unmatched. The team is passionate about conservation. A must-visit for nature lovers.",
    rating: 5
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    text: "Sunset at the dam was the highlight. Very professional guides and comfortable stay. Highly recommended.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <span className="text-jawai-brown font-bold tracking-widest uppercase text-sm">Guest Diaries</span>
        <h2 className="text-3xl font-serif font-bold text-jawai-green mt-2">What Travelers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-stone-50 p-8 rounded-2xl relative">
            <div className="flex gap-1 text-yellow-500 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-stone-600 italic mb-6">"{review.text}"</p>
            <div>
              <h4 className="font-serif font-bold text-stone-800">{review.name}</h4>
              <span className="text-xs text-stone-500 uppercase tracking-wider">{review.location}</span>
            </div>
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-6xl text-jawai-sand/20 font-serif">"</div>
          </div>
        ))}
      </div>
    </Section>
  );
};
