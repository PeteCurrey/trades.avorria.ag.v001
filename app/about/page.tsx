import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Avorria Trades | The UK's Specialist Partner for Trades",
  description: "Learn about Avorria Trades — why we focus exclusively on building websites and tools for UK tradespeople like electricians, plumbers, and builders.",
};

export default function AboutPage() {
  return (
    <div className="bg-forge-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-8">
          The <span className="text-amber">Avorria</span> story.
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-muted-light space-y-8">
          <p className="text-xl leading-relaxed text-white">
            Avorria Trades wasn't born in a boardroom. It was born in the back of a van, listening to tradespeople talk about how much they hated their websites.
          </p>
          
          <p>
            For years, we saw the same pattern. A plumber or electrician would pay a generic agency £2,000 for a website. That agency didn't know the difference between a combi boiler and a system boiler. They didn't understand that a tradesperson's business lives or dies by local SEO and trust signals.
          </p>
          
          <h2 className="text-3xl font-heading font-bold text-white pt-8">Why we only work with trades.</h2>
          <p>
            We decided to stop being "generalists." By focusing exclusively on the trade sector, we've been able to build a platform specifically for your needs. We know exactly which accreditation badges need to be where. We know how to structure your service pages so Google ranks them in your specific town.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="bg-steel border border-border p-8 rounded-xl">
              <div className="text-amber text-3xl mb-4">🎯</div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Our Mission</h3>
              <p className="text-sm">To give every UK tradesperson a digital presence that reflects the quality of their physical work.</p>
            </div>
            <div className="bg-steel border border-border p-8 rounded-xl">
              <div className="text-amber text-3xl mb-4">⚡</div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Our Promise</h3>
              <p className="text-sm">No vague marketing speak. Just high-performance websites and tools that actually win you more jobs.</p>
            </div>
          </div>

          <p>
            Today, we're proud to support hundreds of trades businesses across the UK, from sole trader electricians in Leeds to large mechanical firms in London.
          </p>
          
          <div className="mt-16 pt-12 border-t border-border text-center">
            <h2 className="font-heading font-bold text-3xl text-white mb-8">Ready to join them?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/get-started" className="btn-primary">
                Get Your Proposal →
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
