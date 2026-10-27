import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Award,
  Heart,
  CheckCircle2,
  ArrowRight,
  Users,
  MapPin,
  Building,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION WITH FOUNDER SEATED IN BLACK SUIT (MAIN ABOUT PHOTO) */}
      <section className="bg-[#0A192F] text-white pt-8 sm:pt-12 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Story & Leadership</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
                Empowering Ugandan Enterprises & NGOs Through Impeccable Compliance.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                PerryVent Consultancy is situated on Dewinton Road, Kampala, with a singular purpose:
                to eliminate bureaucratic friction, registration delays, and tax penalties for hardworking
                entrepreneurs, international non-profits, and expatriate investors in Uganda.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Dewinton Road, Central Kampala</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Over 1,200+ Entities Handled</span>
                </div>
              </div>
            </div>

            {/* Right Photo: Warm Smiling Seated Photo in Black Suit */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-3xl transform rotate-2 opacity-80"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-slate-900">
                  <Image
                    src="/assets/founder-about1.jpg"
                    alt="Founder & Principal Consultant, PerryVent Consultancy Uganda"
                    width={450}
                    height={520}
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-center">
                    <h3 className="text-base font-bold text-white font-heading">Perry Emily Salama</h3>
                    <p className="text-xs text-amber-300">Founder & Managing Director</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Diagonal bottom divider */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-slate-50 [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* 2. MISSION, VISION & CORE VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver practical, ethical, and high-standard advisory services that optimize client operations and successfully fulfill their strategic objectives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To build a premier, highly trusted consultancy firm celebrated for driving meaningful transformation across business and institutional sectors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">Core Principles</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Uncompromising integrity, rigorous legal accuracy, prompt client communication, and strict
              confidentiality with sensitive corporate, financial, and immigration dossiers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. YOUR EXACT DETAILED SERVICE TIERS MATRIX */}
      <section className="py-16 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Institutional Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Our Specialized Statutory Practices
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Deep, proven experience across Ugandan registration boards, ministries, and regulatory commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* NGO Registration & All 5 Statuses */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  NGO Bureau
                </span>
                <span className="text-xs font-semibold text-slate-400">All 5 Statuses</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                NGO Registration & Statutory Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full legal constitution, licensing, and compliance across all 5 non-profit statuses in Uganda:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Indigenous NGOs (Local)</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Foreign & International NGOs</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Continental & Regional NGOs</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Filing of Annual Returns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Work Permit Recommendation Letters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Official Searches & Certifications</span>
                </li>
              </ul>
            </div>

            {/* Company Registration & URSB */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  URSB
                </span>
                <span className="text-xs font-semibold text-slate-400">Commercial Register</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Company Formation & Maintenance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guiding corporate entities through end-to-end legal creation and good standing on the commercial register:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Business Name Reservation</strong> (24–48 hrs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Company Registration</strong> (LLCs & Partnerships)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Annual Returns Filing</strong> to maintain good standing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Drafting Memorandum & Articles (MEMARTS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Beneficial Ownership Registers & Form 20</span>
                </li>
              </ul>
            </div>

            {/* Work Permits, Visas & Passports */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                  DCIC & Immigration
                </span>
                <span className="text-xs font-semibold text-slate-400">Ministry of Internal Affairs</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Work Permits, Visas & Passports
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast-track processing through the Directorate of Citizenship & Immigration Control:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Work Permits:</strong> New Applications & Renewals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Visa Applications:</strong> Special Passes & Extensions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Passports:</strong> New Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Passports:</strong> Renewals & Replacements (Lost/Damaged)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Priority biometric appointment scheduling</span>
                </li>
              </ul>
            </div>

            {/* PDPO Data Protection Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 lg:col-span-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
                  PDPO Compliance
                </span>
                <span className="text-xs font-semibold text-slate-400">Under NITA-Uganda</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Data Protection & Privacy Office (PDPO) Registration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensuring complete compliance with Uganda's Data Protection & Privacy Act for organizations processing personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Brand New Applications</strong>
                    <span className="text-slate-500 text-[11px]">Initial registration of Data Collectors & Processors</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Renewal Applications</strong>
                    <span className="text-slate-500 text-[11px]">Annual statutory renewals & certificate updates</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Continuous Data Compliance</strong>
                    <span className="text-slate-500 text-[11px]">Internal privacy policies, audit checklists & staff training</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUNDER PHILOSOPHY WITH SERIOUS CLOSER PORTRAIT (SECONDARY PHOTO) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo: Serious Closer Portrait */}
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-2 bg-slate-900 rounded-3xl transform -rotate-2"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white">
                  <Image
                    src="/assets/founder-contact.jpg"
                    alt="PerryVent Founder Serious Closer Portrait"
                    width={400}
                    height={460}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-top"
                  />
                  <div className="p-3 bg-[#0B1A30] text-center text-xs text-amber-300 font-medium">
                    Legal & Statutory Advisory Lead
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Philosophy & Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                "A Filing is Only as Good as its Legal Precision."
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  In business consultancy, there is zero margin for sloppy drafts or missed statutory filing dates.
                  Whether structuring a Memorandum of Association for an international joint venture or negotiating
                  a tax dispute assessment with the Uganda Revenue Authority, attention to detail is everything.
                </p>
                <p>
                  Every client walking through our doors on Dewinton Road receives personal attention from
                  senior practitioners who understand the exact nuances of Ugandan commercial codes, the Companies Act,
                  and immigration statutes.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Licensed URSB Filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>URA Certified Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>DCIC Work Permits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>PDPO Data Protection</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AFRICAN PROFESSIONALS TEAM PHOTO BACKDROP (SOFT BLUR + DARK OVERLAY) */}
      <section className="relative overflow-hidden py-24 bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/team.jpg"
            alt="PerryVent Associate Team Meeting"
            fill
            className="object-cover filter blur-[4px] scale-105"
          />
          {/* Dark overlay so faces are not clearly identifiable */}
          <div className="absolute inset-0 bg-[#060F1E]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-md text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Dedicated Legal & Tax Specialists</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
            Backed by Deep Ugandan Institutional Knowledge
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our multi-disciplinary team brings together specialists in corporate law, taxation, accounting,
            immigration procedures, and government liaison to ensure your documents move swiftly through official channels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Consult with Our Team
            </Link>
            <a
              href="https://wa.me/256787171657?text=Hello%20PerryVent%20Consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-all"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}