import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => alert(err));
  }
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center "
      >
        <input
          value={email}
          placeholder="Email"
          required
          className="p-2 border my-3 w-1/2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          required
          className="p-2 border my-3 w-1/2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value={"Signup"} />
      </form>
    </div>
  );
}
export default Signup;
