import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Context from "./pages/Context";
import RootLayout from "./layout/RootLayout";  // Correct the import to match file name

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="context" element={<Context />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
