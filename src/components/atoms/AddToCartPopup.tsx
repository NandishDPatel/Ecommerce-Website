import type { Product } from "@/types";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface addToCartPopupProps {
  product: Product;
  selectedSize: string;
}

const AddToCartPopup = ({ product, selectedSize }: addToCartPopupProps) => {
  return (
    <div className="fixed top-8 right-8 z-[60] animate-fade-in">
      <div className="bg-black text-white p-4 px-6 shadow-2xl flex items-center gap-3">
        <FontAwesomeIcon
          className="text-lg text-teal-500"
          icon={faCartShopping}
        />
        <div>
          <p className="font-semibold">Added to Cart !</p>
          <p className="text-sm text-teal-50">
            {product.name}
            <span className="text-sm">
              {selectedSize && ` - Size: ${selectedSize}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPopup;
