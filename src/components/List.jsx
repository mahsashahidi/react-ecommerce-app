import React from "react";
import Card from "./Card.jsx";

import { dataList } from "../data.js";

export default function List({ catName, selectedCats, sorting, maxprice }) {
  return (
    <div className="flex px-[24%] md:px-0  md:flex-wrap flex-col md:flex-row gap-5 md:justify-between">
      {dataList
        .filter(
          (obj) =>
            (obj.cat === catName && obj.price < maxprice) ||
            (selectedCats.includes(obj.cat) && obj.price < maxprice)
        )
        .map((item) => (
          <Card item={item} key={item.id} />
        ))}
    </div>
  );
}
