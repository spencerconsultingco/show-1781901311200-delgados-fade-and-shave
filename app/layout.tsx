import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Delgado'S Fade & Shave | Precision Cuts & Straight Razor Shaves in Tucson, AZ",
  description:
    "Tucson's trusted barbershop since 2009. Precision fades, classic straight razor shaves, and beard shaping from experienced barbers who never rush a cut. Walk-ins welcome.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans3.variable}`}>
      <body className="bg-brand-background text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
