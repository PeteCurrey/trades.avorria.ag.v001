import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Work With | Avorria Trades",
  description: "Websites and management platforms built specifically for electricians, plumbers, gas engineers, builders, roofers, and other UK trades.",
};

const tradesList = [
  {
    id: "electricians",
    name: "Electricians",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    headline: "Websites engineered to generate more high-value callouts.",
    body: "From emergency consumer unit replacements to full commercial rewires, your website needs to instantly convey safety, competence, and reliability to a homeowner sitting in the dark.",
    features: [
      "NICEIC / NAPIT badge display",
      "Domestic & commercial service pages",
      "Emergency callout section with click-to-call",
      "EICR certificate description pages",
      "EV charger installation landing pages"
    ]
  },
  {
    id: "plumbers",
    name: "Plumbers",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    headline: "Capture emergency leaks and plan high-end bathroom fits.",
    body: "Plumbing businesses require a dual approach: high-conversion emergency pages for immediate leaks, and portfolio-led pages for planned bathroom installations. We build both into your digital presence.",
    features: [
      "Gas Safe registration display",
      "Emergency plumber pages (high search value)",
      "Boiler installation / servicing pages",
      "Bathroom fitting portfolio",
      "24/7 callout prominently displayed"
    ]
  },
  {
    id: "gas-engineers",
    name: "Gas Engineers",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    headline: "Compliance, trust, and annual service bookings.",
    body: "When dealing with gas, trust is your only currency. We ensure your Gas Safe credentials are front and centre, and your website makes it effortless for landlords to book their annual CP12s.",
    features: [
      "Gas Safe number prominently displayed",
      "Annual service reminder integrations",
      "Landlord certificates / CP12 pages",
      "Compliance documentation showcase",
      "Boiler breakdown emergency forms"
    ]
  },
  {
    id: "hvac",
    name: "HVAC & Heat Pump Engineers",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    headline: "Educating customers and capturing high-ticket renewable jobs.",
    body: "The renewables market is booming, but homeowners are confused. Your website acts as an educational tool that positions you as the local authority on heat pumps and air conditioning, justifying premium pricing.",
    features: [
      "MCS certification display (critical for grants)",
      "Air source / ground source landing pages",
      "Service contract features",
      "BUS grant information pages",
      "Commercial HVAC maintenance pages"
    ]
  },
  {
    id: "builders",
    name: "Builders",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    headline: "Showcasing your craftsmanship and winning large projects.",
    body: "A homeowner isn't giving you £80,000 for an extension based on a Facebook page. They need to see a cinematic portfolio, structured case studies, and clear explanations of your process.",
    features: [
      "Project gallery with before/after",
      "Planning application support pages",
      "Extensions / loft conversions / new builds sections",
      "Subcontractor management features in TradeDesk",
      "Client testimonial integration"
    ]
  },
  {
    id: "roofers",
    name: "Roofers",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    headline: "Storm damage emergency response and solid guarantees.",
    body: "Roofing requires rapid response for leaks, and high trust for complete re-roofs. We structure your site to capture the panicked 'roof leaking near me' searches while displaying the guarantees needed for large jobs.",
    features: [
      "Guarantee display (10-year guarantee badges)",
      "Insurance-backed guarantee display",
      "Emergency repair pages",
      "Material options showcase",
      "Drone survey landing pages"
    ]
  },
  {
    id: "joiners",
    name: "Joiners / Carpenters",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    headline: "Selling the vision of bespoke craftsmanship.",
    body: "Bespoke fitted wardrobes and custom kitchens are highly visual sales. Your website needs to act as a premium brochure that justifies your craftsmanship over flat-pack alternatives.",
    features: [
      "Bespoke furniture / fitted wardrobes galleries",
      "Quote calculator for standard jobs",
      "Before/after photo showcase",
      "Material and finish selection guides",
      "Instagram feed integration"
    ]
  },
  {
    id: "landscapers",
    name: "Landscapers",
    icon: (
      <svg className="w-12 h-12 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    headline: "Transforming outdoor spaces and managing seasonal demand.",
    body: "Landscaping is seasonal. A great website helps you book out your summer during the winter months, and showcases the incredible transformations you achieve for your clients.",
    features: [
      "Seasonal availability display",
      "Garden design portfolio",
      "Maintenance contract features",
      "Before and after sliders",
      "Driveway and paving galleries"
    ]
  }
];

export default function WhoWeWorkWithPage() {
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="font-heading font-extrabold text-5xl md:text-[64px] leading-[1.1] tracking-[-0.03em] text-white mb-6">
          Built for every trade.<br />
          <span className="text-amber">Designed for your business.</span>
        </h1>
        <p className="text-xl text-muted-light">
          We work across all UK trades. Every website we build is tailored around the specific accreditations, emergency callouts, and project types of that specific industry. Not a generic template.
        </p>
      </section>

      {/* Trades Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="flex flex-col gap-12">
          {tradesList.map((trade, index) => (
            <section 
              key={trade.id} 
              id={trade.id} 
              className={`bg-steel border border-border rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start transition-all duration-300 hover:border-border-amber relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="lg:w-1/3 flex flex-col shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-forge-black border border-border flex items-center justify-center mb-8 shadow-lg">
                  {trade.icon}
                </div>
                <h2 className="font-heading font-bold text-3xl text-white mb-4">{trade.name}</h2>
                <Link href={`/portfolio?trade=${trade.id}`} className="text-amber hover:text-amber-light font-medium flex items-center gap-2 mt-auto pt-4 transition-colors">
                  See an example <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>

              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-16">
                <h3 className="font-heading font-semibold text-2xl text-white mb-4">{trade.headline}</h3>
                <p className="text-muted-light text-lg leading-relaxed mb-10">
                  {trade.body}
                </p>

                <div>
                  <h4 className="font-sans font-semibold text-sm text-white uppercase tracking-wider mb-6 opacity-60">Key Features For {trade.name}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {trade.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      
    </div>
  );
}
