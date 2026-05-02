"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TradesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, []);

  const trades = [
    { name: "Electricians", desc: "NICEIC & NAPIT accreditation display", icon: "⚡" },
    { name: "Plumbers", desc: "Gas Safe & emergency callout features", icon: "🔧" },
    { name: "Gas Engineers", desc: "Compliance certificates & Gas Safe badge", icon: "🔥" },
    { name: "HVAC", desc: "Service contract management", icon: "🌡️" },
    { name: "Builders", desc: "Project gallery & planning application support", icon: "🏠" },
    { name: "Roofers", desc: "Guarantee display & insurance certificates", icon: "🔩" },
    { name: "Joiners/Carpenters", desc: "Before/after galleries & quote calculators", icon: "🪵" },
    { name: "Landscapers", desc: "Seasonal availability & portfolio showcase", icon: "🌿" },
    { name: "Painters/Decorators", desc: "Colour scheme galleries & quote forms", icon: "🎨" },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-12" ref={containerRef}>
          
          {/* Left Column: Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-bold text-4xl md:text-[48px] leading-[1.1] mb-6">
              We've built our entire platform around trades.
            </h2>
            <p className="text-muted-light leading-[1.7] text-lg">
              The agencies building trade websites don't understand what a Gas Safe engineer actually needs on their website. Or what makes a homeowner call an electrician instead of scrolling past. We do — because we've spent years studying exactly what converts in your industry.
            </p>
          </div>

          {/* Right Column: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {trades.map((trade, index) => (
              <div
                key={trade.name}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="bg-steel border border-border p-6 rounded-xl transition-all duration-300 hover:border-border-amber group relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-2xl mb-4 text-amber">{trade.icon}</div>
                  <h3 className="font-heading font-semibold text-white text-base mb-2">{trade.name}</h3>
                  <p className="text-muted text-[13px] leading-relaxed mt-auto">{trade.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
