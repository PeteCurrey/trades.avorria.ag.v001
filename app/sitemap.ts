import { trades } from '@/lib/seo-data/trades'
import { cities } from '@/lib/seo-data/cities'
import { getAllProjects } from '@/lib/portfolio/get-projects'
import type { MetadataRoute } from 'next'

// Use the explicit NEXT_PUBLIC_SITE_URL if set, otherwise default to the current live Vercel domain.
// Note: VERCEL_URL is often a deployment-specific hash URL, so it's safer to hardcode the primary domain here
// until the final custom domain (e.g. trades.avorria.com) is attached.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL 
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'https://trades-avorria-ag-v001.vercel.app'

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

  const portfolioPages = getAllProjects().map(project => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...tradeCityPages, ...cityPages, ...portfolioPages]
}
