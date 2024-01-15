import React from "react";

export default function AdminOrder() {
  return (
    <div className="admin-order-panel">
      <section>
        <h1>Order List</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
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
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>123</td>
                <td>001</td>
                <td>Rp 100000000</td>
                <td>processing</td>
                <td className="order-detail-button">Detail</td>
              </tr>
              <tr>
                <td>321</td>
                <td>002</td>
                <td>Rp 200000</td>
                <td>processing</td>
                <td className="order-detail-button">Detail</td>
              </tr>
              <tr>
                <td>456</td>
                <td>003</td>
                <td>Rp 3500000</td>
                <td>processing</td>
                <td className="order-detail-button">Detail</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
