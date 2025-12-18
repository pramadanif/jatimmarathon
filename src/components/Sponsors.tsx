import React from 'react';
import { SPONSORS } from '@/constants';

const Sponsors: React.FC = () => {
  return (
    <div className="container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-4 animate-fade-in-up">
          <div className="h-px w-12 bg-maroon-900/10"></div>
          <p className="text-maroon-900/40 font-bold uppercase tracking-[0.3em] text-xs">OFFICIAL PARTNERS & SPONSORS</p>
          <div className="h-px w-12 bg-maroon-900/10"></div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap items-center">
            {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                className="flex-shrink-0 group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-10 md:h-14 w-auto object-contain transition-all duration-300 grayscale-0 opacity-80 group-hover:opacity-100"
                  title={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
