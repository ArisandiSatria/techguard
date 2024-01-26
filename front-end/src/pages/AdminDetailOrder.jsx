import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminDetailOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/order/get-order/${id}`);
        const data = await res.json();
        if (data.success == false) {
          setError(data.message);
          setLoading(false);
          return;
        }
        setOrder(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(data.message);
      }
    };

    fetchOrderDetail();
  }, [id]);

  const updateOrder = async (orderStatus) => {
    setLoading(true);
    const res = await fetch(`/api/order/edit-order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: orderStatus }),
    });
    const data = await res.json();
    if (data.success == false) {
      setLoading(false);
      setError(data.message);
      alert("Failed");
      return;
    }
    alert("Success");
    setError(null);
    setLoading(false);
    navigate("/profile");
  };

  return (
    <div className="admin-order-detail-page">
      <h2>Detail Order</h2>
      {error && (
        <p
          style={{
            color: "red",
            fontStyle: "italic",
            fontSize: "small",
          }}
        >
          {error}
        </p>
      )}
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "10%",
          }}
        >
          <RotatingLines
            visible={true}
            height="80"
            width="80"
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        <div className="admin-order-detail-section">
          <div className="admin-order-item-section">
            <h3>Items: </h3>
            {order
              ? order?.items?.map((item, index) => (
                  <div key={item.name + index} className="order-item-card">
                    <img src={item.images} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              : ""}
          </div>
          <div className="admin-order-detail-summary">
            <h3>Order Summary: </h3>
            <p>
              Order Date:{" "}
              {order?.createdAt
                ? new Date(order.createdAt)
                    .toISOString()
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("-")
                : "Invalid Date"}
            </p>
            <p>Order ID: {order._id}</p>
            <p>Customer ID: {order.userRef}</p>
            <p>Total Price: Rp {order.totalPrice?.toLocaleString("en-US")}</p>
            <p>
              Current Status:{" "}
              <span className={`detail-order-status ${order.status}`}>
                {order.status}
              </span>
            </p>
            <div className="button-update-order">
              <p
                onClick={(e) => {
                  e.preventDefault();
                  updateOrder("rejected");
                }}
                className="button"
                style={{ backgroundColor: "red" }}
              >
                Reject Order
              </p>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  updateOrder("approved");
                }}
                className="button"
                style={{ backgroundColor: "rgb(4, 181, 4)" }}
              >
                Approve Order
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
