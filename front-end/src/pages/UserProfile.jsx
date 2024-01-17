import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.picture} alt={user.name} className="profile-picture" />
      <div className="profile-info">
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-transactions">
        <h2 className="profile-transaction-title">Transaction History</h2>
        {/*user's transaction history here */}
      </div>
    </div>
  );
};

export default profile;
