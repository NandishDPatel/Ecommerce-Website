import discBanner from "../../assets/banners/discount-banner.jpg";
import Services from "../atoms/Services";
import Button from "../atoms/Button";
import { Link } from "react-router";

const DiscountBanner = () => {
  return (
    <>
      <section
        className="relative w-full h-[350px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${discBanner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            We Offer Flat <span className="text-teal-400">40%</span> Discount
          </h2>
          <Link to="/women-wear">
            <Button name="Shop Now" />
          </Link>
        </div>
      </section>
      <Services />
    </>
  );
};

export default DiscountBanner;
