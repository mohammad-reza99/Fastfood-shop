import { useState } from "react";
import React from "react";
import Navbar from "./assets/components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
