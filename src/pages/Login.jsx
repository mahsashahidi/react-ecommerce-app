import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex  w-full h-screen bg-orange-200">
      <div className="flex flex-col items-center m-auto w-fit p-5 bg-white rounded-md shadow">
        <h1>
          <div className="px-5 text-3xl font-medium tracking-wide">
            <Link to="/" className="font-yeseva">
              Nature Ward
            </Link>
          </div>
        </h1>
        <h2 className="text-lg mt-2 mb-2.5">SIGN IN</h2>

        <input
          type="text"
          placeholder="username"
          autoComplete="off"
          className="border px-1 py-0.5 mb-2.5"
        />

        <input
          type="password"
          placeholder="password"
          autoComplete="off"
          className="border px-1 py-0.5"
        />
        <div className=" flex items-center my-1.5 gap-7">
          <span className="text-[12px]  my-1.5 underline cursor-pointer">
            Forgot password?
          </span>
          <span className="text-[12px]  text-left underline cursor-pointer">
            Create an account
          </span>
        </div>

        <button className="py-1.5 px-3 rounded shadow m-2 text-white font-medium tranition duration-300 bg-orange-200 hover:bg-orange-300">
          LOGIN
        </button>
        <div className="username flex"></div>
        <div className="password flex"></div>
      </div>
    </div>
  );
}
