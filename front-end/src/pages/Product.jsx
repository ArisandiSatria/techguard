import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIsLoggedIn } from "../state/selector/loggedInUser";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const userData = useRecoilValue(userIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      const res = await fetch(
        "https://coding-studio-fp.vercel.app/api/product/"
      );
      const data = await res.json();
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
      }
      setProducts(data);
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData) {
      navigate("/login");
      return;
    }
  };
  return (
    <div className="product-page">
      <div className="filter">
        <h3>Filter</h3>
        <div>
          <input type="radio" defaultChecked name="filterSelected" id="all" />
          <label htmlFor="all"> All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filterSelected"
            id="fingerprint-attendance"
          />
          <label htmlFor="fingerprint-attendance">
            {" "}
            Fingerprint Attendance
          </label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="face-recognition" />
          <label htmlFor="face-recognition"> Face Recognition</label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="access-door-control" />
          <label htmlFor="access-door-control"> Access Door Control</label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="cctv" />
          <label htmlFor="cctv"> CCTV</label>
        </div>
      </div>

      <div className="product-section-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-section">
            {products.length > 0 ? (
              products.map((product, index) => (
                <Link
                  key={product.name + index}
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="product-card">
                    <img src={product.images[0]} alt={product.name} />
                    <p>{product.name}</p>
                    <div className="product-card-footer">
                      <p>Rp {product.price?.toLocaleString("en-US")}</p>
                      {userData.role == "admin" ? (
                        ""
                      ) : (
                        <p onClick={handleSubmit} className="button">
                          Buy Now
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No Product</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
