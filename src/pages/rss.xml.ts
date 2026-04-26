import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  const til = await getCollection('til');
  const blog = await getCollection('blog');

  const allPosts = [...til, ...blog]
    .filter((post) => !('draft' in post.data && post.data.draft))
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Eli Gooch',
    description: 'TIL, blog posts, and more',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description || '',
      link: post.collection === 'til' ? `/til/${post.id}/` : `/blog/${post.id}/`,
    })),
  });
}
