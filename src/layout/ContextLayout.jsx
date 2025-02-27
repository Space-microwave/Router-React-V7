import React from "react";
import {Outlet } from "react-router-dom"; // Import Outlet
import Context from "../pages/Context";

const ContextLayout = () => {

  return (
    <div>
        <Context />
        <Outlet />
    </div>
  );
};

export default ContextLayout;
