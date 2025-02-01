import React from "react";
import Hero from "../../Components/Hero/Hero";
import Filter from "../../Components/Filter/Filter";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../../Components/HeaderDesktop/HeaderDesktop";

function LandingPage() {
  return (
    <div className="w-screen h-fit">
      {/* <Login/> */}
      {/* <Header /> */}
      <HeaderDesktop/>
      {/* <HeaderMobile /> */}
      {/* <Hero/>
        <Filter/>
        <Product/>
        <Footer/> */}
    </div>
  );
}

export default LandingPage;
