import React from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  Home,
  Hammer,
  Mail,
  Menu,
  QrCode,
  Printer,
} from "lucide-react";

const PHONE_NUMBER = "2520000000";
const PHONE_DISPLAY = "252-000-0000";
// Site URL is hard-coded so the QR on business cards always points at the
// live site, regardless of where this page is currently being served from
// (localhost, preview, etc).
const SITE_URL = "https://drp.4klabs.net/";

const services = [
  {
    icon: Droplets,
    title: "Leak Repairs",
    text: "Fast help for dripping faucets, pipe leaks, water line issues, and unexpected plumbing problems.",
  },
  {
    icon: Wrench,
    title: "Fixture Installs",
    text: "Sinks, faucets, toilets, garbage disposals, outdoor spigots, and everyday home plumbing upgrades.",
  },
  {
    icon: Hammer,
    title: "Drain & Sewer Help",
    text: "Drain cleaning, slow drains, backups, clogs, and troubleshooting before small problems turn expensive.",
  },
  {
    icon: Home,
    title: "Residential Plumbing",
    text: "Dependable service for homeowners, landlords, rentals, remodels, and small business properties.",
  },
];

const trustPoints = [
  "Local Tarboro-based plumbing service",
  "Honest estimates before work begins",
  "Clean, respectful, professional work",
  "Built around doing the job right the first time",
];

