import Link from "next/link";
import { redirect } from "next/navigation";

export default function Categories() {
  return (
    <div>
      <h1 className="p-4 text-3xl">Categories</h1>
      <Link href={"/"}>
        <button className="my-2">Go to Home</button>
      </Link>
    </div>
  );
}
