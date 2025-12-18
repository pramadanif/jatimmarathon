import React, { useState } from 'react';
import { Shirt, ChevronDown, ChevronUp } from 'lucide-react';

const SizeChart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center mb-16 space-y-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shirt className="w-6 h-6 text-gold" />
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase">Official Merchandise</span>
          <Shirt className="w-6 h-6 text-gold" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-black text-maroon-900 tracking-tight">Jersey Size Chart</h2>
        <p className="text-maroon-800/60 font-medium text-lg max-w-2xl mx-auto">
          Pastikan kenyamanan lari Anda dengan ukuran yang tepat. Jersey didesain dengan potongan atletis.
        </p>
      </div>

      <div className="max-w-3xl mx-auto animate-slide-down">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/30 hover:border-gold transition-all duration-300 group">
          <img
            src="/sizechart.jpg"
            alt="Jersey Size Chart"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SizeChart;
