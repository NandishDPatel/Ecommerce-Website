import menBanner from "../../assets/banners/mens-page.jpg";
import ShopNow from "../atoms/Button";

const MenHero = () => {
  console.log("homeImage:", menBanner);

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className=""
        style={{
          backgroundImage: `url("mens-page.jpg")`,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider mb-10">
          <span className="text-white">Men's </span>
          <span className="text-teal-400">Wear</span>
        </h1>

        {/* Shop Now Button */}
        <ShopNow />
      </div>
    </section>
  );
};

export default MenHero;
