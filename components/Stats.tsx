
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group p-6 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className={`fas ${stat.icon} text-emerald-800 text-2xl`}></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-1">{stat.value}</h3>
              <p className="text-emerald-700 font-medium uppercase text-xs tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
