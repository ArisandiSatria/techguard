import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <button>Back</button>
          </Link>
          <img src={product?.images[0]} alt="product image" />
          <div>
            <h3>{product?.name}</h3>
            <p>{product?.category && product?.category}</p>
            <p>{product?.description && product?.description}</p>
            <h4>Rp {product?.price.toLocaleString("en-US")}</h4>

            <div>
              <p>Feature:</p>
              <ul>
                {product?.specification &&
                  product?.specification.map((spec) => <li>{spec}</li>)}
              </ul>
            </div>
            <p>{product?.note && product?.note}</p>
          </div>
        </>
      )}
    </div>
  );
}
