import { trades, type Trade } from '@/lib/seo-data/trades'
import { cities, type City } from '@/lib/seo-data/cities'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ trade: string; city: string }>
}

// Generate all 270 page paths at build time
export async function generateStaticParams() {
  const params: { trade: string; city: string }[] = []
  
  for (const trade of trades) {
    for (const city of cities) {
      params.push({ trade: trade.slug, city: city.slug })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trade: tradeSlug, city: citySlug } = await params
  const trade = trades.find(t => t.slug === tradeSlug)
  const city = cities.find(c => c.slug === citySlug)
  
  if (!trade || !city) return {}
  
  return {
    title: `${trade.displayName} in ${city.name} | Avorria Trades — Premium Websites for ${city.name} ${trade.plural}`,
    description: `Specialist websites and TradeDesk management platform for ${trade.plural} in ${city.name}. ${trade.accreditations.slice(0, 2).join(' and ')}-ready websites that win jobs across ${city.county}.`,
    openGraph: {
      title: `${trade.displayName} Websites in ${city.name} | Avorria Trades`,
      description: `Premium websites built specifically for ${city.name} ${trade.plural}. Accreditation display, local SEO, emergency callout pages, and TradeDesk platform.`,
      url: `https://trades.avorria.com/${trade.slug}/${city.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://trades.avorria.com/${trade.slug}/${city.slug}`,
    },
  }
}

export default async function TradeCityPage({ params }: PageProps) {
  const { trade: tradeSlug, city: citySlug } = await params
  const trade = trades.find(t => t.slug === tradeSlug)
  const city = cities.find(c => c.slug === citySlug)
  
  if (!trade || !city) notFound()
  
  const nearbyCities = city.nearbyCities
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined)
    .slice(0, 4)
  
  const otherTrades = trades.filter(t => t.slug !== trade.slug).slice(0, 4)
  
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Website design for ${trade.plural}`,
    "areaServed": {
      "@type": "City",
      "name": city.name,
    },
    "provider": {
      "@type": "Organization",
      "name": "Avorria Trades",
      "url": "https://trades.avorria.com",
    },
  }
  
  return (
    <div className="bg-forge-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero */}
      <section className="bg-forge-black pt-20 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-muted mb-6 font-mono uppercase tracking-wider">
            <Link href="/" className="hover:text-amber">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${trade.slug}`} className="hover:text-amber">{trade.displayName}</Link>
            <span className="mx-2">/</span>
            <span className="text-amber">{city.name}</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="text-amber font-mono text-sm uppercase tracking-wider mb-4">
              {trade.displayName} · {city.name} · {city.region}
            </div>
            
            <h1 className="font-syne font-extrabold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 text-white">
              Premium websites for{' '}
              <span className="text-amber">{trade.plural} in {city.name}</span>.
            </h1>
            
            <p className="text-xl text-muted-light leading-relaxed max-w-3xl">
              {trade.intro.replace(/Electricians/g, `${city.name} ${trade.plural}`).replace(/Plumbing/g, `${city.name} plumbing`)}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/get-started" className="btn-primary">
                Get a free quote →
              </Link>
              <Link href="/packages" className="btn-ghost">
                View packages
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Local Context Block */}
      <section className="py-20 bg-forge-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">01 — The {city.name} Market</div>
              <h2 className="font-syne font-bold text-4xl text-white mb-6">
                Why {trade.plural} in {city.name} need a premium website.
              </h2>
              <div className="space-y-4 text-muted-light text-lg leading-relaxed">
                <p>
                  {city.characteristics} For {trade.plural} working in {city.name} and the surrounding {city.county} area, this housing context shapes everything — the type of work available, the kind of client you serve, and the digital expectations of homeowners researching trades online.
                </p>
                <p>
                  {city.housingProfile} {city.industryNote}
                </p>
                <p>
                  Avorria Trades builds websites specifically for {city.name}-based {trade.plural}, with deep local SEO targeting postcodes across the {city.postcodes.slice(0, 4).join(', ')} area, integration with Google Business Profile to capture &ldquo;{trade.singular} near me&rdquo; searches, and design built around the accreditations that {city.name} homeowners look for first — particularly {trade.accreditations.slice(0, 3).join(', ')}.
                </p>
              </div>
            </div>
            
            <div className="bg-steel border border-white/10 rounded-lg p-8">
              <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">{city.name} at a glance</div>
              <dl className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted">Population</dt>
                  <dd className="text-white font-mono">{city.population.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted">County</dt>
                  <dd className="text-white">{city.county}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted">Region</dt>
                  <dd className="text-white">{city.region}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted">Postcodes</dt>
                  <dd className="text-white font-mono text-sm">{city.postcodes.slice(0, 4).join(', ')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Notable areas</dt>
                  <dd className="text-white text-sm text-right max-w-[60%]">{city.notableAreas.slice(0, 3).join(', ')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-steel/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">02 — Services for {city.name} {trade.plural}</div>
          <h2 className="font-syne font-bold text-4xl text-white mb-12 max-w-3xl">
            What every {city.name} {trade.singular} website must showcase.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trade.services.map((service, i) => (
              <div key={i} className="bg-forge-black border border-white/10 rounded-lg p-6 hover:border-amber/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-syne font-semibold text-xl text-white">{service.name}</h3>
                  <span className="text-amber font-mono text-sm whitespace-nowrap ml-4">{service.avgValue}</span>
                </div>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Website Essentials */}
      <section className="py-20 bg-forge-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">03 — What we build in</div>
              <h2 className="font-syne font-bold text-4xl text-white mb-6">
                Every {trade.singular} website we build for {city.name} clients includes:
              </h2>
              <p className="text-muted-light text-lg leading-relaxed mb-8">
                Built around {city.name}&apos;s specific market and the search behaviour of homeowners across {city.county}.
              </p>
            </div>
            
            <ul className="space-y-4">
              {trade.websiteEssentials.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-steel/30 border border-white/5 rounded-lg p-4">
                  <span className="text-amber font-mono mt-1">✓</span>
                  <span className="text-muted-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Local SEO Block */}
      <section className="py-20 bg-amber/5 border-y border-amber/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4 text-center">04 — Local SEO Strategy</div>
          <h2 className="font-syne font-bold text-4xl text-white mb-6 text-center">
            How we get {city.name} {trade.plural} ranking on Google.
          </h2>
          <div className="text-muted-light text-lg leading-relaxed space-y-5">
            <p>
              When a homeowner in {city.name} types &ldquo;{trade.singular} near me&rdquo; or &ldquo;{trade.singular} {city.name}&rdquo; into Google, the businesses that appear are not the ones with the most expensive websites — they are the ones with the strongest local SEO architecture. That means proper schema markup, location-specific landing pages, postcode-aware content, and seamless Google Business Profile integration.
            </p>
            <p>
              For our {city.name}-based {trade.singular} clients, we build dedicated landing pages for the specific postcodes you cover ({city.postcodes.slice(0, 4).join(', ')}) and the neighbouring areas ({city.neighbouringAreas.slice(0, 3).join(', ')}). Each page targets a distinct search query — &ldquo;{trade.singular} {city.notableAreas[0]?.toLowerCase()}&rdquo;, &ldquo;{trade.singular} {city.notableAreas[1]?.toLowerCase()}&rdquo;, and so on — pulling in long-tail searches that broader sites miss entirely.
            </p>
            <p>
              We also configure your Google Business Profile to feed reviews, photos, and service updates directly to your website, creating a continuously fresh page that Google rewards in local search rankings. The {trade.plural} we work with in {city.name} typically see significant ranking improvements within 90 days of launch.
            </p>
          </div>
        </div>
      </section>
      
      {/* Trade × Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-20 bg-forge-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">05 — Working across {city.region}</div>
            <h2 className="font-syne font-bold text-3xl text-white mb-10">
              We also build {trade.singular} websites in:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${trade.slug}/${nearby.slug}`}
                  className="bg-steel border border-white/10 rounded-lg p-5 hover:border-amber/40 hover:bg-steel-light transition-all group"
                >
                  <div className="text-muted text-xs font-mono uppercase mb-1 group-hover:text-amber/70 transition-colors">{trade.displayName}</div>
                  <div className="text-white font-syne font-semibold text-lg group-hover:text-amber transition-colors">{nearby.name}</div>
                  <div className="text-muted text-xs mt-1">{nearby.county}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Other Trades in This City */}
      <section className="py-20 bg-steel/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-amber font-mono text-xs uppercase tracking-wider mb-4">06 — Other trades we work with in {city.name}</div>
          <h2 className="font-syne font-bold text-3xl text-white mb-10">
            Premium websites for every trade across {city.name}.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTrades.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}/${city.slug}`}
                className="bg-forge-black border border-white/10 rounded-lg p-5 hover:border-amber/40 transition-all group"
              >
                <div className="text-3xl mb-3">{t.emoji}</div>
                <div className="text-white font-syne font-semibold text-lg group-hover:text-amber transition-colors">{t.displayName}</div>
                <div className="text-muted text-xs mt-1">{city.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-forge-black relative overflow-hidden">
        <div className="absolute inset-0 bg-amber/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Ready to win more {trade.singular} jobs in {city.name}?
          </h2>
          <p className="text-xl text-muted-light mb-10 max-w-2xl mx-auto">
            Get a free quote for your {city.name} {trade.singular} website. We&apos;ll come back within one business day with a tailored proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-started" className="btn-primary">
              Get a free quote →
            </Link>
            <Link href="/packages" className="btn-ghost">
              View packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
