import { NextRequest } from "next/server";

// Revalidating Cahced Data(ISR)
export const revalidate = 60;

export async function GET(request: NextRequest) {
  // URL Query Parameters
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const res = await fetch(`https://api.vercel.app/blog?query=${query}`);
  const data = await res.json();

  return Response.json(data);
}

export async function POST(request: Request) {
  // Read Request Body FormData
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const category = formData.get("category");

  return Response.json({ title, content, category });
}
