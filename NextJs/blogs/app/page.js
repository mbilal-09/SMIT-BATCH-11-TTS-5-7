// by default next js ke saare pages server side hote hen
// server ko client side mein convert krne ke lye top pe "use client" lagaden
// server side page ka console terminal pe show hoga
// server side pe koi bhe react hook use nahn kr sakte.

import Link from "next/link";

export default async function Home() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();

  // console.log("posts=>", posts);
  return (
    <div className="m-2">
      {posts.map((data) => (
        <Link key={data.id} href={`/${data.id}`}>
          <div className="p-2 border rounded my-2">
            <h1 className="text-bold text-2xl">Post {data.id}</h1>
            <h1 className="text-bold text-2xl">{data.title}</h1>
            <h1 className="font-normal my-2">{data.body}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
