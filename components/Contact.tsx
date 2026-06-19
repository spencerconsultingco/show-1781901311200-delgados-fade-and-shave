'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Clock, Mail, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-primary py-24 sm:py-32">
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
              Get in Touch
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-white text-4xl sm:text-5xl font-800 mb-4"
          >
            Ready for a Cleaner Cut?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-white/65 text-lg max-w-xl mx-auto"
          >
            Drop us a message and we&apos;ll get back to you. Or just walk in during shop hours, we&apos;re always ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-brand-accent text-xl font-700 mb-6">
                Shop Info
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs tracking-widest uppercase mb-1">Phone</div>
                    <a
                      href="tel:5556305014"
                      className="font-body text-white font-600 text-base hover:text-brand-accent transition-colors"
                    >
                      (555) 630-5014
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs tracking-widest uppercase mb-1">Hours</div>
                    <div className="font-body text-white font-600 text-base">
                      Tue to Sat, 8am to 7pm
                    </div>
                    <div className="font-body text-white/50 text-sm mt-0.5">
                      Walk-ins welcome
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-secondary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs tracking-widest uppercase mb-1">Location</div>
                    <div className="font-body text-white font-600 text-base">
                      Tucson, AZ
                    </div>
                    <div className="font-body text-white/50 text-sm mt-0.5">
                      Serving Marana, Oro Valley, and Sahuarita
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs tracking-widest uppercase mb-1">Email</div>
                    <a
                      href="mailto:todd@thesitesmith.co"
                      className="font-body text-white font-600 text-base hover:text-brand-accent transition-colors"
                    >
                      Send Us a Message
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-secondary/30 pt-8">
              <p className="font-body text-white/55 text-sm leading-relaxed">
                Delgado&apos;s has been a cornerstone of Tucson barbering since 2009. We&apos;re a walk-in-friendly shop where first-timers leave feeling like regulars.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-brand-secondary/20 border border-brand-accent/30 p-12 text-center">
                <div className="w-16 h-16 bg-brand-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-white text-2xl font-700 mb-3">
                  Message Received
                </h3>
                <p className="font-body text-white/70 text-base">
                  Thanks for reaching out. We&apos;ll get back to you shortly. In the meantime, feel free to walk in during shop hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent text-white placeholder-white/30 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent text-white placeholder-white/30 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent text-white placeholder-white/30 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent text-white font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-brand-primary">Select a service</option>
                    <option value="Precision Fades" className="bg-brand-primary">Precision Fades</option>
                    <option value="Classic Straight Razor Shave" className="bg-brand-primary">Classic Straight Razor Shave</option>
                    <option value="Beard Trim & Shaping" className="bg-brand-primary">Beard Trim &amp; Shaping</option>
                    <option value="Lineup & Edge-Up" className="bg-brand-primary">Lineup &amp; Edge-Up</option>
                    <option value="Hot Towel Treatment" className="bg-brand-primary">Hot Towel Treatment</option>
                    <option value="Kids Cuts" className="bg-brand-primary">Kids&apos; Cuts</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need or any questions you have..."
                    rows={4}
                    className="w-full bg-brand-secondary/20 border border-brand-secondary/40 focus:border-brand-accent text-white placeholder-white/30 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-sm tracking-widest uppercase py-4 transition-all duration-200 hover:shadow-xl hover:shadow-brand-accent/20 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="font-body text-white/35 text-xs text-center">
                  We&apos;ll respond within one business day. Walk-ins always welcome during shop hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
