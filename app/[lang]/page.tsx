import { getDictionary, Locale } from "./dictionaries";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <button>{dict.products.cart}</button>;
}
