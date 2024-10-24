import { Post } from './types';

export default async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 * 5,
    },
  });
  const posts = await response.json();
  return posts;
}
