"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Filter,
  ArrowRight,
  FileText,
  Building,
  HeartHandshake,
  Briefcase,
  Plane,
  Lock,
  Scale,
} from "lucide-react";

interface SubService {
  name: string;
  desc: string;
}

interface PracticeCluster {
  id: string;
  title: string;
  subtitle: string;
  category: "ngo" | "company" | "immigration" | "compliance" | "tax";
  timeline: string;
  badge: string;
  description: string;
  subServices: SubService[];
  documents: string[];
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const practiceClusters: PracticeCluster[] = [
    {
      id: "ngo-cluster",
      title: "NGO Registration & Non-Profit Advisory",
      subtitle: "National Bureau for NGOs & Ministry of Internal Affairs",
      category: "ngo",
      timeline: "3 – 6 Weeks",
      badge: "NGO Statuses",
      description:
        "End-to-end constitution drafting, bureau licensing, and statutory maintenance across all legal NGO classifications in Uganda.",
      subServices: [
        { name: "Indigenous NGO (Local)", desc: "100% locally founded and community-governed Ugandan non-profits." },
        { name: "Foreign NGO", desc: "Organizations founded outside Uganda operating via local branches." },
        { name: "International NGO", desc: "Global humanitarian and development entities operating in Uganda." },
        { name: "Continental NGO", desc: "Pan-African non-profits operating across multiple African states." },
        { name: "Regional NGO", desc: "East African regional civil society organizations." },
        { name: "Filing of Annual Returns", desc: "Mandatory annual report submissions to maintain active NGO permits." },
        { name: "Work Permit & Visa Applications", desc: "Support with immigration applications for NGO staff and representatives." },
        { name: "Recommendation Letters", desc: "Obtaining prerequisite clearances from line ministries and the NGO Bureau." },
        { name: "Filing for Registry Searches & Certifications", desc: "Certified search reports and authenticated true copies." },
      ],
      documents: [
        "Proposed NGO Constitution & By-laws (signed by founders)",
        "Police clearance certificates / Interpol letters for founders",
        "Recommendation letters from line ministries and district local governments",
        "Organizational structure, 3-year budget, and work plan",
      ],
    },
    {
      id: "company-cluster",
      title: "Company Registration & Corporate Secretarial",
      subtitle: "Uganda Registration Services Bureau (URSB)",
      category: "company",
      timeline: "24 hrs – 5 Days",
      badge: "Commercial Registry",
      description:
        "Complete company incorporation, legal document drafting, and statutory filings to establish your commercial enterprise in Uganda.",
      subServices: [
        { name: "Business Name Reservation", desc: "Official 30-day name reservation clearance with URSB (24–48 hours)." },
        { name: "Company Registration (LLC & Partnerships)", desc: "Full incorporation, certified MEMARTS, Form 20, and Certificate of Incorporation." },
        { name: "Annual Returns Filing", desc: "Mandatory statutory annual returns to maintain active standing on the commercial register." },
        { name: "Beneficial Ownership Declarations", desc: "Statutory compliance with anti-money laundering URSB requirements." },
      ],
      documents: [
        "3 Proposed company names in order of preference",
        "National ID (NIN) for Ugandans / Valid Passport for foreigners",
        "Registered physical address details (LC1 / tenancy agreement)",
        "Passport size photographs for all directors & shareholders",
      ],
    },
    {
      id: "work-permit-cluster",
      title: "Work Permits & Visa Applications",
      subtitle: "Directorate of Citizenship & Immigration Control (DCIC)",
      category: "immigration",
      timeline: "2 – 4 Weeks",
      badge: "New & Renewals",
      description:
        "Immigration clearances for foreign investors, expatriates, NGO country directors, and skilled professionals in Uganda.",
      subServices: [
        { name: "New Work Permit Applications", desc: "Class G2 (investors/trade), Class B (agriculture), Class F (employment), Class A (diplomatic)." },
        { name: "Work Permit Renewals", desc: "Extending existing permits before expiry to avoid DCIC overstay fines." },
        { name: "Visa Applications & Extensions", desc: "Special passes, student passes, and entry visa extension clearances." },
        { name: "Dependent & Dependant Passes", desc: "Legal residency for spouses and family members of permit holders." },
      ],
      documents: [
        "Valid Passport with minimum 6 months validity",
        "Police Clearance Certificate from country of origin / Interpol",
        "Company sponsorship credentials / NGO Bureau recommendation letter",
        "Academic certificates & CV (for employment permits) / Investment license",
      ],
    },
    {
      id: "passport-cluster",
      title: "Passport Applications & Renewals",
      subtitle: "Directorate of Citizenship & Immigration Control (DCIC)",
      category: "immigration",
      timeline: "24 – 48 Hours Dossier",
      badge: "e-Passports",
      description:
        "Assisting Ugandan citizens with digital portal filings, document structuring, fee PRN assessments, and interview scheduling.",
      subServices: [
        { name: "Brand New Passport Applications", desc: "First-time adult and minor Ugandan electronic passport applications." },
        { name: "Passport Renewals", desc: "Expired or expiring passports renewal processing." },
        { name: "Passport Replacements", desc: "Expediting lost, stolen, or damaged passport replacement dossiers." },
        { name: "Biometric Appointment Scheduling", desc: "Priority scheduling for DCIC interview and biometric capture." },
      ],
      documents: [
        "National Identification Number (NIN) & National ID card",
        "Recommender’s National ID copy and details",
        "Old passport (if renewal)",
        "Police loss report, sworn affidavit & verification (if replacement)",
      ],
    },
    {
      id: "pdpo-cluster",
      title: "PDPO Compliance & Data Protection",
      subtitle: "Personal Data Protection Office (NITA-Uganda)",
      category: "compliance",
      timeline: "1 – 2 Weeks",
      badge: "Data Protection Act",
      description:
        "Mandatory registration, renewals, and compliance for organizations that collect, store, or process personal data in Uganda.",
      subServices: [
        { name: "Brand New (Born-New) Applications", desc: "Initial certification as a registered Data Collector and Data Processor." },
        { name: "Renewal Applications", desc: "Annual statutory renewal of your organization’s PDPO certificate." },
        { name: "Data Protection Policy Drafting", desc: "Internal policies, privacy notices, and consent management frameworks." },
        { name: "Compliance Audits & Gap Analysis", desc: "Reviewing employee and client data workflows to eliminate statutory liability." },
      ],
      documents: [
        "Certificate of Incorporation / NGO Bureau Registration Certificate",
        "Overview of categories of personal data collected (employees, clients, donors)",
        "Contact information of designated Data Protection Officer (DPO)",
      ],
    },
    {
      id: "tax-cluster",
      title: "URA Tax Filing & Corporate Advisory",
      subtitle: "Uganda Revenue Authority (URA)",
      category: "tax",
      timeline: "Ongoing / Monthly",
      badge: "e-Tax Portal",
      description:
        "Guiding individuals, companies, and NGOs through TIN creation, monthly returns, and zero-penalty URA compliance.",
      subServices: [
        { name: "TIN Registration (Individual & Company)", desc: "Swift generation of URA Tax Identification Numbers." },
        { name: "Monthly Tax Filings (PAYE, VAT, WHT)", desc: "Reconciling and submitting payroll and value-added tax returns." },
        { name: "Annual Income Tax Returns", desc: "Preparing audited schedules and filing annual corporate/individual income returns." },
        { name: "Tax Clearance Certificates (TCC)", desc: "Securing clean compliance certificates for tenders." },
      ],
      documents: [
        "National ID (NIN) / Company Incorporation Certificate",
        "Active bank transaction summaries & sales records",
        "Previous URA login credentials (if already registered)",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Practice Areas" },
    { id: "ngo", label: "NGO Statuses" },
    { id: "company", label: "Company & URSB" },
    { id: "immigration", label: "Work Permits & Passports" },
    { id: "compliance", label: "PDPO Data Protection" },
    { id: "tax", label: "URA Tax Filing" },
  ];

  const filteredClusters = practiceClusters.filter((cluster) =>
    selectedCategory === "all" ? true : cluster.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO HEADER WITH FOUNDER NAVY BLAZER (ARMS CROSSED) */}
      <section className="bg-[#0A192F] text-white pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Statutory Practice Areas & Licensing
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
                Specialized Legal & Compliance Services in Uganda
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                From registering different NGO classifications and URSB corporate entities to DCIC work permits,
                passport dossiers, and PDPO certifications—we deliver sovereign compliance on Dewinton Road.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>NGO Statuses (Indigenous to International)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>URSB Incorporation & Annual Returns</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Work Permits & Visa Applications</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>PDPO New & Renewals</span>
                </span>
                
              </div>
            </div>

            {/* Founder in Navy Blazer (Arms Crossed) */}
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-2 bg-amber-400/30 rounded-2xl transform rotate-2"></div>
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl bg-slate-900">
                  <Image
                    src="/assets/founder-services.webp"
                    alt="PerryVent Principal Consultant"
                    width={400}
                    height={460}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="w-full h-72 sm:h-80 object-cover object-top"
                  />
                  <div className="p-3 bg-slate-950 text-center text-xs text-amber-300 font-medium">
                    Statutory Licensing & Regulatory Practice
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Diagonal bottom trim */}
        <div className="absolute bottom-0 inset-x-0 h-6 bg-slate-50 [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Practice Area:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#0B1A30] text-amber-400 font-bold shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED PRACTICE CLUSTERS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClusters.map((cluster) => {
            const isDocsOpen = expandedId === cluster.id;
            const whatsappUrl = `https://wa.me/256787171657?text=${encodeURIComponent(
              `Hello PerryVent Consultancy, I would like to consult on: ${cluster.title}.`
            )}`;

            return (
              <div
                key={cluster.id}
                id={cluster.id}
                className="scroll-mt-40 bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                        {cluster.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-heading mt-0.5">
                        {cluster.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-slate-700 bg-amber-100 px-2.5 py-1 rounded-full shrink-0">
                      {cluster.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {cluster.description}
                  </p>

                  {/* Sub-services breakdown */}
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 space-y-2.5 mb-5">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Services Covered Under This Practice:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {cluster.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block">{sub.name}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{sub.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Document Checklist */}
                  <div className="border-t border-slate-100 pt-3">
                    <button
                      onClick={() => setExpandedId(isDocsOpen ? null : cluster.id)}
                      className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                    >
                      <span>{isDocsOpen ? "Hide" : "View"} Required Documents & Prerequisites</span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${isDocsOpen ? "rotate-90" : ""}`} />
                    </button>

                    {isDocsOpen && (
                      <div className="mt-3 p-3.5 bg-amber-50/60 rounded-xl text-xs space-y-1.5 border border-amber-200/60">
                        <span className="font-bold text-slate-900 block">
                          Client Preparation Checklist:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                          {cluster.documents.map((doc, dIdx) => (
                            <li key={dIdx}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400">Typical Timeline: </span>
                    <strong className="text-slate-800">{cluster.timeline}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B1A30] hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-lg transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0B1A30] to-[#071326] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need Special Assistance or Registry Searches?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We also handle URSB/NGO Bureau certified true copies, official registry searches, and ongoing compliance
              retainers at our Dewinton Road offices in central Kampala.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shrink-0"
          >
            Visit Dewinton Office
          </Link>
        </div>
      </section>

    </div>
  );
}