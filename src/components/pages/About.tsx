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
              src="src/assets/posters/about-1.jpg"
              alt="Fashion store interior with mannequins displaying clothing"
              className="w-full h-auto shadow-4xl"
            />
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-8 about-sec relative">
              <h2 className="text-2xl md:text-5xl font-normal mb-2">
                About <span className="font-bold">E-shoppy</span>
              </h2>
              <div className="w-full h-px bg-white mt-4 relative">
                <FontAwesomeIcon
                  className="about-cart text-xs absolute text-teal-400"
                  icon={faCartShopping}
                />
              </div>
            </div>

            <div className="space-y-2 md:space-y-6 text-gray-300 leading-relaxed">
              <p className="text-sm md:text-lg">
                Most of the small and medium based companies, don't even dream
                of reaching the global customers since they cannot fathom the
                involved costs in it. Even though, you have a small or home
                based business, you can establish a global reach with our simple
                and user friendly eShoppy Website.
              </p>

              <p className="text-sm md:text-lg">
                As a leading Software Development company, EShoppy is India's
                best eShoppy Software Development Company. We provide end to end
                ecommerce software development & ecommerce online stores
                solutions to global clients. We provide comprehensive packages
                to cater the absolute requirements of clients, who are willing
                to take their business online. It is a highly experienced and
                trusted provider of high performance eShoppy software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
