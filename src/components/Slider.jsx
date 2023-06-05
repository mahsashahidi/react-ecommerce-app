import React, { useState } from "react";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

export default function Slider() {
  let [currentSlide, setSlide] = useState(0);
  const { data, loading, error } = useFetch(`/categories`);

  const prevSlide = () => {
    setSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };
  const nextSlide = () => {
    setSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="Slider hidden md:block h-[calc(40vh_-_54px)] lg:h-[calc(100vh_-_54px)] mt-[56px] w-screen items-center relative overflow-hidden">
      <div
        className="slides flex flex-row w-full duration-1000 ease-in"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={sliderItems[0].img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[37%] left-[10%] lg:left-[15%] w-full">
          <h2 className="w-full text-white font-bold rounded-xl text-4xl lg:text-5xl py-5 z-index-3 ">
            Skin Care and Hygiene
          </h2>
          <h3 className="pb-5 w-full text-white font-bold text-lg lg:text-xl z-index-3">
            Have a glowing body with cruelty-free organic Hygiene and skin care
            products
          </h3>
          <Link to={`/products/${data[5]?.attributes?.title}`}>
            <button className="py-5 w-44 p-5 bg-black text-white rounded-xl">
              Browse Collection
            </button>
          </Link>
        </div>
        <img
          src={sliderItems[1].img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[37%] left-[calc(10%+100vw)] lg:left-[calc(15%+100vw)] w-full">
          <h2 className="text-white font-bold rounded-xl text-4xl lg:text-5xl py-5 z-index-3">
            Home and Kitchen
          </h2>
          <h3 className="pb-5 text-white font-bold text-lg lg:text-xl z-index-3">
            Enjoy a zero waste life and cook hearty dishes with sustainable
            kitchen utensils
          </h3>
          <Link to={`/products/${data[0]?.attributes?.title}`}>
            <button className="py-5 w-44 p-5 bg-black text-white rounded-xl">
              Browse Collection
            </button>
          </Link>
        </div>
        <img
          src={sliderItems[2].img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[37%] left-[calc(10%+200vw)] lg:left-[calc(15%+200vw)] w-full">
          <h2 className="text-white font-bold rounded-xl text-4xl lg:text-5xl py-5 z-index-3">
            Gardening
          </h2>
          <h3 className="pb-5 text-white font-bold text-lg lg:text-xl z-index-3">
            Create your ever green garden
          </h3>
          <Link to={`/products/${data[4]?.attributes?.title}`}>
            <button className="py-5 w-44 p-5 bg-black text-white rounded-xl">
              Browse Collection
            </button>
          </Link>
        </div>
      </div>
      <div className="icons">
        <div
          className="icon cursor-pointer bg-white w-fit h-fit p-2 rounded-full bg-opacity-0 hover:bg-opacity-20 absolute top-1/2 transform -translate-y-1/2 left-[3%] flex justify-center items-center"
          onClick={prevSlide}
        >
          <TfiAngleLeft size="42" color={"white"} />
        </div>
        <div
          className="icon cursor-pointer bg-white w-fit h-fit p-2 rounded-full bg-opacity-0 hover:bg-opacity-20 flex absolute top-1/2 transform -translate-y-1/2 right-[4%] justify-center items-center"
          onClick={nextSlide}
        >
          <TfiAngleRight size="42px" color={"white"} />
        </div>
      </div>
    </div>
  );
}
