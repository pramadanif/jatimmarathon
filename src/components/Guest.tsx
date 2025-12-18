import React from 'react';
import { Music, PlayCircle } from 'lucide-react';

const Guest: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-10 bg-gold/5 rounded-[3rem] -rotate-3 blur-3xl"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
            <img
              src="/guest_star_brena.jpg"
              alt="DJ Brena"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-900/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <div className="animate-fade-in-up">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">Featured Artist</p>
                <h3 className="text-5xl font-serif font-black text-white tracking-widest">DJ BRENA</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left animate-fade-in-up">
          <div className="inline-block border border-gold/30 px-6 py-2 rounded-full bg-gold/10 backdrop-blur-sm">
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Entertainment Stage</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-black leading-none text-white">
            Run Hard, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Party Harder.</span>
          </h2>

          <p className="text-xl text-white/60 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
            Tutup hari marathonmu dengan dentuman musik yang memompa adrenalin. Penampilan live eksklusif di garis finish.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-2 border-maroon-900 grayscale hover:grayscale-0 transition-all duration-300" alt="User" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-maroon-900 bg-gold text-maroon-900 flex items-center justify-center font-bold text-xs">+2k</div>
            </div>
            <p className="text-white/40 text-sm font-medium tracking-wide">Join thousands of runners!</p>
          </div>

          <button className="flex items-center gap-4 bg-white text-maroon-900 px-10 py-5 rounded-2xl font-bold hover:bg-gold transition-all duration-300 mx-auto lg:mx-0 shadow-2xl hover:shadow-glow group">
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            WATCH PROMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
