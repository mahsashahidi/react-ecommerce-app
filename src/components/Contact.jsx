import React from "react";
export default function () {
  return (
    <div className="Contact mt-12 bg-orange-200 flex flex-col justify-center items-center p-9 gap-4">
      <span className="text-4xl font-bold">Newsletter</span>
      <span className="px-0 md:px-16">
        Get timely updates from your favorite products.
      </span>
      <div className="form">
        <input
          type="text"
          placeholder="Enter your email"
          className="outline-0 rounded-l-md p-1.5 w-52 md:w-72"
        />
        <button className="bg-gray-900 text-white rounded-r-md font-xs p-1.5">
          Join Us
        </button>
      </div>
    </div>
  );
}
