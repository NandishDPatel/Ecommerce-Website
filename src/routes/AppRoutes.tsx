import {Routes, Route } from "react-router-dom";

import About from "../components/pages/About";
import HomePage from "../components/pages/HomePage";
// import WomensWear from "@/components/pages/WomensWear";
import Contact from "@/components/pages/Contact";
import CheckoutCart from "../layouts/CheckoutCart";
import MenWearPage from "@/components/pages/MenWearPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/men-wear" element={<MensWear/>} /> */}
        <Route path="/men-wear" element={<MenWearPage/>} />
        {/* <Route path="/women-wear" element={<WomensWear />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-to-cart" element={<CheckoutCart />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
