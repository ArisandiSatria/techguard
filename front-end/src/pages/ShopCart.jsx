import React, { useState } from "react";
import { cart } from "../state/selector/cart";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../state/atom/cartState";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const currentCart = useRecoilValue(cart);

  console.log(currentCart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {currentCart?.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
          </li>
        ))}
      </ul>
      {/* <p>Total Price: ${totalPrice}</p>
      <button>Checkout</button> */}
      {/* <ul>
        {userCart?.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>*/}
      <button onClick={() => setCartItems([])}>Clear Cart</button>
      <button>Add Item</button>
    </div>
  );
};

export default ShoppingCart;
