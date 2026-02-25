---
description: How to extract image URLs from careyrouse.com pages for use in Next.js Image components
---

# Extracting Images from careyrouse.com

The site uses Elementor + TenWeb lazy-loading, which hides actual image URLs behind placeholder SVGs and deferred attributes.

## Step 1: Download Raw HTML
```powershell
Invoke-WebRequest -Uri 'https://careyrouse.com/<page>/' -UseBasicParsing -OutFile "$env:TEMP\<page>_source.html"
```

## Step 2: Search for Lazy-Loaded Image Attributes
The site replaces standard `src` with placeholder SVGs. Check these attributes for the real URLs:
- `data-src` — primary lazy-load source
- `data-lazy-src` — alternative lazy-load source
- `data-two_delay_src` — TenWeb optimization plugin deferred source
- `data-srcset` — responsive image set (lazy-loaded version of `srcset`)
- `data-thumbnail` — used in Elementor gallery widgets (`e-gallery-image` elements)

```powershell
$html = Get-Content "$env:TEMP\<page>_source.html" -Raw
# Gallery images
[regex]::Matches($html, 'data-thumbnail="([^"]+)"') | % { $_.Groups[1].Value }
# Lazy-loaded img tags
[regex]::Matches($html, 'data-src="([^"]+)"') | % { $_.Groups[1].Value }
[regex]::Matches($html, 'data-lazy-src="([^"]+)"') | % { $_.Groups[1].Value }
```

## Step 3: Background Images
Elementor hero/section backgrounds are NOT in server-rendered CSS — they are injected client-side by Elementor JS. The `data-settings` attribute on an element will say `"background_background":"classic"` but won't include the actual URL.

**To find background images:**
1. Use the browser subagent to inspect computed styles on the live page
2. Check `window.getComputedStyle(element).backgroundImage` via JS execution
3. Or ask the user for the correct URL — they can right-click → "Inspect" → copy the `background-image` URL

## Step 4: Convert to Next.js Image Components
Use `<Image>` with `width`/`height` props for gallery images, or `fill` + `object-cover` for backgrounds:

```tsx
// Gallery image
<Image src={url} width={width} height={height} alt={alt} />

// Background image (use fill inside a relative container)
<Image src={url} alt={alt} fill className="object-cover" priority />
```

## Important Notes
- The `next.config.ts` must have both `careyrouse.com` AND `**.careyrouse.com` in `remotePatterns`
- `<noscript>` tags contain real `src` values but are inside noscript blocks — useful for extraction
- Gallery items use `data-width` and `data-height` attributes for dimensions
