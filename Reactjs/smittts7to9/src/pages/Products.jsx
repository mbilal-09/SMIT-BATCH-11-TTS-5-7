import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };
  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(products);
  return (
    <div className="container mx-auto">
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-full mx-auto my-2"
      />
      {filtered.map((data) => (
        <Link to={`/products/${data.title.split(" ").join("-")}/id/${data.id}`}>
          <Heading id={data.id} title={data.title} key={data.id} />
        </Link>
      ))}
    </div>
  );
}

export default Products;
