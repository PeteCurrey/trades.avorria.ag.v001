"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function PortfolioStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply GSAP horizontal scroll on desktop
    if (window.innerWidth < 1024) return;

    if (sectionRef.current && scrollWrapperRef.current) {
      const scrollWidth = scrollWrapperRef.current.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      const tween = gsap.to(scrollWrapperRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=" + amountToScroll,
          pin: true,
          scrub: 1, // Smooth scrubbing
        },
      });

      return () => {
        tween.kill();
      };
    }
  }, []);

  const portfolioItems = [
    { trade: "Electrician", location: "Sheffield", rating: "5.0" },
    { trade: "Plumber", location: "Manchester", rating: "4.9" },
    { trade: "Gas Engineer", location: "Leeds", rating: "5.0" },
    { trade: "Builder", location: "Nottingham", rating: "4.8" },
    { trade: "Roofer", location: "Derby", rating: "4.9" },
    { trade: "Landscaper", location: "York", rating: "5.0" },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center bg-steel border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-[1.1] max-w-[400px]">
            Websites built for trades across the UK.
          </h2>
          <Link href="/portfolio" className="btn-ghost text-sm pb-1 self-start md:self-auto">
            View All Work &rarr;
          </Link>
        </div>
      </div>

      {/* The scrolling container */}
      <div 
        ref={scrollWrapperRef} 
        className="flex gap-6 px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] w-max overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-8 lg:pb-0 scrollbar-hide"
      >
        {portfolioItems.map((item, i) => (
          <div 
            key={i} 
            className="w-[320px] md:w-[400px] shrink-0 snap-center group"
          >
            {/* Fake UI Card */}
            <div className="aspect-[4/3] bg-forge-black border border-border rounded-xl mb-6 relative overflow-hidden transition-colors duration-300 group-hover:border-amber/50">
              {/* Top browser bar */}
              <div className="h-8 border-b border-border flex items-center px-4 gap-1.5 bg-steel">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              {/* Inner fake content */}
              <div className="p-6 h-full flex flex-col">
                <div className="w-1/3 h-6 bg-steel rounded mb-6" />
                <div className="w-3/4 h-10 bg-steel rounded mb-4" />
                <div className="w-1/2 h-4 bg-steel/50 rounded mb-auto" />
                <div className="flex gap-2">
                  <div className="w-24 h-8 bg-amber/20 rounded" />
                  <div className="w-24 h-8 bg-steel rounded" />
                </div>
              </div>
              
              {/* View Overlay on Hover */}
              <div className="absolute inset-0 bg-forge-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="btn-primary py-2 px-4 text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)]">View Site</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="badge-premium !text-[10px] uppercase">{item.trade}</span>
                  <span className="text-muted text-sm">{item.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-mono font-bold text-sm">{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
