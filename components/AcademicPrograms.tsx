
import React from 'react';
import { PROGRAMS } from '../constants';

const AcademicPrograms: React.FC = () => {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Our Curricula</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900">Academic Pathways</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a spectrum of internationally accredited programs designed to challenge, inspire, and prepare students for the world's finest universities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {program.tags.map(tag => (
                    <span key={tag} className="bg-emerald-800/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-emerald-900 mb-4">{program.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <button className="flex items-center text-emerald-800 font-bold hover:text-gold transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
