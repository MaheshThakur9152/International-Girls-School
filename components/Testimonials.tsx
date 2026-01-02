
import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Auto-play feature
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900">Voices of Our Community</h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-white border border-gray-100">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className="w-full flex-shrink-0 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center"
                >
                  <div className="mb-8 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold/10 rounded-full -z-10"></div>
                    <i className="fas fa-quote-left text-5xl text-gold opacity-30"></i>
                  </div>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl italic text-emerald-900 mb-12 leading-relaxed font-serif max-w-3xl">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-20 h-20 rounded-full border-4 border-gold/20 object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gold w-7 h-7 rounded-full flex items-center justify-center text-[10px] text-white border-2 border-white">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-xl">{t.name}</h4>
                      <p className="text-sm text-emerald-700 font-medium uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-md z-20 hidden md:flex"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-md z-20 hidden md:flex"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-10 h-2 bg-gold' 
                    : 'w-2 h-2 bg-emerald-200 hover:bg-emerald-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">Empowering girls to lead since 2012.</p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-gold">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="text-emerald-900 font-bold ml-2">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
