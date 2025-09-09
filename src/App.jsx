import { useState } from "react";
import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
