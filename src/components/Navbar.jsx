import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../components/Navbar.scss";
import { category } from "../data";

export default function Navbar() {
  const [toggleCat, setToggleCat] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.products);
  return (
    <div className="Navbar h-[56px] text-lg w-full fixed bg-white z-50 border-b-black border-[1px]">
      <div className="wrapper flex flex-row items-center py-2.5 px-5 justify-between">
        <div className="leftNav flex flex-row justify-start items-center gap-x-3.5 ">
          <div className="item hidden lg:flex flex-row items-center text-gray-600">
            <span className="cursor-pointer">EN</span>/
            <span className="text-gray-400 cursor-pointer">FA</span>
          </div>

          <div className="categorySection hidden md:block">
            <button
              className="relative text-gray-600 bg-white rounded-lg px-4 text-center inline-flex items-center"
              onMouseEnter={() => {
                setToggleCat(!toggleCat);
              }}
            >
              SHOP
              <MdKeyboardArrowDown size="20px" />
            </button>
            {toggleCat && (
              <div
                className="bg-orange-50 absolute top-10 left-[5%] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                onMouseLeave={() => {
                  setToggleCat(!toggleCat);
                }}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      to={`/products/${category[0].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/products/${category[5].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Hygiene / Skincare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/products/${category[2].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Makeup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/products/${category[3].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/products/${category[1].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Tote Bags
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/products/${category[4].title}`}
                      className="block px-4 py-2 hover:bg-orange-200"
                    >
                      Gardening
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="centerLogo absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-medium tracking-wide">
          <Link to="/" className="font-yeseva">
            Nature Ward
          </Link>
        </div>
        <div className="rightNav flex flex-row items-center gap-x-3.5">
          <div className="icons hidden lg:flex flex-row items-center gap-x-3.5 rounded-3xl text-gray-600">
            <span className="cursor-pointer">
              <Link to="/Login">LOGIN</Link>
            </span>
            <span className="cursor-pointer">
              <Link to="/Register">SIGN UP</Link>
            </span>
          </div>
          <div
            className="cartIcon absolute left-[80%] md:left-[90%] lg:hidden text-gray-600 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {/* absolute transform left-4 bottom-3 */}
            <TiShoppingCart size="26px" />
            <div className="absolute bottom-3 left-4">
              <span className="bg-orange-400 px-[5px] w-[50px] h-3.5 text-xs rounded-full">
                {quantity.length}
              </span>
            </div>
          </div>
          <div
            className="cartIcon hidden lg:block relative text-gray-600 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {/* absolute transform left-4 bottom-3 */}
            <TiShoppingCart size="26px" />
            <div className="absolute bottom-3 left-4">
              <span className="bg-orange-400 px-[5px] w-[50px] h-3.5 text-xs rounded-full">
                {quantity.length}
              </span>
            </div>
          </div>
        </div>
        <div className="hamburger flex lg:hidden">
          <span className="" onClick={() => setToggleMenu(true)}>
            <GiHamburgerMenu />
          </span>

          {toggleMenu && (
            <div className="overlay flex-col z-20 fixed top-0 left-0 w-full h-screen bg-orange-300 transition ease-in duration-900">
              <span
                className="absolute top-4 right-5 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              >
                <IoCloseSharp color={"white"} size="24px" />
              </span>
              <ul className="w-full h-full flex flex-col gap-5 items-center justify-center text-white">
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/1">Home</Link>
                </li>
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/2">Hygiene / Skincare</Link>
                </li>
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/3">Makeup</Link>
                </li>
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/4">Fashion</Link>
                </li>
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/5">Tote Bags</Link>
                </li>
                <li className="hover:bg-white/25 p-2 rounded-lg">
                  <Link to="/products/6">Gardening</Link>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-x-5 mt-2 rounded-3xl">
                    <span className="cursor-pointer bg-white/25 p-2 rounded-lg">
                      <Link to="/Login">LOGIN</Link>
                    </span>
                    <span className="cursor-pointer bg-white/25 p-2 rounded-lg">
                      <Link to="/Register">SIGN UP</Link>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        {open && <Cart />}
      </div>
    </div>
  );
}
