import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

import RootLayout from "./layout/RootLayout";  // Correct the import to match file name
import ContextLayout from "./layout/ContextLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="context" element={<ContextLayout />} >
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
