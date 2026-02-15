import type { Product } from "@/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] duration-300 ease-out cursor-pointer transition w-full max-w-sm"
    >
      <div className="relative h-44 sm:h-52 md:h-60 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 z-10">
            {product.badge}
          </span>
        )}
        {product.reviews && product.rating && (
          <span className="absolute bottom-1 right-1 text-black bg-teal-500 text-xs p-1 z-10">
            <FontAwesomeIcon className="text-xs text-yellow-400" icon={faStar} />{" "}
            <span className="font-bold">{product.rating}</span> ({product.reviews})
          </span>
        )}
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-3 sm:p-4 text-center">
        <p className="text-xs text-gray-400 tracking-wide mb-1 truncate">
          {product.category}
        </p>
        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base line-clamp-2">{product.name}</h3>

        <div className="flex justify-center items-center gap-4">
          {product.originalPrice ? (
            <>
              <span className="text-teal-400 font-bold text-lg">
                ${product.price}
              </span>
              <span className="line-through text-gray-400 text-sm">
                ${product.originalPrice}
              </span>
            </>
          ) : (
            <span className="text-teal-400 font-bold text-lg">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
