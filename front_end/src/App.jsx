// import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
// import Summary from "./components/Summary";

function App() {
  return (
    <div className="grid-container">
      <Navbar />
      {/* <DashBoard /> */}
      <Outlet/>
      {/* <Summary /> */}
    </div>
  );
}

export default App;
