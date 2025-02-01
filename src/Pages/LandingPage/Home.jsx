import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Filter from "../../Components/Filter/Filter";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";

function Home() {
  return (
    <div className="Home_Container">
      {/* <Login/> */}
      {/* <Header /> */}
      <HeaderMobile />
      {/* <Hero/>
        <Filter/>
        <Product/>
        <Footer/> */}
    </div>
  );
}

export default Home;
