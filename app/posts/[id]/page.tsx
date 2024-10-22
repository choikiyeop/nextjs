import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
}

async function getPost(id: number) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`);
  const post: Post = await res.json();
  if (!post) notFound();
  return post;
}

export async function generateStaticParams() {
  const posts = await fetch(`https://api.vercel.app/blog`).then((res) =>
    res.json()
  );

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
  } as Metadata;
}

export default async function PostPage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </main>
  );
}
