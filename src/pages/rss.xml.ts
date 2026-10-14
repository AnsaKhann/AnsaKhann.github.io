import rss from '@astrojs/rss';
import { blogCopy } from '../content/blog';
import { getPublishedPosts } from '../lib/blog';
import { postURL, siteUrl } from '../lib/blog-posts';

export async function GET() {
  return rss({
    title: blogCopy.feedTitle,
    description: blogCopy.description,
    site: siteUrl,
    trailingSlash: false,
    customData: '<language>en-GB</language>',
    items: (await getPublishedPosts()).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: postURL(post)
    }))
  });
}
