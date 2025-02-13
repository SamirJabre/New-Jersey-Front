import React from "react";
import "./Footer.css";
import logo_white from "../../Assets/logo_white.png";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import x from "../../Assets/icons/x.png";
import youtube from "../../Assets/icons/youtube.png";

function Footer() {
  return (
    <footer className="w-full h-fit bg-[#101010] flex flex-col items-center justify-between py-5">
      <div className="w-full h-60 flex flex-col justify-between items-center">
        <div className=" w-full h-[40%]">
          <img src={logo_white} alt="Website Logo" className="w-full h-full object-contain"/>
        </div>
        <p className="text-white font-inter text-xs text-center">Lebanon, Tripoli, Al-Mina, Next To OMT, 961 3 330 550</p>
        <a href="#" className="text-blue-600 text-xs font-inter">Call us at +961 81 165 027</a>
        <div className="flex justify-between w-2/3 h-fit items-center">
          <a href="#"><img src={facebook} alt="" className="scale-75"/></a>
          <a href="#"><img src={instagram} alt="" className="scale-75"/></a>
          <a href="#"><img src={x} alt="" className="scale-75"/></a>
          <a href="#"><img src={youtube} alt="" className="scale-75"/></a>
        </div>
      </div>
      <hr className="w-full h-1 m-5" style={{borderColor:'gray'}}/>


      
    </footer>
  );
}

export default Footer;
