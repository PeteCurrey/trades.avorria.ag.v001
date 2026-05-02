import type { PortfolioProject } from '@/lib/portfolio/types'

export function PortfolioMockup({ project }: { project: PortfolioProject }) {
  const config = project.mockConfig
  
  return (
    <div className="w-full h-full bg-forge-black relative overflow-hidden">
      {/* Mock site nav */}
      <div className="bg-black/60 border-b border-white/5 px-3 py-2 flex justify-between items-center text-[8px]">
        <span className="text-amber font-bold uppercase tracking-wide">{project.businessName}</span>
        {config.showPhoneNumber !== false && (
          <span className="text-white/60">CALL · {phoneFor(project.location)}</span>
        )}
      </div>
      
      {/* Mock hero */}
      <div className="bg-gradient-to-br from-amber/15 via-forge-black to-forge-black p-4 h-full flex flex-col justify-end relative">
        {config.showAccreditation && (
          <div className="text-[9px] text-amber font-mono uppercase tracking-wider mb-1">
            {config.showAccreditation} Approved
          </div>
        )}
        
        <div className="text-white text-base font-syne font-bold leading-tight mb-3 whitespace-pre-line">
          {heroFor(project)}
        </div>
        
        {config.showEmergencyBadge && (
          <div className="bg-amber text-forge-black text-[8px] px-2 py-1 rounded font-bold w-fit mb-2">
            📞 24/7 EMERGENCY CALLOUT
          </div>
        )}
        
        {config.showServices && config.showServices.length > 0 && (
          <div className="grid grid-cols-2 gap-1 mt-2">
            {config.showServices.slice(0, 4).map(service => (
              <div key={service} className="bg-white/5 border border-white/10 rounded px-2 py-1">
                <div className="text-[7px] text-muted uppercase tracking-wider">SERVICE</div>
                <div className="text-[9px] text-white truncate">{service}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function phoneFor(location: string): string {
  // Phone area codes by region
  const codes: Record<string, string> = {
    'Leeds': '0113...',
    'Manchester': '0161...',
    'Sheffield': '0114...',
    'Derby': '01332...',
    'Nottingham': '0115...',
    'Birmingham': '0121...',
    'Liverpool': '0151...',
    'Newcastle': '0191...',
    'York': '01904...',
    'Chesterfield': '01246...',
  }
  return codes[location] ?? '01234...'
}

function heroFor(project: PortfolioProject): string {
  // Hero text for each trade type
  const trade = project.trade.toLowerCase()
  if (trade.includes('electric')) return `Emergency\nElectrician\nin ${project.location}`
  if (trade.includes('plumb')) return `Trusted\nPlumber\n${project.location}`
  if (trade.includes('gas')) return `Gas Safe\nEngineer\n${project.location}`
  if (trade.includes('hvac') || trade.includes('heat')) return `Heat Pump\nInstaller\n${project.location}`
  if (trade.includes('build')) return `Premium\nBuilders\n${project.location}`
  if (trade.includes('roof')) return `Trusted\nRoofers\n${project.location}`
  if (trade.includes('join') || trade.includes('carp')) return `Bespoke\nJoinery\n${project.location}`
  if (trade.includes('landscap') || trade.includes('drive')) return `Garden &\nDriveway\nSpecialists`
  if (trade.includes('paint') || trade.includes('decorat')) return `Premium\nDecorators\n${project.location}`
  return `${project.businessName}\n${project.location}`
}
