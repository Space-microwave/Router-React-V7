import React from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Import Link from react-router-dom


const Navbar = () => {

const navigate = useNavigate()
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/product"><li>Products</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/context"><li>Context</li></NavLink>
      </ul>
      <button onClick={() => navigate('/product', {replace:true})}>Get Started</button>
    </div>
  );
};

export default Navbar;
