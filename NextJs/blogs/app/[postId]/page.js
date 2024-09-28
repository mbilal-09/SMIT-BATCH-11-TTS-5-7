export default async function PostDetail({ params }) {
  let postDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  postDetail = await postDetail.json();

  let comment = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
  );
  comment = await comment.json();
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center my-4">Post Detail</h1>
      <h1 className="font-bold text-center text-5xl my-4">
        {postDetail.title}
      </h1>
      <h1 className="font-normal text-center text-3xl my-4">
        {postDetail.body}
      </h1>

      <h1 className="font-bold text-center my-2">Comments</h1>
      {comment.map((comment) => (
        <div key={comment.id} className="border m-3 p-3">
          <h1 className="font-bold">
            {comment.name} {`(${comment.email})`}
          </h1>
          <h1 className="py-2">{comment.body} </h1>
        </div>
      ))}
    </div>
  );
}
