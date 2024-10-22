import { Search } from "@/components/search";

async function getSearchPhotos(query: string) {
  await fetch(`https://api.vercel.app/blog`);
  const photos = [
    { id: 1, name: "photo1", url: "http://" },
    { id: 2, name: "photo2", url: "http://" },
    { id: 3, name: "photo3", url: "http://" },
  ].filter((photo) => photo.name.includes(query));

  return photos;
}

export default async function PhotosPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = await searchParams;
  const photos = await getSearchPhotos(q);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Search />
      <ul className="border">
        {photos.map((photo) => (
          <li key={photo.id}>{photo.name}</li>
        ))}
      </ul>
    </main>
  );
}
