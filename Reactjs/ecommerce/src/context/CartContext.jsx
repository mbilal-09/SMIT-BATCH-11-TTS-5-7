import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) {
      setCartItems([...JSON.parse(items)]);
    }
    setIsLoaded(false);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addToCart(item) {
    const arr = [...cartItems];
    const itemInd = arr.findIndex((data) => data.id == item.id);
    if (itemInd == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemInd].quantity++;
    }
    setCartItems([...arr]);
  }

  function updateToCart(id, type) {
    const arr = [...cartItems];
    const itemInd = arr.findIndex((data) => data.id == id);
    if (type == "plus") {
      arr[itemInd].quantity++;
    } else {
      arr[itemInd].quantity--;
    }

    setCartItems([...arr]);
  }

  function removeCart(id) {
    const arr = [...cartItems];
    const itemInd = arr.findIndex((data) => data.id == id);
    arr.splice(itemInd, 1);
    setCartItems([...arr]);
  }

  function clearCart(id) {
    setCartItems([]);
  }

  function isItemAdded(id) {
    const arr = [...cartItems];
    const itemInd = arr.findIndex((data) => data.id == id);
    if (itemInd == -1) {
      return null;
    } else {
      return arr[itemInd];
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        updateToCart,
        isItemAdded,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
