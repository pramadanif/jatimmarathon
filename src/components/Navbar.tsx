'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Categories', href: '#categories', id: 'categories' },
    { name: 'Schedule', href: '#schedule', id: 'schedule' },
    { name: 'Rules', href: '#rules', id: 'rules' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-stone-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in-up">
          <span className={`font-serif font-black text-2xl tracking-tighter transition-all duration-300 ${isScrolled ? 'text-maroon-900' : 'text-white'}`}>
            JATIM<span className="text-gold">HALF</span> <span className="font-light tracking-widest text-sm align-middle ml-2">2026</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-gold relative group ${activeTab === link.id
                ? 'text-gold'
                : (isScrolled ? 'text-stone-600' : 'text-white/80')
                }`}
            >
              {link.name.toUpperCase()}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300 ${activeTab === link.id ? 'w-full' : ''}`}></span>
            </a>
          ))}
          <button className={`px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 border-2 ${isScrolled ? 'border-maroon-900 text-maroon-900 hover:bg-maroon-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-maroon-900'}`}>
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 transition-transform duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-maroon-900' : 'text-white'} transition-colors duration-300`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-maroon-900' : 'text-white'} transition-colors duration-300`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-maroon-950 absolute top-full left-0 right-0 shadow-2xl border-t border-white/10 p-8 flex flex-col gap-6 animate-slide-up">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-serif font-bold text-2xl hover:text-gold transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-maroon-900 py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl transition-all duration-300 active:scale-95">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
