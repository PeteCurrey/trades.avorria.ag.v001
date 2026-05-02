"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Job Management",
      body: "Create, assign, and track jobs from enquiry to completion. See your full week at a glance. Drag-and-drop rescheduling makes it simple to manage your team or yourself.",
      icon: "📋"
    },
    {
      title: "Quote & Invoice Builder",
      body: "Generate professional quotes on site while the customer is still hot. Convert accepted quotes to invoices in one tap. Stripe payment integration allows customers to pay immediately.",
      icon: "💷"
    },
    {
      title: "Customer CRM",
      body: "Full customer history at your fingertips. Every job, every invoice, every review. Know exactly who your customers are before you knock on their door.",
      icon: "👥"
    },
    {
      title: "Review Automation",
      body: "Automatically send SMS and email review requests immediately after job completion. Reviews feed directly to your website and Google Business Profile to boost your local SEO.",
      icon: "⭐"
    },
    {
      title: "Checkatrade Sync",
      body: "Your Checkatrade profile and your website reviews stay in perfect sync. No double-data-entry required. Build trust across all platforms simultaneously.",
      icon: "🔄"
    },
    {
      title: "Income Dashboard",
      body: "Real-time view of your revenue, outstanding invoices, and monthly performance compared to last year. Know exactly how your business is performing.",
      icon: "📈"
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !leftColRef.current || !rightColRef.current) return;
    
    // Only apply complex scroll pinning on desktop
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".feature-section");
      
      // Pin the right column (the UI mockups)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightColRef.current,
        pinSpacing: false,
      });

      // Update active index based on scroll position of left column
      sections.forEach((section: any, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(i);
            }
          }
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column (Scrolling Content) */}
        <div className="py-12 lg:py-48" ref={leftColRef}>
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`feature-section lg:min-h-[60vh] flex flex-col justify-center mb-16 lg:mb-0 transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'lg:opacity-30'}`}
            >
              <div className="w-16 h-16 rounded-xl bg-steel border border-border flex items-center justify-center text-2xl mb-8 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                {feature.title}
              </h3>
              <p className="text-muted-light text-xl leading-relaxed max-w-[480px]">
                {feature.body}
              </p>
              
              {/* Mobile Mockup representation (only visible on mobile) */}
              <div className="lg:hidden mt-8 w-full aspect-video bg-steel border border-border rounded-xl flex items-center justify-center">
                <span className="text-muted text-sm font-mono">TradeDesk UI: {feature.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Pinned Mockup Container) */}
        <div className="hidden lg:flex flex-col justify-center h-screen" ref={rightColRef}>
          <div className="w-full aspect-[4/3] bg-steel/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-500 p-8">
            
            {/* The mock UI that changes based on activeIndex */}
            <div className="absolute inset-0 bg-forge-black/50" />
            
            <div className="relative z-10 w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                <span className="font-heading font-semibold text-white">TradeDesk</span>
                <span className="badge-premium">{features[activeIndex]?.title}</span>
              </div>
              
              {/* Fake Content area */}
              <div className="flex-grow flex flex-col gap-4 items-center justify-center">
                <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  {features[activeIndex]?.icon}
                </div>
                <div className="w-3/4 h-8 bg-steel rounded-md" />
                <div className="w-1/2 h-8 bg-steel rounded-md" />
                
                <div className="grid grid-cols-2 gap-4 w-full mt-8">
                  <div className="h-24 bg-steel rounded-md border border-amber/20" />
                  <div className="h-24 bg-steel rounded-md border border-amber/20" />
                </div>
              </div>
            </div>

            {/* Subtle glow based on active index to show change */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber/5 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700" 
              key={`glow-${activeIndex}`}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
