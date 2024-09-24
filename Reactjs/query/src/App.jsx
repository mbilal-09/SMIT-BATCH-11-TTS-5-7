import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fetchTodo = () =>
  new Promise((resolve, reject) => {
    const todos = [
      "Nashta",
      "Sona",
      "Lunch",
      "Youtube",
      "Code thora sa",
      "Dinner",
      "Chae ka Hotel",
      "Youtube",
      "Sona",
    ];
    setTimeout(() => {
      resolve(todos);
    }, 1000);
  });

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};
function App() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isProductError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoadingProducts ? <h1>loading...</h1> : null}
      {products?.map((obj, ind) => (
        <h4 key={ind}>{obj.title}</h4>
      ))}
    </div>
  );
}

export default App;
