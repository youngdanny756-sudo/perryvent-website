import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact PerryVent Consultancy | Kampala, Uganda",
  description:
    "Contact PerryVent Consultancy by phone, WhatsApp, or email, or get directions to our Dewinton Road office in Kampala.",
};

const officeAddress =
  "Dewinton Road, opposite the Uganda National Cultural Centre, Kampala, Uganda";
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  officeAddress,
)}`;
const whatsappUrl = `https://wa.me/256787171657?text=${encodeURIComponent(
  "Hello PerryVent Consultancy, I would like to request a consultation.",
)}`;

const contactMethods = [
  {
    icon: Phone,
    title: "Call our team",
    description: "Speak with us about your registration or compliance needs.",
    links: [
      { label: "+256 787 171 657", href: "tel:+256787171657" },
      { label: "+256 709 927 474", href: "tel:+256709927474" },
    ],
  },
  {
    icon: Mail,
    title: "Send us an email",
    description: "Tell us what support you need and we’ll get back to you.",
    links: [
      {
        label: "Info@perryventconsultancy.co.ug",
        href: "mailto:Info@perryventconsultancy.co.ug",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0A192F] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            Contact PerryVent
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
                Let’s talk about what you need.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Contact our Kampala team about business registration, tax
                compliance, NGO services, or immigration support. You can call,
                email, message us on WhatsApp, or visit our office.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-300"
            >
              <MessageCircle className="h-4 w-4" />
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {contactMethods.map(({ icon: Icon, title, description, links }) => (
              <section
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-heading text-lg font-bold text-slate-900">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="break-all text-sm font-semibold text-[#0A192F] underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-slate-900">
                    Visit our office
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {officeAddress}
                    <br />
                    P.O. Box 204862, Kampala, Uganda.
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0A192F] transition-colors hover:border-amber-400 hover:bg-amber-50"
                  >
                    Get directions on Google Maps
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl bg-[#071326] p-6 text-white sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
              <Clock3 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-heading text-xl font-bold">
              Office hours
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-slate-700 pb-3">
                <dt className="text-slate-300">Monday – Friday</dt>
                <dd className="text-right font-medium">8:00 AM – 5:00 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-300">Saturday</dt>
                <dd className="text-right font-medium">9:00 AM – 2:00 PM</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Prefer messaging? WhatsApp us and let us know which service you
              need. We can guide you on the next steps before you visit.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
