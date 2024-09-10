import { useContext, useState } from "react";
import Button from "../components/Button";
import { UserContext } from "../context/UserContext";

function UseState() {
  const { user } = useContext(UserContext);
  console.log("user->", user);
  const [num, setNum] = useState(10);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(["TEST"]);

  let count = 10;

  const addUser = () => {
    setUsers([...users, username]);
    setUsername("");
  };

  console.log("Component Rerender", username);
  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="text-[50px] text-center my-3">
        Hello <span className="underline">{user.email}</span>{" "}
      </h1>
      <div>
        <input
          value={username}
          placeholder="Your Name"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />

        <Button text={"Add"} onClick={addUser} />
        <Button text={"Clear"} onClick={() => setUsers([])} />
      </div>

      {users.map((data, ind) => (
        <h1
          className="text-center font-medium text-2xl my-2 bg-purple-200"
          key={ind}
        >
          {data}
        </h1>
      ))}

      {/* <div>
        <Button text={"+1"} onClick={() => setNum(num + 1)} />
        <Button text={"+2"} onClick={() => setNum(num + 2)} />
        <Button text={"+3"} onClick={() => setNum(num + 3)} />
        <Button text={"+4"} onClick={() => setNum(num + 4)} />
        <Button text={"+5"} onClick={() => setNum(num + 5)} />
      </div> */}
    </div>
  );
}

export default UseState;
