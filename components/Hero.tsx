
import React from 'react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video (desktop) and Image (mobile) with Overlay */}
      {/* Mobile fallback image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slowZoom md:hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/25 hero-gradient z-10"></div>
      </div>

      {/* Video background for md+ screens */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden" aria-hidden="true">
        <video
          className="w-full h-full object-cover absolute inset-0"
          poster="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop"
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source src="https://res.cloudinary.com/di9eeahdy/video/upload/v1767370752/hero_wzkbu7.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/di9eeahdy/video/upload/v1767363903/Ecole_Globale_International_Girls_School_-_Ecole_Globale_School_1080p_h264_qlwwax.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25 hero-gradient z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center text-white">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-6 animate-fadeIn">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
            Premier All-Girls Boarding School
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.05] max-w-5xl mx-auto animate-fadeInUp">
          Inspiring <span className="text-gold italic">Excellence</span>, <br className="hidden md:block" /> Empowering Dreams
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fadeInUp delay-200">
          {TAGLINE}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp delay-500">
          <button className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl">
            Explore Campus
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
            <i className="fas fa-play-circle mr-3"></i> Virtual Tour
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
