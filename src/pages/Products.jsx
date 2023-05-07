import React from "react";
import List from "../components/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Products() {
  const catId = parseInt(useParams().id);
  let [maxPrice, setMaxprice] = useState(1000);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row px-1 md:px-12 py-7 gap-2.5">
        <div className="left md:basis-2/6 lg:basis-1/6 text-left md:sticky	top-24 h-full">
          <div>
            <h3 className="mb-4 font-semibold">Filter by Category</h3>
            <ul className="flex flex-wrap w-full gap-1 ">
              <li>
                <input
                  type="checkbox"
                  id="home"
                  value=""
                  className="hidden peer"
                  required=""
                />
                <label
                  for="home"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">Home</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="hygiene"
                  value=""
                  className="hidden peer"
                />
                <label
                  for="hygiene"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">Hygiene</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="makeup"
                  value=""
                  className="hidden peer"
                />
                <label
                  for="makeup"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">Makeup</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="fashion"
                  value=""
                  className="hidden peer"
                />
                <label
                  for="fashion"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">Fashion</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="bags"
                  value=""
                  className="hidden peer"
                />
                <label
                  for="bags"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">Bags</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="gardening"
                  value=""
                  className="hidden peer"
                />
                <label
                  for="gardening"
                  className="inline-flex w-full px-1 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-orange-50 peer-checked:bg-orange-200"
                >
                  <div className="block">
                    <div className="w-full text-sm font-semibold">
                      Gardening
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>

          <div className="price mb-7">
            <h2 className="my-4 font-semibold">Filter by price</h2>
            <div className="flex items-center gap-1">
              <span>$0</span>
              <input
                type="range"
                className="accent-orange-300"
                min={0}
                max={1000}
                onChange={(e) => setMaxprice(e.target.value)}
              />

              <span>${maxPrice}</span>
            </div>
          </div>
          <label for="price" className="font-semibold">
            Sort by Price
          </label>
          <div className="border-2 rounded w-fit mt-4">
            <select name="price" id="price">
              <option value="low">Lowest first</option>
              <option value="high">Highest first</option>
            </select>
          </div>
        </div>
        <div className="right md:basis-4/6 lg:basis-5/6">
          <img
            src="/images/home-header.jpg"
            alt=""
            className="w-full hidden md:block md:h-72 object-cover mb-12"
          />
          <List catId={catId} />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
