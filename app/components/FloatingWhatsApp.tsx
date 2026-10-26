"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/256787171657?text=${encodeURIComponent(
    "Hello PerryVent Consultancy, I would like to inquire about your business registration and tax compliance services."
  )}`;

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 md:bottom-6 md:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-2xl active:scale-95 md:h-auto md:w-auto md:justify-start md:px-4 md:py-3"
        aria-label="Chat directly on WhatsApp"
      >
        <span className="relative hidden h-3 w-3 md:flex">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="h-5 w-5 fill-current" />
        <span className="hidden text-xs font-bold tracking-wide uppercase md:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}