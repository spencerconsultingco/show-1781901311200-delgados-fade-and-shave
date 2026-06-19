'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Jerome T.',
    text: "I've been going to Delgado's for four years and Marcus has never missed. My fade is always tight and he remembers exactly how I like it every single time.",
  },
  {
    name: 'Daniel R.',
    text: "Took my 8-year-old son here and the barber was patient, funny, and gave him the cleanest cut he's ever had. We're not going anywhere else.",
  },
  {
    name: 'Anthony V.',
    text: 'The straight razor shave alone is worth the trip. Hot towel, great technique, zero irritation. Felt like a brand new man walking out of there.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 sm:py-32">
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
              Client Stories
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-brand-primary text-4xl sm:text-5xl font-800 mb-4"
          >
            Tucson Keeps
            <br />
            <span className="text-brand-secondary">Coming Back</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-brand-text/60 text-lg max-w-xl mx-auto"
          >
            Don&apos;t take our word for it. Here&apos;s what the guys who sit in our chairs every week have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white border border-brand-primary/8 p-8 relative group hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-8 w-px h-8 bg-brand-accent" />
              <div className="flex gap-1 mb-5 mt-6">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-brand-accent fill-brand-accent"
                  />
                ))}
              </div>
              <p className="font-body text-brand-text/75 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-brand-accent" />
                <span className="font-body text-brand-primary font-700 text-sm tracking-wide">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="relative h-64 sm:h-80">
            <Image
              src="/images/gallery-2.jpg"
              alt="Delgado's Fade and Shave shop atmosphere"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.55) 100%)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="font-heading text-white text-2xl sm:text-3xl font-700 mb-2">
                Walk-ins always welcome.
              </p>
              <p className="font-body text-white/75 text-base mb-6">
                Tue to Sat, 8am to 7pm. No appointment needed.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
