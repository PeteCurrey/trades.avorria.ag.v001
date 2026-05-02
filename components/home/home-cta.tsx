"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeCTA() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number, duration: number }>>([]);

  useEffect(() => {
    // Generate 15 random particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-forge-black">
      {/* Amber radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-amber/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-amber/40 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          Ready to win more jobs online?
        </h2>
        
        <p className="text-xl text-muted-light max-w-[600px] mx-auto mb-12">
          Join hundreds of tradespeople across the UK with a website that works as hard as they do.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/get-started" 
            className="btn-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
          >
            Get a Free Quote &rarr;
          </Link>
          <Link 
            href="/packages" 
            className="btn-ghost text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:bg-amber/5"
          >
            See Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
