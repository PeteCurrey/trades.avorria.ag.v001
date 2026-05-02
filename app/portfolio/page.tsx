"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const portfolioItems = [
  { id: 1, trade: "Electrician", name: "Hartley Electrical", location: "Leeds", stat: "↑ 34% enquiries in 3 months", rating: "5.0" },
  { id: 2, trade: "Plumber", name: "Precision Plumbing", location: "Sheffield", stat: "↑ 12 emergency calls/week", rating: "4.9" },
  { id: 3, trade: "Gas", name: "Apex Heating", location: "Manchester", stat: "↑ 45% boiler service bookings", rating: "5.0" },
  { id: 4, trade: "Builder", name: "Oakwood Construction", location: "Nottingham", stat: "£120k extension won via site", rating: "4.8" },
  { id: 5, trade: "Roofer", name: "Skyline Roofing", location: "Derby", stat: "↑ 28% storm repair leads", rating: "4.9" },
  { id: 6, trade: "Landscaper", name: "Green Retreats", location: "York", stat: "Fully booked for summer", rating: "5.0" },
  { id: 7, trade: "Electrician", name: "Volt Matrix", location: "Birmingham", stat: "↑ 60% commercial rewires", rating: "4.9" },
  { id: 8, trade: "Plumber", name: "Flow Dynamics", location: "Liverpool", stat: "↑ 22% bathroom fits", rating: "4.8" },
  { id: 9, trade: "Gas", name: "Flame Safe", location: "Chester", stat: "150+ automated CP12 bookings", rating: "5.0" },
  { id: 10, trade: "Builder", name: "Brick & Mortar", location: "Leicester", stat: "↑ 40% planning enquiries", rating: "4.9" },
  { id: 11, trade: "Roofer", name: "Apex Slate", location: "Stoke", stat: "↑ 35% drone surveys booked", rating: "5.0" },
  { id: 12, trade: "Landscaper", name: "Earth & Stone", location: "Lincoln", stat: "↑ 50% high-ticket driveways", rating: "4.9" },
];

const filters = ["All", "Electrician", "Plumber", "Gas", "Builder", "Roofer", "Landscaper"];

import { Suspense } from "react";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams?.get("trade") || "All";
  
  // Try to match the URL param to a valid filter, otherwise default to All
  const matchedFilter = filters.find(f => f.toLowerCase() === initialFilter.toLowerCase() || (f === "Gas" && initialFilter === "gas-engineers")) || "All";
  
  const [activeFilter, setActiveFilter] = useState(matchedFilter);

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.trade === activeFilter);

  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] text-white mb-6">
          Websites built for trades across the UK.
        </h1>
        <p className="text-xl text-muted-light max-w-2xl mx-auto">
          Explore our recent launches. Every site is bespoke and built to dominate local search.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-amber text-forge-black shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
                  : "bg-steel border border-border text-muted hover:text-white hover:border-border-amber"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group animate-in fade-in zoom-in duration-500">
              {/* Fake UI Card */}
              <div className="aspect-[4/3] bg-steel border border-border rounded-xl mb-6 relative overflow-hidden transition-all duration-300 group-hover:border-amber shadow-lg">
                {/* Top browser bar */}
                <div className="h-8 border-b border-border flex items-center px-4 gap-1.5 bg-steel-light">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                {/* Inner fake content */}
                <div className="p-6 h-full flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-forge-black/50 to-transparent" />
                  <div className="relative z-10">
                    <div className="w-1/3 h-6 bg-steel-light rounded mb-6" />
                    <div className="w-3/4 h-10 bg-steel-light rounded mb-4" />
                    <div className="w-1/2 h-4 bg-steel-light/50 rounded mb-auto" />
                  </div>
                  <div className="relative z-10 mt-auto flex gap-2">
                    <div className="w-24 h-8 bg-amber/20 rounded border border-amber/30" />
                    <div className="w-24 h-8 bg-steel-light rounded" />
                  </div>
                </div>
                
                {/* View Overlay on Hover */}
                <div className="absolute inset-0 bg-forge-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="btn-primary py-2 px-6 text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2">
                    View Site <span className="text-forge-black">&rarr;</span>
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2 group-hover:text-amber transition-colors">
                    {item.name} <span className="text-muted font-normal text-base ml-1">— {item.location}</span>
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge-premium !text-[10px] uppercase">{item.trade}</span>
                  </div>
                  <p className="text-muted-light text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {item.stat}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 bg-steel border border-border px-2 py-1 rounded-md">
                  <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-mono font-bold text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted">
            No portfolio items found for this trade yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border bg-steel/30 text-center">
        <h2 className="font-heading font-bold text-3xl text-white mb-6">Want a website like these?</h2>
        <Link href="/get-started" className="btn-primary inline-flex">
          Get Your Free Quote &rarr;
        </Link>
      </section>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="bg-forge-black min-h-screen pt-32 text-center text-white">Loading portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
