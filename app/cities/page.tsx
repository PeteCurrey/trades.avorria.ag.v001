import { cities } from '@/lib/seo-data/cities'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cities | Avorria Trades — UK-Wide Trade Website Specialists',
  description: 'Premium websites for tradespeople across 30 UK cities. Find your area and see what we build for trades in your postcode.',
}

export default function CitiesHub() {
  // Group cities by region
  const byRegion = cities.reduce((acc, city) => {
    if (!acc[city.region]) acc[city.region] = []
    acc[city.region].push(city)
    return acc
  }, {} as Record<string, typeof cities>)
  
  return (
    <div className="bg-forge-black min-h-screen">
      <section className="bg-forge-black pt-20 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-syne font-extrabold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 text-white">
            Trade websites,{' '}
            <span className="text-amber">UK-wide.</span>
          </h1>
          <p className="text-xl text-muted-light leading-relaxed max-w-3xl">
            We build premium websites for tradespeople across 30 UK cities. Find yours below — or get a quote and we&apos;ll come to you.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-forge-black">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(byRegion).map(([region, regionCities]) => (
            <div key={region} className="mb-16 last:mb-0">
              <h2 className="font-syne font-bold text-2xl text-amber mb-6">{region}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {regionCities.map(city => (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.slug}`}
                    className="bg-steel border border-white/10 rounded p-5 hover:border-amber/40 transition-colors group"
                  >
                    <div className="text-white font-syne font-semibold text-lg group-hover:text-amber transition-colors">{city.name}</div>
                    <div className="text-muted text-sm">{city.county}</div>
                    <div className="text-muted text-xs mt-2 font-mono">{city.population.toLocaleString()} pop.</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
