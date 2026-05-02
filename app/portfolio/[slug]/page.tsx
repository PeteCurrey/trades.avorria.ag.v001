import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllProjects, getProjectBySlug } from '@/lib/portfolio/get-projects'
import { PortfolioMockup } from '@/components/portfolio/portfolio-mockup'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  
  return {
    title: `${project.businessName} — ${project.trade} Website Case Study | Avorria Trades`,
    description: project.excerpt,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  
  const allProjects = getAllProjects()
  const relatedProjects = allProjects
    .filter(p => p.tradeSlug === project.tradeSlug && p.slug !== project.slug)
    .slice(0, 3)
  
  return (
    <div className="bg-forge-black min-h-screen">
      {/* Hero */}
      <section className="bg-forge-black pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-muted mb-6 font-mono uppercase tracking-wider">
            <Link href="/" className="hover:text-amber">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-amber">Portfolio</Link>
            <span className="mx-2">/</span>
            <span className="text-amber">{project.businessName}</span>
          </nav>
          
          <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-start">
            <div>
              {project.isConcept && (
                <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded px-3 py-1 mb-6">
                  <span className="text-amber text-xs font-mono uppercase tracking-wider">Concept Site</span>
                </div>
              )}
              
              <div className="text-amber font-mono text-sm uppercase tracking-wider mb-4">
                {project.trade} · {project.location}
              </div>
              
              <h1 className="font-syne font-extrabold text-4xl md:text-6xl tracking-tight leading-[0.95] mb-6 text-white">
                {project.businessName}
              </h1>
              
              <p className="text-xl text-muted-light leading-relaxed mb-10">
                {project.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-steel border border-white/10 rounded px-4 py-3">
                  <div className="text-muted text-xs font-mono uppercase mb-1">Headline metric</div>
                  <div className="text-amber font-mono text-base">{project.metric}</div>
                </div>
                <div className="bg-steel border border-white/10 rounded px-4 py-3">
                  <div className="text-muted text-xs font-mono uppercase mb-1">Rating</div>
                  <div className="text-amber font-mono text-base">★ {project.rating.toFixed(1)}</div>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber text-forge-black font-medium px-4 py-3 rounded text-sm hover:bg-amber-light transition-colors"
                  >
                    Visit live site →
                  </a>
                )}
              </div>
            </div>
            
            {/* Mockup card */}
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-white/10">
              <PortfolioMockup project={project} />
            </div>
          </div>
        </div>
      </section>
      
      {/* MDX body */}
      <article className="py-20 bg-forge-black">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-invert prose-headings:font-syne prose-headings:text-white prose-h2:text-amber prose-p:text-muted-light prose-strong:text-white prose-a:text-amber">
          <MDXRemote source={project.body} />
        </div>
      </article>
      
      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-steel/30 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-syne font-bold text-3xl text-white mb-8">
              More {project.trade.toLowerCase()} websites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(p => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="bg-forge-black border border-white/10 rounded-lg p-6 hover:border-amber/40 transition-colors group"
                >
                  <div className="text-amber font-mono text-xs uppercase tracking-wider mb-2">{p.location}</div>
                  <div className="text-white font-syne font-semibold text-lg group-hover:text-amber transition-colors">{p.businessName}</div>
                  <div className="text-muted text-sm mt-2 line-clamp-2">{p.excerpt}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-20 bg-forge-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-4xl text-white mb-6">
            Want results like this for your trade business?
          </h2>
          <Link href="/get-started" className="btn-primary">
            Get a free quote →
          </Link>
        </div>
      </section>
    </div>
  )
}
