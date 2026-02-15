import Services from "../atoms/Services";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <>
      <section
        className="relative w-full min-h-[220px] sm:min-h-[280px] h-[280px] sm:h-[320px] md:h-[350px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/banners/discount-banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 py-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6">
            We Offer Flat <span className="text-teal-400">40%</span> Discount
          </h2>
          <Link to="/women-wear" className="inline-block">
            <Button name="Shop Now" />
          </Link>
        </div>
      </section>
      <Services />
    </>
  );
};

export default DiscountBanner;
