// import React from "react";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <h1>Ledger</h1>
//     </div>
//   );
// }

// export default Navbar;


// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <div className="space-x-10">
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link to="/send" className="hover:underline text-lg">
            Send
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar