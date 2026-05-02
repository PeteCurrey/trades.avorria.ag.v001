"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Testimonials() {
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
          stagger: 0.08,
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

  const testimonials = [
    {
      quote: "Before my website, I was relying entirely on word of mouth. Within 6 weeks of going live I had 12 new enquiries come through the site. The Google ranking is spot on.",
      name: "Dave Hartley",
      trade: "NICEIC Electrician",
      location: "Leeds",
      badge: "NICEIC"
    },
    {
      quote: "They built exactly what I needed. My Gas Safe number is front and centre, my reviews pull through automatically, and it looks ten times better than any other plumber in my area.",
      name: "Craig Ashworth",
      trade: "Gas Safe Plumber",
      location: "Derby",
      badge: "Gas Safe"
    },
    {
      quote: "The TradeDesk system is a game changer. I send quotes and invoices from my van. It's all linked to the website so customers can even leave a review right there.",
      name: "Ryan Booth",
      trade: "Builder",
      location: "Sheffield",
      badge: "TrustMark"
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-[48px] leading-[1.1]">
            What tradespeople say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={containerRef}>
          {testimonials.map((t, i) => (
            <div 
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="bg-steel border border-border p-8 rounded-xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="font-sans italic text-lg text-white leading-relaxed mb-8 flex-grow">
                "{t.quote}"
              </p>
              
              <div className="mt-auto border-t border-border pt-6 flex items-start justify-between">
                <div>
                  <p className="font-sans font-medium text-amber mb-1">{t.name}</p>
                  <p className="text-sm text-muted">{t.trade}, {t.location}</p>
                </div>
                <span className="badge-premium !py-0.5">{t.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
