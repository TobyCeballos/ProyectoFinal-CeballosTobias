import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home  from "../pages/Home";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NavBar from "../components/NavBar";

function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
