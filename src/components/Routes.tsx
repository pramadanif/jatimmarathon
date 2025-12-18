import React, { useState } from 'react';
import { MapPin, Map, X, ZoomIn } from 'lucide-react';

const Routes: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const routes = [
    {
      name: '5K Fun Run',
      image: '/route_5k.jpg',
      description: 'Rute santai untuk pemula dan keluarga',
      distance: '5K',
      textColor: 'text-stone-800'
    },
    {
      name: '10K Run Race',
      image: '/route_10k.jpg',
      description: 'Rute menantang untuk pelari berpengalaman',
      distance: '10K',
      textColor: 'text-maroon-900'
    },
    {
      name: '21K Half Marathon',
      image: '/route_25k.jpg',
      description: 'Rute ultimate untuk juara marathon',
      distance: '21K',
      textColor: 'text-gold-dark'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Map className="w-6 h-6 text-gold" />
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs">OFFICIAL ROUTES</p>
          <MapPin className="w-6 h-6 text-gold" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-black text-maroon-900 tracking-tight">Jelajahi Surabaya</h2>
        <p className="text-maroon-900/60 font-medium text-lg max-w-2xl mx-auto">Rute lari ikonik melewati landmark bersejarah dengan kenyamanan & keamanan maksimal.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Image Container */}
            <div
              className="relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(route.image)}
            >
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-black text-maroon-900 text-sm shadow-lg">
                {route.distance}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-maroon-900" />
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 relative">
              <h3 className="text-2xl font-serif font-bold mb-3 text-maroon-900">{route.name}</h3>
              <p className="text-stone-500 text-sm font-medium leading-relaxed mb-6">{route.description}</p>

              <button
                onClick={() => setSelectedImage(route.image)}
                className="w-full py-4 rounded-xl bg-stone-50 text-maroon-900 font-bold text-xs uppercase tracking-widest hover:bg-maroon-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Lihat Detail Peta
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 text-center animate-fade-in-up flex flex-col md:flex-row items-center justify-between gap-8 px-12" style={{ animationDelay: '0.5s' }}>
        <div className="text-left">
          <p className="text-xs font-bold text-gold mb-2 uppercase tracking-[0.2em]">Race Central</p>
          <h3 className="text-2xl md:text-3xl font-serif font-black text-maroon-900">Start & Finish Line</h3>
        </div>
        <div className="h-px bg-stone-200 flex-grow hidden md:block mx-8"></div>
        <div className="text-right">
          <p className="text-xl md:text-2xl font-bold text-stone-700 flex items-center gap-3">
            <MapPin className="text-maroon-900 w-6 h-6" />
            TUGU PAHLAWAN
          </p>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-maroon-950/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <X className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full Route Map"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Routes;
