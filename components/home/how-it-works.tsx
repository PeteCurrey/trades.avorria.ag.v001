"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Animate line drawing
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { width: "0%" },
          { width: "100%", duration: 1.5, ease: "power2.inOut" }
        );
      }

      // Animate steps appearing alongside line
      tl.fromTo(
        stepsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.4, ease: "power3.out" },
        "-=1.2" // Start overlapping with line animation
      );
    }
  }, []);

  const steps = [
    {
      num: "1",
      title: "Discovery Call",
      body: "15 minutes. We learn your trade, area, accreditations, and what jobs you want more of.",
    },
    {
      num: "2",
      title: "Design & Build",
      body: "Your bespoke website is designed and built to your brief. You review before anything goes live.",
    },
    {
      num: "3",
      title: "Go Live",
      body: "Site launches. Google Business connected. TradeDesk set up. You start getting enquiries.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-forge-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl md:text-[48px] text-center mb-20">
          From enquiry to live website in <span className="text-amber">3 weeks.</span>
        </h2>

        <div className="relative" ref={containerRef}>
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px]">
            <div className="w-full h-full border-t-2 border-dashed border-amber/30" />
            <div ref={lineRef} className="absolute top-0 left-0 h-full border-t-2 border-amber transition-all shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: "0%" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="relative flex flex-col items-center text-center md:items-start md:text-left z-10"
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
              >
                {/* Step Circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-forge-black border-2 border-amber flex items-center justify-center font-mono font-bold text-3xl text-amber mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)] relative">
                  {step.num}
                  {/* Inner subtle glow */}
                  <div className="absolute inset-1 rounded-full bg-amber/5" />
                </div>
                
                {/* Mobile connecting line (vertical) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute top-[80px] bottom-[-48px] left-1/2 w-[2px] border-l-2 border-dashed border-amber/30 -translate-x-1/2" />
                )}

                <h3 className="font-heading font-semibold text-2xl text-white mb-4 bg-forge-black inline-block px-1">
                  {step.title}
                </h3>
                <p className="text-muted-light leading-relaxed max-w-[280px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
