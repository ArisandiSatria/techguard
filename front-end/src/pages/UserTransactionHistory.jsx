import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function UserTransactionHistory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactionDetail, setTransactionDetail] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactionDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/order/get-order/${id}`);
        const data = await res.json();
        if (data.success == false) {
          setError(data.message);
          setLoading(false);
          return;
        }
        setTransactionDetail(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(data.message);
      }
    };

    fetchTransactionDetail();
  }, [id]);

  return (
    <div className="admin-order-detail-page">
      <h2>Detail Transaction</h2>
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
            {transactionDetail
              ? transactionDetail?.items?.map((item, index) => (
                  <div key={item.name + index} className="order-item-card">
                    <img src={item.images} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              : ""}
          </div>
          <div className="admin-order-detail-summary">
            <h3>Transaction Summary: </h3>
            <p>
              Order Date:{" "}
              {transactionDetail?.createdAt
                ? new Date(transactionDetail.createdAt)
                    .toISOString()
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("-")
                : "Invalid Date"}
            </p>
            <p>Order ID: {transactionDetail._id}</p>
            <p>
              Total Price: Rp{" "}
              {transactionDetail.totalPrice?.toLocaleString("en-US")}
            </p>
            <p>
              Current Status:{" "}
              <span
                className={`detail-order-status ${transactionDetail.status}`}
              >
                {transactionDetail.status}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
