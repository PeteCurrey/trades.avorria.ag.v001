"use client"

import Link from 'next/link'

const filters = [
  { slug: 'all', label: 'All' },
  { slug: 'electricians', label: 'Electricians' },
  { slug: 'plumbers', label: 'Plumbers' },
  { slug: 'gas-engineers', label: 'Gas Engineers' },
  { slug: 'hvac', label: 'HVAC' },
  { slug: 'builders', label: 'Builders' },
  { slug: 'roofers', label: 'Roofers' },
  { slug: 'joiners', label: 'Joiners' },
  { slug: 'landscapers', label: 'Landscapers' },
  { slug: 'painters', label: 'Painters' },
]

export function PortfolioFilters({ activeFilter }: { activeFilter: string }) {
  return (
    <div className="bg-forge-black border-b border-white/5 sticky top-0 z-30 backdrop-blur-md bg-forge-black/80">
      <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {filters.map(filter => {
            const isActive = activeFilter === filter.slug
            const href = filter.slug === 'all' ? '/portfolio' : `/portfolio?trade=${filter.slug}`
            return (
              <Link
                key={filter.slug}
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                  isActive
                    ? 'text-amber border-b-2 border-amber'
                    : 'text-muted hover:text-white border-b-2 border-transparent'
                }`}
              >
                {filter.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
