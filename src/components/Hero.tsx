import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/media';

export const Hero = () => {
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          poster={ASSETS.hero.poster}
        >
          <source src={ASSETS.hero.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Gradient - Ensures text is readable over the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-jawai-sand font-medium tracking-[0.2em] uppercase mb-4 md:mb-6 drop-shadow-md"
        >
          Welcome to the Wilderness
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Discover the Wild Soul <br className="hidden md:block" /> of Jawai
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/95 max-w-2xl mb-10 font-light drop-shadow-md"
        >
          Where leopards roam free, granite hills whisper ancient tales, and the sunset paints the dam in gold.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Packages
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 opacity-70" />
      </motion.div>
    </div>
  );
};
