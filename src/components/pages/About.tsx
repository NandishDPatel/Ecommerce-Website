import { storeDataPara3, storeDataPara4} from "@/utils/data/storeData";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <div className="my-12 md:max-w-7xl mx-auto bg-black text-white py-6 px-4 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/assets/posters/about-1.jpg"
              alt="Fashion store interior with mannequins displaying clothing"
              className="w-full h-auto shadow-4xl"
            />
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-8 about-sec relative">
              <h2 className="text-2xl md:text-5xl font-normal mb-2">
                About <span className="text-teal-400">E-shoppy</span>
              </h2>
              <div className="w-full h-px bg-white mt-4 relative">
                <FontAwesomeIcon
                  className="about-cart text-xs absolute text-teal-400"
                  icon={faCartShopping}
                />
              </div>
            </div>

            <div className="space-y-2 md:space-y-6 text-gray-300 leading-relaxed">
              <p className="text-sm text-justify md:text-lg">
                {storeDataPara3}
              </p>

              <p className="text-sm md:text-lg text-justify">
                {storeDataPara4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
