import { Link } from "react-router-dom";

const FallAheadSection = () => {
  return (
    <section className="bg-white flex flex-wrap p-4 sm:p-6 md:p-8 lg:p-[50px]">
      <Link to="/men-wear" className="w-full md:w-1/2">
        <div
          className="
            group relative m-2 sm:m-5 h-[260px] sm:h-[300px]
            border-8 sm:border-[14px] lg:border-[20px] border-white/50
            bg-[length:110%_100%] bg-no-repeat bg-origin-border
            bg-[position:-30px_0]
            transition-[background-position] duration-[2000ms]
            hover:bg-[position:0_0]
          "
          style={{ backgroundImage: `url(/assets/banners/home-page.jpg)` }}
        >
          <h1 className="absolute top-6 right-4 sm:top-[50px] sm:right-[40px] text-white text-xl sm:text-2xl md:text-2xl lg:text-4xl tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[15px]">
            <span className="text-red-500">F</span>all Ahead
          </h1>
          <div className="absolute bottom-4 left-4 right-4 pt-[118px] ps-[280px] pe-[10px] pb-[100px] text-[22px] tracking-[10px] text-white opacity-0 translate-x-[-15px] transition-all duration-[2000ms] group-hover:opacity-100 group-hover:translate-x-0 hidden lg:flex">
            New Arrivals
          </div>
        </div>
      </Link>

      <Link to="/women-wear" className="w-full md:w-1/2">
        <div
          className="
            group relative m-2 sm:m-5 h-[260px] sm:h-[300px]
            border-8 sm:border-[14px] lg:border-[20px] border-white/50
            bg-[length:110%_100%] bg-no-repeat bg-origin-border
            bg-[position:-40px_0]
            transition-[background-position] duration-[2000ms]
            hover:bg-[position:0_0]
          "
          style={{ backgroundImage: `url(/assets/posters/image2.jpg)` }}
        >
          <h1 className="absolute top-6 right-4 sm:top-[50px] sm:right-[40px] text-white text-xl sm:text-2xl md:text-2xl lg:text-4xl tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[15px]">
            <span className="text-red-500">S</span>pring Ahead
          </h1>
          <div className="absolute bottom-4 left-4 right-4 pt-[118px] ps-[280px] pe-[10px] pb-[100px] text-[22px] tracking-[10px] text-white opacity-0 translate-x-[-15px] transition-all duration-[2000ms] group-hover:opacity-100 group-hover:translate-x-0 hidden lg:flex">
            New Arrivals
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FallAheadSection;
