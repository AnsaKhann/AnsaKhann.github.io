import type { APIRoute } from 'astro';
import { generateLlmsText } from '../content/seo';

export const GET: APIRoute = async () => {
  const content = generateLlmsText();
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
