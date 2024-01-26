import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../state/atom/cartState";
import { userIsLoggedIn } from "../state/selector/loggedInUser";

export default function DetailProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  const user = useRecoilValue(userIsLoggedIn);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        if (data.success == false) {
          setError(data.message);
          setLoading(false);
        }
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(data.message);
        console.log(error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const addToCart = () => {
    const isProductInCart = cart?.find((item) => item._id === product._id);

    if (isProductInCart) {
      // setCart((prevCart) => [...prevCart, product]);
      return;
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
          }}
        >
          <RotatingLines
            visible={true}
            height="100"
            width="100"
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <div className="product-detail-page">
            <div>
              <Link to="/products">
                <button
                  style={{
                    textDecoration: "none",
                    marginBottom: "1rem",
                  }}
                >
                  Back
                </button>
              </Link>
              <img src={product?.images[0]} alt="product image" />
              {product?.note && <p className="note">Note: {product?.note}</p>}
            </div>
            <div>
              <h3>{product?.name}</h3>
              <p className="category">
                {product?.category && product?.category}
              </p>
              <p>{product?.description && product?.description}</p>
              <h4 className="price">
                Rp {product?.price.toLocaleString("en-US")}{" "}
                <span className="real-price">
                  Rp {(product?.price + 100000).toLocaleString("en-US")}
                </span>
              </h4>

              <div>
                <p>Feature:</p>
                <ul>
                  {product &&
                    product?.specifications.map((spec, index) => (
                      <li key={spec + index}>{spec}</li>
                    ))}
                </ul>
              </div>

              {user.role == "admin" ? (
                ""
              ) : (
                <p onClick={addToCart} className="button">
                  Buy Now
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
