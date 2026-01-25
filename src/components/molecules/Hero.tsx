import homeImage from "../../assets/banners/home-page.jpg";
import Button from "../atoms/Button";

const Hero = () => {
  console.log("homeImage:", homeImage);

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(D:/extra_coding/11-reactjs-ts-ecom/ecom-website/src/assets/banners/home-page.jpg)`,
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6">
          <span className="text-white">SUMMER </span>
          <span className="text-teal-400">COLLECTION</span>
        </h1>

        {/* Subheading */}
        <p className="text-yellow-400 text-xl md:text-2xl font-semibold mb-8 tracking-wide">
          New Arrivals On Sale
        </p>

        {/* Shop Now Button */}
          <Button name="Shop Now"/>
      </div>
    </section>
  );
};

export default Hero;