const serviceAreas = [
  "Tarboro",
  "Princeville",
  "Rocky Mount",
  "Pinetops",
  "Scotland Neck",
  "Edgecombe County",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071d3a]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg">
              <Droplets className="h-6 w-6 text-[#f2c46d]" />
            </div>
            <div>
              <p className="text-lg font-black tracking-wide">Done Right Plumbing</p>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#f2c46d]">Tarboro, NC</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 md:flex">
            <a className="transition hover:text-[#f2c46d]" href="#services">Services</a>
            <a className="transition hover:text-[#f2c46d]" href="#about">Why Us</a>
            <a className="transition hover:text-[#f2c46d]" href="#areas">Service Area</a>
            <a className="transition hover:text-[#f2c46d]" href="#qr">QR Codes</a>
            <a className="transition hover:text-[#f2c46d]" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:2520000000"
              className="hidden rounded-full bg-[#f2c46d] px-5 py-2.5 text-sm font-black text-[#071d3a] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffd88b] sm:inline-flex"
            >
              Call Justin
            </a>
            <button className="rounded-xl border border-white/15 p-2 md:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#071d3a] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f2c46d] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#f2c46d] shadow-xl">
              <ShieldCheck className="h-4 w-4" />
              Dependable plumbing done right
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Tarboro plumbing service with country pride and clean work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Done Right Plumbing helps homeowners and small businesses with leaks, repairs, fixture installs, drain problems, and everyday plumbing needs across Tarboro and surrounding communities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:2520000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2c46d] px-7 py-4 text-base font-black text-[#071d3a] shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#ffd88b]"
              >
                <Phone className="h-5 w-5" />
                Call for Service
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                <Clock className="mb-2 h-5 w-5 text-[#f2c46d]" />
                <p className="text-sm font-black">Fast Response</p>
                <p className="mt-1 text-xs text-white/65">For urgent home plumbing issues.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                <MapPin className="mb-2 h-5 w-5 text-[#f2c46d]" />
                <p className="text-sm font-black">Local Service</p>
                <p className="mt-1 text-xs text-white/65">Based around Tarboro, NC.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                <CheckCircle2 className="mb-2 h-5 w-5 text-[#f2c46d]" />
                <p className="text-sm font-black">Honest Work</p>
                <p className="mt-1 text-xs text-white/65">Straightforward, no-nonsense repairs.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[92%] w-[92%] rotate-3 rounded-[2.5rem] border border-[#f2c46d]/30" />
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#102b52] p-6 shadow-2xl shadow-black/40">
              <div className="rounded-[2rem] border border-white/10 bg-[#0a2346] p-5">
                <div className="rounded-[1.5rem] bg-[#f6f1e8] p-5 text-slate-900 shadow-inner">
                  <div className="rounded-2xl border-4 border-[#071d3a] bg-white p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9b6a2d]">Work Order</p>
                        <h2 className="mt-2 text-3xl font-black text-[#071d3a]">Done Right</h2>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071d3a]">
                        <Wrench className="h-8 w-8 text-[#f2c46d]" />
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      {[
                        "Water leak inspected",
                        "Repair explained clearly",
                        "Clean job site after service",
                        "Customer signs off satisfied",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                          <span className="text-sm font-bold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl bg-[#071d3a] p-5 text-white">
                      <p className="text-sm font-bold text-[#f2c46d]">Need help today?</p>
                      <p className="mt-1 text-2xl font-black">Call Justin</p>
                      <p className="mt-2 text-sm text-white/70">Replace this with the real phone number before launch.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black text-[#f2c46d]">24/7</p>
                  <p className="text-xs text-white/65">Emergency-ready layout</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black text-[#f2c46d]">NC</p>
                  <p className="text-xs text-white/65">Local service feel</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black text-[#f2c46d]">A+</p>
                  <p className="text-xs text-white/65">Trust-focused design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9b6a2d]">Plumbing Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071d3a] sm:text-5xl">
            Reliable help for the problems that stop your day.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A simple, honest service list built for local customers who want someone they can call without feeling sold to.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-[2rem] border border-[#e5d8c2] bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071d3a] transition group-hover:rotate-3">
                  <Icon className="h-7 w-7 text-[#f2c46d]" />
                </div>
                <h3 className="text-xl font-black text-[#071d3a]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="bg-[#eadcc5] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-[#071d3a] p-8 text-white shadow-2xl shadow-slate-900/20">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f2c46d]">Why Done Right</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Built on trust, clean work, and straight answers.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              The best plumbing website should make people feel like they are calling a dependable local person — not a giant company that treats them like a ticket number.
            </p>
            <div className="mt-8 rounded-3xl border border-white/12 bg-white/10 p-5">
              <div className="flex items-center gap-2 text-[#f2c46d]">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/75">
                “This placeholder review section can be replaced with real customer reviews once Justin has them collected.”
              </p>
            </div>
          </div>

          <div className="grid content-center gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-3xl border border-[#dbc8a8] bg-white/80 p-5 shadow-lg shadow-slate-900/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#071d3a]">
                  <CheckCircle2 className="h-6 w-6 text-[#f2c46d]" />
                </div>
                <div>
                  <h3 className="font-black text-[#071d3a]">{point}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A trust-focused message that can be backed up with real photos, customer reviews, and before/after job examples.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9b6a2d]">Service Area</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071d3a] sm:text-5xl">
              Serving Tarboro and nearby Eastern North Carolina communities.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Keep the site local. Customers searching for a plumber near Tarboro should immediately know Justin is close enough to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-[#d9c29b] bg-white px-5 py-2 text-sm font-black text-[#071d3a] shadow-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#e2d2b7] bg-white p-6 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[2rem] bg-[#071d3a] p-8 text-white">
              <MapPin className="h-12 w-12 text-[#f2c46d]" />
              <h3 className="mt-6 text-3xl font-black">Local-first plumbing website strategy</h3>
              <p className="mt-4 leading-8 text-white/72">
                Add real job photos, a Google Business Profile link, service-area pages, and simple contact forms to help this site become more than a brochure.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-black text-[#f2c46d]">Best next page</p>
                  <p className="mt-1 text-sm text-white/75">Leak Repair in Tarboro, NC</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-black text-[#f2c46d]">Best proof</p>
                  <p className="mt-1 text-sm text-white/75">Before/after repair photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qr" className="bg-[#eadcc5] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9b6a2d]">Scan to Connect</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071d3a] sm:text-5xl">
              Print these on your business cards.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              One scan to visit the website. One scan to call Justin. No typing, no fuss.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="rounded-[2.5rem] border border-[#dbc8a8] bg-white p-8 shadow-2xl shadow-slate-900/10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071d3a]">
                  <QrCode className="h-6 w-6 text-[#f2c46d]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9b6a2d]">Website</p>
                  <h3 className="text-2xl font-black text-[#071d3a]">Visit Our Site</h3>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center rounded-3xl border-4 border-[#071d3a] bg-white p-6">
                <QRCodeSVG
                  value={SITE_URL}
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#071d3a"
                  level="H"
                  includeMargin={false}
                />
              </div>

              <p className="mt-5 text-center text-sm font-bold text-slate-700 break-all">{SITE_URL}</p>
              <p className="mt-3 text-center text-xs leading-6 text-slate-500">
                <Printer className="mr-1 inline h-3.5 w-3.5" />
                Scan with any phone camera to open the website.
              </p>
            </article>

            <article className="rounded-[2.5rem] border border-[#dbc8a8] bg-white p-8 shadow-2xl shadow-slate-900/10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071d3a]">
                  <Phone className="h-6 w-6 text-[#f2c46d]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9b6a2d]">Call Justin</p>
                  <h3 className="text-2xl font-black text-[#071d3a]">Tap to Call</h3>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center rounded-3xl border-4 border-[#071d3a] bg-white p-6">
                <QRCodeSVG
                  value={`tel:+1${PHONE_NUMBER}`}
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#071d3a"
                  level="H"
                  includeMargin={false}
                />
              </div>

              <p className="mt-5 text-center text-sm font-bold text-slate-700">{PHONE_DISPLAY}</p>
              <p className="mt-3 text-center text-xs leading-6 text-slate-500">
                <Phone className="mr-1 inline h-3.5 w-3.5" />
                Scanning opens the phone dialer ready to call.
              </p>
            </article>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-slate-600">
            For business cards, right-click either QR code and choose <span className="font-bold">Save image as…</span> to download a print-ready SVG.
          </p>
        </div>
      </section>

      <section className="bg-[#071d3a] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2.5rem] border border-white/10 bg-white/8 p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f2c46d]">Ready for service?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Call Done Right Plumbing today.</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Use this section for the main phone number, emergency callout rules, and service hours.
            </p>
          </div>
          <a
            href="tel:2520000000"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#f2c46d] px-7 py-4 text-base font-black text-[#071d3a] shadow-xl transition hover:-translate-y-1 hover:bg-[#ffd88b]"
          >
            <Phone className="h-5 w-5" />
            252-000-0000
          </a>
        </div>
      </section>

      <footer id="contact" className="bg-[#041326] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Droplets className="h-6 w-6 text-[#f2c46d]" />
              </div>
              <div>
                <p className="text-lg font-black">Done Right Plumbing</p>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#f2c46d]">Tarboro, North Carolina</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              A clean, local plumbing website concept for Justin’s business. Replace placeholders with real contact info, license details, service hours, and job photos before launch.
            </p>
          </div>

          <div>
            <h3 className="font-black text-[#f2c46d]">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 252-000-0000</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> service@donerightplumbing.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Tarboro, NC</p>
            </div>
          </div>

          <div>
            <h3 className="font-black text-[#f2c46d]">Website Notes</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Add real photos</li>
              <li>• Connect Google Business Profile</li>
              <li>• Add review section</li>
              <li>• Add quote request form</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} Done Right Plumbing. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
