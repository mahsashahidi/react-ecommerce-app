import React from "react";
import Card from "./Card.jsx";
import { dataList } from "../data.js";
export default function List() {
  return (
    <div className="flex px-[24%] md:px-0  md:flex-wrap flex-col md:flex-row gap-5 md:justify-between">
      {dataList?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
