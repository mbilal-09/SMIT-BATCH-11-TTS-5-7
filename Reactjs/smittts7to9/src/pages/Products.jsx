import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Chip from "../components/Chip";
import { ThemeContext } from "../context/ThemeContext";

function Products() {
  const { theme } = useContext(ThemeContext);
  console.log("theme in product page=>", theme);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("Category Changes");
    const url =
      chosenCategory == "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [chosenCategory]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-3xl">Loading...</h1>
      ) : (
        <div className={`${theme == 'light' ? "bg-white" : 'bg-black text-white'}`}>
          <div className=" overflow-x-scroll">
            <Chip isChosen={chosenCategory === "All"} title={"All"} />
            {categories.map((category) => (
              <Chip
                isChosen={chosenCategory === category.slug}
                onClick={() => setChosenCategory(category.slug)}
                key={category.slug}
                title={category.name}
              />
            ))}
          </div>

          <div className="flex flex-wrap">
            {products.map((data) => (
              <ProductCard info={data} key={data.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
