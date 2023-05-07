import React from "react";
import { Link } from "react-router-dom";
import { category } from "../data";
export default function Categories() {
  return (
    <div className="Categories grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 m-8 gap-2 h-[580px] relative mt-20">
      <div className="cat1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 relative">
        <img
          src={category[0].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[0].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[0].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
      <div className="cat2 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-2 relative">
        <img
          src={category[1].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[1].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[1].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
      <div className="cat3 md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1 relative">
        <img
          src={category[2].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[2].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[2].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
      <div className="cat4 md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1 relative">
        <img
          src={category[3].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[3].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[3].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
      <div className="cat5 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 relative">
        <img
          src={category[4].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[4].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[4].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
      <div className="cat6 md:col-start-3 md:col-span-2 md:row-start-2 md:row-span-1 relative">
        <img
          src={category[5].img}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white uppercase font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] mb-1.5">
            {category[5].title}
          </h2>
          <button className="rounded w-fit h-fit bg-white hover:bg-orange-200 transition ease-in duration-300 border-0 uppercase text-xs p-2.5">
            <Link to={`/products/${category[5].title}`}>SHOP NOW</Link>
          </button>
        </span>
      </div>
    </div>
  );
}
