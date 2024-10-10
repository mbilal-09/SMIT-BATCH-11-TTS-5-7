import Link from "next/link";

export default function NotFound() {
  return (
    <div className={"flex items-center flex-col gap-3"}>
      <h1 className={"text-3xl text-center"}>Sorry QUOTE nahn araha</h1>
      <Link href={"/"}>Home Page pe chale jao</Link>
    </div>
  );
}
