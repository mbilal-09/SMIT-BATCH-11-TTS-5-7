import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  return (
    <div>
      <h1 className="text-5xl text-center my-10">Hello {user.username}</h1>

      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button
          text={"Update"}
          onClick={() =>
            setUser({
              ...user,
              username,
            })
          }
        />
      </div>
    </div>
  );
}

export default Profile;
