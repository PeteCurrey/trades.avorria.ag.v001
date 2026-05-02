import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Avorria Trades — Reviews from UK Tradespeople",
  description: "Real reviews from Avorria Trades clients across the UK. Electricians, plumbers, gas engineers, builders and more sharing their experience.",
};

const testimonials = [
  {
    quote: "Avorria completely rebuilt our online presence. Within a month we were ranking on page one for emergency electrician in Leeds. The TradeDesk platform has saved me hours of invoicing every week.",
    name: "Mark Hartley",
    trade: "Electrician",
    location: "Leeds",
    badge: "NICEIC",
  },
  {
    quote: "I was skeptical about needing a website because I got enough work from word of mouth. But I wanted higher value jobs, not just quick fixes. The new site filters out the tyre-kickers and brings in serious enquiries.",
    name: "James Ashworth",
    trade: "Plumber",
    location: "Derby",
    badge: "Gas Safe",
  },
  {
    quote: "The team at Avorria actually understand the trade. They didn't just build a pretty site; they built a system that actively gets me more boiler installs. Best investment I've made in the business.",
    name: "Tom Pennine",
    trade: "Gas Engineer",
    location: "Sheffield",
    badge: "Gas Safe",
  },
  {
    quote: "Our old website was embarrassing, honestly. It looked like it was from 2005. The new cinematic build is night and day. Customers constantly comment on how professional we look before we've even quoted.",
    name: "Sarah Booth",
    trade: "Builder",
    location: "Sheffield",
    badge: "FMB",
  },
  {
    quote: "TradeDesk is brilliant. I used to sit in the van writing out quotes on a pad. Now I tap it into the app, send a professional PDF, and the customer can pay by card immediately. Game changer.",
    name: "David Vance",
    trade: "Plumber",
    location: "Manchester",
    badge: "",
  },
  {
    quote: "Since moving our site to Avorria and focusing on the local SEO strategy they recommended, our emergency callouts have jumped by 60%. We're dominating the local map pack.",
    name: "Richard Crest",
    trade: "Roofer",
    location: "Nottingham",
    badge: "NFRC",
  },
  {
    quote: "We do premium bespoke joinery, and we needed a website that reflected that high-end quality. Avorria nailed it. The project gallery showcases our work perfectly.",
    name: "Paul Whitfield",
    trade: "Joiner",
    location: "York",
    badge: "",
  },
  {
    quote: "I’m booked solid for 12 weeks. The website is pulling in consistent, high-budget landscaping enquiries. The automatic review request feature means my Google profile is constantly getting fresh 5-star ratings.",
    name: "Emma Greenwood",
    trade: "Landscaper",
    location: "Chesterfield",
    badge: "BALI",
  },
  {
    quote: "Transitioning to heat pumps meant we needed to educate our customers. Avorria built us dedicated service pages that explain the BUS grant clearly, making the sales process so much easier.",
    name: "Chris Northern",
    trade: "HVAC",
    location: "Manchester",
    badge: "MCS",
  },
  {
    quote: "We wanted to shift from general decorating to premium residential. The new branding and website design instantly elevated our perception in the market. We're now winning the jobs we actually want.",
    name: "Liam Ridgeway",
    trade: "Decorator",
    location: "Leeds",
    badge: "PDA",
  },
  {
    quote: "Using a drone to survey driveways is our USP, and the website highlights this brilliantly with video integration. It sets us apart from every other paving company in Derby.",
    name: "Simon Apex",
    trade: "Landscaper",
    location: "Derby",
    badge: "TrustMark",
  },
  {
    quote: "We handle commercial electrical contracts, so compliance is everything. The site displays all our NAPIT and safe contractor accreditations perfectly, which reassures facility managers immediately.",
    name: "John Cardinal",
    trade: "Commercial Electrician",
    location: "Birmingham",
    badge: "NAPIT",
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto text-center mb-16">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          What <span className="text-amber">tradespeople</span> say.
        </h1>
        <p className="text-xl text-muted-light max-w-2xl mx-auto">
          Real reviews from real Avorria Trades clients across the UK. Electricians, plumbers, builders, and more.
        </p>
      </section>

      {/* Aggregate Trust Strip */}
      <section className="border-y border-border bg-steel/30 py-8 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-center">
            
            <div className="flex flex-col items-center">
              <div className="text-amber text-xl mb-1">★★★★★</div>
              <div className="text-white font-heading font-bold text-lg mb-0.5">5.0 / 5</div>
              <div className="text-muted text-sm font-mono uppercase tracking-wider">Google (47 reviews)</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-border" />

            <div className="flex flex-col items-center">
              <div className="text-amber text-xl mb-1">★★★★★</div>
              <div className="text-white font-heading font-bold text-lg mb-0.5">4.9 / 5</div>
              <div className="text-muted text-sm font-mono uppercase tracking-wider">Checkatrade (89 reviews)</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-border" />

            <div className="flex flex-col items-center">
              <div className="text-amber text-xl mb-1">★★★★★</div>
              <div className="text-white font-heading font-bold text-lg mb-0.5">4.9 / 5</div>
              <div className="text-muted text-sm font-mono uppercase tracking-wider">Trustpilot (62 reviews)</div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-steel border border-border rounded-xl p-8 transition-colors hover:border-amber/40 flex flex-col h-full">
              <div className="text-amber text-4xl leading-none font-serif mb-4">"</div>
              <p className="text-muted-light font-sans text-base leading-relaxed italic mb-8 flex-grow">
                {t.quote}
              </p>
              <div className="border-t border-border pt-6 mt-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-heading font-bold text-amber text-lg mb-1">{t.name}</div>
                    <div className="text-white text-sm font-medium">{t.trade}</div>
                    <div className="text-muted text-xs">{t.location}</div>
                  </div>
                  {t.badge && (
                    <div className="bg-forge-black border border-border px-2 py-1 rounded text-[10px] font-mono text-muted uppercase">
                      {t.badge}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto px-6">
        <div className="w-20 h-20 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber/20">
          <span className="text-3xl text-amber">💬</span>
        </div>
        <h2 className="font-heading font-bold text-3xl text-white mb-6">
          Ready to join them?
        </h2>
        <p className="text-muted-light mb-8">
          Join hundreds of tradespeople across the UK scaling their businesses with Avorria Trades.
        </p>
        <Link href="/get-started" className="btn-primary">
          Get Your Free Proposal →
        </Link>
      </section>

    </div>
  );
}
