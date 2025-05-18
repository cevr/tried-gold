import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import type { Route } from './+types';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: '1',
    title: 'The Refining Process',
    excerpt:
      'Understanding how trials shape our faith and character, much like gold is refined by fire.',
    date: 'May 15, 2025',
    slug: 'the-refining-process',
  },
  {
    id: '2',
    title: 'Finding Peace in Difficult Times',
    excerpt:
      'Practical steps to maintain peace and trust in God during seasons of challenge.',
    date: 'May 10, 2025',
    slug: 'finding-peace-in-difficult-times',
  },
  {
    id: '3',
    title: 'The Value of Tested Faith',
    excerpt:
      'Exploring how our faith, when tested, becomes more precious than gold.',
    date: 'May 5, 2025',
    slug: 'the-value-of-tested-faith',
  },
];

export function loader() {
  return {
    blogPosts,
  };
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
  const { blogPosts } = loaderData;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-primary mb-8 text-3xl font-semibold">Blog</h1>

      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 pb-8"
          >
            <div className="space-y-2">
              <div className="text-sm text-gray-500">{post.date}</div>
              <h2 className="text-primary text-2xl font-medium">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
              <div className="pt-4">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary inline-flex items-center hover:underline"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
