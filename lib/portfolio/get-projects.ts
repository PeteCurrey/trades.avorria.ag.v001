import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PortfolioProject, PortfolioFrontmatter } from './types'

const PORTFOLIO_DIR = path.join(process.cwd(), 'content/portfolio')

function readMdxFile(filePath: string, isConcept: boolean): PortfolioProject {
  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContents)
  const frontmatter = data as PortfolioFrontmatter
  const slug = path.basename(filePath, '.mdx')
  
  return {
    ...frontmatter,
    slug,
    isConcept,
    body: content,
  }
}

export function getAllProjects(): PortfolioProject[] {
  const projects: PortfolioProject[] = []
  
  // Read real projects from /content/portfolio (top level)
  const realDir = PORTFOLIO_DIR
  if (fs.existsSync(realDir)) {
    const realFiles = fs.readdirSync(realDir).filter(
      f => f.endsWith('.mdx') && !f.startsWith('_')
    )
    for (const file of realFiles) {
      projects.push(readMdxFile(path.join(realDir, file), false))
    }
  }
  
  // Read concept projects from /content/portfolio/_concepts
  const conceptDir = path.join(PORTFOLIO_DIR, '_concepts')
  if (fs.existsSync(conceptDir)) {
    const conceptFiles = fs.readdirSync(conceptDir).filter(f => f.endsWith('.mdx'))
    for (const file of conceptFiles) {
      projects.push(readMdxFile(path.join(conceptDir, file), true))
    }
  }
  
  // Sort: real first (by publishedAt desc), then concepts (by businessName asc)
  return projects.sort((a, b) => {
    if (a.isConcept && !b.isConcept) return 1
    if (!a.isConcept && b.isConcept) return -1
    if (a.isConcept && b.isConcept) {
      return a.businessName.localeCompare(b.businessName)
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export function getProjectBySlug(slug: string): PortfolioProject | null {
  const all = getAllProjects()
  return all.find(p => p.slug === slug) ?? null
}

export function getProjectsByTrade(tradeSlug: string): PortfolioProject[] {
  return getAllProjects().filter(p => p.tradeSlug === tradeSlug)
}
