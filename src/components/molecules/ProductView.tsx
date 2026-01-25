import type { Product } from "@/types";
import { X, Star } from "lucide-react";

interface Props {
  product: Product;
  selectedSize: string;
  onSizeChange: (size: string) => void;
  onClose: () => void;
  onAddToCart: () => void;
}

export const ProductView = ({
  product,
  selectedSize,
  onSizeChange,
  onClose,
  onAddToCart,
}: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white max-w-4xl w-full overflow-y-auto">
        <header className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button className="hover:cursor-pointer hover:text-gray-500" onClick={onClose}>
            <X />
          </button>
        </header>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <img src={product.image} />
          <div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < product.rating ? "fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>

            <p className="mb-4">{product.description}</p>

            <div className="flex gap-2 mb-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeChange(size)}
                  className={`px-3 py-1 border border-black hover:cursor-pointer hover:bg-gray-200  ${
                    size === selectedSize
                      ? "bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={onAddToCart}
              className="w-full bg-cyan-400 py-3 font-bold flex justify-center gap-2 hover:cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
