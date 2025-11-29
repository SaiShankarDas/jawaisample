import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50">
          <h1 className={cn("font-serif text-2xl md:text-3xl font-bold tracking-wide", isScrolled ? "text-jawai-green" : "text-white")}>
            WILD SOUL <span className="text-jawai-sand">JAWAI</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wider uppercase hover:text-jawai-sand transition-colors",
                isScrolled ? "text-stone-800" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-stone-800" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-stone-800" : "text-white")} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-jawai-green z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-serif font-medium hover:text-jawai-sand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Safari
          </Button>
        </div>
      </div>
    </nav>
  );
};
