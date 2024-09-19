import { Button, Image } from "antd";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart, isItemAdded } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  console.log(product);

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <Image
        preview={false}
        src={product?.thumbnail}
        height={400}
        width={400}
      />
      <h1 className="text-5xl font-mono font-bold my-10">{product?.title}</h1>
      <Button onClick={() => addToCart(product)}>
        {isItemAdded(product.id)
          ? `Added (${isItemAdded(product.id).quantity})`
          : "Add to Cart"}
      </Button>
    </div>
  );
}

export default ProductDetail;
