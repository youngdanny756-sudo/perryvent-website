import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-slate-400 border-t border-slate-800/80 pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 shrink-0 rounded-lg bg-slate-900 border border-amber-400/50 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="PerryVent Logo"
                  width={56}
                  height={56}
                  sizes="56px"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-heading">
                Perry<span className="text-amber-400">Vent</span> Consultancy
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Simplifying legal, NGO , tax, and corporate registration in Uganda through expert URSB filing,
              URA compliance, and immigration permits.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400/90 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Registered Ugandan Practice</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">All 12 Services</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">Meet the Founder</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Dewinton Road Office</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Practices</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-slate-200">Company & NGO Registration</Link></li>
              <li><Link href="/services" className="hover:text-slate-200">URA TIN & Tax Compliance</Link></li>
              <li><Link href="/services" className="hover:text-slate-200">URSB Annual Returns</Link></li>
              <li><Link href="/services" className="hover:text-slate-200">DCIC Work Permits & Passports</Link></li>
            </ul>
          </div>

          {/* Dewinton Road Office Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dewinton Rd Office</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Dewinton Road, opposite the Uganda National Cultural Centre, Kampala, Uganda.
                  <br />
                  P.O. Box 204862, Kampala, Uganda.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col text-slate-300">
                  <a href="tel:+256787171657" className="hover:text-white">+256 787 171 657</a>
                  <a href="tel:+256709927474" className="hover:text-white">+256 709 927 474</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href="mailto:Info@perryventconsultancy.co.ug" className="text-slate-300 hover:text-white break-all">
                  Info@perryventconsultancy.co.ug
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-slate-400 whitespace-nowrap">Mon - Fri: 8:00 AM - 5.00 PM</span>
                  <span className="text-slate-400 whitespace-nowrap">Sat: 9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PerryVent Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>URSB Registered</span>
            <span>·</span>
            <span>URA e-Tax Compliant</span>
            <span>·</span>
            <span>Dewinton Road, Kampala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
