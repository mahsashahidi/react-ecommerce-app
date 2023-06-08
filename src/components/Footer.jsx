import React from "react";
import { Link } from "react-router-dom";
import { category } from "../data";
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import {
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

import "./Footer.scss";
export default function Footer() {
  return (
    <div className="w-full">
      <div className="Footer mx-7 md:mx-16 mt-9 mb-6">
        <div className="topFooter flex flex-row gap-x-5 md:gap-x-11 place-content-start text-left">
          <div className="about hidden md:flex flex-col basis-1/4">
            <h1 className="font-medium mb-1.5">About</h1>
            <span className="text-slate-600 text-sm">
              Nature Ward is a group of earth and life loving people working to
              curate and sell green items and raise awarness for kind-hearted
              people who care.
            </span>
          </div>
          <div className="Categories flex flex-col basis-1/4 ">
            <h1 className="font-medium mb-1.5">Categories</h1>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[0].title}`}>Home</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[5].title}`}>
                Hygiene / Skincare
              </Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[2].title}`}>Makeup</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[3].title}`}>Fashion</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[1].title}`}>Tote Bags</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to={`/products/${category[4].title}`}>Gardening</Link>
            </span>
          </div>
          <div className="links  hidden md:flex flex-col basis-1/4">
            <h1 className="font-medium mb-1.5">Links</h1>
            <span className="text-slate-600 text-sm">
              <Link to="/">FAQ</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to="/">Stores</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to="/">Community</Link>
            </span>
            <span className="text-slate-600 text-sm">
              <Link to="/">Jobs</Link>
            </span>
          </div>

          <div className="contact flex flex-col basis-1/4">
            <h1 className="font-medium mb-1.5">Contact</h1>
            <span className="flex gap-1 text-slate-600 text-sm">
              <HiOutlineLocationMarker color={"#292524"} size={19} />
              369 Divine path, north heaven 1234567
            </span>
            <span className="flex gap-1 text-slate-600 text-sm">
              <HiOutlinePhone color={"#292524"} size={19} /> +98 28 3339535
            </span>
            <span className="flex gap-1 text-slate-600 text-sm">
              <HiOutlineMail color={"#292524"} size={19} /> mail@natureward.com
            </span>
            <span>
              {" "}
              <div className="icons flex flex-row gap-2 mt-2">
                <span className="cursor-pointer hover:scale-105 transition duration-400">
                  <SiInstagram color={"#292524"} size={28} />
                </span>
                <span className="cursor-pointer hover:scale-105 transition duration-400">
                  {" "}
                  <SiFacebook color={"#292524"} size={28} />
                </span>
                <span className="cursor-pointer hover:scale-105 transition duration-400">
                  {" "}
                  <SiTwitter color={"#292524"} size={28} />
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="bottom flex flex-row justify-between align-center items-center mb-1 mt-8">
          <div className="bottomLeft">
            <div className="text-xl md:text-2xl font-medium tracking-wide">
              <Link to="/" className="font-yeseva">
                Nature Ward
              </Link>
              <span className="hidden md:flex text-[12px] md:text-xs font-normal text-slate-600">
                ©Copyright 2023. All Rights Recieved
              </span>
            </div>

            {/* <span className="logo hidden md:flex font-bold  text-rose-700">
              Nature Ward
            </span> */}
          </div>
          <div className="bottom-right">
            <img
              src="/images/payment.png"
              alt=""
              className="h-[22px] md:h-[34px]"
            />
          </div>
        </div>
        <span className="flex md:hidden text-[12px] md:text-xs font-normal text-slate-600 mb-15 md:mb-1">
          ©Copyright 2023. All Rights Recieved
        </span>
      </div>
    </div>
  );
}
