import React from "react";

function Card() {
  return (
    <div className="w-80 h-fit border border-[#b1b1b1] rounded-lg flex flex-col items-center justify-between mb-5">
      <div className="w-full h-72">
        <img
          src="https://cdn.shopify.com/s/files/1/0615/4456/2874/products/4065415579257_1.jpg?v=1665067107"
          alt="Men Germany 24 Away Jersey, Pink"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full h-32 flex flex-col justify-between items-start p-2">
        <p className="font-inter text-base font-semibold">
          Men Germany 24 Away Jersey Men Germany 24 Away Jersey
        </p>
        <div className="w-full flex justify-between items-end">
          <p className="font-inter text-sm ">
            Price: <span className="font-semibold">$40</span>
          </p>
          <button className="bg-black h-10 w-24 text-center rounded-lg text-sm font-inter text-white hover:border hover:border-black hover:text-black hover:bg-white transition-colors duration-300">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
