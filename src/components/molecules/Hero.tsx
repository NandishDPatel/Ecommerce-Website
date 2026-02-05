import Button from "../atoms/Button";

const Hero = () => {


  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(src/assets/banners/home-page.jpg)`,
          width: "100%",
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
          <span className="text-white">Summer </span>
          <span className="text-teal-400">Collection</span>
        </h1>

        {/* Subheading */}
        <p className="text-yellow-400 text-xl md:text-2xl  mb-8 tracking-wide">
          New Arrivals On Sale
        </p>

        {/* Shop Now Button */}
          <Button name="Shop Now"/>
      </div>
    </section>
  );
};

export default Hero;
