import type { APIRoute } from 'astro';
import { generateLlmsText } from '../content/seo';
import { getPublishedPosts } from '../lib/blog';
import { postURL, siteUrl } from '../lib/blog-posts';

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const articles = posts.length
    ? `\n## Articles\n${posts
        .map((post) => `- [${post.data.title}](${siteUrl}${postURL(post)}): ${post.data.description}`)
        .join('\n')}\n`
    : '';
  const content = generateLlmsText() + articles;
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
