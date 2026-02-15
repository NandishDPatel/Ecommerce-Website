const TrendingSection = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">
          <span className="text-black">What's</span>{" "}
          <span className="text-teal-400">Trending</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="group relative overflow-hidden cursor-pointer">
          <div
            className="
              relative h-[350px] sm:h-[350px] md:h-[400px] lg:h-[600px]
              border-8 sm:border-[14px] md:border-[20px] border-white/50
              bg-[length:110%_100%] bg-no-repeat bg-origin-border
              bg-[position:-30px_0]
              transition-[background-position] duration-[2000ms]
              group-hover:bg-[position:0_0]
            "
            style={{ backgroundImage: `url('/assets/posters/trending-1.jpg')` }}
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 text-lg sm:text-xl md:text-2xl font-bold rounded-full tracking-[10px] sm:tracking-[15px] md:tracking-[20px]">
              <span className="text-3xl sm:text-4xl md:text-5xl text-red-600">S</span>ale
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-[2000ms] group-hover:opacity-100 flex items-center justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-black tracking-widest bg-white/90 px-4 py-2">
                Women's Collection
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="group relative overflow-hidden cursor-pointer">
            <div
              className="
                relative h-[220px] sm:h-[260px] md:h-[290px]
                border-8 sm:border-[14px] md:border-[20px] border-white/50
                bg-[length:110%_100%] bg-no-repeat bg-origin-border
                bg-[position:-30px_0]
                transition-[background-position] duration-[2000ms]
                group-hover:bg-[position:0_0]
              "
              style={{ backgroundImage: `url('/assets/posters/trending-2.jpg')` }}
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white px-4 py-2 sm:px-5 sm:py-2 text-base sm:text-xl font-bold rounded-full tracking-[10px] sm:tracking-[15px]">
                <span className="text-3xl sm:text-5xl text-red-600">S</span>ale
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-[2000ms] group-hover:opacity-100 flex items-center justify-center">
                <p className="text-lg sm:text-2xl md:text-3xl text-black tracking-widest bg-white/90 px-4 py-2">
                  Footwear Collection
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden cursor-pointer">
            <div
              className="
                relative h-[220px] sm:h-[260px] md:h-[290px]
                border-8 sm:border-[14px] md:border-[20px] border-white/50
                bg-[length:110%_100%] bg-no-repeat bg-origin-border
                bg-[position:-30px_0]
                transition-[background-position] duration-[2000ms]
                group-hover:bg-[position:0_0]
              "
              style={{ backgroundImage: `url('/assets/posters/trending-3.jpg')` }}
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white px-4 py-2 sm:px-5 sm:py-2 text-base sm:text-xl font-bold rounded-full tracking-[10px] sm:tracking-[15px]">
                <span className="text-3xl sm:text-5xl text-red-600">S</span>ale
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-[2000ms] group-hover:opacity-100 flex items-center justify-center">
                <p className="text-lg sm:text-2xl md:text-3xl text-black tracking-widest bg-white/90 px-4 py-2">
                  Premium Leather
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
