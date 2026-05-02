import { Metadata } from "next";
import FeatureScroll from "@/components/platform/feature-scroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TradeDesk | The Platform for Tradespeople",
  description: "The only trades platform that connects your website, your jobs, your customers, and your reviews in one place.",
};

export default function TradesPlatformPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-amber-glow/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <span className="badge-premium mb-8 inline-block shadow-lg">NEW PRODUCT</span>
        
        <h1 className="font-heading font-extrabold text-5xl md:text-[72px] leading-[1.1] tracking-[-0.03em] text-white mb-8 relative z-10">
          TradeDesk.<br />
          <span className="text-amber">Your business in your pocket.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-light max-w-[800px] mx-auto relative z-10 leading-relaxed">
          The only trades platform that connects your website, your jobs, your customers, and your reviews in one single place. No more switching between five different apps.
        </p>
      </section>

      {/* Sticky Scroll Feature Showcase */}
      <FeatureScroll />

      {/* Bottom CTA */}
      <section className="py-32 relative overflow-hidden bg-forge-black border-t border-border mt-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-[56px] leading-[1.1] text-white mb-6">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-xl text-muted max-w-[600px] mx-auto mb-12">
            TradeDesk is included as standard in our Forge and Titan website packages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/packages" className="btn-primary">
              View Packages &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
