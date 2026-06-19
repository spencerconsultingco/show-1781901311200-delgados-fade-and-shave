'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Sparkles, Brush, BadgeCheck, Timer, Users } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Precision Fades',
    description:
      'From skin fades to tapers, every cut is executed with sharp clipper work and a steady hand. Marcus and the crew know how to read your hair and deliver a fade that lasts.',
  },
  {
    icon: Sparkles,
    name: 'Classic Straight Razor Shave',
    description:
      'A full hot-towel prep, premium shave cream, and expert straight razor technique. Zero irritation, maximum smoothness. A ritual worth making time for.',
  },
  {
    icon: Brush,
    name: 'Beard Trim & Shaping',
    description:
      'Clean lines, defined edges, and a shape that complements your face. Whether you want a tight beard or a styled natural look, we dial it in every time.',
  },
  {
    icon: BadgeCheck,
    name: 'Lineup & Edge-Up',
    description:
      'Crisp hairlines, defined temples, and clean edges that hold your look together. The detail work that separates a good cut from a great one.',
  },
  {
    icon: Timer,
    name: 'Hot Towel Treatment',
    description:
      'Warm towels, a moment to exhale, and skin that feels refreshed. Included with your shave or added to any service for a full premium experience.',
  },
  {
    icon: Users,
    name: "Kids' Cuts",
    description:
      "Patient barbers, easy conversation, and a cut that will have mom impressed at pickup. We make the chair a comfortable place for boys of every age." ,
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-brand-accent" />
            <span className="text-brand-accent font-body text-xs tracking-[0.3em] uppercase font-600">
              What We Do
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-brand-primary text-4xl sm:text-5xl font-800 mb-4"
          >
            Built for the Man Who
            <br />
            <span className="text-brand-secondary">Cares How He Looks</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-brand-text/65 text-lg max-w-2xl mx-auto"
          >
            Every service at Delgado&apos;s is carried out with professional-grade tools, careful technique, and the kind of attention that makes a real difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group bg-white border border-brand-primary/8 p-8 hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent group-hover:h-full transition-all duration-400" />
                <div className="w-12 h-12 bg-brand-primary/8 flex items-center justify-center mb-5 group-hover:bg-brand-accent/15 transition-colors duration-300">
                  <Icon size={22} className="text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-brand-primary text-xl font-700 mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-brand-text/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-lg group"
          >
            Contact Us
            <Scissors size={15} className="group-hover:rotate-12 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
