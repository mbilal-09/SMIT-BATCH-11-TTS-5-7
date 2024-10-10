import PostCard from "@/components/PostCard";

export default async function Home() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });
  posts = await posts.json();

  // console.log("posts=>", posts);
  return (
    <div className="m-2">
      {posts.map((data) => (
        <PostCard data={data} />
      ))}
    </div>
  );
}
