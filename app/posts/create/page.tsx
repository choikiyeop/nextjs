import Form from "next/form";
import { createPost } from "../actions";

export default function PostCreatePage() {
  return (
    <Form action={createPost}>
      <input name="title" />
      <input name="content" />
      <button type="submit">Post 생성</button>
    </Form>
  );
}
