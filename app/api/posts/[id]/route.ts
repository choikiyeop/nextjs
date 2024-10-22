import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  // Dynamic Route Segments
  const id = (await params).id;

  // Redirects
  if (id > 100) redirect("/posts");
}
