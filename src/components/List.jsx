import React from "react";
import Card from "./Card.jsx";
import useFetch from "../customHooks/useFetch.jsx";

export default function List({ catName, selectedCats, sorting, maxprice }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catName}${selectedCats.map(
      (item) => `&[filters][categories][title]=${item}`
    )}&[filters][price][$lte]=${maxprice}&sort=price:${sorting}`
  );

  return (
    <div className="flex px-[24%] md:px-0  md:flex-wrap flex-col md:flex-row gap-5 md:justify-between">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}
