export async function GET() {
  const data = [
    { id: 1, name: "photo1", url: "https://" },
    { id: 2, name: "photo2", url: "https://" },
    { id: 3, name: "photo3", url: "https://" },
    { id: 4, name: "photo4", url: "https://" },
    { id: 5, name: "photo5", url: "https://" },
    { id: 6, name: "photo6", url: "https://" },
  ];

  return Response.json({ data });
}
