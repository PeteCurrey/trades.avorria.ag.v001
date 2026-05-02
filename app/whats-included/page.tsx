"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    num: "01",
    title: "Website Design & Build",
    intro: "Every website we build is bespoke, engineered for your specific trade, and cinematic in execution. No templates. No shortcuts.",
    features: [
      "Bespoke design tailored to your trade and brand",
      "Mobile-first responsive layout",
      "Page speed optimised — sub-2-second load times",
      "Accessibility-compliant (WCAG 2.1 AA)",
      "Cinematic scroll animations and micro-interactions",
      "SEO-friendly URL structure",
      "Schema markup for trades businesses",
      "Cross-browser tested",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl overflow-hidden">
        <div className="h-8 bg-steel-light border-b border-border flex items-center px-4 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="ml-4 w-32 h-3 bg-forge-black rounded-full" />
        </div>
        <div className="p-6 space-y-3">
          <div className="h-8 w-3/4 bg-forge-black rounded" />
          <div className="h-4 w-full bg-forge-black/60 rounded" />
          <div className="h-4 w-2/3 bg-forge-black/60 rounded" />
          <div className="flex gap-3 mt-4">
            <div className="h-9 w-28 bg-amber/80 rounded-sm" />
            <div className="h-9 w-28 bg-forge-black border border-border rounded-sm" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square bg-forge-black rounded border border-border" />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Trade-Specific Features",
    intro: (
      <>
        We understand what makes a trades website convert. These are the tools that turn browsers into booked jobs across different <Link href="/who-we-work-with" className="text-amber underline hover:text-amber-light">trade types</Link>.
      </>
    ),
    features: [
      "Accreditation badge display (Gas Safe, NICEIC, NAPIT, TrustMark, MCS)",
      "Emergency callout pages with click-to-call",
      "Service area maps and geo-targeting",
      "Project gallery with before/after sliders",
      "Quote request forms with smart routing",
      "Trade-specific service pages (EV chargers, EICR, boiler installs etc.)",
      "Insurance and guarantee display",
      "Compliance certificate descriptions",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-amber font-mono text-xs uppercase tracking-wider mb-1">NICEIC Approved</div>
            <div className="font-heading font-bold text-white text-lg">Hartley Electrical</div>
          </div>
          <div className="bg-amber/10 border border-amber/30 rounded px-2 py-1 text-amber text-xs font-mono">GAS SAFE: 123456</div>
        </div>
        <div className="bg-amber flex items-center justify-center rounded-sm py-2.5">
          <span className="text-forge-black font-bold text-sm">📞 24/7 EMERGENCY CALLOUT</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Consumer Units", "EICR Testing", "EV Chargers", "Rewires"].map((s, i) => (
            <div key={i} className="bg-forge-black border border-border rounded p-2.5 text-xs text-muted-light">
              <div className="text-amber text-[10px] mb-0.5">SERVICE</div>
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "SEO & Local Search",
    intro: "A beautiful website is useless if nobody can find it. Our sites are built from the ground up to dominate your local area on Google.",
    features: [
      "Local SEO architecture (Google ranks you for \"near me\" searches)",
      "Service + location landing pages",
      "Google Business Profile setup and optimisation",
      "Schema.org structured data",
      "Sitemap and robots.txt configuration",
      "Page speed optimisation (Core Web Vitals)",
      "Monthly SEO performance reports (Forge & Titan)",
      "Multi-location targeting (Titan)",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl p-6 space-y-4">
        <div className="text-xs text-muted font-mono uppercase tracking-wider">Google Search Results</div>
        <div className="space-y-3">
          {[
            { rank: "1", query: "Electrician Sheffield", pos: "↑ #1" },
            { rank: "2", query: "Emergency plumber Derby", pos: "↑ #2" },
            { rank: "3", query: "Gas engineer near me", pos: "↑ #3" },
          ].map((r, i) => (
            <div key={i} className="bg-forge-black border border-border rounded p-3 flex justify-between items-center">
              <div>
                <div className="text-xs text-muted mb-0.5">yourtrade.com</div>
                <div className="text-white text-sm">{r.query}</div>
              </div>
              <span className="text-emerald-400 font-mono text-sm font-bold">{r.pos}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-3 text-xs text-muted flex justify-between">
          <span>Monthly organic visits</span>
          <span className="text-amber font-mono font-bold">↑ 847</span>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "TradeDesk Platform",
    intro: (
      <>
        Included as standard in <Link href="/packages#forge" className="text-amber underline hover:text-amber-light">Forge</Link> and Titan packages — <Link href="/trades-platform" className="text-amber underline hover:text-amber-light">TradeDesk</Link> connects your website, your jobs, your customers, and your reviews in one place.
      </>
    ),
    features: [
      "Job management and scheduling",
      "Quote and invoice builder with Stripe payments",
      "Customer CRM with full job history",
      "Review request automation",
      "Checkatrade integration",
      "Income dashboard with monthly comparisons",
      "Mobile-friendly — works in your van",
      "No additional subscription fees",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded bg-amber flex items-center justify-center font-heading font-bold text-forge-black text-xs">TD</span>
          <span className="font-heading font-semibold text-white">TradeDesk</span>
          <span className="ml-auto text-emerald-400 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Live
          </span>
        </div>
        <div className="bg-forge-black rounded-lg p-4">
          <div className="text-xs text-muted mb-1">Income this month</div>
          <div className="font-mono font-bold text-2xl text-white">£8,240<span className="text-amber">.00</span></div>
          <div className="text-emerald-400 text-xs mt-1">↑ 18% vs last month</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-forge-black rounded p-3 text-center border border-border">
            <div className="font-mono font-bold text-white">12</div>
            <div className="text-muted text-[10px]">Active Jobs</div>
          </div>
          <div className="bg-forge-black rounded p-3 text-center border border-border">
            <div className="font-mono font-bold text-amber">£1,840</div>
            <div className="text-muted text-[10px]">Outstanding</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Support & Maintenance",
    intro: "We don't just build and leave. We manage the technical side so you can focus on the tools in your hand, not the technology on your desk.",
    features: [
      "Fixed-price monthly maintenance — no surprises",
      "UK hosting included",
      "SSL certificate included",
      "Daily automated backups",
      "Security monitoring and updates",
      "Content updates (Forge & Titan: 2 hours/month free)",
      "Email support with 24-hour response SLA",
      "Dedicated account manager (Titan)",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl p-6 space-y-4">
        <h4 className="font-heading text-white text-sm font-semibold">System Status</h4>
        {[
          { label: "Website uptime", status: "99.98%", ok: true },
          { label: "SSL Certificate", status: "Valid · 328 days", ok: true },
          { label: "Last backup", status: "2h ago", ok: true },
          { label: "Security scans", status: "Clean", ok: true },
        ].map((row, i) => (
          <div key={i} className="flex justify-between items-center border-b border-border/50 pb-3">
            <span className="text-muted-light text-sm">{row.label}</span>
            <span className={`text-xs font-mono flex items-center gap-2 ${row.ok ? "text-emerald-400" : "text-amber"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {row.status}
            </span>
          </div>
        ))}
        <div className="bg-amber/5 border border-amber/20 rounded p-3 text-xs text-amber">
          Next scheduled maintenance: None pending
        </div>
      </div>
    ),
  },
  {
    num: "06",
    title: "Integrations",
    intro: "Connect your website with the platforms you already use and trust. Everything talks to everything.",
    features: [
      "Google Business Profile sync",
      "Checkatrade integration",
      "TrustMark integration",
      "Facebook & Instagram feed integration",
      "Mailchimp / email marketing connection",
      "WhatsApp click-to-chat",
      "Stripe payment processing (TradeDesk)",
      "Xero / QuickBooks (Titan, on request)",
    ],
    mockup: (
      <div className="bg-steel border border-border rounded-xl p-6 space-y-3">
        <h4 className="font-heading text-white text-sm font-semibold mb-4">Connected Platforms</h4>
        {[
          { name: "Google Business Profile", status: "Connected", icon: "G" },
          { name: "Checkatrade", status: "Syncing", icon: "C" },
          { name: "Stripe Payments", status: "Active", icon: "S" },
          { name: "TrustMark", status: "Connected", icon: "T" },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-border/50 pb-3">
            <div className="w-8 h-8 rounded bg-forge-black border border-border flex items-center justify-center text-xs font-mono text-amber font-bold">
              {p.icon}
            </div>
            <span className="text-muted-light text-sm flex-grow">{p.name}</span>
            <span className="text-emerald-400 text-xs font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {p.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function WhatsIncludedPage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((el) => {
        if (!el) return;
        const children = el.querySelectorAll(".reveal-child");
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto border-b border-border">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          What's actually <span className="text-amber">included.</span>
        </h1>
        <p className="text-xl text-muted-light max-w-[600px]">
          Every Avorria Trades website is built to a specification. No vague promises. Here's exactly what you get.
        </p>
      </section>

      {/* Feature Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-32">
        {sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => { sectionsRef.current[i] = el; }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
          >
            {/* Text column */}
            <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
              <div className="reveal-child">
                <span className="font-mono font-bold text-[80px] leading-none text-amber opacity-20 select-none block mb-6">
                  {section.num}
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 reveal-child">
                {section.title}
              </h2>
              <p className="text-muted-light text-lg leading-relaxed mb-10 reveal-child">
                {section.intro}
              </p>
              <ul className="space-y-3 reveal-child">
                {section.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <span className="text-amber font-mono mt-0.5 shrink-0">✓</span>
                    <span className="text-muted-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup column */}
            <div className={`reveal-child ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
              {section.mockup}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border bg-steel/20 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
          Ready to see exactly what we'd build for your trade?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/get-started" className="btn-primary">
            Get a Free Quote →
          </Link>
          <Link href="/packages" className="btn-secondary">
            View Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
