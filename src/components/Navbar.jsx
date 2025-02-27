import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/product"><li>Products</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/context"><li>Context</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
