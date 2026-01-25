// import menBanner from '../../assets/banners/mens-page.jpg'
import Button from "../atoms/Button";

const WomenHero = () => {

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(D:/extra_coding/11-reactjs-ts-ecom/ecom-website/src/assets/banners/womens-page.jpg)`,
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-10">
          <span className="text-white">Women's </span>
          <span className="text-teal-400">Wear</span>
        </h1>

        {/* Shop Now Button */}
          <Button name="Shop Now"/>
      </div>
    </section>
  );
};

export default WomenHero;
