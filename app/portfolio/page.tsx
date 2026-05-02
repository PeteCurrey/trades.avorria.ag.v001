"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Electricians", "Plumbers", "Gas Engineers", "HVAC", "Builders", "Roofers", "Joiners", "Landscapers"];

const portfolioItems = [
  {
    id: 1,
    company: "Hartley Electrical",
    trade: "Electricians",
    location: "Leeds",
    stat: "↑ 47% enquiries in 90 days",
    badge: "NICEIC",
    accent: "from-amber/20",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-amber font-mono font-bold">HARTLEY ELECTRICAL</span>
          <span className="ml-auto text-muted/60">0113 ···</span>
        </div>
        <div className="bg-gradient-to-br from-amber/20 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-white/70 font-mono uppercase mb-1">NICEIC Approved · Leeds</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Emergency<br/>Electrician<br/>in Leeds</div>
          <div className="mt-2 inline-block bg-amber text-forge-black text-[8px] px-2 py-1 rounded-sm font-bold w-fit">24/7 CALLOUT →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Electrician</div>
      </div>
    ),
  },
  {
    id: 2,
    company: "Ashworth Plumbing",
    trade: "Plumbers",
    location: "Derby",
    stat: "2.4× monthly leads",
    badge: "Gas Safe",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-blue-400 font-mono font-bold">ASHWORTH PLUMBING</span>
          <span className="ml-auto text-muted/60">Derby</span>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="bg-white/5 border border-white/10 rounded px-2 py-1 text-[8px] text-amber font-mono mb-2 w-fit">GAS SAFE REG: 563821</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Derby's Trusted<br/>Plumber</div>
          <div className="mt-2 inline-block bg-blue-500/80 text-white text-[8px] px-2 py-1 rounded-sm font-bold w-fit">FREE QUOTE →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Plumber</div>
      </div>
    ),
  },
  {
    id: 3,
    company: "Pennine Heating Solutions",
    trade: "Gas Engineers",
    location: "Sheffield",
    stat: "↑ 31 boiler installs / month",
    badge: "Gas Safe",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-amber font-mono font-bold">PENNINE HEATING</span>
          <span className="ml-auto text-muted/60">Sheffield</span>
        </div>
        <div className="bg-gradient-to-br from-orange-900/30 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-orange-400 font-mono uppercase mb-1">Boiler Install Specialists</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Boiler Installations<br/>& Servicing</div>
          <div className="mt-2 flex gap-1.5">
            <div className="bg-amber text-forge-black text-[8px] px-2 py-1 rounded-sm font-bold">Book Service</div>
            <div className="border border-white/20 text-white/70 text-[8px] px-2 py-1 rounded-sm">Annual Plans</div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Gas</div>
      </div>
    ),
  },
  {
    id: 4,
    company: "Northern Climate",
    trade: "HVAC",
    location: "Manchester",
    stat: "MCS-certified, BUS grant ready",
    badge: "MCS",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-emerald-400 font-mono font-bold">NORTHERN CLIMATE</span>
          <span className="ml-auto text-muted/60">Manchester</span>
        </div>
        <div className="bg-gradient-to-br from-emerald-900/30 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-emerald-400 font-mono uppercase mb-1">MCS Certified · BUS Grant Approved</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Air Source Heat Pumps<br/>for Greater Manchester</div>
          <div className="mt-2 inline-block bg-emerald-600/80 text-white text-[8px] px-2 py-1 rounded-sm font-bold w-fit">GET £7,500 GRANT →</div>
        </div>
        <div className="absolute top-2 right-2 bg-emerald-600/90 text-white text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">HVAC</div>
      </div>
    ),
  },
  {
    id: 5,
    company: "Booth Builders",
    trade: "Builders",
    location: "Sheffield",
    stat: "£420k pipeline in 6 months",
    badge: "FMB",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-stone-400 font-mono font-bold">BOOTH BUILDERS</span>
          <span className="ml-auto text-muted/60">Sheffield</span>
        </div>
        <div className="bg-gradient-to-br from-stone-800/40 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-stone-400 font-mono uppercase mb-1">Extensions · Loft Conversions · New Builds</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Sheffield's Premium<br/>Building Contractor</div>
          <div className="mt-2 inline-block border border-amber text-amber text-[8px] px-2 py-1 rounded-sm font-bold w-fit">VIEW PROJECTS →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Builder</div>
      </div>
    ),
  },
  {
    id: 6,
    company: "Crestline Roofing",
    trade: "Roofers",
    location: "Nottingham",
    stat: "↑ 60% emergency callouts",
    badge: "NFRC",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-slate-400 font-mono font-bold">CRESTLINE ROOFING</span>
          <span className="ml-auto text-muted/60">Nottingham</span>
        </div>
        <div className="bg-gradient-to-br from-slate-800/50 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="bg-red-500/80 text-white text-[8px] px-2 py-1 rounded-sm font-bold w-fit mb-2">⚡ STORM DAMAGE? CALL NOW</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Nottingham's<br/>Emergency Roofers</div>
          <div className="text-[9px] text-white/60 mt-1">10-year guarantee · All work insured</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Roofer</div>
      </div>
    ),
  },
  {
    id: 7,
    company: "Whitfield Joinery",
    trade: "Joiners",
    location: "York",
    stat: "Premium bespoke fitted wardrobes",
    badge: "City & Guilds",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-amber font-mono font-bold">WHITFIELD JOINERY</span>
          <span className="ml-auto text-muted/60">York</span>
        </div>
        <div className="bg-gradient-to-br from-amber/10 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="grid grid-cols-3 gap-1 mb-3">
            {[1,2,3].map(i => <div key={i} className="aspect-square bg-stone-800/60 rounded border border-amber/10" />)}
          </div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Bespoke Fitted<br/>Wardrobes, York</div>
          <div className="mt-2 inline-block bg-amber text-forge-black text-[8px] px-2 py-1 rounded-sm font-bold w-fit">VIEW GALLERY →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Joiner</div>
      </div>
    ),
  },
  {
    id: 8,
    company: "Greenwood Landscapes",
    trade: "Landscapers",
    location: "Chesterfield",
    stat: "Booked 12 weeks ahead",
    badge: "BALI",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-green-400 font-mono font-bold">GREENWOOD LANDSCAPES</span>
          <span className="ml-auto text-muted/60">Chesterfield</span>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-green-400 font-mono uppercase mb-1">Garden Design · Driveways · Patios</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Garden Transformations<br/>in Derbyshire</div>
          <div className="mt-2 inline-block bg-green-700/80 text-white text-[8px] px-2 py-1 rounded-sm font-bold w-fit">FREE DESIGN CALL →</div>
        </div>
        <div className="absolute top-2 right-2 bg-green-600/90 text-white text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Landscaper</div>
      </div>
    ),
  },
  {
    id: 9,
    company: "Ridgeway Decorators",
    trade: "Painters",
    location: "Leeds",
    stat: "Premium residential focus",
    badge: "PDA",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-purple-400 font-mono font-bold">RIDGEWAY DECORATORS</span>
          <span className="ml-auto text-muted/60">Leeds</span>
        </div>
        <div className="bg-gradient-to-br from-purple-900/20 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="flex gap-1 mb-3">
            {["#2C3E50","#E8D5B7","#F5F5F0","#8B4513"].map((c,i) => (
              <div key={i} className="w-6 h-6 rounded-full border border-white/10" style={{backgroundColor: c}} />
            ))}
          </div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Premium Interior<br/>Decoration, Leeds</div>
          <div className="mt-2 inline-block border border-purple-400/60 text-purple-400 text-[8px] px-2 py-1 rounded-sm font-bold w-fit">GET A QUOTE →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Decorator</div>
      </div>
    ),
  },
  {
    id: 10,
    company: "Apex Driveways",
    trade: "Landscapers",
    location: "Derby",
    stat: "Drone-surveyed quotes",
    badge: "TrustMark",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-amber font-mono font-bold">APEX DRIVEWAYS</span>
          <span className="ml-auto text-muted/60">Derby</span>
        </div>
        <div className="bg-gradient-to-br from-amber/15 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-amber font-mono uppercase mb-1">Block Paving · Tarmac · Resin</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Derby's Driveway<br/>Specialists</div>
          <div className="mt-2 flex gap-1.5">
            <div className="bg-amber text-forge-black text-[8px] px-2 py-1 rounded-sm font-bold">Free Survey</div>
            <div className="border border-white/20 text-white/70 text-[8px] px-2 py-1 rounded-sm">Finance Available</div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Driveway</div>
      </div>
    ),
  },
  {
    id: 11,
    company: "Vance Bathrooms",
    trade: "Plumbers",
    location: "Manchester",
    stat: "Luxury bathroom installations",
    badge: "Gas Safe",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-cyan-400 font-mono font-bold">VANCE BATHROOMS</span>
          <span className="ml-auto text-muted/60">Manchester</span>
        </div>
        <div className="bg-gradient-to-br from-cyan-900/30 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {[1,2,3,4].map(i => <div key={i} className="aspect-video bg-cyan-900/30 rounded border border-cyan-500/10" />)}
          </div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Luxury Bathroom<br/>Design, Manchester</div>
          <div className="mt-2 inline-block bg-cyan-600/80 text-white text-[8px] px-2 py-1 rounded-sm font-bold w-fit">VIEW SHOWROOM →</div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Plumber</div>
      </div>
    ),
  },
  {
    id: 12,
    company: "Cardinal Electrical",
    trade: "Electricians",
    location: "Birmingham",
    stat: "EICR & EV charging specialists",
    badge: "NAPIT",
    mockHero: (
      <div className="aspect-[16/10] bg-forge-black border border-border rounded overflow-hidden relative">
        <div className="h-5 border-b border-border flex items-center px-2 gap-1 bg-steel-light text-[7px]">
          <span className="text-amber font-mono font-bold">CARDINAL ELECTRICAL</span>
          <span className="ml-auto text-muted/60">Birmingham</span>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/25 to-forge-black p-4 h-full flex flex-col justify-end">
          <div className="text-[9px] text-amber font-mono uppercase mb-1">NAPIT · Commercial · EV Charging</div>
          <div className="text-white text-sm font-heading font-bold leading-tight">Commercial Electricians<br/>West Midlands</div>
          <div className="mt-2 flex gap-1.5">
            <div className="bg-amber text-forge-black text-[8px] px-2 py-1 rounded-sm font-bold">EV Chargers</div>
            <div className="border border-amber/40 text-amber text-[8px] px-2 py-1 rounded-sm">EICR Testing</div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-amber/90 text-forge-black text-[8px] font-mono uppercase px-1.5 py-0.5 rounded">Commercial</div>
      </div>
    ),
  },
];

