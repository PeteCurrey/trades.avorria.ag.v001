"use client";

const items = [
  "GAS SAFE",
  "NICEIC",
  "NAPIT",
  "TRUSTMARK",
  "CHECKATRADE",
  "MCS CERTIFIED",
  "WHICH? TRUSTED TRADER",
];

export default function TrustBar() {
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-forge-black/80">
      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-12 items-center">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-6 shrink-0 group">
              <span className="font-mono text-sm uppercase tracking-wider text-white/50 transition-all duration-300 group-hover:text-white/100 group-hover:[text-shadow:0_0_8px_rgba(245,158,11,0.5)]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: static spread */}
      <div className="hidden md:flex justify-between items-center max-w-[1400px] mx-auto px-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 group">
            <span 
              className="font-mono text-sm uppercase tracking-wider text-white/50 transition-all duration-300 group-hover:text-white/100 group-hover:[text-shadow:0_0_8px_rgba(245,158,11,0.5)] animate-pulse"
              style={{ animationDuration: '3s', animationDelay: `${i * 0.4}s` }}
            >
              {item}
            </span>
            {i !== items.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-amber/80 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
