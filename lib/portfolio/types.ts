export interface PortfolioProject {
  slug: string                   // URL slug, e.g. 'hartley-electrical'
  
  // Identity
  businessName: string           // 'Hartley Electrical'
  trade: string                  // 'Electrician' (must match displayName from trades.ts)
  tradeSlug: string              // 'electricians'
  location: string               // 'Leeds'
  citySlug?: string              // 'leeds' (matches cities.ts where applicable)
  
  // Status
  isConcept: boolean             // true if from _concepts folder
  publishedAt: string            // ISO date — controls sort order for real entries
  
  // Display
  rating: number                 // 4.0 to 5.0
  reviewCount?: number           // For real entries only
  
  // Headline metric for the card
  metric: string                 // '↑ 47% enquiries in 90 days'
  
  // Card visual config
  accentColour?: string          // Optional CSS colour for card variation, e.g. 'amber' (default)
  
  // SEO
  excerpt: string                // 1-2 sentence summary for card and meta description
  
  // Mock screenshot config (used by the procedural mock UI generator)
  mockConfig: {
    primaryColour?: string       // hex without # — overrides default amber
    showAccreditation?: string   // e.g. 'NICEIC', 'Gas Safe'
    showEmergencyBadge?: boolean // shows '24/7 EMERGENCY CALLOUT' strip
    showServices?: string[]      // up to 4 service tags
    showPhoneNumber?: boolean    // mock phone number in nav
    serviceArea?: string         // 'Leeds & West Yorkshire'
  }
  
  // For real client entries only
  liveUrl?: string               // 'https://hartleyelectrical.co.uk'
  
  // Full case study content (rendered as MDX body)
  body: string                   // MDX content
}

export interface PortfolioFrontmatter {
  businessName: string
  trade: string
  tradeSlug: string
  location: string
  citySlug?: string
  publishedAt: string
  rating: number
  reviewCount?: number
  metric: string
  accentColour?: string
  excerpt: string
  mockConfig: PortfolioProject['mockConfig']
  liveUrl?: string
}
