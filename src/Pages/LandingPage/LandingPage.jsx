import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Filter from "../../Components/Filter/Filter";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../../Components/HeaderDesktop/HeaderDesktop";

function LandingPage() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
  },[width])

  
  return (
    <>
      {width < 768 ? <HeaderMobile /> : <HeaderDesktop />}
    </>
  );
}

export default LandingPage;
