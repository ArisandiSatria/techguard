import React, { useState } from "react";
import { cart } from "../state/selector/cart";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../state/atom/cartState";
import { FaRegTrashAlt } from "react-icons/fa";
import { userIsLoggedIn } from "../state/selector/loggedInUser.js";

const ShoppingCart = () => {
  const currentCart = useRecoilValue(cart);
  const userData = useRecoilValue(userIsLoggedIn);
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subTotalPrice =
    (currentCart &&
      currentCart.length > 0 &&
      currentCart
        .map((cartItem) => parseFloat(cartItem.price) || 0)
        .reduce((acc, itemPrice) => acc + itemPrice, 0)) ||
    0;

  const tax = (5 / 100) * subTotalPrice;

  const totalPrice = subTotalPrice + tax;

  const handleOrder = async () => {
    setLoading(true);
    const newOrderData = {
      userRef: userData._id,
      items: currentCart,
      totalPrice: totalPrice,
    };

    const res = await fetch("/api/order/add-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrderData),
    });
    const data = await res.json();
    if (data.success == false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    alert("Checkout Complete");
    setCartItems(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-page-section">
        <div className="cart-item-section">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "600" }}>
              Total item: {currentCart?.length}{" "}
              {currentCart?.length > 1 ? "items" : "item"}
            </p>
            <p
              onClick={() => setCartItems([])}
              style={{
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              <FaRegTrashAlt color="red" />
              Empty Cart
            </p>
          </div>
          {currentCart?.map((item, index) => (
            <div key={item.name + index} className="cart-item">
              <img src={item.images} alt={item?.name} />
              <p>{item.name}</p>
              <p>Rp {item.price.toLocaleString("en-US")}</p>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h3>Order Summary</h3>
          <div>
            <p>
              SUBTOTAL{" "}
              <span style={{ float: "right", fontWeight: "600" }}>
                Rp {subTotalPrice.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              TAX{" "}
              <span style={{ float: "right", fontWeight: "600" }}>
                Rp {tax.toLocaleString("en-US")}
              </span>
            </p>
            <p>
              TOTAL{" "}
              <span style={{ float: "right", fontWeight: "600" }}>
                Rp {totalPrice.toLocaleString("en-US")}
              </span>
            </p>
          </div>
          <p disabled={loading} onClick={handleOrder} className="button">
            {loading ? "Making Order..." : "CHECKOUT"}
          </p>
          {error && (
            <p style={{ color: "red", fontStyle: "italic", fontSize: "small" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
