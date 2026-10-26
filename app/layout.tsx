import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// 1. Load Google Fonts without layout shift or external network delays
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

// 2. Search Engine Optimization (SEO) for Kampala and International Clients
export const metadata: Metadata = {
  title: 'PerryVent Consultancy | Business Registration & Tax Compliance Uganda',
  description:
    'Premier legal documentation, URSB company registration, URA tax compliance, and immigration permits on Dewinton Road, Kampala, Uganda.',
  keywords: [
    'Company Registration Uganda',
    'URSB Business Name Reservation',
    'URA TIN Registration',
    'Tax Advisory Kampala',
    'NGO Registration Uganda',
    'Work Permits Uganda',
    'Dewinton Road Consultancy',
  ],
  openGraph: {
    title: 'PerryVent Consultancy | Start Your Business Legally and Confidently',
    description:
      'Professional business registration, tax compliance, and legal documentation in Kampala, Uganda.',
    locale: 'en_UG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 text-slate-800">
        {/* The children prop is where each individual page (Home, Services, etc.) will render */}
        <Navbar />
        <main className='flex-1'>
        {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
