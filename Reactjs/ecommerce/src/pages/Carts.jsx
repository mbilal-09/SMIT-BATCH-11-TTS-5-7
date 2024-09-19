import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";

function Carts() {
  const { cartItems, removeCart, updateToCart } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (value, item) => value + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.quantity * item.price,
    0
  );

  return (
    <div className="container mx-auto">
      <div className="flex gap-4 my-4">
        <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
        </div>
        <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
        </div>
        <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
          Proceed to Checkout
        </div>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex border my-3 p-3">
          <Image src={item.thumbnail} height={100} width={100} />
          <div className="pl-3">
            <h1>{item.title}</h1>
            <h1>${item.price}</h1>

            <div className="flex gap-3 my-3">
              <Button onClick={() => updateToCart(item.id, "plus")}>
                Plus
              </Button>
              <h1>{item.quantity}</h1>
              <Button
                onClick={() => {
                  if (item.quantity <= 1) {
                    removeCart(item.id);
                  } else {
                    updateToCart(item.id, "minus");
                  }
                }}
              >
                Minus
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
