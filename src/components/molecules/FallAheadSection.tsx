import { Link } from "react-router";

const FallAheadSection = () => {
  return (
    <section className="bg-white flex flex-wrap p-[50px]">
      {/* MEN */}
      <Link to="/men-wear" className="md:w-1/2 w-full">
        <div
          className="
    group
    relative m-5 h-[300px]
    border-[20px] border-white/50
    bg-[length:110%_100%]
    bg-no-repeat
    bg-origin-border
    bg-[position:-30px_0]
    transition-[background-position] duration-[2000ms]
    hover:bg-[position:0_0]
  "
          style={{ backgroundImage: `url(/assets/banners/home-page.jpg)` }}
        >
          <h1 className="absolute top-[50px] right-[40px] text-white lg:text-4xl md:text-2xl text-xl md:tracking-[10px] tracking-[8px] lg:tracking-[15px]">
            <span className="text-red-500">F</span>all Ahead
          </h1>

          <div
            className="
              pt-[118px] ps-[280px] pe-[10px] pb-[100px]
              text-[22px] tracking-[10px]
              text-white
              border-[5px] border-white
              opacity-0
              translate-x-[-15px]
              transition-all duration-[2000ms]
              group-hover:opacity-100
              group-hover:translate-x-0
              hidden
              lg:flex
            "
          >
            New Arrivals
          </div>
        </div>
      </Link>

      {/* WOMEN */}
      <Link to="/women-wear" className="md:w-1/2 w-full">
        <div
          className="
    group
    relative m-5 h-[300px]
    border-[20px] border-white/50
    bg-[length:110%_100%]
    bg-no-repeat
    bg-origin-border
    bg-[position:-40px_0]
    transition-[background-position] duration-[2000ms]
    hover:bg-[position:0_0]
  "
          style={{ backgroundImage: `url(/assets/posters/image2.jpg)` }}
        >
          <h1 className="absolute top-[50px] right-[40px] text-white lg:text-4xl md:text-2xl text-xl md:tracking-[10px] tracking-[8px] lg:tracking-[15px]">
            <span className="text-red-500">S</span>pring Ahead
          </h1>

          <div
            className="
              pt-[118px] ps-[280px] pe-[10px] pb-[100px]
              text-[22px] tracking-[10px]
              text-white
              border-[5px] border-white
              opacity-0
              translate-x-[-15px]
              transition-all duration-[2000ms]
              group-hover:opacity-100
              group-hover:translate-x-0
              lg:flex
              hidden
            "
          >
            New Arrivals
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FallAheadSection;
