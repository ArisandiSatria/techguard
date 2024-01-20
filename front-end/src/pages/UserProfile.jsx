import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userIsLoggedIn } from "../state/selector/loggedInUser";
import { userState } from "../state/atom/userState";
import Cookies from "js-cookie";

const UserProfile = () => {
  const userData = useRecoilValue(userIsLoggedIn);
  const [user, setUser] = useRecoilState(userState);
  const [error, setError] = useState(false);

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
        {/*user's transaction history here */}
      </div>
    </div>
  );
};

export default UserProfile;
