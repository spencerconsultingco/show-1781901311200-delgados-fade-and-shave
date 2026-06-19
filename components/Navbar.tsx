'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Craft', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-primary shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Delgado'S Fade & Shave Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-heading text-brand-accent text-lg font-700 leading-tight tracking-wide">
                Delgado&apos;S
              </span>
              <span className="font-heading text-white text-sm font-500 tracking-widest uppercase">
                Fade &amp; Shave
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-brand-accent font-body font-500 text-sm tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-6 py-2.5 transition-all duration-200 hover:shadow-lg"
            >
              Contact Us
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-brand-secondary/30">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-brand-accent font-body font-500 text-base tracking-widest uppercase transition-colors duration-200 py-2 border-b border-brand-secondary/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-6 py-3 text-center mt-2 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
