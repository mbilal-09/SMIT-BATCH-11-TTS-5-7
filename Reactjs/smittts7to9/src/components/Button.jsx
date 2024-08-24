function Button({ onClick, text }) {
  return (
    <button
      className="btn mx-3 px-4 bg-purple-400 p-2 text-white rounded font-medium"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
