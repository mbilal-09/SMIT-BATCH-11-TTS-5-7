import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ onClick, text }) {

  const {theme}  = useContext(ThemeContext)
  return (
    <button
      className={`btn mx-3 px-4
      ${theme == 'light' ? 'bg-purple-400 text-white' : "bg-zinc-700 text-purple-500"}
      bg-purple-400 p-2 text-white rounded font-medium`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
