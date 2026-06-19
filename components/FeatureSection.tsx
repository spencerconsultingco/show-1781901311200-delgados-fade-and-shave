'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  'Over 15 years of precision barbering experience behind every chair',
  'Marcus trained under master barbers in Chicago before coming home to Tucson',
  'Professional-grade tools and products on every single client',
  'We never rush a cut. Ever. You leave looking intentional or you come back.',
  'Walk-in friendly, but regulars always feel right at home',
  'Serving all of Tucson including Marana, Oro Valley, and Sahuarita',
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="feature"
      className="bg-brand-primary py-24 sm:py-32 overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/images/gallery-1.jpg"
                alt="Marcus cutting a client's hair at Delgado's"
                width={640}
                height={720}
                className="w-full h-[480px] sm:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-brand-accent p-6 sm:p-8 max-w-[200px]">
              <div className="font-heading text-brand-primary text-4xl sm:text-5xl font-900 leading-none">
                15+
              </div>
              <div className="font-body text-brand-primary/80 text-xs tracking-widest uppercase mt-2 font-600">
                Years Cutting
                <br />Tucson Sharp
              </div>
            </div>

            <div className="absolute top-6 left-6 bg-brand-primary/80 backdrop-blur-sm border border-brand-accent/30 px-4 py-3">
              <div className="font-body text-brand-accent text-xs tracking-widest uppercase font-600">
                Since 2009
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-brand-accent font-body text-xs tracking-[0.3em] uppercase font-600">
                Why Delgado&apos;s
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-white text-4xl sm:text-5xl font-800 mb-6 leading-[1.1]"
            >
              The Chair You Keep
              <br />
              <span className="text-brand-accent">Coming Back To</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-white/70 text-base leading-relaxed mb-8"
            >
              Delgado&apos;s isn&apos;t a chain. It&apos;s a shop with a name behind it and a standard to uphold. Marcus built this place on the idea that a great haircut isn&apos;t a luxury, it&apos;s a baseline. Every man who sits in this chair gets the same care whether it&apos;s his first visit or his hundredth.
            </motion.p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-brand-accent flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-white/75 text-sm leading-relaxed">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-xl hover:shadow-brand-accent/20 group"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
