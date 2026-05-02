import { Metadata } from "next";
import PackageCard from "@/components/packages/package-card";
import FAQAccordion from "@/components/packages/faq-accordion";

export const metadata: Metadata = {
  title: "Pricing Packages | Avorria Trades",
  description: "Simple, transparent pricing for tradespeople websites and the TradeDesk management platform. Spark, Forge, and Titan packages available.",
};

export default function PackagesPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-amber-glow/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6 relative z-10">
          Simple, transparent pricing.<br />
          <span className="text-amber">Everything included.</span>
        </h1>
        <p className="text-xl text-muted-light max-w-[600px] mx-auto relative z-10">
          From sole traders to multi-van operations, we have a package designed for your business.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative z-10">
          
          <PackageCard
            name="SPARK"
            description="For sole traders getting started"
            upfrontPrice="£999"
            monthlyPrice="£69"
            features={[
              "5-page bespoke website",
              "Mobile-optimised, fast-loading",
              "Trade-specific accreditation display",
              "Contact form + click-to-call",
              "Google Business Profile setup",
              "3-month SEO foundations",
              "SSL + hosting included",
              "30-day support included"
            ]}
            notIncluded={[
              "TradeDesk Platform",
              "Advanced SEO",
              "Portfolio gallery"
            ]}
            ctaText="Get Started with Spark"
          />

          <PackageCard
            name="FORGE"
            description="For established tradespeople who want to dominate locally"
            upfrontPrice="£1,799"
            monthlyPrice="£99"
            isPopular={true}
            features={[
              "Everything in Spark, plus:",
              "Up to 12 pages",
              "Project/work gallery",
              "Review aggregation (Google + Checkatrade)",
              "Emergency callout page with geo-targeting",
              "12-month local SEO strategy",
              "TradeDesk — job management & scheduling",
              "Quote & invoice builder",
              "Monthly performance reports",
              "Priority support"
            ]}
            ctaText="Get Started with Forge"
          />

          <PackageCard
            name="TITAN"
            description="For multi-van operations and growing trade businesses"
            upfrontPrice="£3,499"
            monthlyPrice="£179"
            features={[
              "Everything in Forge, plus:",
              "Unlimited pages",
              "Multi-location SEO (up to 5 areas)",
              "Full TradeDesk CRM with customer database",
              "Automated review request system",
              "Checkatrade integration",
              "Google Ads setup + first month management",
              "Dedicated account manager",
              "Quarterly strategy review calls",
              "White-glove migration from existing site"
            ]}
            ctaText="Get Started with Titan"
          />

        </div>

        {/* Site for Life Strip */}
        <div className="mt-16 bg-amber/10 border border-amber/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading font-bold text-xl text-amber mb-2">Prefer to spread the cost?</h3>
            <p className="text-muted-light text-sm max-w-[500px]">
              Ask about our "Site for Life" monthly plan. Spread the upfront cost over 24 months at absolutely no extra charge.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap !px-8">
            Ask about monthly plans
          </button>
        </div>

        {/* FAQs */}
        <FAQAccordion />

      </section>
    </div>
  );
}
