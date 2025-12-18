import React from 'react';
import { Package, Flag, MapPin, Clock } from 'lucide-react';
import Reveal from './Reveal';

const Schedule: React.FC = () => {
  const events = [
    {
      date: '30 JAN 2026',
      time: '09:00 - 19:00 WIB',
      title: 'Race Pack Collection Day 1',
      location: 'Tugu Pahlawan, Surabaya',
      icon: Package,
    },
    {
      date: '31 JAN 2026',
      time: '09:00 - 19:00 WIB',
      title: 'Race Pack Collection Day 2',
      location: 'Tugu Pahlawan, Surabaya',
      icon: Package,
    },
    {
      date: '01 FEB 2026',
      time: '04:00 WIB - Selesai',
      title: 'Race Day: Jatim Run 2026',
      location: 'Start & Finish: Tugu Pahlawan',
      icon: Flag,
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <Reveal>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-maroon-900 tracking-tight">Jadwal Penting</h2>
          <p className="text-maroon-900/60 font-medium text-lg">Persiapkan dirimu untuk petualangan lari terbaik tahun ini.</p>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto space-y-8">
        {events.map((event, idx) => (
          <Reveal key={idx} delay={idx * 0.15}>
            <div
              className="group bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl hover:shadow-2xl hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 bottom-0 w-2 ${idx === 2 ? 'bg-gold' : 'bg-maroon-900'}`}></div>

              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className={`p-6 rounded-2xl ${idx === 2 ? 'bg-gold text-maroon-900' : 'bg-maroon-50 text-maroon-900'} group-hover:scale-110 transition-transform duration-500`}>
                  <event.icon className="w-8 h-8" />
                </div>

                <div className="flex-grow space-y-2 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
                    <span className="bg-stone-100 text-maroon-900 px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase">{event.date}</span>
                    <span className="flex items-center gap-2 text-stone-500 text-sm font-medium"><Clock className="w-4 h-4 text-gold" /> {event.time}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-maroon-900">{event.title}</h3>
                  <p className="flex items-center justify-center md:justify-start gap-2 text-stone-500 font-medium">
                    <MapPin className="w-4 h-4 text-maroon-900" /> {event.location}
                  </p>
                </div>

                <div className="hidden md:block">
                  <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-maroon-900 hover:text-white hover:border-maroon-900 transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <div className="mt-12 text-center">
          <p className="text-maroon-900/40 text-sm font-bold tracking-widest uppercase">* Lokasi terpusat di Area Monumen Tugu Pahlawan</p>
        </div>
      </Reveal>
    </div>
  );
};

export default Schedule;
