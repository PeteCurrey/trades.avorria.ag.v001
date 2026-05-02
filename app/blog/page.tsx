import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Workbench | Digital Advice for UK Tradespeople",
  description: "Expert digital marketing advice, SEO tips, and business growth strategies for electricians, plumbers, and trades across the UK.",
};

const blogPosts = [
  {
    title: "Why Every Electrician Needs a Website in 2025 (And What It Should Include)",
    excerpt: "The landscape for electrical contractors is changing. Here is why a Facebook page is no longer enough to win high-value commercial and domestic contracts.",
    date: "May 12, 2025",
    category: "Strategy",
    readTime: "6 min read"
  },
  {
    title: "How to Get Your Plumbing Business to Page 1 of Google in Your Local Area",
    excerpt: "Local SEO is the lifeblood of a plumbing business. Learn the 3 specific things you can do today to start outranking your competitors.",
    date: "May 08, 2025",
    category: "SEO",
    readTime: "8 min read"
  },
  {
    title: "Gas Safe Registration: How to Display It Properly on Your Website",
    excerpt: "Displaying your Gas Safe credentials isn't just about compliance—it's about building instant trust. Here's how to do it without ruining your design.",
    date: "May 02, 2025",
    category: "Compliance",
    readTime: "4 min read"
  },
  {
    title: "The Checkatrade vs Your Own Website Debate — Answered",
    excerpt: "Should you rely on directories or own your platform? We break down the costs, the conversion rates, and the long-term ROI of both approaches.",
    date: "April 28, 2025",
    category: "Marketing",
    readTime: "10 min read"
  },
  {
    title: "What Is TradeDesk and How Does It Help Tradespeople Win More Work?",
    excerpt: "Managing a trade business from a notebook is costing you money. Discover how integrated job management turns enquiries into profit.",
    date: "April 15, 2025",
    category: "Platform",
    readTime: "5 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto text-center border-b border-border">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] text-white mb-6">
          The <span className="text-amber">Workbench.</span>
        </h1>
        <p className="text-xl text-muted-light max-w-2xl mx-auto">
          Digital advice, marketing strategy, and business growth tips specifically for UK tradespeople.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link 
              key={i} 
              href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="group bg-steel border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-amber/40 hover:-translate-y-1"
            >
              <div className="aspect-video bg-forge-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="font-heading font-bold text-white text-center text-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge-premium !text-[10px] uppercase">{post.category}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="font-heading font-bold text-xl text-white mb-4 group-hover:text-amber transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-muted-light text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <span className="text-amber text-sm font-medium mt-auto flex items-center gap-2">
                  Read more <span className="text-lg leading-none">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-steel border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Stay ahead of the competition.</h2>
          <p className="text-muted-light mb-10">Get the latest trades marketing tips delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-forge-black border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
            />
            <button className="btn-primary !px-8">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
