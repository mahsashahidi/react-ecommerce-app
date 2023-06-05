import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import useFetch from "../customHooks/useFetch.jsx";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="FeaturedProducts my-20 mx-10 text-left">
      <div className="top flex flex-col md:flex-row gap-7 md:gap-16 items-center mx-1 md:mx-12 mb-10">
        <h1 className="font-bold text-3xl capitalize">{type} Products</h1>
        <p className=" text-slate-600 text-lg">
          This season's top-selling products
        </p>
      </div>
      <div className="bottom flex flex-row flex-wrap justify-center gap-12">
        {error
          ? "oops"
          : loading
          ? "loading"
          : data
              ?.slice(0, 10)
              .map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}
