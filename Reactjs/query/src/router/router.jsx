import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ProductDetail from "../products";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
