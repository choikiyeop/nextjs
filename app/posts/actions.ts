"use server";

import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  const data = await fetch(``, {
    method: "POST",
    headers: {},
    body: JSON.stringify({ title, content }),
  });
  const id = data.json();

  redirect(`/posts/${id}`);
}
