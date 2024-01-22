import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import EditProduct from "./EditProduct";

export default function DetailProduct({ id, edit }) {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

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
          {edit ? (
            <EditProduct id={id} product={product} />
          ) : (
            <div className="product-detail-page">
              <div>
                <img src={product?.images[0]} alt="product image" />
                {product?.note && <p className="note">Note: {product?.note}</p>}
              </div>
              <div>
                <h3>{product?.name}</h3>
                <p className="category">
                  {product?.category && product?.category.replace(/-/g, " ")}
                </p>
                <p>{product?.description && product?.description}</p>
                <h4 className="price">
                  Rp {product?.price.toLocaleString("en-US")}{" "}
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
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
