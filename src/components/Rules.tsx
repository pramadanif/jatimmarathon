'use client';

import React, { useState } from 'react';
import { RULES } from '@/constants';
import { ShieldAlert, Plus, Minus, FileText } from 'lucide-react';

const Rules: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-6 max-w-5xl py-24">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-8 animate-fade-in-up">
          <div className="w-16 h-16 rounded-2xl bg-maroon-900 flex items-center justify-center shadow-lg shadow-maroon-900/20">
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-serif font-black text-maroon-900 leading-none tracking-tight">Syarat &<br />Ketentuan</h2>
          <p className="text-maroon-800/70 font-medium leading-relaxed font-sans">
            Keamanan Anda adalah prioritas kami. Seluruh aturan dirancang untuk menjamin sportivitas dan kenyamanan.
          </p>
          <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-maroon-900 w-5 h-5" />
              <span className="font-bold text-maroon-900">Legal Statement</span>
            </div>
            <p className="text-sm text-maroon-900/60 leading-relaxed">
              Pendaftaran menyatakan persetujuan mutlak atas semua regulasi Jatim Run 2026.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {RULES.map((rule, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 ${openIndex === idx ? 'bg-white shadow-soft border-l-4 border-maroon-900' : 'bg-transparent border border-stone-200 hover:bg-stone-50'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xl font-bold font-serif ${openIndex === idx ? 'text-maroon-900' : 'text-stone-400 group-hover:text-maroon-700'}`}>{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className={`text-xl font-bold ${openIndex === idx ? 'text-maroon-900' : 'text-maroon-900/80'} group-hover:text-maroon-900 transition-colors`}>{rule.title}</h3>
                </div>
                <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-maroon-900' : 'text-stone-400'}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-8 pl-[4.5rem] animate-fade-in-up">
                  <ul className="space-y-3">
                    {rule.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-maroon-800/70 leading-relaxed text-sm items-start"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
