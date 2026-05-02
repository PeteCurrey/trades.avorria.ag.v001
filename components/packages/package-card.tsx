import Link from "next/link";

interface PackageCardProps {
  name: string;
  description: string;
  upfrontPrice: string;
  monthlyPrice: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export default function PackageCard({
  name,
  description,
  upfrontPrice,
  monthlyPrice,
  isPopular,
  features,
  notIncluded,
  ctaText,
}: PackageCardProps) {
  return (
    <div className={`card-premium !p-8 flex flex-col relative rounded-2xl ${isPopular ? "border-amber/50 transform md:-translate-y-4 shadow-[0_0_40px_rgba(245,158,11,0.1)]" : "border-border"}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber text-forge-black font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="font-heading font-bold text-2xl text-white mb-2">{name}</h3>
        <p className="text-muted-light text-sm">{description}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-border">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-mono font-bold text-4xl text-white">{upfrontPrice}</span>
          <span className="text-muted text-sm">one-off</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-muted">+</span>
          <span className="font-mono font-semibold text-xl text-amber">{monthlyPrice}</span>
          <span className="text-muted text-sm">/month</span>
        </div>
      </div>

      <div className="flex-grow mb-8">
        <p className="font-heading font-semibold text-white mb-4 text-sm">Included:</p>
        <ul className="space-y-4 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-light text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {notIncluded && notIncluded.length > 0 && (
          <>
            <p className="font-heading font-semibold text-white mb-4 text-sm mt-8 opacity-60">Not included:</p>
            <ul className="space-y-4">
              {notIncluded.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 opacity-60">
                  <svg className="w-5 h-5 text-muted shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-muted text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="mt-auto">
        <Link 
          href="/get-started" 
          className={`w-full flex items-center justify-center text-center ${isPopular ? "btn-primary" : "btn-secondary"}`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
