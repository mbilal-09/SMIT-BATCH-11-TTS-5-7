import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { useParams } from "react-router";

function ProductDetails() {
  const { id, title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">{title}</h1>
      {product ? (
        <div className="flex items-center">
          <img src={product.image} />
          <div className="p-5">
            <h1 className="font-bold my-3 text-4xl">{product.title}</h1>
            <h1 className="font-medium my-3 text-2xl">{product.description}</h1>
            <h1 className="font-medium my-3 text-2xl">Price :  <span className="underline">{product.price}</span> </h1>
            <h1 className="font-medium my-3 text-2xl" >Rating : <span className="underline">{product.rating.rate}</span> </h1>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;
