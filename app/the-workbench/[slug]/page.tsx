import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// Define the static article contents
const articlesData = [
  {
    slug: "why-every-electrician-needs-a-website-in-2025",
    title: "Why Every Electrician Needs a Website in 2025 (And What It Should Include)",
    category: "Electricians",
    readTime: "6 min read",
    date: "May 12, 2025",
    excerpt: "Most homeowners search Google before calling. If you're not there, you don't exist.",
    gradient: "from-amber-500/20 to-forge-black",
    content: (
      <>
        <p className="lead text-xl text-muted-light mb-8">
          Most homeowners search Google before calling. If you're not there, you don't exist. In 2025, word of mouth is no longer enough to sustain a growing electrical contracting business. Here's why you need a professional digital presence and exactly what it needs to feature.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">1. The Shift to Digital Search</h2>
        <p className="text-muted-light mb-4">
          When a consumer has an electrical emergency or needs a consumer unit upgraded, their first instinct is to pull out their smartphone and search "electrician near me." If your business doesn't appear on the first page of those search results, you are effectively invisible to a massive segment of your local market. 
        </p>
        <p className="text-muted-light mb-6">
          A dedicated website acts as your 24/7 digital storefront. It allows potential clients to find you exactly when they need your services, read about your expertise, and contact you immediately.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">2. Building Immediate Trust</h2>
        <p className="text-muted-light mb-4">
          Homeowners are rightly cautious about who they let into their properties to work on complex electrical systems. A professional website instantly establishes credibility.
        </p>
        <p className="text-muted-light mb-4">Essential trust signals your website must include:</p>
        <ul className="list-disc pl-6 text-muted-light mb-6 space-y-2">
          <li><strong>Accreditation Logos:</strong> Prominent display of your NICEIC, NAPIT, or City & Guilds badges.</li>
          <li><strong>Real Customer Reviews:</strong> Verified testimonials, ideally pulled automatically from your Google Business Profile.</li>
          <li><strong>Clear Contact Information:</strong> A professional email address (not a Gmail account) and a clear phone number.</li>
          <li><strong>Transparent Services:</strong> Detailed explanations of the work you undertake, from EICR testing to EV charger installations.</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">3. Local SEO Dominance</h2>
        <p className="text-muted-light mb-4">
          You don't need to rank nationally; you need to dominate your specific local area. A properly structured website allows you to target specific locations and services. 
        </p>
        <p className="text-muted-light mb-6">
          Creating dedicated pages for services like "EV Charger Installation in [Your Town]" drastically increases your chances of capturing highly specific, high-intent local search traffic. This is where <Link href="/get-started" className="text-amber hover:underline">Avorria Trades</Link> specialises, building SEO architecture directly into the site.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Conclusion</h2>
        <p className="text-muted-light mb-4">
          Relying solely on directory sites or social media means you don't own your digital presence. A bespoke website is an asset that grows in value, generating consistent, high-quality leads for your electrical business year after year.
        </p>
      </>
    )
  },
  {
    slug: "how-to-get-your-plumbing-business-to-page-1",
    title: "How to Get Your Plumbing Business to Page 1 of Google in Your Local Area",
    category: "SEO",
    readTime: "8 min read",
    date: "May 5, 2025",
    excerpt: "Local SEO for plumbers — the practical 2026 guide.",
    gradient: "from-blue-500/20 to-forge-black",
    content: (
      <>
        <p className="lead text-xl text-muted-light mb-8">
          Local SEO for plumbers — the practical 2026 guide. Getting to the top of Google isn't magic, it's a systematic process of proving to search engines that you are the most relevant and reliable plumber in your specific area.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">The Google Local Pack</h2>
        <p className="text-muted-light mb-4">
          When someone searches "plumber near me," the most valuable real estate is the "Local Pack" — the map and three business listings at the top of the page. Getting in there requires a multi-pronged approach.
        </p>
        
        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">1. Claim and Optimise Your Google Business Profile</h2>
        <p className="text-muted-light mb-4">
          This is step one. Ensure your Google Business Profile (GBP) is completely filled out. Use your exact business name, ensure your address matches your website, and list all your services accurately. Add high-quality photos of your van, your team, and completed work regularly.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">2. Consistent NAP Data</h2>
        <p className="text-muted-light mb-4">
          NAP stands for Name, Address, Phone number. This information must be identical across your website, your GBP, Checkatrade, Yelp, and any local directories. Inconsistencies confuse Google and hurt your rankings.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">3. Localised Website Content</h2>
        <p className="text-muted-light mb-4">
          Your website needs to clearly communicate where you work. Don't just list your services; create dedicated pages for them. 
        </p>
        <ul className="list-disc pl-6 text-muted-light mb-6 space-y-2">
          <li>Create a specific "Boiler Repair in [Town]" page.</li>
          <li>Include local landmarks or areas in your copy naturally.</li>
          <li>Embed a Google Map on your contact page.</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">4. The Power of Reviews</h2>
        <p className="text-muted-light mb-4">
          Reviews are a massive ranking factor. You need a system to consistently generate positive Google reviews. The <Link href="/trades-platform" className="text-amber hover:underline">TradeDesk platform</Link> automates this by sending review requests via SMS immediately after a job is marked complete, ensuring a steady stream of fresh, positive signals to Google.
        </p>
      </>
    )
  },
  {
    slug: "gas-safe-registration-how-to-display-it-properly",
    title: "Gas Safe Registration: How to Display It Properly on Your Website",
    category: "Compliance",
    readTime: "4 min read",
    date: "April 28, 2025",
    excerpt: "The legal requirements and the marketing best practices for Gas Safe display.",
    gradient: "from-orange-500/20 to-forge-black",
    content: (
      <>
        <p className="lead text-xl text-muted-light mb-8">
          The legal requirements and the marketing best practices for Gas Safe display. If you are a heating engineer, your Gas Safe registration is your most important trust signal, but it must be displayed according to strict guidelines.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">The Legal Requirements</h2>
        <p className="text-muted-light mb-4">
          The Gas Safe Register has strict rules about how their logo can be used. It cannot be altered in colour or proportion. You must also display your unique registration number clearly alongside the logo.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Placement for Maximum Impact</h2>
        <p className="text-muted-light mb-4">
          Don't hide your registration details on an "About" page. It needs to be front and centre to reassure nervous homeowners immediately.
        </p>
        <ul className="list-disc pl-6 text-muted-light mb-6 space-y-2">
          <li><strong>The Header:</strong> Include the logo and your number in the top right of your website header so it is visible on every single page.</li>
          <li><strong>The Footer:</strong> Repeat the logo and registration number in the footer.</li>
          <li><strong>Service Pages:</strong> On pages specifically about boiler installations or gas servicing, explicitly state that all work is carried out by Gas Safe registered engineers.</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Linking to the Register</h2>
        <p className="text-muted-light mb-4">
          For ultimate transparency, link your Gas Safe logo directly to your official listing on the Gas Safe Register website. This allows customers to verify your credentials with a single click, providing immense peace of mind.
        </p>
      </>
    )
  },
  {
    slug: "the-checkatrade-vs-your-own-website-debate",
    title: "The Checkatrade vs Your Own Website Debate — Answered",
    category: "Strategy",
    readTime: "7 min read",
    date: "April 15, 2025",
    excerpt: "Why you should run both — and how they should work together.",
    gradient: "from-purple-500/20 to-forge-black",
    content: (
      <>
        <p className="lead text-xl text-muted-light mb-8">
          Why you should run both — and how they should work together. A common question among tradespeople is whether they need a website if they are already paying for Checkatrade, MyBuilder, or TrustATrader. The answer is definitively yes.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">The Directory Dilemma</h2>
        <p className="text-muted-light mb-4">
          Directories like Checkatrade are excellent for lead generation, but they have a fundamental flaw: you are listed immediately alongside your direct competitors. It often forces a race to the bottom on price.
        </p>
        <p className="text-muted-light mb-6">
          Furthermore, you don't own the platform. If they raise their prices or change their algorithms, your business suffers.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Your Website as the Anchor</h2>
        <p className="text-muted-light mb-4">
          Your website is the only digital asset you completely control. It allows you to present your brand without distraction, detail your specific services, and justify premium pricing through a high-quality presentation.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">The Synergy Strategy</h2>
        <p className="text-muted-light mb-4">
          The most successful trades businesses use both. They use directories for top-of-funnel leads, but they drive traffic back to their own website. 
        </p>
        <ul className="list-disc pl-6 text-muted-light mb-6 space-y-2">
          <li>Ensure your website URL is prominent on your Checkatrade profile.</li>
          <li>Use an integration (like the one available via <Link href="/whats-included" className="text-amber hover:underline">our packages</Link>) to sync your Checkatrade reviews directly to your website.</li>
          <li>When potential clients find you on a directory, they will often Google your business name to vet you further. A premium website seals the deal.</li>
        </ul>
      </>
    )
  },
  {
    slug: "what-is-tradedesk-and-how-does-it-help",
    title: "What Is TradeDesk and How Does It Help Tradespeople Win More Work?",
    category: "Platform",
    readTime: "5 min read",
    date: "April 2, 2025",
    excerpt: "An introduction to the management platform built into Avorria Trades websites.",
    gradient: "from-emerald-500/20 to-forge-black",
    content: (
      <>
        <p className="lead text-xl text-muted-light mb-8">
          An introduction to the management platform built into Avorria Trades websites. A great website generates leads, but what happens next? Managing those leads efficiently is the difference between a struggling sole trader and a scalable business.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Beyond the Brochure Site</h2>
        <p className="text-muted-light mb-4">
          Most web agencies build you a site and walk away. Enquiries land in your inbox, and it's up to you to manually track them, quote them, and chase invoices. TradeDesk is designed to bridge that gap.
        </p>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">Core Features of TradeDesk</h2>
        <ul className="list-disc pl-6 text-muted-light mb-6 space-y-4">
          <li><strong>Lead Capture:</strong> When a customer fills out a form on your website, it feeds directly into TradeDesk as a new lead, not just a messy email.</li>
          <li><strong>Professional Quoting:</strong> Build and send professional, branded quotes from your phone while sitting in the van outside the customer's house.</li>
          <li><strong>Seamless Invoicing & Payments:</strong> Convert approved quotes to invoices instantly. With Stripe integration, customers can pay via card directly from the invoice link.</li>
          <li><strong>Automated Review Requests:</strong> Once a job is marked paid, the system automatically texts the customer a link to leave a Google review.</li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-white mt-12 mb-4">The Result</h2>
        <p className="text-muted-light mb-4">
          By streamlining your admin, you look more professional to the client (winning more jobs), get paid faster, and free up hours of your evenings previously spent doing paperwork. Ready to see it in action? <Link href="/get-started" className="text-amber hover:underline">Get started today.</Link>
        </p>
      </>
    )
  }
];

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  
  return {
    title: `${article.title} | The Workbench | Avorria Trades`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/the-workbench" className="text-amber hover:text-amber-light text-sm font-medium flex items-center gap-2 mb-8 transition-colors">
            ← Back to The Workbench
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-mono text-muted mb-6">
            <span className="bg-steel border border-border px-3 py-1 rounded text-amber">{article.category}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em] mb-8">
            {article.title}
          </h1>
        </div>

        {/* Mock Hero Image */}
        <div className={`aspect-[21/9] w-full rounded-2xl mb-16 bg-gradient-to-br ${article.gradient} relative overflow-hidden border border-border`}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-amber prose-a:no-underline hover:prose-a:underline">
          {article.content}
        </article>

        {/* Author Bio / CTA */}
        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center md:items-start gap-8 bg-steel/30 rounded-2xl p-8">
          <div className="w-20 h-20 rounded-full bg-amber/20 flex items-center justify-center text-3xl shrink-0 border border-amber/30">
            👋
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">Ready to upgrade your digital presence?</h3>
            <p className="text-muted-light mb-6">
              Stop relying on directories and start building your own brand. Avorria Trades builds premium websites and provides the tools to manage your growing trade business.
            </p>
            <Link href="/get-started" className="btn-primary inline-flex">
              Get Your Free Proposal →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
