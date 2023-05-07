import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
