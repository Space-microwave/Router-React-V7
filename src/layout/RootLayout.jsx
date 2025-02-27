import React from "react";
import Navbar from "../components/Navbar"; // Correct import path
import { Outlet } from "react-router-dom"; // Import Outlet

const RootLayout = () => {
  return (
    <div>
      <Navbar />  {/* Navbar is displayed at the top */}
      <Outlet />  {/* This is where child routes will be rendered */}
    </div>
  );
};

export default RootLayout;
