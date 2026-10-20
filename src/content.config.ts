import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogFields, validUpdatedDate } from './lib/blog-schema';

const blog = defineCollection({
  // Keep each file as its own entry so duplicate slugs fail the build instead of overwriting a post.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: ({ image }) =>
    blogFields
      .extend({ image: image().optional() })
      .refine(validUpdatedDate, {
        message: 'updatedDate must not precede pubDate',
        path: ['updatedDate']
      })
      .refine((data) => Boolean(data.image) === Boolean(data.imageAlt), {
        message: 'Supply both image and a descriptive imageAlt, or omit both',
        path: ['imageAlt']
      })
});

export const collections = { blog };
