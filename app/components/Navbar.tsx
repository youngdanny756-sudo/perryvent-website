"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* 1. Top Announcement / Micro-bar */}
      <div className="bg-[#071326] text-slate-300 text-[10px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
             
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="tel:+256787171657"
              className="hidden sm:inline hover:text-white transition-colors"
            >
              
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://wa.me/256787171657?text=Hello%20PerryVent%20Consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0B1A30]/95 backdrop-blur-md border-b border-slate-800/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3 md:gap-8">
            
            {/* Zone 1: Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-lg bg-slate-900 border border-amber-400/50 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="PerryVent Pv Monogram Logo"
                  width={56}
                  height={56}
                  sizes="(min-width: 640px) 56px, 44px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight font-heading">
                  Perry<span className="text-amber-400">Vent</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-300 font-medium">
                  Consultancy Uganda
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links using Next.js <Link> */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Zone 3: Direct Phone & Consultation CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="tel:+256787171657"
                className="flex items-center gap-2 text-xs font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+256 787 171 657</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-md transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden bg-[#071326] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-11 text-left px-3 py-3 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-11 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}