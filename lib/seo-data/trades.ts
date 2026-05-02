export interface Trade {
  slug: string                   // 'electricians'
  singular: string               // 'electrician'
  plural: string                 // 'electricians'
  displayName: string            // 'Electricians'
  category: string               // 'Electrical'
  emoji: string                  // '⚡'
  
  // Content fields
  shortDescription: string       // 1-line for cards
  intro: string                  // 2-3 sentence intro
  
  // Trade-specific accreditations
  accreditations: string[]       // ['NICEIC', 'NAPIT']
  
  // Trade-specific service types
  services: {
    name: string                 // 'Emergency electrician'
    description: string
    avgValue: string             // '£80–£200'
  }[]
  
  // Trade-specific keywords for SEO
  keywords: string[]             // ['electrician', 'electrical contractor', ...]
  
  // Common emergency callout patterns
  hasEmergencyCallout: boolean
  
  // Trade-specific tips for the website
  websiteEssentials: string[]
  
  // Local SEO angle
  localSearchPattern: string     // "{trade} near me", "emergency {trade} {city}"
}

export const trades: Trade[] = [
  {
    slug: 'electricians',
    singular: 'electrician',
    plural: 'electricians',
    displayName: 'Electricians',
    category: 'Electrical',
    emoji: '⚡',
    shortDescription: 'NICEIC & NAPIT-accredited domestic and commercial electrical contractors',
    intro: 'Electricians need a website that proves competence and safety in seconds. Homeowners searching at 11pm with a tripped consumer unit need to see your NICEIC accreditation, your service area, and your emergency callout number above the fold. Commercial clients need to see your project history and compliance documentation.',
    accreditations: ['NICEIC', 'NAPIT', 'ECA', 'STROMA'],
    services: [
      { name: 'Emergency callouts', description: '24/7 response for power failures, tripping circuits, and dangerous faults', avgValue: '£80–£200 callout' },
      { name: 'EICR testing', description: 'Mandatory rental property safety inspections', avgValue: '£150–£350' },
      { name: 'Consumer unit replacement', description: 'Modern fuseboard upgrades to 18th edition standards', avgValue: '£500–£900' },
      { name: 'EV charger installation', description: 'OZEV-grant-approved home and commercial chargers', avgValue: '£800–£1,500' },
      { name: 'Full rewires', description: 'Complete domestic or commercial property rewiring', avgValue: '£3,500–£6,500' },
      { name: 'Commercial electrical', description: 'Office, retail, and industrial installations', avgValue: 'Project quoted' },
    ],
    keywords: ['electrician', 'electrical contractor', 'NICEIC electrician', 'emergency electrician', 'EV charger installer'],
    hasEmergencyCallout: true,
    websiteEssentials: [
      'NICEIC and NAPIT badge prominently displayed',
      'Click-to-call emergency number above the fold',
      'EICR testing landing page (high search volume from landlords)',
      'EV charger installation page (rapidly growing market)',
      'Service area map with covered postcodes',
      'Compliance certificate examples in portfolio',
    ],
    localSearchPattern: 'electrician {city}, emergency electrician {city}, NICEIC electrician {city}',
  },
  
  {
    slug: 'plumbers',
    singular: 'plumber',
    plural: 'plumbers',
    displayName: 'Plumbers',
    category: 'Plumbing',
    emoji: '🔧',
    shortDescription: 'Gas Safe-registered plumbers and heating engineers for emergency and planned work',
    intro: 'Plumbing has the highest emergency-search volume of any trade. A burst pipe at 2am means homeowners are typing "emergency plumber near me" in panic. Your website needs to load in under two seconds, show your Gas Safe number, and have a click-to-call button so prominent that they don\'t even read the page.',
    accreditations: ['Gas Safe', 'CIPHE', 'WaterSafe', 'OFTEC'],
    services: [
      { name: 'Emergency callouts', description: '24/7 response for burst pipes, leaks, and boiler breakdowns', avgValue: '£90–£250 callout' },
      { name: 'Boiler installation', description: 'New A-rated boiler installs with warranty', avgValue: '£1,800–£3,500' },
      { name: 'Boiler servicing', description: 'Annual maintenance and Gas Safe certification', avgValue: '£80–£120' },
      { name: 'Bathroom installations', description: 'Full bathroom suite design and install', avgValue: '£3,500–£8,000' },
      { name: 'Power flushing', description: 'Central heating system clean to restore efficiency', avgValue: '£400–£700' },
      { name: 'Landlord gas safety (CP12)', description: 'Annual landlord gas safety certification', avgValue: '£60–£90' },
    ],
    keywords: ['plumber', 'emergency plumber', 'Gas Safe plumber', 'boiler installation', 'bathroom fitter'],
    hasEmergencyCallout: true,
    websiteEssentials: [
      'Gas Safe registration number displayed in footer and header',
      'Emergency plumber landing page with massive click-to-call',
      'Boiler installation page with finance options',
      'Landlord CP12 page targeting letting agents',
      'Bathroom fitting portfolio gallery',
      '24/7 callout coverage area map',
    ],
    localSearchPattern: 'plumber {city}, emergency plumber {city}, Gas Safe plumber {city}',
  },
  
  {
    slug: 'gas-engineers',
    singular: 'gas engineer',
    plural: 'gas engineers',
    displayName: 'Gas Engineers',
    category: 'Heating',
    emoji: '🔥',
    shortDescription: 'Gas Safe registered engineers for boiler installs, services, and certifications',
    intro: 'Gas engineering is a trust business. The Gas Safe register is your licence to operate, and homeowners know to check the number. Your website must display your Gas Safe number prominently, link to the Gas Safe register entry, and make annual service booking effortless. Landlords are a particularly valuable client segment — they need CP12 certificates annually and tend to book in bulk.',
    accreditations: ['Gas Safe', 'OFTEC', 'HETAS', 'MCS'],
    services: [
      { name: 'Boiler installation', description: 'A-rated combi, system, and regular boiler installs', avgValue: '£1,800–£4,000' },
      { name: 'Annual servicing', description: 'Manufacturer-warranty-compliant boiler service', avgValue: '£80–£140' },
      { name: 'Gas safety certificates (CP12)', description: 'Annual landlord gas safety inspections', avgValue: '£60–£90' },
      { name: 'Boiler breakdown repair', description: 'Diagnostic and repair callouts', avgValue: '£90–£300' },
      { name: 'Power flushing', description: 'Central heating system cleansing', avgValue: '£400–£700' },
      { name: 'Heat pump installation', description: 'BUS-grant-eligible air source heat pumps', avgValue: '£8,000–£14,000' },
    ],
    keywords: ['gas engineer', 'Gas Safe engineer', 'boiler installation', 'CP12 certificate', 'landlord gas safety'],
    hasEmergencyCallout: true,
    websiteEssentials: [
      'Gas Safe registration number in three places minimum (header, hero, footer)',
      'Annual service booking calendar',
      'Landlord portal for managing multiple properties',
      'CP12 certificate explainer page',
      'Boiler comparison tool / installation quote form',
      'BUS grant explainer for heat pump market',
    ],
    localSearchPattern: 'gas engineer {city}, boiler engineer {city}, Gas Safe {city}',
  },
  
  {
    slug: 'hvac',
    singular: 'HVAC engineer',
    plural: 'HVAC engineers',
    displayName: 'HVAC & Heat Pump Engineers',
    category: 'HVAC & Renewables',
    emoji: '🌡️',
    shortDescription: 'MCS-certified heat pump installers and HVAC engineers',
    intro: 'HVAC and heat pump engineering is the fastest-growing trade in the UK. The Boiler Upgrade Scheme is funnelling £450 million into heat pump installations through 2028. Homeowners are confused, the technology is unfamiliar, and educational content positions you as the local authority. MCS certification is the gateway to grant eligibility — without it you cannot access the highest-value market segment.',
    accreditations: ['MCS', 'F-Gas', 'REFCOM', 'HETAS'],
    services: [
      { name: 'Air source heat pumps', description: 'BUS-grant-eligible installations with £7,500 government grant', avgValue: '£8,000–£14,000' },
      { name: 'Ground source heat pumps', description: 'Higher-efficiency renewable heating systems', avgValue: '£15,000–£28,000' },
      { name: 'Air conditioning installation', description: 'Domestic and commercial cooling systems', avgValue: '£2,000–£8,000' },
      { name: 'Annual servicing', description: 'F-Gas-compliant heat pump and AC servicing', avgValue: '£140–£250' },
      { name: 'Commercial HVAC', description: 'Office, retail, and industrial climate control', avgValue: 'Project quoted' },
      { name: 'Heat pump grants advice', description: 'BUS application support and eligibility checks', avgValue: 'Free consultation' },
    ],
    keywords: ['heat pump installer', 'air source heat pump', 'MCS installer', 'air conditioning', 'BUS grant'],
    hasEmergencyCallout: false,
    websiteEssentials: [
      'MCS certification badge prominent (gateway to grants)',
      'BUS grant explainer page with eligibility calculator',
      'Air source vs ground source comparison tool',
      'Quote calculator for heat pump systems',
      'Case studies showing energy savings',
      'Commercial HVAC service contract pages',
    ],
    localSearchPattern: 'heat pump installer {city}, air source heat pump {city}, MCS installer {city}',
  },
  
  {
    slug: 'builders',
    singular: 'builder',
    plural: 'builders',
    displayName: 'Builders',
    category: 'Construction',
    emoji: '🏠',
    shortDescription: 'Domestic builders for extensions, renovations, and new builds',
    intro: 'A homeowner is not giving you £80,000 for an extension based on a Facebook page. They are doing days of research, comparing portfolios, reading reviews, and looking for proof of process. Your website is the most important sales tool in your business — it needs to show finished work, explain your process, and build the kind of trust that justifies a serious financial commitment.',
    accreditations: ['FMB', 'TrustMark', 'NHBC', 'CIOB'],
    services: [
      { name: 'House extensions', description: 'Single and double storey extensions', avgValue: '£40,000–£120,000' },
      { name: 'Loft conversions', description: 'Dormer, hip-to-gable, and Mansard conversions', avgValue: '£35,000–£75,000' },
      { name: 'Kitchen extensions', description: 'Open-plan kitchen and dining extensions', avgValue: '£45,000–£90,000' },
      { name: 'New builds', description: 'Self-build and developer projects', avgValue: 'Project quoted' },
      { name: 'Renovations', description: 'Full property refurbishment', avgValue: '£25,000–£150,000' },
      { name: 'Garden rooms', description: 'Insulated outbuilding construction', avgValue: '£12,000–£30,000' },
    ],
    keywords: ['builder', 'extension builder', 'loft conversion specialist', 'home renovation', 'construction'],
    hasEmergencyCallout: false,
    websiteEssentials: [
      'Premium project gallery with high-resolution photography',
      'Detailed case studies showing before/during/after',
      'Process page explaining quote → planning → build → handover',
      'Client testimonials with project values',
      'FMB / TrustMark accreditation badges',
      'Planning application support information',
    ],
    localSearchPattern: 'builder {city}, extension builder {city}, loft conversion {city}',
  },
  
  {
    slug: 'roofers',
    singular: 'roofer',
    plural: 'roofers',
    displayName: 'Roofers',
    category: 'Roofing',
    emoji: '🔩',
    shortDescription: 'Roofing contractors for emergency repairs, re-roofs, and storm damage',
    intro: 'Roofing demand has two modes: emergency (storm damage, leaks) and planned (re-roofs, new builds). Your website needs to capture both. Emergency searches happen at panic moments — your phone number must be everywhere. Planned re-roofs are six-figure decisions made over weeks — you need guarantees, materials information, and visible insurance backing.',
    accreditations: ['NFRC', 'CompetentRoofer', 'TrustMark', 'CHAS'],
    services: [
      { name: 'Emergency roof repairs', description: '24/7 storm damage and leak response', avgValue: '£200–£800' },
      { name: 'Full re-roofs', description: 'Complete roof replacement with 25-year guarantee', avgValue: '£6,000–£18,000' },
      { name: 'Flat roof installation', description: 'EPDM, GRP, and felt flat roofing', avgValue: '£2,000–£8,000' },
      { name: 'Slate and tile repairs', description: 'Replacement of damaged tiles and slates', avgValue: '£300–£900' },
      { name: 'Lead work', description: 'Specialist lead flashing and chimney work', avgValue: '£400–£1,500' },
      { name: 'Gutter cleaning and repair', description: 'Gutter clearance and replacement', avgValue: '£90–£400' },
    ],
    keywords: ['roofer', 'emergency roof repair', 'roof leak', 're-roofing', 'flat roof installer'],
    hasEmergencyCallout: true,
    websiteEssentials: [
      'Emergency callout banner prominent on all pages',
      '25-year guarantee badge for re-roofs',
      'Insurance-backed guarantee information',
      'Drone survey landing page (rapidly growing search)',
      'Materials comparison (slate vs tile vs flat)',
      'Storm damage response page',
    ],
    localSearchPattern: 'roofer {city}, emergency roof repair {city}, re-roofing {city}',
  },
  
  {
    slug: 'joiners',
    singular: 'joiner',
    plural: 'joiners',
    displayName: 'Joiners & Carpenters',
    category: 'Joinery',
    emoji: '🪵',
    shortDescription: 'Skilled joiners for bespoke fitted furniture and structural carpentry',
    intro: 'Joinery sells craftsmanship. Bespoke fitted wardrobes, custom kitchens, and built-in storage are visual purchases — homeowners need to see the quality of finish before they commit. Your website is a portfolio first and a trade pitch second. High-resolution photography, detailed material descriptions, and process explanations turn browsers into clients.',
    accreditations: ['Guild of Master Craftsmen', 'TrustMark', 'CSCS'],
    services: [
      { name: 'Fitted wardrobes', description: 'Bespoke built-in wardrobe design and install', avgValue: '£2,500–£8,000' },
      { name: 'Bespoke kitchens', description: 'Hand-built solid wood kitchen units', avgValue: '£12,000–£35,000' },
      { name: 'Built-in storage', description: 'Alcove units, window seats, and home offices', avgValue: '£1,500–£5,000' },
      { name: 'Doors and frames', description: 'Internal and external door installation', avgValue: '£200–£800 per door' },
      { name: 'Staircase repair and replacement', description: 'Custom staircase design and installation', avgValue: '£1,500–£8,000' },
      { name: 'Architectural joinery', description: 'Heritage and bespoke architectural work', avgValue: 'Project quoted' },
    ],
    keywords: ['joiner', 'carpenter', 'fitted wardrobes', 'bespoke kitchen', 'custom joinery'],
    hasEmergencyCallout: false,
    websiteEssentials: [
      'Cinematic portfolio gallery with detail shots',
      'Material guide explaining wood types and finishes',
      'Quote calculator for standard projects',
      'Before/after visual sliders',
      'Instagram feed integration showing work in progress',
      'Process page explaining design → build → install',
    ],
    localSearchPattern: 'joiner {city}, carpenter {city}, fitted wardrobes {city}',
  },
  
  {
    slug: 'landscapers',
    singular: 'landscaper',
    plural: 'landscapers',
    displayName: 'Landscapers',
    category: 'Landscaping',
    emoji: '🌿',
    shortDescription: 'Garden designers and landscape contractors for transformative outdoor spaces',
    intro: 'Landscaping is a seasonal business with two distinct pressure points: a winter sales window when homeowners plan summer projects, and a spring/summer execution window. Your website must work hard during the off-season — homeowners are browsing portfolios in February for builds in May. Strong portfolio imagery and clear service descriptions are non-negotiable.',
    accreditations: ['BALI', 'APL', 'TrustMark'],
    services: [
      { name: 'Garden design and build', description: 'Full landscape design and construction', avgValue: '£8,000–£40,000' },
      { name: 'Driveways', description: 'Resin, block paving, and tarmac driveways', avgValue: '£3,000–£12,000' },
      { name: 'Patios and paving', description: 'Natural stone and porcelain patio installations', avgValue: '£2,500–£8,000' },
      { name: 'Decking', description: 'Hardwood and composite decking', avgValue: '£1,500–£6,000' },
      { name: 'Fencing', description: 'Domestic and commercial fence installation', avgValue: '£800–£3,500' },
      { name: 'Garden maintenance', description: 'Ongoing seasonal maintenance contracts', avgValue: '£60–£250 / month' },
    ],
    keywords: ['landscaper', 'garden designer', 'driveway installer', 'patio installer', 'fencing contractor'],
    hasEmergencyCallout: false,
    websiteEssentials: [
      'Seasonal availability calendar (book ahead messaging)',
      'Photographic portfolio with before/after sliders',
      'Material samples gallery (paving, decking, fencing types)',
      'Driveway quote calculator',
      'Maintenance contract sign-up flow',
      'Drone survey landing page for large projects',
    ],
    localSearchPattern: 'landscaper {city}, garden designer {city}, driveway installer {city}',
  },
  
  {
    slug: 'painters',
    singular: 'painter',
    plural: 'painters',
    displayName: 'Painters & Decorators',
    category: 'Decorating',
    emoji: '🎨',
    shortDescription: 'Professional painters and decorators for residential and commercial properties',
    intro: 'Painting and decorating is a trust business with a wide quality range. Homeowners have been burned by cheap quotes that resulted in poor finishes. Your website must demonstrate quality at first glance — portfolio shots of finished rooms, clear pricing structures, and transparent process explanations. Commercial clients (estate agents, landlords, businesses) are particularly valuable as they book repeatedly.',
    accreditations: ['Dulux Select Decorators', 'TrustMark', 'PDA'],
    services: [
      { name: 'Interior decorating', description: 'Full room and house interior painting', avgValue: '£300–£800 per room' },
      { name: 'Exterior decorating', description: 'House exterior painting and weather protection', avgValue: '£1,500–£4,500' },
      { name: 'Commercial decorating', description: 'Office, retail, and rental property decoration', avgValue: 'Project quoted' },
      { name: 'Wallpaper hanging', description: 'Specialist wallpaper installation', avgValue: '£200–£600 per room' },
      { name: 'Spray painting', description: 'Spray-finished kitchens and woodwork', avgValue: '£800–£2,500' },
      { name: 'Heritage restoration', description: 'Period property paint restoration', avgValue: 'Project quoted' },
    ],
    keywords: ['painter and decorator', 'house painter', 'commercial decorator', 'wallpaper hanger'],
    hasEmergencyCallout: false,
    websiteEssentials: [
      'Portfolio gallery showing different paint finishes',
      'Colour scheme inspiration galleries',
      'Quote form with room dimensions',
      'Commercial client landing page (landlords, estate agents)',
      'Before/after gallery sliders',
    ],
    localSearchPattern: 'painter and decorator {city}, painter {city}, decorator {city}',
  },
]
