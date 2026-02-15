import CustomerPosts from "../molecules/CustomerPosts";
import StoreInfo from "../molecules/StoreInfo";
import OurInformation from "../molecules/OurInformation";
import AboutEshoppy from "../molecules/AboutEshoppy";
import ScrollToTopBtn from "../atoms/ScrollToTopBtn";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Column 1: About E-Shoppy */}
        <AboutEshoppy />

        {/* Column 2: Our Information */}
        <OurInformation />

        {/* Column 3: Store Information */}
        <StoreInfo />

        {/* Column 4: Customer Posts */}
        <CustomerPosts />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopBtn />
    </footer>
  );
};

export default Footer;
