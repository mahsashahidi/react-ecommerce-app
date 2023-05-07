import React from "react";
import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineHeart } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const product = location.state;
  let [selectedImg, setSelectedImg] = useState(product.item.img1);
  let [quant, setQuant] = useState(0);

  const dispatch = useDispatch();
  const handleClick = () => {
    // add color and size with fake api data
    dispatch(
      addProduct({
        id: product.item.id,
        title: product.item.title,
        desc: product.item.desc,
        img: product.item.img1,
        price: product.item.price,
        quant,
      })
    );
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row py-24 px-5 gap-12">
        <div className="left flex flex-row basis-1/2">
          <div className="imgContainer flex flex-col basis-1/">
            <img
              src={product.item.img1}
              alt=""
              onClick={(e) => setSelectedImg(product.item.img1)}
              className="w-full h-36 object-cover cursor-pointer mb-2.5"
            />
            <img
              src={product.item.img2}
              alt=""
              onClick={(e) => setSelectedImg(product.item.img2)}
              className="w-full h-36 object-cover cursor-pointer mb-2.5"
            />
          </div>
          <div className="mainImage basis-4/5">
            <img
              src={selectedImg}
              alt=""
              className="w-full max-h-[800px] object-cover ml-2.5"
            />
          </div>
        </div>
        <div className="right basis-1/2 flex flex-col gap-6 text-left">
          <h1 className="font-extrabold text-2xl">{product.item.title}</h1>
          <span className="text-3xl text-orange-400 font-medium">
            ${product.item.price}
          </span>
          <p className="text-lg	font-light text-justify">{product.item.desc}</p>
          <div className="colorSize flex flex-row gap-16 lg:gap-32 items-center mb-7">
            <div className="flex flex-row gap-2 items-center">
              <span>Color </span>
              <span className="rounded-full bg-neutral-50 bg-pink w-5 h-5 cursor-pointer hover:border border-slate-300"></span>
              <span className="rounded-full bg-black bg-pink w-5 h-5 cursor-pointer hover:border border-slate-300"></span>
              <span className="rounded-full bg-black bg-pink-400 w-5 h-5 cursor-pointer hover:border border-slate-300"></span>
            </div>
            <div className="flex gap-2">
              <label>Size </label>
              <select id="brush" name="brush" className="border">
                <option value="Children">Children</option>
                <option value="Adult">Adult</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-12 items-center">
            <div className="flex flex-row gap-2.5 items-center">
              <button
                className="bg-orange-200 w-10 h-10 flex items-center justify-center border-0 hover:bg-orange-300 transition duration-500"
                onClick={() => setQuant((prev) => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              {quant}
              <button
                className="bg-orange-200 w-10 h-10 flex items-center justify-center border-0 hover:bg-orange-300 transition duration-500"
                onClick={() => setQuant((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="font-medium h-10 flex flex-row basis-3/6 gap-1.5 justify-center items-center py-2 bg-orange-300 hover:bg-orange-400 transition duration-500 text-white"
              onClick={handleClick}
            >
              <TiShoppingCart size="22px" /> ADD TO CART
            </button>
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-row align-center items-center justify-center gap-2.5 text-orange-300 hover:text-orange-400 transition duration-500 cursor-pointer text-sm">
              {" "}
              <HiOutlineHeart size="20px" /> ADD TO WISHLIST
            </div>
          </div>
          <div className="info flex flex-col gap-2.5 text-gray-600 text-sm mt-7">
            <span>Vendor: Nature Ward</span>
            <span>Product Type: {product.item.title}</span>
            <span>
              Tag: {product.item.title}, {product.item.cat}
            </span>
          </div>
          <hr />
          <div className="details flex flex-col gap-2.5 text-gray-500 text-sm mt-7">
            <span>DESCRIPTION</span>
            <hr className="w-48 text-gray-200" />
            <span>ADDITIONAL INFORMATION</span>
            <hr className="w-48 text-gray-200" />
            <span>FAQ</span>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}