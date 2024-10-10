import { notFound } from "next/navigation";

export default async function Quote() {
  let res = await fetch("https://dummyjson.com/quotes/random", {
    cache: "no-cache",
  });
  res = await res.json();

  if (!res.quote) {
    notFound();
  }

  return <h1 className="text-5xl text-center p-20">{res.quote}</h1>;
}
