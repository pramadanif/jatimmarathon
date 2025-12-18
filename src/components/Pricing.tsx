import React from 'react';
import { RACE_CATEGORIES } from '@/constants';
import { Tag, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <Reveal>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tight drop-shadow-lg">Investasi Kesehatan</h2>
          <p className="text-white/60 font-medium text-lg max-w-xl mx-auto">Amankan slotmu sekarang dengan harga terbaik dalam balutan marun.</p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {RACE_CATEGORIES.map((cat, idx) => (
          <Reveal key={cat.id} delay={idx * 0.15}>
            <div
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              {cat.id === '21k' && (
                <div className="absolute top-0 right-0 bg-gold text-maroon-900 text-[10px] font-black py-2 px-6 rounded-bl-3xl uppercase tracking-widest leading-none z-20">
                  POPULAR
                </div>
              )}

              <div className="w-16 h-16 rounded-3xl bg-maroon-50 flex items-center justify-center mb-8 relative z-10">
                <Tag className="w-8 h-8 text-maroon-900" />
              </div>

              <h3 className="text-lg font-bold text-stone-500 uppercase tracking-[0.2em] mb-2">{cat.name}</h3>
              <div className="text-6xl font-black text-maroon-900 mb-8 tracking-tighter">{cat.distance}</div>

              <div className="space-y-4 w-full mb-10 relative z-10">
                <div className="p-6 rounded-3xl bg-stone-50 border border-stone-100">
                  <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Normal Price</p>
                  <div className="text-2xl font-bold text-stone-400 line-through">
                    Rp {cat.price.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-maroon-900 text-white relative shadow-xl shadow-maroon-900/20 group-hover:shadow-maroon-900/40 transition-shadow duration-500">
                  <div className="absolute -top-3 left-6 bg-gold text-maroon-900 text-[9px] font-black px-3 py-1 rounded-full shadow-sm">EARLY BIRD</div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Limited Slots</p>
                  <div className="text-3xl font-black">
                    Rp {cat.earlyBird.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              <button className="w-full bg-white border-2 border-maroon-900 text-maroon-900 hover:bg-maroon-900 hover:text-white py-4 rounded-xl font-bold text-lg transition-all duration-300">
                DAFTAR SEKARANG
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium">
            <TrendingUp className="text-gold w-5 h-5" />
            Promo Early Bird terbatas. Amankan slot sebelum harga naik!
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Pricing;
