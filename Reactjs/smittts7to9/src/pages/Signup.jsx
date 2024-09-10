import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

  function handleSigninWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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

      <Button text={"SIGN IN WITH GOOGLE"} onClick={handleSigninWithGoogle} />
    </div>
  );
}
export default Signup;
