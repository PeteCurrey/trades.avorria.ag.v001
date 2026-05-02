import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's Included | Avorria Trades",
  description: "A detailed breakdown of every feature included in our trades website and TradeDesk packages.",
};

const includedSections = [
  {
    title: "1. Website Design & Build",
    description: "Every website we build is bespoke, cinematic, and engineered specifically for your trade. We don't use generic templates.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Bespoke cinematic design tailored to your specific trade",
      "Mobile-first responsive architecture (looks perfect on any device)",
      "High-speed loading times (essential for Google rankings)",
      "Custom service pages with targeted copywriting",
      "Professional portfolio / project galleries",
      "About Us and Meet the Team pages",
      "Contact page with interactive maps",
      "Full SSL security certificate"
    ]
  },
  {
    title: "2. Trade-Specific Features",
    description: "We understand what makes a trades website convert. These are the tools that turn browsers into booked jobs.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    features: [
      "Prominent accreditation badge display (NICEIC, Gas Safe, etc.)",
      "Sticky 'Click to Call' buttons for emergency jobs",
      "Bespoke quote request forms with trade-specific questions",
      "Emergency callout landing pages",
      "Guarantee and insurance certificate display areas",
      "Before and after image sliders"
    ]
  },
  {
    title: "3. SEO & Local Search",
    description: "A beautiful website is useless if nobody can find it. Our sites are built from the ground up to dominate your local area.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    features: [
      "Local SEO strategy focused on your primary service areas",
      "Google Business Profile creation and optimization",
      "Schema markup (helps Google understand you are a local trade business)",
      "Keyword-optimised copywriting by our UK team",
      "XML sitemap generation and submission",
      "Page speed optimization for Core Web Vitals"
    ]
  },
  {
    title: "4. TradeDesk Platform",
    description: "Included in our Forge and Titan packages, TradeDesk is your complete business management system.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    features: [
      "Job management and calendar scheduling",
      "Professional quote and invoice builder",
      "Customer CRM (database of all your clients)",
      "Automated SMS/Email review requests post-job",
      "Stripe payment integration for immediate card payments",
      "Financial dashboard and reporting"
    ]
  },
  {
    title: "5. Support & Maintenance",
    description: "We don't just build it and leave you to it. We manage the technical side so you can focus on the tools.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    features: [
      "Premium UK-based hosting on Vercel infrastructure",
      "Daily automated backups of your website and data",
      "Security updates and patching",
      "Easy-to-use CMS (Content Management System) for your own updates",
      "Ongoing technical support from our Chesterfield team",
      "Regular strategy review calls (Titan package)"
    ]
  },
  {
    title: "6. Integrations",
    description: "Connect your website with the tools and platforms you already use.",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    features: [
      "Checkatrade review sync (pull reviews to your site automatically)",
      "Google Business Profile review sync",
      "TrustMark API integration",
      "WhatsApp Business chat widget",
      "Social media feed integration (Instagram/Facebook)",
      "Google Analytics 4 setup and reporting"
    ]
  }
];

export default function WhatsIncludedPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-4xl mx-auto text-center border-b border-border">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] text-white mb-6">
          Everything <span className="text-amber">included.</span>
        </h1>
        <p className="text-xl text-muted-light">
          A completely transparent breakdown of everything you get when you partner with Avorria Trades.
        </p>
      </section>

      {/* Feature Breakdown */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-24">
          {includedSections.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-16">
              
              {/* Left Column: Heading & Description */}
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 rounded-xl bg-steel border border-border flex items-center justify-center mb-6 shadow-lg">
                  {section.icon}
                </div>
                <h2 className="font-heading font-bold text-2xl text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-light leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Right Column: Features List */}
              <div className="md:w-2/3 md:pt-4">
                <div className="bg-steel border border-border rounded-xl p-8">
                  <ul className="space-y-5">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4">
                        {/* Amber Tick Icon */}
                        <svg className="w-6 h-6 text-amber shrink-0 bg-amber/10 rounded-full p-1 mt-[-2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
