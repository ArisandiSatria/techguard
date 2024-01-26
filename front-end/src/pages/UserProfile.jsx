import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link, useSearchParams } from "react-router-dom";
import { userIsLoggedIn } from "../state/selector/loggedInUser";
import { userState } from "../state/atom/userState";
import Cookies from "js-cookie";
import { RotatingLines } from "react-loader-spinner";

const UserProfile = () => {
  const userData = useRecoilValue(userIsLoggedIn);
  const [user, setUser] = useRecoilState(userState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userOrder, setUserOrder] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchUserOrder = async () => {
      setLoading(true);
      const res = await fetch(`/api/order/get-orders?userId=${userData._id}`);
      const data = await res.json();
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setUserOrder(data);
      setSearchParams({ userId: userData._id });
      setLoading(false);
    };

    fetchUserOrder();
  }, [userData._id, setSearchParams]);

  console.log(userOrder);

  const handleLogOut = async () => {
    try {
      const res = await fetch(
        "https://coding-studio-fp.vercel.app/api/auth/logout"
      );
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        return;
      }
      Cookies.remove("access_token");
      setUser(null);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="profile">
      <img
        src={userData.avatar}
        alt={userData.username}
        className="profile-picture"
      />
      <div className="profile-info">
        <h1 className="profile-name">{userData.username}</h1>
        <p className="profile-email">{userData.email}</p>
        <p className="logout-button" onClick={handleLogOut}>
          Log Out
        </p>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "small",
              fontStyle: "italic",
            }}
          >
            {error}
          </p>
        )}
      </div>
      <div className="profile-transactions">
        <h2 className="profile-transaction-title">Transaction History</h2>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Order Date</th>
                <th>Order ID</th>
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
                  {userOrder?.map((order, index) => (
                    <tr key={order._id + index}>
                      <td>
                        {new Date(order.createdAt)
                          .toISOString()
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {order._id}
                      </td>
                      <td>Rp {order.totalPrice.toLocaleString("en-US")}</td>
                      <td>
                        <span className={`order-status`}>{order.status}</span>
                      </td>
                      <td className="order-detail-button">
                        <Link
                          to={`/order/${order._id}`}
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          Detail
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
