import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Filter from "../../Components/Filter/Filter";
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
    <div className="w-full h-screen flex flex-col items-center justify-start">
      {width < 768 ? <HeaderMobile /> : <HeaderDesktop />}
      <Hero />
      <Filter />
    </div>
  );
}

export default LandingPage;
