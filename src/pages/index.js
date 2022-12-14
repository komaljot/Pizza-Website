import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </>
  );
};
export default Home;
