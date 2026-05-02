"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Splitting the headline text for line-by-line animation manually or using simple opacity/y transform
    // To keep it simple without SplitText plugin, we animate the whole heading or nested spans
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );
    }

    tl.fromTo(
      subheadlineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo(
      mockupRef.current,
      { scale: 0.95, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.7"
    );
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-forge-black">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        {/* Amber radial glow */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-glow/40 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-8 items-center py-20 lg:py-0">
        
        {/* Left Column: Copy */}
        <div className="flex flex-col">
          <h1 ref={headlineRef} className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8">
            The UK&apos;s specialist
            <br />
            digital partner for
            <br />
            <span className="text-amber">tradespeople.</span>
          </h1>
          
          <p ref={subheadlineRef} className="text-[18px] md:text-[20px] leading-[1.6] text-muted-light max-w-[560px] mb-10 font-normal">
            Premium websites and a complete business management platform, built specifically for electricians, plumbers, gas engineers, builders and trades across the UK.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/packages" className="btn-primary">
              See Our Packages &rarr;
            </Link>
            <Link href="/portfolio" className="btn-ghost text-base font-medium">
              View Trade Websites
            </Link>
          </div>
        </div>

        {/* Right Column: Animated Mockup */}
        <div ref={mockupRef} className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center lg:justify-end">
          {/* Amber glow underneath card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber/20 blur-[100px] rounded-full pointer-events-none" />
          
          {/* The Dashboard Card */}
          <div className="relative w-full max-w-[480px] bg-steel/80 backdrop-blur-xl border border-border rounded-xl p-6 shadow-2xl animate-[float_4s_ease-in-out_infinite]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-amber flex items-center justify-center font-heading font-bold text-forge-black text-sm">TD</span>
                <span className="font-heading font-semibold text-white">TradeDesk</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-steel-light border border-border flex items-center justify-center">
                <span className="text-muted text-xs">JP</span>
              </div>
            </div>

            {/* Income Counter */}
            <div className="mb-6">
              <p className="text-xs text-muted font-medium mb-1">Income this month</p>
              <p className="font-mono font-bold text-3xl text-white">£3,840<span className="text-amber">.00</span></p>
            </div>

            {/* Mini Job Card */}
            <div className="bg-steel-light border border-border rounded-lg p-4 mb-4 relative overflow-hidden group hover:border-border-amber transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber" />
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium text-white text-sm">Boiler Service</p>
                <span className="badge-premium !text-[10px] !py-0.5">Confirmed</span>
              </div>
              <p className="text-muted text-xs mb-3">14 Ashwood Crescent, Sheffield</p>
              <div className="flex items-center gap-2 text-xs text-muted">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Today, 14:00
              </div>
            </div>

            {/* Calendar Strip */}
            <div className="flex gap-2 mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className={`flex-1 flex flex-col items-center justify-center py-2 rounded border ${i === 2 ? 'bg-amber/10 border-amber/30 text-amber' : 'bg-steel-light border-border text-muted'} transition-colors`}>
                  <span className="text-[10px] uppercase mb-1">{day}</span>
                  <span className={`font-mono text-sm font-bold ${i === 2 ? 'text-amber' : 'text-white'}`}>{12 + i}</span>
                </div>
              ))}
            </div>

            {/* Reviews Strip */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-steel-light border border-border">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-mono font-bold text-sm">4.9</span>
              </div>
              <span className="text-muted text-xs">127 reviews</span>
            </div>

          </div>
        </div>
      </div>
      
      {/* Custom Keyframe for float */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
