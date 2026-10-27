"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
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
              <div key={faq.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full min-h-12 p-4 text-left flex items-center justify-between gap-4 bg-slate-50/60 hover:bg-slate-50 text-sm font-bold text-slate-900 font-heading"
                  aria-expanded={isOpen}
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
  );
}
