import "./App.css";

function App() {
  const batch = "SMIT BATCH TTS 7-9";
  const isLoggedIn = true;
  const products = [
    {
      name: "",
      img: "",
      key: 213,
    },
    {
      name: "",
      img: "",
      key: 213,
    },
    {
      name: "",
      img: "",
      key: 213,
    },
  ];
  return (
    <>
      <h1 style={{
        color : "red"
      }}>Hello {batch}</h1>
      <button style={{
        backgroundColor : isLoggedIn  ?  "blue" : "orange",
        color : "#fff"
      }}>{isLoggedIn ? "log out" : " login"}</button>
      {/* {students.map((name, index) => (
        <div key={index}>
          <h4>{name}</h4>
        </div>
      ))} */}
    </>
  );
}

export default App;
