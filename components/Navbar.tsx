
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, SCHOOL_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Area */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="fas fa-graduation-cap text-gold text-xl"></i>
          </div>
          <span className={`font-serif font-bold text-sm md:text-base leading-[1.1] max-w-[180px] md:max-w-[220px] transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
            {SCHOOL_NAME}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-wider hover:text-gold transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="bg-gold hover:bg-gold-dark text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-emerald-900' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col space-y-5 animate-slideDown border-t border-gray-100">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-800 text-lg font-semibold hover:text-emerald-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <hr className="border-gray-100" />
          <button className="bg-emerald-800 text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow-md">
            Admissions 2024-25
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
