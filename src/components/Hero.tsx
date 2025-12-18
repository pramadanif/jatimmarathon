'use client';

import React, { useState, useEffect } from 'react';
import { EVENT_DATE } from '@/constants';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-900 pt-20">
      {/* Background Elements - No breathing animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-maroon-600/10 rounded-full blur-[120px] opacity-60"></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80"
          alt="Marathon Background"
          className="w-full h-full object-cover opacity-20 grayscale contrast-125 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white space-y-10 text-center lg:text-left">

          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-block border border-gold/30 px-4 py-1.5 rounded-full bg-gold/5 backdrop-blur-sm">
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Event Terbesar Jawa Timur</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
              JATIM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">HALF</span><br />
              MARATHON
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Run Together, Fun Together! Bergabunglah dalam perhelatan olahraga ikonik di jantung Kota Surabaya.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 text-white/80">
              <Calendar className="text-gold w-5 h-5" />
              <span className="tracking-wide">1 FEBRUARI 2026</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="text-gold w-5 h-5" />
              <span className="tracking-wide">TUGU PAHLAWAN, SURABAYA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="w-full sm:w-auto bg-white text-maroon-900 hover:bg-gold hover:text-maroon-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group">
              DAFTAR SEKARANG <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              LIHAT RUTE
            </button>
          </div>
        </div>

        {/* Countdown Card */}
        <div
          className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] relative animate-fade-in-up hover:bg-white/10 transition-colors duration-500"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-10 opacity-50"></div>

          <h3 className="text-sm font-bold mb-8 text-gold tracking-[0.3em] uppercase text-center border-b border-white/10 pb-4">Countdown To Race</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={unit.label} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-black text-white mb-2 tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
