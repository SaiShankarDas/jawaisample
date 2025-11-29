import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Calendar, User, Mail, Phone } from 'lucide-react';

export const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <Section id="booking" className="bg-jawai-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready for the Wild?</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Book your safari or stay with us. Fill out the form, and our team will get back to you within 24 hours to customize your itinerary.
          </p>
          
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="text-jawai-sand" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-jawai-sand" />
              <span>bookings@wildsouljawai.com</span>
            </div>
          </div>
        </div>

        <div className="bg-white text-stone-800 p-8 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">Thank You!</h3>
              <p className="text-stone-600">We have received your inquiry. We will contact you shortly.</p>
              <Button variant="outline" className="mt-6 text-stone-800 border-stone-300" onClick={() => setSubmitted(false)}>
                Send Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Inquire Now</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-500">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-stone-400" size={18} />
                    <input type="text" required className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-jawai-green focus:border-transparent outline-none" placeholder="John Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-500">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-stone-400" size={18} />
                    <input type="tel" required className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-jawai-green focus:border-transparent outline-none" placeholder="+91..." />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-stone-500">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-stone-400" size={18} />
                  <input type="email" required className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-jawai-green focus:border-transparent outline-none" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-500">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-stone-400" size={18} />
                    <input type="date" className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-jawai-green focus:border-transparent outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-500">Interest</label>
                  <select className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-jawai-green focus:border-transparent outline-none bg-white">
                    <option>Leopard Safari</option>
                    <option>Full Stay Package</option>
                    <option>Bird Watching</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full mt-4">
                Send Inquiry
              </Button>
              
              <p className="text-xs text-center text-stone-400 mt-4">
                We respect your privacy. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};
