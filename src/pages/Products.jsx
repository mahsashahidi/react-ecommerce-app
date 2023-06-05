import React from "react";
import List from "../components/List";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useFetch from "../customHooks/useFetch";

export default function Products() {
  let [maxPrice, setMaxprice] = useState(70);
  const location = useLocation();
  const catName = location.pathname.split("/")[2];
  // const [activeFilters, setActiveFilters] = useState(new Set().add(catName));
  const [selectedCats, setSelectedCats] = useState([]);
  let [sort, setSort] = useState("desc");
  const { data, loading, error } = useFetch(
    `/products?[filters][categories][title][$eq]=Gardening`
  );

  const handleCats = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats(
      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row px-1 md:px-12 py-7 gap-2.5">
        <div className="left md:basis-2/6 lg:basis-1/6 text-left md:sticky	top-24 h-full">
          <div>
            <h3 className="mb-4 font-semibold">Filter by Category</h3>
            <ul className="flex flex-wrap w-full gap-1 " name="categories">
              <li>
                <input
                  type="checkbox"
                  id="Home"
                  value="Home"
                  className="hidden peer"
                  required=""
                  onChange={handleCats}
                />
                <label
                  for="Home"
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
                  id="Hygiene"
                  value="Hygiene"
                  className="hidden peer"
                  onChange={handleCats}
                />
                <label
                  for="Hygiene"
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
                  id="Makeup"
                  value="Makeup"
                  className="hidden peer"
                  onChange={handleCats}
                />
                <label
                  for="Makeup"
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
                  id="Fashion"
                  value="Fashion"
                  className="hidden peer"
                  onChange={handleCats}
                />
                <label
                  for="Fashion"
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
                  id="Tote-bags"
                  value="Tote-bags"
                  className="hidden peer"
                  onChange={handleCats}
                />
                <label
                  for="Tote-bags"
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
                  id="Gardening"
                  value="Gardening"
                  className="hidden peer"
                  onChange={handleCats}
                />
                <label
                  for="Gardening"
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
                max={70}
                onChange={(e) => setMaxprice(e.target.value)}
              />

              <span>${maxPrice}</span>
            </div>
          </div>
          <label for="price" className="font-semibold">
            Sort by Price
          </label>
          <div className="border-2 rounded w-fit mt-4">
            <select
              name="price"
              id="price"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="asc">Lowest first</option>
              <option value="desc">Highest first</option>
            </select>
          </div>
        </div>
        <div className="right md:basis-4/6 lg:basis-5/6">
          <img
            src="/images/home-header.jpg"
            alt=""
            className="w-full hidden md:block md:h-72 object-cover mb-12"
          />
          <List
            catName={catName}
            selectedCats={selectedCats}
            sorting={sort}
            maxprice={maxPrice}
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
