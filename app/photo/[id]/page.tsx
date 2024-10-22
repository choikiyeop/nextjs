export async function generateStaticParams() {
  // const photos = await fetch(``).then((res) => res.json());
  const slugs = ["1", "2", "3", "4", "5", "6"];

  return slugs.map((slug) => ({ id: slug }));
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <main>{id}</main>;
}
