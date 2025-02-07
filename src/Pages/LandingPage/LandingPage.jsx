import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import FilterMobile from "../../Components/Filter/FilterMobile";
import FilterDesktop from "../../Components/Filter/FilterDesktop";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import HeaderMobile from "../../Components/Header/HeaderMobile";
import HeaderDesktop from "../../Components/Header/HeaderDesktop";

function LandingPage() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      {width < 768 ? <HeaderMobile /> : <HeaderDesktop />}
      <Hero />
      {width < 768 ? <FilterMobile /> : <FilterDesktop />}
      <Product />
      <Footer />
    </div>
  );
}

export default LandingPage;
