// by default next js ke saare pages server side hote hen
// server ko client side mein convert krne ke lye top pe "use client" lagaden
// server side page ka console terminal pe show hoga
// server side pe koi bhe react hook use nahn kr sakte.

import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function Home() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();

  // console.log("posts=>", posts);
  return (
    <div className="m-2">
      {posts.map((data) =><PostCard data={data} />)}
    </div>
  );
}
