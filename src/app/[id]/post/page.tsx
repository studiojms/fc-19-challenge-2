import Link from 'next/link';
import { getPostById } from './getPostDetail';

interface PostDetailPageProps {
  params: {
    id: number;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const postDetail = await getPostById(id);

  return (
    <main className="container mx-auto">
      <h1 className="font-bold text-2xl">{postDetail.title}</h1>
      <article className="mb-8 py-2">
        <p>{postDetail.body}</p>
      </article>

      <Link href="/" className="text-blue-600 hover:underline">
        Voltar
      </Link>
    </main>
  );
}
