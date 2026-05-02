"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const counters = containerRef.current.querySelectorAll(".stat-number");
      
      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute("data-target") || "0");
        const prefix = counter.getAttribute("data-prefix") || "";
        const suffix = counter.getAttribute("data-suffix") || "";
        const isDecimal = targetValue % 1 !== 0;

        gsap.to(counter, {
          innerHTML: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            const val = this.targets()[0].innerHTML;
            // Format number with commas
            const formattedVal = Number(val).toLocaleString(undefined, {
              minimumFractionDigits: isDecimal ? 1 : 0,
              maximumFractionDigits: isDecimal ? 1 : 0,
            });
            this.targets()[0].innerHTML = `${prefix}${formattedVal}${suffix}`;
          },
        });
      });
    }
  }, []);

  const stats = [
    { target: 500, suffix: "+", label: "Trades websites" },
    { target: 98, suffix: "%", label: "Customer satisfaction" },
    { target: 2400, prefix: "£", label: "Avg. added annual revenue" },
    { target: 3, label: "Weeks typical site live time" },
  ];

  return (
    <section className="bg-amber py-20 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-forge-black">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-mono font-bold text-4xl md:text-[56px] leading-tight mb-2 tracking-tighter">
                {/* Fallback to 0 for initial render */}
                <span 
                  className="stat-number inline-block" 
                  data-target={stat.target} 
                  data-prefix={stat.prefix || ""} 
                  data-suffix={stat.suffix || ""}
                >
                  {stat.prefix}0{stat.suffix}
                </span>
              </div>
              <p className="font-sans font-medium text-sm md:text-base max-w-[160px] opacity-90 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
