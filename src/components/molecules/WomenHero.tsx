import Button from "../atoms/Button";

const WomenHero = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/banners/women-banner.jpg)`,
          width: "100%",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider mb-10">
          <span className="text-white">Women's </span>
          <span className="text-teal-400">Wear</span>
        </h1>

        {/* Shop Now Button */}
        <Button name="Shop Now" />
      </div>
    </section>
  );
};

export default WomenHero;
