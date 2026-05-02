"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, prefix: "", suffix: "+", label: "Trades websites built", note: "across the UK" },
  { value: 98, prefix: "", suffix: "%", label: "Customer satisfaction", note: "year 1 & beyond" },
  { value: 2400, prefix: "£", suffix: "", label: "Avg. added annual revenue", note: "per client, year 1" },
  { value: 3, prefix: "", suffix: " Weeks", label: "Typical go-live time", note: "from brief to launch" },
];

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.counter || "0");
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
          },
        });
      });

      // Fade in the section
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="border-y border-border bg-steel/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 divide-x-0 lg:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-start lg:items-center text-left lg:text-center px-0 lg:px-8">
              <p
                className="font-mono font-bold text-4xl md:text-5xl text-white mb-2"
                data-counter={stat.value}
                data-prefix={stat.prefix}
                data-suffix={stat.suffix}
              >
                {stat.prefix}0{stat.suffix}
              </p>
              <p className="font-heading font-semibold text-white text-base mb-1">{stat.label}</p>
              <p className="text-muted text-sm">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
