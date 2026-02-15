import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[280px] sm:min-h-[320px] h-64 sm:h-80 md:h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/banners/home-page.jpg)`,
          width: "100%",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 md:mb-6">
          <span className="text-white">Summer </span>
          <span className="text-teal-400">Collection</span>
        </h1>
        <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 tracking-wide">
          New Arrivals On Sale
        </p>
        <Link to="/men-wear">
          <Button name="Shop Now" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
