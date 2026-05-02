import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials & Reviews | Avorria Trades",
  description: "Read what electricians, plumbers, builders and other UK tradespeople say about our websites and TradeDesk platform.",
};

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
  },
  {
    quote: "We were using a template site before that looked like it was from 2005. The new site is cinematic. It immediately justifies our premium pricing for high-end landscape design.",
    name: "Sarah Jenkins",
    trade: "Landscaper",
    location: "York",
    badge: "BALI"
  },
  {
    quote: "The emergency callout landing pages they built started working within days. When there's a storm, we are the first roofers people find.",
    name: "Michael Torres",
    trade: "Roofer",
    location: "Manchester",
    badge: "NFRC"
  },
  {
    quote: "Automated review requests in TradeDesk have boosted our Google rating from 4.1 to 4.9 in three months. I don't have to remember to ask customers anymore.",
    name: "James Fletcher",
    trade: "HVAC Engineer",
    location: "Birmingham",
    badge: "Refcom"
  },
  {
    quote: "The portfolio gallery is exactly what I needed to show off my fitted wardrobes. Clients can see the quality of the joinery before they even call me.",
    name: "Tom Higgins",
    trade: "Joiner",
    location: "Nottingham",
    badge: "City & Guilds"
  },
  {
    quote: "I was worried about the migration because I didn't want to lose my existing SEO. They handled the whole thing flawlessly and traffic actually went up.",
    name: "Peter Walsh",
    trade: "Electrician",
    location: "Leicester",
    badge: "NAPIT"
  },
  {
    quote: "We use the Checkatrade sync feature. It's brilliant. Reviews left on Checkatrade instantly appear on our website. Saves so much time.",
    name: "Emma Davis",
    trade: "Plumbing & Heating",
    location: "Chester",
    badge: "Gas Safe"
  },
  {
    quote: "Avorria Trades actually understands what builders need. They built us a proper project case study system so we can show the timeline of our extensions.",
    name: "Mark O'Connor",
    trade: "Builder",
    location: "Liverpool",
    badge: "FMB"
  },
  {
    quote: "The upfront cost was completely worth it. I opted for the Site for Life plan to spread the payments, which helped with cash flow. The return on investment is undeniable.",
    name: "Simon Clarke",
    trade: "Painter & Decorator",
    location: "Lincoln",
    badge: "PDA"
  },
  {
    quote: "We run a fleet of 5 vans. TradeDesk has replaced three different pieces of software we were paying for. It's built specifically for how we actually work.",
    name: "Richard Evans",
    trade: "Gas Engineer",
    location: "Stoke",
    badge: "Gas Safe"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-4xl mx-auto text-center border-b border-border">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] text-white mb-6">
          Don't just take <br />
          <span className="text-amber">our word for it.</span>
        </h1>
        <p className="text-xl text-muted-light">
          We've helped hundreds of tradespeople across the UK win more high-value jobs, streamline their admin, and dominate local search.
        </p>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-steel border border-border p-8 rounded-xl flex flex-col transition-all duration-300 hover:border-amber/40 hover:-translate-y-1 shadow-lg"
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
                <span className="badge-premium !py-0.5 whitespace-nowrap">{t.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aggregate Trust Strip */}
      <section className="py-16 bg-steel border-y border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-center text-muted font-heading font-semibold tracking-widest uppercase mb-10 text-sm">Our Aggregate Ratings Across Platforms</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-heading font-bold text-white text-2xl mb-2">Google</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono font-bold text-3xl text-white">4.9</span>
                <span className="text-amber text-xl">★★★★★</span>
              </div>
              <span className="text-muted text-sm">Based on 142 reviews</span>
            </div>
            
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-heading font-bold text-white text-2xl mb-2 flex items-center gap-2">
                Checkatrade
                {/* Fake icon to represent the check mark in Checkatrade style */}
                <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">✓</span>
              </span>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono font-bold text-3xl text-white">9.8</span>
                <span className="text-amber text-xl">★★★★★</span>
              </div>
              <span className="text-muted text-sm">Average Partner Score</span>
            </div>
            
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="font-heading font-bold text-white text-2xl mb-2">Facebook</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono font-bold text-3xl text-white">5.0</span>
                <span className="text-amber text-xl">★★★★★</span>
              </div>
              <span className="text-muted text-sm">Based on 89 reviews</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
