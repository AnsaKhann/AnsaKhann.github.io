# Ask Appliance Repairs Ltd

Responsive Astro website for appliance repairs across London and Surrey.

## Development

```sh
pnpm install
pnpm dev
```

The local preview is available at http://localhost:4321.

## Validation and build

```sh
pnpm check
pnpm build
pnpm preview
```

Deploy the contents of `dist/` using the GitHub Pages workflow. The homepage, blog, privacy policy and terms pages allow search indexing; the 404 page remains excluded.

## Content

- `src/content/site.ts`: business details, contact information and listed service districts.
- `src/content/home.ts`: homepage copy and trust highlights.
- `src/content/services.ts`: appliance services and pricing.
- `src/content/reviews.ts`: linked public review profiles, dated Google rating snapshot and selected five-star excerpts.
- `src/content/pages.ts`: navigation.
- `src/content/seo.ts`: metadata and business structured data.
- `src/content/blog.ts`: blog page copy; articles are in `src/content/blog/`.

## Blog

Articles live in `src/content/blog/` as Markdown files, one file per post. The file name becomes the URL (`/blog/<file-name>`) unless the front matter sets `slug`.

```md
---
title: 'Article title shown on the page'
seoTitle: 'Optional shorter title for search results'
description: 'One or two sentences used for the summary, meta description and RSS feed.'
pubDate: 2026-10-15
updatedDate: 2026-11-01 # optional
author: Ask Appliance Repairs Ltd
category: Washing Machines
tags: [Washing machine repair, DIY checks]
image: ../../assets/blog/<post-name>/hero.jpg # optional, relative to the Markdown file
imageAlt: Description of the image # required when image is set
draft: false # posts default to drafts and are not published
---
```

Put a post's photos in `src/assets/blog/<post-name>/` and add them in the body with `![Description](../../assets/blog/<post-name>/photo.webp)`. Astro resizes and compresses them at build time. A line in italics straight after a photo is styled as its caption.

Published posts are added automatically to `/blog`, `/rss.xml`, `/sitemap.xml` and `/llms.txt`. The schema in `src/lib/blog-schema.ts` fails the build on missing fields or duplicate slugs. Pushing to `main` deploys the site.

Review excerpts and counts are maintained manually. Check the original profiles before updating them; Google’s overall rating is separate from the selected five-star reviews. The “nearly 5,000 happy customers” milestone was supplied by the business owner.

Booking opens WhatsApp with a prepared enquiry. Customers send the message in WhatsApp and agree an appointment with the engineer. There is no booking backend.

`legacy/` contains the previous static website and is not used by the Astro build.
