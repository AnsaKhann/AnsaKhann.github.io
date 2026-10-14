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

Deploy the contents of `dist/` using the GitHub Pages workflow. The homepage, privacy policy and terms pages allow search indexing; the 404 page remains excluded.

## Content

- `src/content/site.ts`: business details, contact information and listed service districts.
- `src/content/home.ts`: homepage copy and trust highlights.
- `src/content/services.ts`: appliance services and pricing.
- `src/content/reviews.ts`: linked public review profiles, dated Google rating snapshot and selected five-star excerpts.
- `src/content/pages.ts`: navigation.
- `src/content/seo.ts`: metadata and business structured data.

Review excerpts and counts are maintained manually. Check the original profiles before updating them; Google’s overall rating is separate from the selected five-star reviews. The “nearly 5,000 happy customers” milestone was supplied by the business owner.

Booking opens WhatsApp with a prepared enquiry. Customers send the message in WhatsApp and agree an appointment with the engineer. There is no booking backend.

`legacy/` contains the previous static website and is not used by the Astro build.
