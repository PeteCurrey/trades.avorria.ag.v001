import { trades } from '@/lib/seo-data/trades'
import { cities } from '@/lib/seo-data/cities'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://trades.avorria.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/packages',
    '/whats-included',
    '/portfolio',
    '/trades-platform',
    '/who-we-work-with',
    '/get-started',
    '/contact',
    '/the-workbench',
    '/testimonials',
    '/about',
    '/cities',
  ].map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }))
  
  const tradeCityPages = trades.flatMap(trade =>
    cities.map(city => ({
      url: `${BASE_URL}/${trade.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )
  
  const cityPages = cities.map(city => ({
    url: `${BASE_URL}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...tradeCityPages, ...cityPages]
}
