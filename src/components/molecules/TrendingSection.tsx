const TrendingSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl">
          <span className="text-black">What's</span>{" "}
          <span className="text-teal-400">Trending</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Left Card - Women's Fashion */}
        <div className="group relative overflow-hidden cursor-pointer">
          <div
            className="
              relative h-[400px] md:h-[600px]
              border-[20px] border-white/50
              bg-[length:110%_100%]
              bg-no-repeat
              bg-origin-border
              bg-[position:-30px_0]
              transition-[background-position] duration-[2000ms]
              group-hover:bg-[position:0_0]
            "
            style={{
              backgroundImage: `url('/assets/posters/trending-1.jpg')`,
            }}
          >
            {/* Sale Badge */}
            <div className="absolute top-8 right-8 text-white px-6 py-3 text-2xl font-bold rounded-full tracking-[20px]">
              <span className="text-5xl text-red-600">S</span>ale
            </div>

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/20
                opacity-0
                transition-opacity duration-[2000ms]
                group-hover:opacity-100
                flex items-center justify-center
              "
            >
              <div className="text-white text-center">
                <p className="text-3xl text-black tracking-widest">
                  Women's Collection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Two Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Right Card - Shoes */}
          <div className="group relative overflow-hidden cursor-pointer">
            <div
              className="
                relative h-[290px]
                border-[20px] border-white/50
                bg-[length:110%_100%]
                bg-no-repeat
                bg-origin-border
                bg-[position:-30px_0]
                transition-[background-position] duration-[2000ms]
                group-hover:bg-[position:0_0]
              "
              style={{
                backgroundImage: `url('/assets/posters/trending-2.jpg')`,
              }}
            >
              {/* Sale Badge */}
              <div className="absolute top-6 right-6 text-white px-5 py-2 text-xl font-bold rounded-full tracking-[15px]">
                <span className="text-5xl text-red-600">S</span>ale
              </div>

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  opacity-0
                  transition-opacity duration-[2000ms]
                  group-hover:opacity-100
                  flex items-center justify-center
                "
              >
                <div className="text-white text-center">
                  <p className="text-3xl text-black tracking-widest">
                    Footwear Collection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Card - Leather Shoes */}
          <div className="group relative overflow-hidden cursor-pointer">
            <div
              className="
                relative h-[290px]
                border-[20px] border-white/50
                bg-[length:110%_100%]
                bg-no-repeat
                bg-origin-border
                bg-[position:-30px_0]
                transition-[background-position] duration-[2000ms]
                group-hover:bg-[position:0_0]
              "
              style={{
                backgroundImage: `url('/assets/posters/trending-3.jpg')`,
              }}
            >
              {/* Sale Badge */}
              <div className="absolute top-6 right-6 text-white px-5 py-2 text-xl font-bold rounded-full tracking-[15px]">
                <span className="text-5xl text-red-600">S</span>ale
              </div>

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  opacity-0
                  transition-opacity duration-[2000ms]
                  group-hover:opacity-100
                  flex items-center justify-center
                "
              >
                <div className="text-white text-center">
                  <p className="text-3xl text-black tracking-widest">
                    Premium Leather
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
