import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {
  return (
    <Link  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow" to={`/product/${info.id}`}>
      <div>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={info.thumbnail}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {info.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {info.title}
          </h2>
          <p className="mt-1">${info.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
