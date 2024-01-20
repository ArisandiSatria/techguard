import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { category, id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      const res = await fetch(
        `https://coding-studio-fp.vercel.app/${category}/${id}`
      );
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
      }
      setProduct(data);
      setLoading(false);
    };

    fetchProductDetail();
  }, [category, id]);

  return (
    <div>
      <img src={product.images[0]} alt="product image" />
      <div>
        <h3>{product.name}</h3>
        <p>{product.category && product.category}</p>
        <p>{product.description && product.description}</p>
        <h4>{product.price}</h4>

        <div>
          <p>Feature:</p>
          <ul>
            {product.specification &&
              product.specification.map((spec) => <li>{spec}</li>)}
          </ul>
        </div>
        <p>{product.note && product.note}</p>
      </div>
    </div>
  );
}
