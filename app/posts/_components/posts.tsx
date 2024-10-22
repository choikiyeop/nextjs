"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/posts`);
      const data: Post[] = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts)
    return (
      <span className="flex justify-center w-1/2 items-center">
        Fetch Loading...
      </span>
    );

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="hover:font-bold">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
