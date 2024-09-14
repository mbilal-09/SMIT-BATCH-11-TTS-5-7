import { Button } from "antd";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div
      className="h-screen w-screen flex flex-col 
        items-center
        justify-center"
    >
      <Button>Login With Google</Button>
      <Button>Login With Github</Button>
      <Link to={"/auth/signin"}>
        <Button>Login with Email</Button>
      </Link>

      <h1>
        Don't have an account <Link to={"/auth/signup"}>Create Account</Link>
      </h1>
    </div>
  );
}

export default Auth;
