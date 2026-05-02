"use client"

const items = [
  { icon: '✓', label: 'Checkatrade Partner' },
  { icon: '✓', label: 'Gas Safe Registered Websites' },
  { icon: '✓', label: 'NICEIC Accreditation Display' },
  { icon: '✓', label: 'TrustMark Integration' },
  { icon: '✓', label: 'Google Business Profile Sync' },
]

export default function TrustBar() {
  return (
    <div className="bg-steel border-y border-white/5 py-5 overflow-hidden">
      {/* Desktop: static evenly-spaced */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 justify-between items-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="text-amber text-sm">{item.icon}</span>
            <span className="text-white/85 text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Mobile: marquee */}
      <div className="md:hidden whitespace-nowrap relative">
        <div className="inline-flex animate-marquee gap-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-amber text-sm">{item.icon}</span>
              <span className="text-white/85 text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
