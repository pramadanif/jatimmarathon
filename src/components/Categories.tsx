import React from 'react';
import { RACE_CATEGORIES } from '@/constants';
import { CheckCircle2, Map as MapIcon, Info } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-maroon-900 tracking-tight drop-shadow-lg">Kategori Lomba</h2>
        <p className="text-maroon-900/60 font-medium text-lg">
          Pilih tantanganmu sesuai dengan tingkat kesiapan. Semua kategori mendapatkan fasilitas eksklusif dalam balutan warna kemenangan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {RACE_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.id}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className={`h-2 w-full ${cat.id === '21k' ? 'bg-gold' : cat.id === '10k' ? 'bg-maroon-800' : 'bg-maroon-600'}`}></div>
            <div className="p-10 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 tracking-wide uppercase">{cat.name}</h3>
                  <div className="flex items-center gap-1 text-maroon-900 font-black text-5xl mt-2 tracking-tighter">
                    {cat.distance}
                  </div>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl text-maroon-900 group-hover:bg-gold group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  <MapIcon className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] border-b border-stone-100 pb-2">Fasilitas & Keuntungan</p>
                {cat.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-stone-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-stone-100 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-xs text-stone-400 font-bold uppercase tracking-widest">
                  <Info className="w-4 h-4" />
                  Minimal usia {cat.minAge} tahun
                </div>
                <button className="w-full bg-maroon-900 text-white group-hover:bg-gold group-hover:text-maroon-900 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                  Pilih Kategori <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-maroon-900 text-white p-10 md:p-14 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="space-y-3 relative z-10 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-serif font-black">Butuh Bantuan Pendaftaran?</h3>
          <p className="text-white/70 text-lg font-light max-w-xl">Kami menyediakan jalur khusus untuk komunikasi komunitas dan pendaftaran kolektif.</p>
        </div>
        <a href="https://wa.me/#" className="bg-white text-maroon-900 hover:bg-gold px-10 py-5 rounded-2xl font-bold text-lg shadow-xl relative z-10 transition-all duration-300 hover:shadow-2xl active:scale-95">
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Categories;
