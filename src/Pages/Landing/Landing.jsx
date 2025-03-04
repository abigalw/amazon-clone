import React, { useContext, useEffect } from "react";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";

const Landing = () => {
  return (
    <>
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
};

export default Landing;