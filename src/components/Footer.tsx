import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-2xl tracking-tighter text-white">
                JATIM<span className="text-gold">HALF</span><br />MARATHON
              </span>
            </div>
            <p className="text-white/60 font-medium leading-relaxed max-w-xs">
              Mendorong gaya hidup sehat dan sportivitas. Mari berlari bersama di bawah kibaran semangat Jawa Timur!
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-white/5 hover:bg-gold hover:text-maroon-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-gold"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-bold mb-8 text-gold uppercase tracking-[0.2em]">Link Cepat</h4>
            <ul className="space-y-4 text-white/70 font-medium text-sm">
              {['Home', 'Kategori Lomba', 'Jadwal Acara', 'Syarat & Ketentuan'].map((link, idx) => (
                <li key={idx} className="hover:translate-x-2 transition-transform duration-300">
                  <a href={`#${link.toLowerCase().replace(/ /g, '')}`} className="hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-bold mb-8 text-gold uppercase tracking-[0.2em]">Kontak Kami</h4>
            <ul className="space-y-5 text-white/70 font-medium text-sm">
              <li className="flex items-center gap-4 hover:text-gold transition-colors duration-300">
                <Mail className="w-5 h-5 text-gold/80" />
                <span>info@jatimrun2026.com</span>
              </li>
              <li className="flex items-center gap-4 hover:text-gold transition-colors duration-300">
                <Phone className="w-5 h-5 text-gold/80" />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-sm font-bold mb-8 text-gold uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-white/50 text-sm">Dapatkan update terbaru seputar race.</p>
            <div className="flex gap-2 relative">
              <input
                type="email"
                placeholder="Email anda"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold focus:scale-[1.02] transition-all duration-300 text-white placeholder:text-white/20 text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-gold hover:bg-white hover:text-maroon-900 px-4 rounded-md font-bold transition-all text-maroon-900 text-xs tracking-wider">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p>© 2026 JATIM HALF MARATHON. REGAL EXCELLENCE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors duration-300">COOKIE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
