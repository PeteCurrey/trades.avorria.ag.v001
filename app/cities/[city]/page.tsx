import { trades } from '@/lib/seo-data/trades'
import { cities } from '@/lib/seo-data/cities'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map(city => ({ city: city.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city) return {}
  
  return {
    title: `Trade Websites in ${city.name} | Avorria Trades — ${city.name} Tradespeople`,
    description: `Premium websites and TradeDesk platform for ${city.name} tradespeople. Electricians, plumbers, gas engineers, builders and more across ${city.county}.`,
    alternates: {
      canonical: `https://trades.avorria.com/cities/${city.slug}`,
    },
  }
}

export default async function CityOverviewPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city) notFound()
  
  const nearbyCities = city.nearbyCities
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is typeof cities[0] => c !== undefined)
  
  return (
    <div className="bg-forge-black min-h-screen">
      <section className="bg-forge-black pt-20 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-xs text-muted mb-6 font-mono uppercase tracking-wider">
            <Link href="/" className="hover:text-amber">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/cities" className="hover:text-amber">Cities</Link>
            <span className="mx-2">/</span>
            <span className="text-amber">{city.name}</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="text-amber font-mono text-sm uppercase tracking-wider mb-4">
              {city.county} · {city.region} · Population {city.population.toLocaleString()}
            </div>
            <h1 className="font-syne font-extrabold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 text-white">
              Trade websites built for{' '}
              <span className="text-amber">{city.name}</span>.
            </h1>
            <p className="text-xl text-muted-light leading-relaxed max-w-3xl">
              {city.characteristics} {city.industryNote}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-forge-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-syne font-bold text-4xl text-white mb-12 max-w-3xl">
            Every trade in {city.name} we build websites for.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trades.map(trade => (
              <Link
                key={trade.slug}
                href={`/${trade.slug}/${city.slug}`}
                className="bg-steel border border-white/10 rounded-lg p-6 hover:border-amber/40 transition-all group"
              >
                <div className="text-4xl mb-4">{trade.emoji}</div>
                <h3 className="font-syne font-semibold text-2xl text-white mb-2 group-hover:text-amber transition-colors">
                  {trade.displayName} in {city.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{trade.shortDescription}</p>
                <div className="text-amber text-sm font-mono group-hover:underline">View →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {nearbyCities.length > 0 && (
        <section className="py-16 bg-steel/30 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-syne font-bold text-2xl text-white mb-8">Nearby cities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyCities.map(nearby => (
                <Link
                  key={nearby.slug}
                  href={`/cities/${nearby.slug}`}
                  className="bg-forge-black border border-white/10 rounded p-4 hover:border-amber/30 transition-colors"
                >
                  <div className="text-white font-syne font-semibold">{nearby.name}</div>
                  <div className="text-muted text-xs">{nearby.county}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
