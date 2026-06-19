'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scissors, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[640px] max-h-[1080px] overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <img
            src="/images/hero.jpg"
            alt="Delgado's Fade and Shave barbershop interior"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-brand-accent" />
          <span className="text-brand-accent font-body text-xs tracking-[0.3em] uppercase font-600">
            Tucson, Arizona Since 2009
          </span>
          <div className="h-px w-12 bg-brand-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] mb-6"
        >
          Sharp Cuts.
          <br />
          <span className="text-brand-accent">Clean Lines.</span>
          <br />
          No Compromises.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-body text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-300 leading-relaxed"
        >
          Precision fades, classic straight razor shaves, and expert beard work from barbers who take pride in every single cut. Walk-ins welcome.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-xl hover:shadow-brand-accent/20 group"
          >
            Contact Us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-white/40 hover:border-brand-accent text-white hover:text-brand-accent font-body font-500 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
          >
            <Scissors size={16} />
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '15+', label: 'Years Experience' },
            { value: 'Walk-In', label: 'Friendly' },
            { value: 'Tue-Sat', label: '8am to 7pm' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-brand-accent text-2xl sm:text-3xl font-700">
                {stat.value}
              </div>
              <div className="font-body text-white/60 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
