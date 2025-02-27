import React from "react";
import Navbar from "../components/Navbar"; // Correct import path
import { Outlet, useLocation } from "react-router-dom"; // Import Outlet

const RootLayout = () => {
  const location = useLocation();
  console.log("Current Route:", location.pathname); // ✅ This will show the current route in the console

  return (
    <div>
      <Navbar />  {/* Navbar is displayed at the top */}
      <Outlet />  {/* This is where child routes will be rendered */}
    </div>
  );
};

export default RootLayout;
