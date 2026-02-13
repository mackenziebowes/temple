---
name: nextjs-seo-housekeeping
description: "Audit and fix SEO/discoverability for Next.js App Router projects. Use when: (1) User asks to check pages for JSON-LD or OpenGraph, (2) User mentions SEO housekeeping, discoverability, or social preview images, (3) Adding opengraph-image.tsx files, (4) Ensuring every page.tsx/page.mdx has structured data. Scans app/ directory, identifies missing JSON-LD or OpenGraph images, and generates compliant opengraph-image.tsx using theme from globals.css."
---

# Next.js SEO Housekeeping

Audit and fix SEO/discoverability for Next.js App Router projects.

## Workflow

1. **Scan** all `page.tsx`/`page.mdx` files in the app directory
2. **Check** each page for JSON-LD structured data
3. **Check** each route segment for opengraph-image files
4. **Report** gaps and offer to fix them

## Scanning Pages

Run a glob search in the app directory:

```
app/**/page.{tsx,mdx}
```

For each page found, check:
1. Does the page export or render a JSON-LD script tag?
2. Does the route segment have an `opengraph-image.{tsx,ts,js,png,jpg,jpeg,gif}` file?

## JSON-LD Implementation

Every page needs structured data for AI agents and search engines.

**Pattern:**
```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Title',
  description: 'Page description',
}

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  </>
)
```

**Common @type values:**
- `WebPage` - generic pages
- `Article` - blog posts, news
- `Product` - product pages
- `Person` - author/about pages
- `Organization` - company pages

See [references/json-ld.md](references/json-ld.md) for full details.

## OpenGraph Images

Every route segment needs an opengraph image for social sharing.

**File placement:** Create `opengraph-image.tsx` in the same directory as `page.tsx`.

**Pattern:**
```tsx
import { ImageResponse } from 'next/og'

export const alt = 'Page Title'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        fontSize: 64,
        background: 'BACKGROUND_COLOR',
        color: 'FOREGROUND_COLOR',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Page Title
      </div>
    ),
    { ...size }
  )
}
```

### Theme Extraction

Extract theme colors from `globals.css`:
1. Read `app/globals.css` (or nearest globals.css to the page)
2. Parse `:root` CSS variables for colors
3. Use `--background`, `--foreground`, `--primary`, etc. in the image

Common locations: `app/globals.css`, `styles/globals.css`, `src/app/globals.css`

See [references/opengraph-image.md](references/opengraph-image.md) for full API details.

## Report Format

After scanning, output a concise report:

```
SEO Audit: app/

Missing JSON-LD:
  - app/about/page.tsx
  - app/blog/[slug]/page.tsx

Missing OpenGraph:
  - app/about/ (no opengraph-image.*)
  - app/pricing/ (no opengraph-image.*)

✓ 5 pages have both JSON-LD and OpenGraph
✗ 4 pages need fixes
```

## Fixing Issues

1. **For JSON-LD**: Add the script tag to the page's return statement with appropriate `@type`
2. **For OpenGraph**: Create `opengraph-image.tsx` using the asset template, extracting theme from `globals.css`

## Resources

- **references/json-ld.md** - Full JSON-LD implementation guide
- **references/opengraph-image.md** - Full opengraph-image API reference
- **assets/opengraph-image.tsx** - Template for generated images
