import Link from "next/link";
import { Posts } from "./_components/posts";

interface Post {
  id: number;
  title: string;
}

export default async function PostsPage() {
  const res = await fetch(`https://api.vercel.app/blog`);
  const posts: Post[] = await res.json();

  return (
    <div className="flex">
      <ul className="border w-1/2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="hover:font-bold">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Posts />
    </div>
  );
}
