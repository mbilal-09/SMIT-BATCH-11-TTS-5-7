const { default: Link } = require("next/link");

const PostCard = ({ data }) => {
  return (
    <Link key={data.id} href={`/${data.id}`}>
      <div className="p-2 border rounded my-2">
        <h1 className="text-bold text-2xl">Post {data.id}</h1>
        <h1 className="text-bold text-2xl">{data.title}</h1>
        <h1 className="font-normal my-2">{data.body}</h1>
      </div>
    </Link>
  );
};

export default PostCard;
