import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex w-full h-screen bg-orange-200">
      <div className="flex flex-col items-center justify-center m-auto w-min p-5 bg-white rounded-md shadow">
        <h1>
          <div className="px-2 md:px-5 text-2xl md:text-3xl font-medium tracking-wide">
            <Link to="/" className="font-yeseva">
              Nature Ward
            </Link>
          </div>
        </h1>
        <h2 className="text-lg mt-2 mb-2.5">CREATE AN ACCOUNT</h2>
        <div className="">
          <div className="name flex flex-col sm:flex-row gap-3 mb-2.5">
            <input
              type="text"
              placeholder="name"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
            <input
              type="text"
              placeholder="last name"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
          </div>
          <div className="name flex flex-col sm:flex-row gap-3 mb-2.5">
            <input
              type="text"
              placeholder="username"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
            <input
              type="email"
              placeholder="email"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
          </div>
          <div className="name flex flex-col sm:flex-row gap-3 mb-2.5">
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
            <input
              type="password"
              placeholder="confirm password"
              autoComplete="off"
              className="border px-1 py-0.5"
            />
          </div>
        </div>
        <p className="text-xs mx-2 my-1.5 w-fit">
          By creating an account, I consent to the proceeding of my personal
          data in accordance with the{" "}
          <span className="font-bold">PRIVACY POLICY</span>.
        </p>
        <button className="py-1.5 px-3 rounded shadow m-2 text-white font-medium tranition duration-300 bg-orange-200 hover:bg-orange-300">
          CREATE
        </button>
        <div className="username flex"></div>
        <div className="password flex"></div>
      </div>
    </div>
  );
}
