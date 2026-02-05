import { Routes, Route } from "react-router-dom";
import About from "../components/pages/About";
import HomePage from "../components/pages/HomePage";
import Contact from "@/components/pages/Contact";
import MenWearPage from "@/components/pages/MenWearPage";
import WomenWearPage from "@/components/pages/WomenWearPage";
import CheckoutCartPage from "../components/pages/CheckoutCartPage";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men-wear" element={<MenWearPage />} />
        <Route path="/women-wear" element={<WomenWearPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-to-cart" element={<CheckoutCartPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
