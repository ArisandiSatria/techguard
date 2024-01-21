import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // useEffect(() => {
  //   const fetchProductDetail = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`/api/product/${id}`);
  //       const data = await res.json();
  //       if (data.success == false) {
  //         setError(data.message);
  //         setLoading(false);
  //       }
  //       setProduct(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(data.message);
  //       console.log(error);
  //     }
  //   };

  //   fetchProductDetail();
  // }, [id]);

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
              <button
                style={{
                  textDecoration: "none",
                  marginBottom: "1rem",
                }}
              >
                Back
              </button>
              <img src={product?.images[0]} alt="product image" />
              <p className="note">
                Note: {product?.note && product?.note}this is a note
              </p>
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
                    product?.specifications.map((spec) => <li>{spec}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
