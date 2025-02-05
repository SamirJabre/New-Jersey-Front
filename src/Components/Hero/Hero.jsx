import React, { useEffect, useState } from "react";
import one from "../../Assets/1.jpg";
import two from "../../Assets/2.jpg";
import three from "../../Assets/3.png";

function hero() {
  const [current, setCurrent] = useState(one);
  const slideshow = [one, two, three];
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i++;
      if (i === slideshow.length) {
        i = 0;
      }
      setCurrent(slideshow[i]);
    }, 3000);
  }, []);

  return (
    <div className="w-full h-1/3 md:h-1/2 flex justify-evenly items-center">
      <div className="w-full h-full md:w-1/3 flex flex-col justify-center items-center">
        <div className="w-fit text-2xl md:w-fit h-fit text-center font-anton 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl">
          <h1>Your One-Stop Shop for Premium</h1>
          <h1>Football Jerseys and Boots</h1>
        </div>
        <p className="font-inter m-5 font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm">
          Get Started
        </p>
        <div className="flex justify-between items-center w-2/3 h-10 lg:h-11 xl:h-12">
          <button className="bg-black w-2/5 h-full 2xl:text-base xl:text-sm md:text-xs font-inter font-semibold text-white rounded-xl">
            LOG IN
          </button>
          <button className="bg-white w-2/5 h-full 2xl:text-base xl:text-sm md:text-xs font-inter font-semibold text-black border-2 border-black rounded-xl">
            SIGN UP
          </button>
        </div>
      </div>
      <div className="hidden w-1/3 h-full md:flex flex-col justify-between items-center">
        <div className="w-full h-[95%]">
          <img src={current} alt="SlideShow Image" className="w-full h-full rounded-2xl object-cover"/>
        </div>

        <div className="flex justify-evenly items-center w-1/2 h-[5%]">
          <div
            className={`w-[10px] h-[10px] rounded-full cursor-pointer ${current === one ? "bg-black" : "bg-gray-500"}`}
            onClick={() => setCurrent(one)}
          ></div>
          <div
            className={`w-[10px] h-[10px] rounded-full cursor-pointer ${current === two ? "bg-black" : "bg-gray-500"}`}
            onClick={() => setCurrent(two)}
          ></div>
          <div
            className={`w-[10px] h-[10px] rounded-full cursor-pointer ${current === three ? "bg-black" : "bg-gray-500"}`}
            onClick={() => setCurrent(three)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default hero;
