import { useState } from "react";
import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import HeadlineCards from "./assets/components/HeadlineCards";
import Food from "./assets/components/Food";
import Category from "./assets/components/Category";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Content from "./Pages/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Category />
      </BrowserRouter>

      <Hero />
      <HeadlineCards />
      <Food />
    </>
  );
}

export default App;
