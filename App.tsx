
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AcademicPrograms from './components/AcademicPrograms';
import Testimonials from './components/Testimonials';
import { SCHOOL_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Stats />

        {/* Introduction Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef1460375e?q=80&w=1200&auto=format&fit=crop" 
                alt="Students laughing" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl shadow-xl z-20 text-white hidden md:block">
                <p className="text-4xl font-serif font-bold">#1</p>
                <p className="text-sm font-bold uppercase tracking-widest">Girls Boarding School</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-gold font-bold tracking-widest uppercase text-sm">Welcome to {SCHOOL_NAME}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 leading-tight">Where Leaders are <span className="italic">Grown</span>, Not Made.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Ecole Globale, we believe in providing a sanctuary of learning where every girl is encouraged to explore her boundaries. Our curriculum is designed to spark curiosity, while our campus life fosters lifelong sisterhood.
              </p>
              <ul className="space-y-4">
                {['Empowering Environment', 'Global Perspective', 'Holistic Growth', 'Values Driven'].map((point) => (
                  <li key={point} className="flex items-center text-emerald-900 font-semibold">
                    <i className="fas fa-check-circle text-gold mr-3"></i> {point}
                  </li>
                ))}
              </ul>
              <button className="mt-4 bg-emerald-800 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-900 transition-all flex items-center">
                Read our Story <i className="fas fa-arrow-right ml-3"></i>
              </button>
            </div>
          </div>
        </section>

        <AcademicPrograms />

        {/* Campus Life Section */}
        <section id="campus" className="py-24 bg-emerald-900 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h3 className="text-gold font-bold tracking-widest uppercase text-sm mb-4 italic">The Global Life</h3>
                <h2 className="text-4xl md:text-6xl font-serif font-bold">A World Beyond Academics</h2>
              </div>
              <p className="text-emerald-100 max-w-sm mb-2">
                Life at Ecole Globale is an adventure. From high-altitude trekking to debating at international MUNs, our students live it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Olympic Pool', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop' },
                { title: 'Equestrian Center', img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop' },
                { title: 'Innovation Lab', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
                { title: 'Art Studio', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop' }
              ].map((item, idx) => (
                <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-sm text-gold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explore <i className="fas fa-chevron-right ml-1"></i></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section id="admissions" className="py-24 bg-gold">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Begin Your Journey Today</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join a global network of empowered women. Admissions are now open for the 2024-2025 academic session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-emerald-900 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl">
                Apply for Admission
              </button>
              <button className="w-full sm:w-auto bg-white text-gold px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                Request Prospectus
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-emerald-900"></i>
              </div>
              <span className="font-serif font-bold text-xl leading-tight">{SCHOOL_NAME}</span>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Dehradun's premier destination for girls' holistic education. Building a legacy of excellence since 2012.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-emerald-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-emerald-100">
              <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white">Boarding Life</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Admissions</h4>
            <ul className="space-y-4 text-sm text-emerald-100">
              <li><a href="#" className="hover:text-white">Online Application</a></li>
              <li><a href="#" className="hover:text-white">Entrance Test Info</a></li>
              <li><a href="#" className="hover:text-white">Scholarships</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-emerald-100">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gold"></i>
                <span>Village Horawalla, Central Hope Town, Dehradun, Uttarakhand, India</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-gold"></i>
                <span>+91 95572 91888</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-gold"></i>
                <span>admissions@ecoleglobale.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-emerald-800 text-center text-xs text-emerald-400">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME}. All Rights Reserved. Designed with Love.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
