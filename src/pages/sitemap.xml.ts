import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib/blog';
import { postURL, siteUrl } from '../lib/blog-posts';

const isoDate = (date: Date) => date.toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const lastmod = '2026-10-14';
  const posts = await getPublishedPosts();
  const blogLastmod = posts[0] ? isoDate(posts[0].data.updatedDate ?? posts[0].data.pubDate) : lastmod;

  const pages = [
    { loc: `${siteUrl}/`, lastmod, changefreq: 'weekly', priority: '1.0' },
    { loc: `${siteUrl}/blog`, lastmod: blogLastmod, changefreq: 'weekly', priority: '0.7' },
    ...posts.map((post) => ({
      loc: `${siteUrl}${postURL(post)}`,
      lastmod: isoDate(post.data.updatedDate ?? post.data.pubDate),
      changefreq: 'monthly',
      priority: '0.6'
    })),
    { loc: `${siteUrl}/privacy`, lastmod, changefreq: 'monthly', priority: '0.3' },
    { loc: `${siteUrl}/terms`, lastmod, changefreq: 'monthly', priority: '0.3' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
