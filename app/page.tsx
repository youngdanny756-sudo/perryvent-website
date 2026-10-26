"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  FileCheck2,
  Building2,
  Receipt,
  Scale,
  CalendarCheck,
  HeartHandshake,
  ArrowRight,
  ChevronDown,
  Star,
  MapPin,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredServices = [
    {
      title: "Business Name Reservation",
      timeline: "24 – 48 Hours",
      desc: "Comprehensive trademark and availability searches on the URSB registry with official 30-day reservation certificate.",
      icon: FileCheck2,
    },
    {
      title: "Company Registration (LLC)",
      timeline: "3 – 5 Days",
      desc: "Full incorporation of Private Limited Companies including MEMARTS, Form 20, and Certificate of Incorporation.",
      icon: Building2,
    },
    {
      title: "TIN Registration (Individual & Company)",
      timeline: "1 – 2 Days",
      desc: "Complete digital filing with Uganda Revenue Authority (URA) and instant portal activation for trading and banking.",
      icon: Receipt,
    },
    {
      title: "Tax Filing & URA Compliance",
      timeline: "Monthly Retainers",
      desc: "Proactive filing of Income Tax, PAYE, VAT, and Withholding Tax returns to prevent devastating URA penal interest.",
      icon: Scale,
    },
    {
      title: "Annual Returns Filing",
      timeline: "2 – 3 Days",
      desc: "Maintaining active corporate legal status with URSB, ensuring eligibility for tenders and clean bank compliance.",
      icon: CalendarCheck,
    },
    {
      title: "NGO & Non-Profit Registration",
      timeline: "Specialized",
      desc: "Licensing with the National Bureau for NGOs, drafting constitutions, and district local government MoUs.",
      icon: HeartHandshake,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We analyze your business objectives, determine the ideal legal entity, and identify exact statutory requirements.",
    },
    {
      step: "02",
      title: "Document Preparation",
      desc: "We draft your MEMARTS, resolutions, or URA tax schedules according to strict Ugandan commercial legal standards.",
    },
    {
      step: "03",
      title: "Government Agency Filing",
      desc: "Our Dewinton Road team submits your dossier through URSB, URA, or DCIC portals and expedites internal reviews.",
    },
    {
      step: "04",
      title: "Certified Handover",
      desc: "You receive your official certificates, TIN logins, and tax clearance certificates with guidance on remaining compliant.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to register a company in Uganda?",
      a: "Once your business name is reserved with URSB and all director identification details are provided, company incorporation typically takes 3 to 5 business days.",
    },
    {
      q: "Do I need to visit your office on Dewinton Road in person?",
      a: "While you are always warmly welcome to visit us on Dewinton Road, Kampala, we also offer a 100% digital onboarding process via WhatsApp and email for your convenience.",
    },
    {
      q: "What is required to obtain an individual or company TIN?",
      a: "For an Individual TIN, you only need your National ID (NIN) and registered phone number. For a company TIN, you need the Certificate of Incorporation and directors' TINs.",
    },
    {
      q: "Can you assist foreign investors with Ugandan work permits?",
      a: "Yes. We handle Class G2 (investors/trade), Class B (agriculture), and Class F (employment) permits through the DCIC portal, coordinating all security and immigration clearances.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION WITH DIAGONAL FLYER GEOMETRY */}
      <section className="relative overflow-hidden bg-[#0A192F] text-white pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pt-16 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Headline & CTAs) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dewinton Road, Kampala · Legal & Tax Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-[1.15]">
                Start Your Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  Legally and Confidently
                </span>{" "}
                in Uganda.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We remove the bureaucratic friction from your entrepreneurial journey. From URSB company
                registration and URA TIN setup to annual return filings and work permits—we deliver flawless compliance.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Link>
                <a
                  href="https://wa.me/256787171657?text=Hello%20PerryVent%20Consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 sm:gap-4 text-xs">
                <div>
                  <div className="text-2xl font-bold text-amber-400 font-heading">1,200+</div>
                  <div className="text-slate-400 text-xs">Businesses Formed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400 font-heading">100%</div>
                  <div className="text-slate-400 text-xs">Compliance Record</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400 font-heading">24–48h</div>
                  <div className="text-slate-400 text-xs">Rapid Turnaround</div>
                </div>
              </div>
            </div>

            {/* Right Column: Confident Photo with Red Top (Home Hero) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 to-amber-500 rounded-3xl transform rotate-2 opacity-80 shadow-2xl"></div>
                <div className="relative bg-[#071326] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
                  <Image
                    src="/assets/founder-hero.jpg"
                    alt="PerryVent Founder - Kampala Uganda"
                    width={450}
                    height={520}
                    priority
                    className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-white text-center">
                    <h3 className="text-sm font-bold font-heading">PerryVent Consultancy</h3>
                    <p className="text-xs text-amber-400">Dewinton Road, Central Kampala</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Diagonal geometric cut into next section */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-50 [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* 2. STATUTORY TRUST STRIP */}
      <section className="bg-white border-b border-slate-200 py-6 -mt-2 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 text-xs">
            <div>
              <span className="block text-slate-400 font-semibold uppercase">URSB Registered</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">Company Incorporation</span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">URA e-Tax Partner</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">TIN & Tax Returns</span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">DCIC Compliant</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">Work Permits & Passports</span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">PDPO Certified</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">Data Protection Filing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Matching Flyer) */}
      <section className="py-14 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">What We Help You With</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Professional Business & Document Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Precision filing and compliance for Ugandan entrepreneurs, corporate boards, and NGOs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{service.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    {service.timeline}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-slate-900 hover:text-amber-600"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1A30] text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider"
          >
            <span>View All 12 Consultancy Services</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 4. "WHY CHOOSE US" WITH FOUNDER IN NAVY BLAZER (ARMS CROSSED) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#071326] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image: Modern Arms-Crossed Navy Blazer Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 bg-amber-400 rounded-3xl transform -rotate-2 opacity-70"></div>
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl">
                  <Image
                    src="/assets/founder-services.jpg"
                    alt="PerryVent Founder - Why Choose Us"
                    width={400}
                    height={460}
                    className="w-full h-[440px] object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-slate-950/90 text-center">
                    <p className="text-xs font-semibold text-amber-300">
                      "We treat your compliance with the gravity your business deserves."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillars */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  The PerryVent Standard
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                  Why Ugandan Entrepreneurs & NGOs Trust Us
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Navigating URA assessments and the Registrar of Companies requires absolute legal precision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">Zero URA Penalty Assurance</h4>
                  <p className="text-slate-400 leading-relaxed">
                    We audit and submit returns proactively before deadlines, shielding you from punitive taxes.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">Rapid Turnaround</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Name reservations in 24 hours. Company incorporation in 3–5 days. No endless waiting.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">Dewinton Rd Presence</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Located in central Kampala next to key government ministries and courts for physical follow-ups.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">100% Confidentiality</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Your financial statements, beneficial ownership records, and passports are guarded securely.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. "HOW IT WORKS" (4-STEP PROCESS) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">The Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              How We Get Your Business Compliant
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A transparent, 4-step path from your initial inquiry to certified documents in hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0B1A30] text-amber-400 font-extrabold flex items-center justify-center mb-4 font-mono">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading">{step.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "MEET THE FOUNDER" (SEATED SMILING PHOTO IN BLACK SUIT) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-amber-50/40 border-y border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -inset-2 bg-amber-400/40 rounded-3xl transform rotate-2"></div>
                  <Image
                    src="/assets/founder-about.jpg"
                    alt="Perry Salama - Founder PerryVent Consultancy"
                    width={400}
                    height={460}
                    className="relative rounded-2xl w-full h-[360px] sm:h-[420px] object-cover object-top shadow-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Leadership & Expertise</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  A Personal Commitment to Your Growth
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    "When I founded <strong>PerryVent Consultancy</strong> on Dewinton Road, my vision was clear:
                    to demystify the legal, tax, and regulatory landscape for every entrepreneur and NGO in Uganda."
                  </p>
                  <p>
                    "We ensure your business operates with complete legality, total peace of mind, and sovereign compliance."
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">Perry Salama</h4>
                    <p className="text-xs text-slate-500">Founder & Managing Director</p>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full min-h-12 p-4 text-left flex items-center justify-between gap-4 bg-slate-50/60 hover:bg-slate-50 text-sm font-bold text-slate-900 font-heading"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isOpen ? "transform rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 bg-slate-50/60 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}