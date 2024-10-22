import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Cookies
  const cookieStore = await cookies();
  const cookieStore2 = request.cookies;
  const token = cookieStore.get("token");
  const token2 = cookieStore2.get("token");
  console.log(token === token2);

  // Headers
  const headersList = await headers();
  const requestHeaders = new Headers(request.headers);
  const referer = headersList.get("referer");
  const referer2 = requestHeaders.get("header");
  console.log(referer === referer2);

  return new Response("Hello World!", {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token?.value}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// Webhooks
export async function POST(request: Request) {
  try {
    const text = await request.text();

    // Process the webhook payload
    console.log(text);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(`Webhook error: ${errorMessage}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
