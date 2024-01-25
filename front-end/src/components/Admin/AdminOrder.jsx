import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

export default function AdminOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const res = await fetch("/api/order/get-orders");
      const data = await res.json();
      if ((data.success = false)) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const orderStatus = (status) => {
    if (status == "completed") {
      return "completed";
    } else if (status == "processing") {
      return "processing";
    } else {
      return "cancelled";
    }
  };

  return (
    <div className="admin-order-panel">
      <section>
        <h1>Order List</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
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
                <>
                  {orders?.map((order, index) => (
                    <tr key={order._id + index}>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {order._id}
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {order.userRef}
                      </td>
                      <td>Rp {order.totalPrice.toLocaleString("en-US")}</td>
                      <td
                        className={`order-status ${orderStatus(order.status)}`}
                      >
                        {order.status}
                      </td>
                      <td className="order-detail-button">Detail</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
