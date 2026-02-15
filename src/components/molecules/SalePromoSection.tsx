import Stats from "../atoms/Stats";

const SalePromoSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px] sm:min-h-[400px] lg:min-h-96">
      <div
        className="bg-cover bg-center min-h-64 sm:min-h-80 lg:min-h-full bg-[length:110%_100%] bg-no-repeat"
        style={{ backgroundImage: `url(/assets/posters/sale-promo.jpg)` }}
      />

      {/* Right Side - Content */}
      <div className="bg-teal-400 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
        <div className="bg-white p-6 sm:p-8 lg:p-12 mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 md:mb-6">
            Save up to <span className="text-red-600">50%</span> in this week
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Upgrade your wardrobe without breaking the bank. From seasonal
            essentials to everyday basics, our biggest sale of the year is
            finally here. Grab the looks you love before they’re gone for good.
          </p>
        </div>

        {/* Stats Section */}
        <Stats />
      </div>
    </section>
  );
};

export default SalePromoSection;
