import React, { useState, useEffect, createContext } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartTotal,
  getCartItemsCount,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  itemCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  useEffect(() => {
    setItemCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        toggleHidden,
        addItem,
        clearItemFromCart,
        removeItem,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