function PortfolioGrid() {
  const searchParams = useSearchParams();
  const raw = searchParams?.get("trade") || "All";
  const matched = filters.find(f => f.toLowerCase() === raw.toLowerCase()) || "All";
  const [activeFilter, setActiveFilter] = useState(matched);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(p => p.trade === activeFilter || (activeFilter === "Painters" && p.trade === "Painters"));

  return (
    <>
      {/* Sticky filter tabs */}
      <div className="sticky top-[72px] z-30 bg-forge-black/90 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-amber text-forge-black"
                    : "text-muted hover:text-white border border-border hover:border-amber/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedItem(item)}>
              <div className="relative mb-5 transition-all duration-300 group-hover:scale-[1.02]">
                {item.mockHero}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-forge-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded border border-amber">
                  <span className="bg-amber text-forge-black text-sm font-semibold px-5 py-2 rounded-sm">
                    View Case Study →
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading font-bold text-white text-lg group-hover:text-amber transition-colors mb-1">
                    {item.company} <span className="text-muted font-normal text-base">— {item.location}</span>
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge-premium !text-[10px] uppercase">{item.badge}</span>
                  </div>
                  <p className="text-muted-light text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {item.stat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No portfolio items for this trade yet.</p>
        )}
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-forge-black/90 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-steel border border-border w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col lg:flex-row relative"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-forge-black/50 border border-border text-white flex items-center justify-center hover:bg-amber hover:text-forge-black transition-colors"
              >
                ×
              </button>

              <div className="w-full lg:w-3/5 p-4 lg:p-8 border-r border-border bg-forge-black">
                {selectedItem.mockHero}
              </div>

              <div className="w-full lg:w-2/5 p-8 overflow-y-auto">
                <span className="text-amber font-mono text-xs uppercase tracking-widest mb-2 block">{selectedItem.trade} · {selectedItem.location}</span>
                <h2 className="font-heading font-bold text-3xl text-white mb-6">{selectedItem.company}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 font-heading">The Brief</h4>
                    <p className="text-sm text-muted-light leading-relaxed">
                      Build a premium, high-converting digital presence that highlights their {selectedItem.badge} accreditation and emergency callout capability in {selectedItem.location}.
                    </p>
                  </div>

                  <div className="bg-amber/5 border border-amber/20 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-amber mb-1 font-heading">Key Outcome</h4>
                    <p className="text-base font-bold text-white font-mono">{selectedItem.stat}</p>
                  </div>

                  <div className="pt-6">
                    <Link href="/get-started" className="btn-primary w-full text-center">
                      Get a Site Like This →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-5xl mx-auto border-b border-border">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          Real trades websites,<br /><span className="text-amber">real results.</span>
        </h1>
        <p className="text-xl text-muted-light max-w-2xl">
          Every site we build is bespoke. A selection of recent trade websites built across the UK — each one ranked and converting.
        </p>
      </section>

      <Suspense fallback={<div className="py-20 text-center text-muted">Loading portfolio...</div>}>
        <PortfolioGrid />
      </Suspense>

      {/* Stats strip */}
      <section className="py-12 border-y border-border bg-steel/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center divide-x divide-border">
            {[
              { val: "500+", label: "Sites Built" },
              { val: "98%", label: "Customer Retention" },
              { val: "3.4×", label: "Avg. ROI Year 1" },
              { val: "UK-wide", label: "Coverage" },
            ].map((s, i) => (
              <div key={i} className="px-8 first:pl-0">
                <div className="font-mono font-bold text-2xl text-white">{s.val}</div>
                <div className="text-muted text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-heading font-bold text-3xl text-white mb-6">
          Want your trade business showcased here?
        </h2>
        <Link href="/get-started" className="btn-primary">
          Get Your Free Quote →
        </Link>
        <p className="text-muted text-sm mt-6">
          See <Link href="/who-we-work-with" className="text-amber underline underline-offset-4 hover:text-amber-light">which trades we work with</Link> for trade-specific features.
        </p>
      </section>
    </div>
  );
}
