import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/portfolio/get-projects'
import { PortfolioCard } from '@/components/portfolio/portfolio-card'
import { PortfolioFilters } from '@/components/portfolio/portfolio-filters'

export const metadata: Metadata = {
  title: "Portfolio | Avorria Trades — UK Trade Websites",
  description: "A selection of premium websites built for UK tradespeople — electricians, plumbers, gas engineers, builders, and more. See what we deliver.",
}

interface PageProps {
  searchParams: Promise<{ trade?: string }>
}

export default async function PortfolioPage({ searchParams }: PageProps) {
  const { trade: tradeFilter } = await searchParams
  const allProjects = getAllProjects()
  const projects = tradeFilter && tradeFilter !== 'all'
    ? allProjects.filter(p => p.tradeSlug === tradeFilter)
    : allProjects
  
  const realCount = allProjects.filter(p => !p.isConcept).length
  const conceptCount = allProjects.filter(p => p.isConcept).length
  
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="bg-forge-black pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-syne font-extrabold text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6 text-white">
            Portfolio.{' '}
            <span className="text-amber">Real trades websites, real results.</span>
          </h1>
          <p className="text-xl text-muted-light leading-relaxed max-w-3xl">
            Every site we build is bespoke. Here&apos;s a selection of recent and conceptual trade websites, with the strategy and results behind each one.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-4 py-2">
            <span className={`w-2 h-2 bg-amber rounded-full ${realCount > 0 ? 'animate-pulse' : ''}`} />
            <span className="text-amber text-sm font-mono">
              {realCount} live · {conceptCount} concept
            </span>
          </div>
        </div>
      </section>
      
      <PortfolioFilters activeFilter={tradeFilter ?? 'all'} />
      
      <section className="py-16 bg-forge-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted text-lg font-mono">No projects found for this trade yet.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats strip */}
      <section className="py-16 bg-steel/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-amber font-mono font-bold text-4xl">500+</div>
            <div className="text-muted text-sm mt-2">Sites Built</div>
          </div>
          <div>
            <div className="text-amber font-mono font-bold text-4xl">98%</div>
            <div className="text-muted text-sm mt-2">Customer Retention</div>
          </div>
          <div>
            <div className="text-amber font-mono font-bold text-4xl">3.4×</div>
            <div className="text-muted text-sm mt-2">Average Year 1 ROI</div>
          </div>
          <div>
            <div className="text-amber font-mono font-bold text-4xl">UK</div>
            <div className="text-muted text-sm mt-2">Wide Coverage</div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-forge-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-6">
            Want your trade business showcased here?
          </h2>
          <p className="text-xl text-muted-light mb-10">
            Get a free quote and we&apos;ll come back to you within one business day.
          </p>
          <Link href="/get-started" className="btn-primary">
            Get a free quote →
          </Link>
        </div>
      </section>
    </div>
  )
}
