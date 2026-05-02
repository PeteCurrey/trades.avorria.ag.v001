import Link from 'next/link'
import type { PortfolioProject } from '@/lib/portfolio/types'
import { PortfolioMockup } from './portfolio-mockup'

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block bg-steel border border-white/10 rounded-lg overflow-hidden hover:border-amber/40 transition-all hover:scale-[1.01]"
    >
      {/* Mock screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <PortfolioMockup project={project} />
        
        {/* Concept badge top-left */}
        {project.isConcept && (
          <div className="absolute top-3 left-3 bg-forge-black/90 backdrop-blur border border-amber/40 text-amber text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded">
            Concept Site
          </div>
        )}
        
        {/* Trade chip top right */}
        <div className="absolute top-3 right-3 bg-amber text-forge-black text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded font-bold">
          {project.trade}
        </div>
      </div>
      
      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-syne font-semibold text-xl text-white group-hover:text-amber transition-colors">
            {project.businessName}
          </h3>
          <div className="flex items-center gap-1 text-amber text-sm shrink-0 ml-3">
            <span className="text-amber">★</span>
            <span className="font-mono">{project.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="text-muted text-sm mb-4">{project.location}</div>
        
        <div className="text-amber font-mono text-sm mb-4">{project.metric}</div>
        
        <p className="text-muted-light text-sm leading-relaxed line-clamp-2">
          {project.excerpt}
        </p>
        
        <div className="mt-5 pt-4 border-t border-white/5 text-amber text-xs font-mono uppercase group-hover:underline">
          View case study →
        </div>
      </div>
    </Link>
  )
}
