import React from "react";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} state={{ item }}>
      <div className="Card w-52 flex flex-wrap flex-col gap-2.5 mb-8 border p-1">
        <div className="group image w-full h-64 relative">
          {item?.attributes.isNew && (
            <span className="newly px-1 py-1 w-fit h-fit text-orange-600 bg-white absolute top-1 left-1 text-xs font-medium">
              Newly released
            </span>
          )}

          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img1.data.attributes.url
            }
            alt=""
            className="mainImg w-full h-full object-cover absolute z-10 hover:opacity-0 tranzition duration-500"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImg w-full h-full object-cover absolute z-0"
          />
        </div>
        <h2 className="text-left leading-none">{item?.attributes.title}</h2>
        <div className="prices flex flex-row gap-x-2.5 leading-none">
          {/* {item.oldPrice && (
            <h3 className="line-through	text-slate-600">${item.oldPrice}</h3>
          )} */}

          <h3 className="">${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}
