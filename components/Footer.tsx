import Image from 'next/image';
import { Phone, Clock, Scissors } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Delgado'S Fade & Shave Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-brand-accent text-base font-700 leading-tight">
                  Delgado&apos;S
                </span>
                <span className="font-heading text-white/80 text-xs tracking-widest uppercase">
                  Fade &amp; Shave
                </span>
              </div>
            </div>
            <p className="font-body text-white/55 text-sm leading-relaxed max-w-xs">
              Tucson&apos;s trusted barbershop since 2009. Precision fades, classic straight razor shaves, and expert barbers who never rush a cut.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Scissors size={14} className="text-brand-accent" />
              <span className="font-body text-white/40 text-xs tracking-widest uppercase">
                Marana &bull; Oro Valley &bull; Sahuarita
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-brand-accent text-sm font-700 tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Precision Fades',
                'Straight Razor Shave',
                'Beard Trim & Shaping',
                'Lineup & Edge-Up',
                'Hot Towel Treatment',
                "Kids' Cuts",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-body text-white/55 text-sm hover:text-brand-accent transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-brand-accent text-sm font-700 tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:5556305014"
                  className="font-body text-white/55 text-sm hover:text-brand-accent transition-colors"
                >
                  (555) 630-5014
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-body text-white/55 text-sm">Tue to Sat</div>
                  <div className="font-body text-white/55 text-sm">8am to 7pm</div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-body font-700 text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            &copy; {currentYear} Delgado&apos;S Fade &amp; Shave. All rights reserved.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/30 hover:text-brand-accent text-xs transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
