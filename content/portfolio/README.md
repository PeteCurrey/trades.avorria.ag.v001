# Adding a real client to the portfolio

To add a new client work entry:

1. Create a new MDX file at `content/portfolio/[slug].mdx` (NOT in `_concepts/`)
2. Use the frontmatter template from any existing concept file
3. Set `publishedAt` to today's date in ISO format (`YYYY-MM-DD`)
4. Set `mockConfig` based on the actual site's design
5. Set `liveUrl` to the live site URL
6. Write the case study body in MDX (Challenge, Approach, Results)
7. Commit and push — Vercel rebuilds automatically

Real clients automatically sort to the top of the portfolio grid. Once 6+ real clients exist, archive the concept entries by moving the entire `_concepts/` folder out of the build (rename to `_concepts.archive`).

## Frontmatter Template

```mdx
---
businessName: "Business Name"
trade: "Trade Name"
tradeSlug: "trade-slug"
location: "Location"
publishedAt: "2024-XX-XX"
rating: 5.0
metric: "↑ XX% increase in enquiries"
excerpt: "A short summary of the project."
mockConfig:
  showAccreditation: "NICEIC"
  showEmergencyBadge: true
  showServices: ["Service 1", "Service 2"]
  serviceArea: "Service Area"
liveUrl: "https://example.com"
---
```
