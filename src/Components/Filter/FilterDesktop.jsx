import React, { useEffect, useState } from "react";
import dropdown from "../../assets/icons/dropdown.svg";
import CheckBox from "../../base/CheckBox/CheckBox";

function FilterMobile() {
  const [showSize, setShowSize] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSale, setShowSale] = useState(false);
  const [sortBy, setSortBy] = useState(false);
  const [price, setPrice] = useState(50);

  return (
    <div className="w-[90%] h-12 rounded-xl flex justify-between items-center border border-[#b1b1b1] px-8 font-inter text-sm">
      <div className="h-full w-fit flex">
        <div className="relative h-full flex flex-col justify-between items-center select-none">
          <div
            className="h-full w-fit flex justify-between items-center cursor-pointer"
            typeof="button"
            onClick={() => setShowSize(!showSize)}
          >
            <p className="font-inter text-base">Size</p>
            <img src={dropdown} alt="dropdown" className="w-5 h-5" />
          </div>
          <div
            className={`${
              showSize
                ? "opacity-100 transform transition-opacity duration-300"
                : "opacity-0 pointer-events-none"
            } absolute top-[110%] h-fit w-32 grid grid-cols-2 gap-2 items-center justify-center bg-white border rounded-lg border-[#b1b1b1] p-2 z-50`}
          >
            <span className="col-span-2 text-center font-inter font-semibold">
              Shorts & Tops
            </span>
            <CheckBox size="XS" />
            <CheckBox size="SM" />
            <CheckBox size="MD" />
            <CheckBox size="LG" />
            <CheckBox size="XL" />
            <CheckBox size="2XL" />
            <CheckBox size="3XL" />
            <CheckBox size="4XL" />
            <span className="col-span-2 text-center font-inter font-semibold">
              Shoes $ Cleats
            </span>
            <CheckBox size="35" />
            <CheckBox size="36" />
            <CheckBox size="37" />
            <CheckBox size="38" />
            <CheckBox size="39" />
            <CheckBox size="40" />
            <CheckBox size="41" />
            <CheckBox size="42" />
            <CheckBox size="43" />
            <CheckBox size="44" />
          </div>
          {showSize && (
            <div
              className="fixed top-0 left-0 inset-0 z-40"
              onClick={() => setShowSize(false)}
            ></div>
          )}
        </div>

        <div className="relative h-full flex flex-col justify-between items-center mx-5 select-none">
          <div
            className="h-full w-fit flex justify-between items-center cursor-pointer"
            typeof="button"
            onClick={() => setShowPrice(!showPrice)}
          >
            <p className="font-inter text-base">Price</p>
            <img src={dropdown} alt="dropdown" className="w-5 h-5" />
          </div>
          <div
            className={`${
              showPrice
                ? "opacity-100 transform transition-opacity duration-300"
                : "opacity-0 pointer-events-none"
            } absolute top-[110%] h-fit w-fit flex items-center justify-between bg-white border rounded-lg border-[#b1b1b1] p-2 z-50`}
          >
            <label>0$</label>
            <input
              type="range"
              defaultValue={50}
              onChange={(e) => setPrice(e.target.value)}
              className="mx-3 accent-blue-700"
            />
            <label>{price}$</label>
          </div>
          {showPrice && (
            <div
              className="fixed top-0 left-0 inset-0 z-40"
              onClick={() => setShowPrice(false)}
            ></div>
          )}
        </div>

        <div className="relative h-full flex flex-col justify-between items-center select-none">
          <div
            className="h-full w-fit flex justify-between items-center cursor-pointer"
            typeof="button"
            onClick={() => setShowColor(!showColor)}
          >
            <p className="font-inter text-base">Color</p>
            <img src={dropdown} alt="dropdown" className="w-5 h-5" />
          </div>
          <div
            className={`${
              showColor
                ? "opacity-100 transform transition-opacity duration-300"
                : "opacity-0 pointer-events-none"
            } absolute top-[110%] h-fit w-36 grid gap-2 items-center justify-center bg-white border rounded-lg border-[#b1b1b1] p-2 z-50`}
          >
            <CheckBox size="White" />
            <CheckBox size="Black" />
            <CheckBox size="Red" />
            <CheckBox size="Blue" />
            <CheckBox size="Green" />
            <CheckBox size="Yellow" />
            <CheckBox size="Yellow & Black" />
            <CheckBox size="Red & Black" />
            <CheckBox size="Blue & Black" />
            <CheckBox size="Pink" />
            <CheckBox size="Pink & Black" />
            <CheckBox size="Yellow & Blue" />
            <CheckBox size="Gray" />
          </div>
          {showColor && (
            <div
              className="fixed top-0 left-0 inset-0 z-40"
              onClick={() => setShowColor(false)}
            ></div>
          )}
        </div>

        <div className="relative h-full flex flex-col justify-between items-center select-none mx-5">
          <div
            className="h-full w-fit flex justify-between items-center cursor-pointer"
            typeof="button"
            onClick={() => setShowSale(!showSale)}
          >
            <p className="font-inter text-base">Sale</p>
            <img src={dropdown} alt="dropdown" className="w-5 h-5" />
          </div>
          <div
            className={`${
              showSale
                ? "opacity-100 transform transition-opacity duration-300"
                : "opacity-0 pointer-events-none"
            } absolute top-[110%] h-fit w-32 grid gap-2 items-center justify-center bg-white border rounded-lg border-[#b1b1b1] p-2 z-50`}
          >
            <CheckBox size="20% Sale" />
            <CheckBox size="50% Sale" />
          </div>
          {showSale && (
            <div
              className="fixed top-0 left-0 inset-0 z-40"
              onClick={() => setShowSale(false)}
            ></div>
          )}
        </div>

        <div className="relative h-full flex flex-col justify-between items-center select-none">
          <div
            className="h-full w-fit flex justify-between items-center cursor-pointer"
            typeof="button"
            onClick={() => setSortBy(!sortBy)}
          >
            <p className="font-inter text-base">Sort By</p>
            <img src={dropdown} alt="dropdown" className="w-5 h-5" />
          </div>
          <div
            className={`${
              sortBy
                ? "opacity-100 transform transition-opacity duration-300"
                : "opacity-0 pointer-events-none"
            } absolute top-[110%] h-fit w-32 grid gap-2 items-center justify-center bg-white border rounded-lg border-[#b1b1b1] p-2 z-50`}
          >
            <CheckBox size="Low-High" />
            <CheckBox size="High-Low" />
            <CheckBox size="A-Z" />
            <CheckBox size="Z-A" />
          </div>
          {sortBy && (
            <div
              className="fixed top-0 left-0 inset-0 z-40"
              onClick={() => setSortBy(false)}
            ></div>
          )}
        </div>
      </div>

      <button className="font-inter text-base">Clear Filters</button>
    </div>
  );
}

export default FilterMobile;
