import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import SectionHeading from '@/components/SectionHeading';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-16">
      <section>
        <h1 className="font-display text-4xl font-semibold mb-3">Blog</h1>
        <p className="max-w-measure text-lg text-ink/70 dark:text-white/70">
          Notes on building things.
        </p>
      </section>

      <section>
        <SectionHeading>posts</SectionHeading>
        <div className="space-y-5">
          {posts.length === 0 && (
            <p className="font-mono text-xs text-ink/40 dark:text-white/40">no posts yet</p>
          )}
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="block group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className="font-display text-xl font-semibold group-hover:text-accent dark:group-hover:text-accent-bright transition-colors">
                  {post.title}
                </h2>
                <span className="font-mono text-xs text-ink/40 dark:text-white/40 shrink-0">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
