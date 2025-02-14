import React from "react";
import logo_white from "../../Assets/logo_white.png";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import x from "../../Assets/icons/x.png";
import youtube from "../../Assets/icons/youtube.png";

function Footer() {
  return (
    <footer className="w-full h-fit bg-[#101010] flex flex-col items-center justify-between py-5 sm:flex-row sm:px-5">
      <div className="w-full sm:w-1/3 lg:w-2/5 h-60 flex flex-col justify-between items-center">
        <div className=" w-full h-[40%]">
          <img
            src={logo_white}
            alt="Website Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-white font-inter text-xs sm:text-sm text-center">
          Lebanon, Tripoli, Al-Mina, Next To OMT, 961 3 330 550
        </p>
        <a href="#" className="text-blue-600 text-xs sm:text-sm font-inter">
          Call us at +961 81 165 027
        </a>
        <div className="flex justify-between w-2/3 h-fit items-center">
          <a href="#">
            <img src={facebook} alt="" className="scale-75 sm:scale-100" />
          </a>
          <a href="#">
            <img src={instagram} alt="" className="scale-75 sm:scale-100" />
          </a>
          <a href="#">
            <img src={x} alt="" className="scale-75 sm:scale-100" />
          </a>
          <a href="#">
            <img src={youtube} alt="" className="scale-75 sm:scale-100" />
          </a>
        </div>
      </div>
      <hr
        className="w-full h-1 m-5 sm:hidden "
        style={{ borderColor: "gray" }}
      />

      <div className="h-fit w-full sm:w-1/2 px-5 flex flex-wrap justify-between items-center">
        <div className="w-1/3 sm:w-fit h-20 mb-8">
          <ul className="font-inter text-sm sm:text-base font-light text-gray-300 flex flex-col items-start justify-between h-full">
            <li>Weekly Themes</li>
            <li>Pre-Sale</li>
            <li>Submit A Ticket</li>
          </ul>
        </div>
        <div className="w-1/3 sm:w-fit h-20 mb-8">
          <ul className="font-inter text-sm sm:text-base font-light text-gray-300 flex flex-col items-start justify-between h-full">
            <li>Services</li>
            <li>Find Us</li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-fit h-20  mb-8">
          <ul className="font-inter text-sm sm:text-base font-light text-gray-300 flex flex-col items-start justify-between h-full">
            <li>Support</li>
            <li>Contact Us</li>
            <li>Our Story</li>
          </ul>
        </div>
        <p className="w-full text-center sm:mt-10 text-white font-inter text-sm font-light">
          &copy;2024 Copywrite, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
