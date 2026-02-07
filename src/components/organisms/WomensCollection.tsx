import { storeDataPara1, storeDataPara2 } from "@/utils/data/storeData";

const WomensCollection = () => {
  return (
    <section className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="/assets/posters/women-collection.jpeg"
            alt="Women's Fashion"
            className="w-full max-w-md object-contain bg-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl mb-6">
            Women's <span className="text-teal-400">Collections</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {storeDataPara1}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {storeDataPara2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WomensCollection;
