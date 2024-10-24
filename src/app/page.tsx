import Link from 'next/link';
import getPosts from './getPosts';

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto">
      <h1 className="font-bold text-2xl">Blog posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="py-1 w-[440px] line-clamp-1">
            <Link className="text-blue-600 hover:underline" href={`/${post.id}/post`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
