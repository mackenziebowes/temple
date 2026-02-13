---
name: nextjs-housekeeping
description: Configure global metadata for modern Next.js App Router projects. Use when setting up or updating app icons (favicon, icon, apple-icon), sitemap.xml, robots.txt, or manifest.json. Handles dynamic icon generation from Lucide/SVG, app router-based sitemap crawling, interactive robots.txt with private route detection, and PWA manifest setup.
---

# Next.js Housekeeping

Configure global metadata files for Next.js App Router projects using programmatic generation.

## Workflow

Run these in order. Ask the user for missing information at each step.

1. **Gather project info**: app name, short name, description, base URL, theme colors
2. **App Icons** → Generate from Lucide SVG
3. **Sitemap** → Crawl app router structure
4. **Robots.txt** → Ask about private routes
5. **Manifest** → Generate PWA manifest

---

## App Icons

Generate `app/icon.tsx` and `app/apple-icon.tsx` using Lucide icons from ShadCN.

### Pattern

```tsx filename="app/icon.tsx"
import { ImageResponse } from 'next/og'
import { IconName } from '@/components/icons/icon-name'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '6px',
        }}
      >
        <IconName size={20} />
      </div>
    ),
    { ...size }
  )
}
```

For apple-icon (180x180):

```tsx filename="app/apple-icon.tsx"
import { ImageResponse } from 'next/og'
import { IconName } from '@/components/icons/icon-name'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '40px',
        }}
      >
        <IconName size={100} />
      </div>
    ),
    { ...size }
  )
}
```

**Ask the user**: "Which Lucide icon should be used for the app icon?" Browse available icons at lucide.dev/icons.

---

## Sitemap

Generate `app/sitemap.ts` by crawling the app router directory structure.

### Pattern

```ts filename="app/sitemap.ts"
import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
const APP_DIR = path.join(process.cwd(), 'app')

function getAppRoutes(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []
  
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('(')) continue
    if (entry.name === 'api') continue
    
    const fullPath = path.join(dir, entry.name)
    const routePath = basePath ? `${basePath}/${entry.name}` : entry.name
    
    if (entry.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx')) || 
          fs.existsSync(path.join(fullPath, 'page.ts'))) {
        routes.push(routePath)
      }
      routes.push(...getAppRoutes(fullPath, routePath))
    }
  }
  
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes(APP_DIR)
  
  const pages = routes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...pages,
  ]
}
```

**Skip directories**: `_`, `(`, `api`, and any with `[]` for dynamic routes (unless they have static params via `generateStaticParams`).

---

## Robots.txt

Generate `app/robots.ts` with wildcard user agent.

### Ask the user

**"Are there any private routes that should be excluded from crawlers? (y/N)"**

If yes, collect a comma-separated or line-by-line list of paths to disallow.

### Pattern

```ts filename="app/robots.ts"
import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'

export default function robots(): MetadataRoute.Robots {
  const privateRoutes = [
    '/admin/',
    '/dashboard/',
    '/settings/',
  ]

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: privateRoutes,
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
```

---

## Manifest

Generate `app/manifest.ts` for PWA support.

### Pattern

```ts filename="app/manifest.ts"
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'App Name',
    short_name: 'App',
    description: 'App description',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon?<generated>',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon?<generated>',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
```

---

## References

For detailed Next.js API documentation:
- `references/sitemap.md` - Sitemap types and multi-sitemap patterns
- `references/robots.md` - Robots object types and user agent customization  
- `references/manifest.md` - Manifest object types
- `references/app-icons.md` - Icon generation with ImageResponse
