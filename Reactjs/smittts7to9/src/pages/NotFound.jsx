import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="text-center text-5xl">Not Found</h1>
      <div className="flex justify-center my-4 items-center">
        <Link to={"/"} className="flex self-center text-center text-2xl">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
