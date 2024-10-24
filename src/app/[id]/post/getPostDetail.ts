import { Post } from '../../types';

export async function getPostById(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60 * 5,
    },
  });
  const posts = await response.json();
  return posts;
}
