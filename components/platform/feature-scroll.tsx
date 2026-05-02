"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// ── Mockup components ────────────────────────────────────────────────────────

function JobManagementMockup() {
  const jobs = [
    { client: "Mrs. Whitfield", job: "Boiler Service", time: "Mon 09:00", status: "confirmed" },
    { client: "Hartley & Co.", job: "Office Rewire", time: "Tue 14:00", status: "in-progress" },
    { client: "Mr. Singh", job: "EICR Inspection", time: "Wed 11:00", status: "scheduled" },
  ];
  return (
    <div className="bg-steel border border-border rounded-xl p-6 space-y-4 w-full max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-heading text-amber text-sm font-semibold">This Week</h4>
        <span className="text-xs text-muted font-mono">8 jobs</span>
      </div>
      <div className="space-y-2">
        {jobs.map((j, i) => (
          <div key={i} className="bg-forge-black border border-border rounded-lg p-3 flex justify-between items-center">
            <div>
              <div className="text-white text-sm font-medium">{j.job}</div>
              <div className="text-muted text-xs mt-0.5">{j.client} · {j.time}</div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded font-mono ${
              j.status === "confirmed" ? "bg-amber/15 text-amber" :
              j.status === "in-progress" ? "bg-emerald-500/15 text-emerald-400" :
              "bg-white/5 text-muted"
            }`}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-3 flex justify-between text-xs text-muted">
        <span>Next: 5 more this week</span>
        <span className="text-amber font-mono">View calendar →</span>
      </div>
    </div>
  );
}

function QuoteBuilderMockup() {
  const rows = [
    { item: "Consumer unit replacement", price: "£480.00" },
    { item: "Labour (4 hrs)", price: "£220.00" },
    { item: "Test certificate", price: "£60.00" },
  ];
  return (
    <div className="bg-steel border border-border rounded-xl p-6 w-full max-w-sm">
      <div className="flex justify-between items-baseline mb-6">
        <h4 className="font-heading text-white text-sm font-semibold">Quote #2491</h4>
        <span className="text-xs font-mono text-muted bg-steel-light px-2 py-0.5 rounded">DRAFT</span>
      </div>
      <div className="space-y-2.5 text-sm mb-4">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-between text-muted-light border-b border-border pb-2">
            <span>{row.item}</span>
            <span className="font-mono">{row.price}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2">
          <span className="text-white font-medium">Total</span>
          <span className="font-mono text-amber text-xl font-bold">£760.00</span>
        </div>
      </div>
      <button className="w-full bg-amber text-forge-black font-semibold text-sm py-2.5 rounded-sm mt-2 hover:bg-amber-light transition-colors">
        Send to customer →
      </button>
    </div>
  );
}

function CRMMockup() {
  return (
    <div className="bg-steel border border-border rounded-xl p-6 space-y-4 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-amber/15 text-amber flex items-center justify-center font-heading font-bold text-lg shrink-0">JW</div>
        <div>
          <div className="text-white text-sm font-semibold">James Whitfield</div>
          <div className="text-muted text-xs mt-0.5">Customer since 2023 · 7 jobs</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[{ val: "£4.2k", label: "Lifetime" }, { val: "7", label: "Jobs" }, { val: "5★", label: "Reviews" }].map((s, i) => (
          <div key={i} className="bg-forge-black rounded-lg p-3 border border-border">
            <div className="text-amber font-mono text-lg font-bold">{s.val}</div>
            <div className="text-muted text-[10px] uppercase tracking-wider mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-3">
        <div className="text-xs text-muted mb-2">Recent jobs</div>
        {["Boiler service", "Annual inspection", "Powerflush"].map((j, i) => (
          <div key={i} className="flex justify-between text-xs py-1.5 border-b border-border/50">
            <span className="text-muted-light">{j}</span>
            <span className="text-muted font-mono">{14 + i * 30} days ago</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewMockup() {
  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Brilliant work — punctual and tidy.", source: "Google" },
    { name: "Tom B.", rating: 5, text: "Spot on, would use again.", source: "Checkatrade" },
  ];
  return (
    <div className="bg-steel border border-border rounded-xl p-6 space-y-4 w-full max-w-sm">
      <h4 className="font-heading text-amber text-sm font-semibold">Recent Reviews</h4>
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="border-l-2 border-amber pl-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-white text-sm font-medium">{r.name}</span>
              <span className="text-amber text-xs">{"★".repeat(r.rating)}</span>
              <span className="text-muted text-[10px] ml-auto font-mono uppercase">{r.source}</span>
            </div>
            <p className="text-muted-light text-xs">"{r.text}"</p>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted pt-2 border-t border-border flex justify-between items-center">
        <span>Auto-sent: 3 requests today</span>
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function CheckatradeMockup() {
  const rows = [
    { source: "Reviews", count: "47 synced" },
    { source: "Profile description", count: "Matched" },
    { source: "Service categories", count: "8 in sync" },
    { source: "Photos", count: "23 mirrored" },
  ];
  return (
    <div className="bg-steel border border-border rounded-xl p-6 space-y-4 w-full max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-heading text-white text-sm font-semibold">Checkatrade Sync</h4>
        <span className="flex items-center gap-2 text-emerald-400 text-xs">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Live
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((s, i) => (
          <div key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2.5">
            <span className="text-muted-light">{s.source}</span>
            <span className="text-amber font-mono text-xs">{s.count}</span>
          </div>
        ))}
      </div>
      <div className="bg-amber/5 border border-amber/20 rounded p-3 text-xs text-amber">
        ✓ Last synced 2 minutes ago
      </div>
    </div>
  );
}

function IncomeMockup() {
  const bars = [40, 65, 50, 80, 55, 90, 75];
  return (
    <div className="bg-steel border border-border rounded-xl p-6 space-y-4 w-full max-w-sm">
      <div>
        <div className="text-muted text-xs uppercase tracking-wider mb-1">This Month</div>
        <div className="text-white font-mono text-3xl font-bold">£12,840</div>
        <div className="text-emerald-400 text-xs mt-1">↑ 23% vs last month</div>
      </div>
      <div className="flex items-end gap-1 h-20">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end rounded-sm overflow-hidden" style={{ height: "100%" }}>
            <div className="bg-amber/25 rounded-sm relative" style={{ height: `${h}%` }}>
              <div className="absolute bottom-0 left-0 right-0 bg-amber rounded-sm" style={{ height: "55%" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
        <div>
          <div className="text-muted text-[10px] uppercase tracking-wider mb-1">Outstanding</div>
          <div className="text-amber font-mono text-sm font-bold">£2,180</div>
        </div>
        <div>
          <div className="text-muted text-[10px] uppercase tracking-wider mb-1">Paid</div>
          <div className="text-white font-mono text-sm font-bold">£10,660</div>
        </div>
      </div>
    </div>
  );
}

// ── Feature data ─────────────────────────────────────────────────────────────

const features = [
  {
    title: "Job Management",
    body: "Create, assign, and track jobs from enquiry to completion. See your full week at a glance. Drag-and-drop rescheduling makes it simple to manage your team or yourself.",
    icon: "📋",
    mockup: <JobManagementMockup />,
  },
  {
    title: "Quote & Invoice Builder",
    body: "Generate professional quotes on site while the customer is still hot. Convert accepted quotes to invoices in one tap. Stripe payment integration allows customers to pay immediately.",
    icon: "💷",
    mockup: <QuoteBuilderMockup />,
  },
  {
    title: "Customer CRM",
    body: "Full customer history at your fingertips. Every job, every invoice, every review. Know exactly who your customers are before you knock on their door.",
    icon: "👥",
    mockup: <CRMMockup />,
  },
  {
    title: "Review Automation",
    body: "Automatically send SMS and email review requests immediately after job completion. Reviews feed directly to your website and Google Business Profile to boost your local SEO.",
    icon: "⭐",
    mockup: <ReviewMockup />,
  },
  {
    title: "Checkatrade Sync",
    body: "Your Checkatrade profile and your website reviews stay in perfect sync. No double-data-entry required. Build trust across all platforms simultaneously.",
    icon: "🔄",
    mockup: <CheckatradeMockup />,
  },
  {
    title: "Income Dashboard",
    body: "Real-time view of your revenue, outstanding invoices, and monthly performance compared to last year. Know exactly how your business is performing.",
    icon: "📈",
    mockup: <IncomeMockup />,
  },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray<Element>(".feature-section");
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column — Sticky mockup */}
        <div className="hidden lg:flex flex-col justify-center order-2 lg:order-1">
          <div className="sticky top-32 flex items-center justify-center min-h-[60vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full"
              >
                {features[activeIndex]?.mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column — Scrolling content */}
        <div className="py-12 lg:py-48 order-1 lg:order-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`feature-section flex flex-col mb-20 lg:mb-0 lg:min-h-[75vh] lg:justify-center transition-opacity duration-500 ${
                activeIndex === i ? "opacity-100" : "lg:opacity-25"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-steel border border-border flex items-center justify-center text-2xl mb-8">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">{feature.title}</h3>
              <p className="text-muted-light text-lg leading-relaxed max-w-[460px] mb-10">{feature.body}</p>

              {/* Mobile mockup — inline */}
              <div className="lg:hidden">{feature.mockup}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
