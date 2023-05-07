import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quant * item.price;
    });
    return total.toFixed(2);
  };
  return (
    <div className="absolute top-[80%] right-3 z-10 p-5 bg-white shadow">
      <h1 className="text-gray-800 mb-7 text-xl">Products in your cart</h1>
      {cart?.map((item) => (
        <div>
          <div className="flex flex-row mb-7 gap-5 items-center" key={item.id}>
            <div className="left flex basis-1/5">
              <img src={item.img1} alt="" className="w-20 h-24 object-cover" />
            </div>

            <div className="flex flex-col ">
              <div className="text-sm font-medium">
                <span>Product:</span>{" "}
                <span className="font-normal">{item.title}</span>
              </div>

              <p className="text-xs mb-2.5 text-gray-500">
                {item.desc?.substring(0, 100)}
              </p>
              <div className="cursor-pointer justify-right">
                <UilTrashAlt
                  color={"red"}
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
              <span className="text-orange-300">
                {item.quant}x{item.price}
              </span>
            </div>
          </div>

          <hr />
        </div>
      ))}

      <div className="bottom">
        <div className="total flex flex-row justify-between font-medium text-lg mb-5">
          <h3>Total</h3>
          <span>${totalPrice()}</span>
        </div>
        <button className="font-medium w-full rounded shadow flex flex-row gap-3 justify-center items-center py-2 bg-orange-300 hover:bg-orange-400 transition duration-400 text-white">
          <Link to="/Login">PROCEED TO CHECKOUT</Link>
        </button>
        <span
          className="text-red-700 cursor-pointer text-xs"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          Reset Cart
        </span>
      </div>
    </div>
  );
}
