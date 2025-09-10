import { useState } from "react";
import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import HeadlineCards from "./assets/components/HeadlineCards";
import Food from "./assets/components/Food";
import Category from "./assets/components/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
}

export default App;
