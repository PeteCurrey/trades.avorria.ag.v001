"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function TwoProducts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const blocks = containerRef.current.querySelectorAll(".product-block");
      gsap.fromTo(
        blocks,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-24 bg-forge-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-[48px] leading-[1.1]">
            Your website. Your platform.<br />
            <span className="text-amber">One specialist team.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={containerRef}>
          
          {/* Block 1 — The Website */}
          <div className="product-block group card-premium !p-10 !pt-12 rounded-2xl flex flex-col items-start relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber/10 to-transparent group-hover:animate-shimmer" />
            
            <div className="font-mono text-amber text-xl font-bold mb-6">01</div>
            <h3 className="font-heading font-bold text-3xl text-white mb-4">A trades website that actually converts</h3>
            <p className="text-muted-light text-lg leading-relaxed mb-8">
              Cinematic, professional, mobile-first. Built to rank on Google, display your accreditations, and turn visitors into booked jobs. Not a template. Not a builder. A proper bespoke website.
            </p>
            
            <ul className="space-y-4 mb-10 text-muted">
              {[
                "Local SEO architecture",
                "Accreditation badge display",
                "Emergency callout pages",
                "Review aggregation",
                "Quote request forms",
                "Google Business sync"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-4">
              <Link href="/whats-included" className="text-white hover:text-amber transition-colors font-medium flex items-center gap-2">
                See what's included <span className="text-amber">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Block 2 — TradeDesk */}
          <div className="product-block group card-premium !p-10 !pt-12 rounded-2xl flex flex-col items-start relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber/10 to-transparent group-hover:animate-shimmer" />
            
            <div className="flex justify-between items-center w-full mb-6">
              <div className="font-mono text-amber text-xl font-bold">02</div>
              <span className="badge-premium">NEW</span>
            </div>
            
            <h3 className="font-heading font-bold text-3xl text-white mb-4">TradeDesk — your complete business platform</h3>
            <p className="text-muted-light text-lg leading-relaxed mb-8">
              Job management, customer records, invoicing, quotes, scheduling, and review collection — all in one place. Accessible from your phone on site. No separate subscriptions.
            </p>
            
            <ul className="space-y-4 mb-10 text-muted">
              {[
                "Job management & scheduling",
                "Quote & invoice builder",
                "Customer CRM",
                "Review request automation",
                "Checkatrade integration",
                "Income dashboard"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-4">
              <Link href="/trades-platform" className="text-white hover:text-amber transition-colors font-medium flex items-center gap-2">
                Explore TradeDesk <span className="text-amber">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}} />
    </section>
  );
}
