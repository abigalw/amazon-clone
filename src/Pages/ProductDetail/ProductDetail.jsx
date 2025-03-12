import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/Productcard";
import Loader from "../../Components/Loader/Loader";
import {baseUrl} from "../../Api/endpoint"
 

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/products/${productId}`)
      .then((res) => {
        console.log("API Response:", res.data); 
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);  
        setIsLoading(false);
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