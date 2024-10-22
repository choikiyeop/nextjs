export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";

export async function POST(request: Request) {
  // Read Request Body
  const res = await request.json();

  return Response.json({ res });
}
