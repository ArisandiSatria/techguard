import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button>Checkout</button>
      <button onClick={() => setCartItems([])}>Clear Cart</button>
      <button
        onClick={() => addItemToCart({ id: 1, name: "Item 1", price: 10 })}
      >
        Add Item
      </button>
    </div>
  );
};

export default ShoppingCart;
