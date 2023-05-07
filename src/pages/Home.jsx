import React from "react";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="Home w-full overflow-x-hidden">
      <Navbar />
      <Slider />
      <Categories />
      <FeaturedProducts type="Featured" />
      <Contact />
      <Footer />
    </div>
  );
}
