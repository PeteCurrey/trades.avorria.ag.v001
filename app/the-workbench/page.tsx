import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Workbench | Avorria Trades — Digital Advice for Tradespeople",
  description: "Practical guides, SEO advice, and digital strategy for UK builders, electricians, plumbers and trades. From the Avorria Trades team.",
};

export const articles = [
  {
    slug: "why-every-electrician-needs-a-website-in-2025",
    title: "Why Every Electrician Needs a Website in 2025 (And What It Should Include)",
    category: "Electricians",
    readTime: "6 min read",
    date: "May 12, 2025",
    excerpt: "Most homeowners search Google before calling. If you're not there, you don't exist.",
    gradient: "from-amber-500/20 to-forge-black"
  },
  {
    slug: "how-to-get-your-plumbing-business-to-page-1",
    title: "How to Get Your Plumbing Business to Page 1 of Google in Your Local Area",
    category: "SEO",
    readTime: "8 min read",
    date: "May 5, 2025",
    excerpt: "Local SEO for plumbers — the practical 2026 guide.",
    gradient: "from-blue-500/20 to-forge-black"
  },
  {
    slug: "gas-safe-registration-how-to-display-it-properly",
    title: "Gas Safe Registration: How to Display It Properly on Your Website",
    category: "Compliance",
    readTime: "4 min read",
    date: "April 28, 2025",
    excerpt: "The legal requirements and the marketing best practices for Gas Safe display.",
    gradient: "from-orange-500/20 to-forge-black"
  },
  {
    slug: "the-checkatrade-vs-your-own-website-debate",
    title: "The Checkatrade vs Your Own Website Debate — Answered",
    category: "Strategy",
    readTime: "7 min read",
    date: "April 15, 2025",
    excerpt: "Why you should run both — and how they should work together.",
    gradient: "from-purple-500/20 to-forge-black"
  },
  {
    slug: "what-is-tradedesk-and-how-does-it-help",
    title: "What Is TradeDesk and How Does It Help Tradespeople Win More Work?",
    category: "Platform",
    readTime: "5 min read",
    date: "April 2, 2025",
    excerpt: "An introduction to the management platform built into Avorria Trades websites.",
    gradient: "from-emerald-500/20 to-forge-black"
  }
];

export default function WorkbenchHub() {
  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
            The <span className="text-amber">Workbench.</span>
          </h1>
          <p className="text-xl text-muted-light">
            Digital advice for UK tradespeople.<br />
            Practical guides, SEO advice, and digital strategy for builders, electricians, plumbers, and trades across the UK.
          </p>
        </section>

        {/* Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {articles.map((article) => (
            <Link key={article.slug} href={`/the-workbench/${article.slug}`} className="group flex flex-col h-full bg-steel border border-border rounded-xl overflow-hidden hover:border-amber/50 transition-colors">
              {/* Mock Hero Image */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${article.gradient} relative overflow-hidden border-b border-border`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
                <div className="absolute top-4 left-4">
                  <span className="bg-forge-black/80 backdrop-blur text-amber text-xs font-mono uppercase px-2 py-1 rounded border border-amber/20">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-muted font-mono text-xs mb-4 flex justify-between">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-heading font-semibold text-2xl text-white mb-3 group-hover:text-amber transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-light text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <div className="text-amber text-sm font-semibold flex items-center gap-2 mt-auto">
                  Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Strip */}
        <section className="bg-steel border border-border rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber/5 blur-3xl pointer-events-none rounded-full" />
          <h2 className="font-heading font-bold text-3xl text-white mb-4 relative z-10">Get our monthly trades digital briefing.</h2>
          <p className="text-muted-light mb-8 relative z-10">No spam, just actually useful advice for growing your trade business.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
            <input type="email" placeholder="Enter your email address" className="flex-grow bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors" required />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
