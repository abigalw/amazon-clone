import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductDetail/ProductDetail";
import Loader from "../../Components/Loader/Loader";

const baseUrl = "https://fakestoreapi.com"; 
const ProductDetail = () => {
  const { productId } = useParams();


  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Product ID from URL:", productId);
  
    axios.get(`${baseUrl}/products/${Number(productId)}`)
      .then((res) => {
        console.log("API Response:", res.data);  // ✅ See if data is coming in
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductCard
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />
    </>
  );
};

export default ProductDetail;
