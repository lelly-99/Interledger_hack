import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DashBoard from "./components/DashBoard";
import Summary from "./components/Summary";

import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <Navbar />
      <DashBoard />
      <Summary />
    </div>
  );
}

export default App;
