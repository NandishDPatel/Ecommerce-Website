import React, { useEffect, useState } from "react";
import type { Product } from "@/types";
import { X } from "lucide-react";
import Button from "@/components/atoms/Button";
import { useCart } from "@/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AddToCartPopup from "../atoms/AddToCartPopup";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductDetailView: React.FC<Props> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [sizeError, setSizeError] = useState<string>("");
  const [colorError, setColorError] = useState<string>("");
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const { addToCart } = useCart();

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleAddToCart = () => {
    setSizeError("");
    setColorError("");

    const hasSizes = product.sizes && product.sizes.length > 0;
    if (hasSizes && !selectedSize) {
      setSizeError("Please select a size");
      return;
    }

    if (!selectedColor) {
      setColorError("Please select a color.");
      return;
    }

    addToCart(product, selectedSize);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div
          className="bg-white shadow-2xl max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative rounded-t-2xl sm:rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - larger touch target on mobile */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-2 bg-red-600 text-white hover:bg-red-500 cursor-pointer shadow-lg transition rounded-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
          </button>

          {/* Modal Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {/* Product Image */}
            <div className="relative">
              {product.badge && (
                <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs px-3 py-1 z-10">
                  {product.badge}
                </span>
              )}
              <div className="flex flex-col gap-2">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-48 sm:h-72 md:h-84 object-contain"
                />
                <div className="flex gap-2 overflow-x-auto">
                  {product.thumbnails.map((imgUrl, id) => (
                    <img
                      key={id}
                      src={imgUrl}
                      alt={`${product.name} thumbnail ${id + 1}`}
                      className="h-20 w-20 object-cover flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity"
                      onClick={() => setActiveImage(imgUrl)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="text-xs text-gray-400 tracking-wide mb-2">
                {product.category}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 mb-5">
                {product.originalPrice ? (
                  <>
                    <span className="text-teal-400 font-bold text-2xl">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-400 text-lg">
                      ${product.originalPrice}
                    </span>
                    <span className="text-orange-500 text-sm font-semibold">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      % OFF
                    </span>
                  </>
                ) : (
                  <span className="text-teal-400 font-bold text-2xl">
                    ${product.price}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description ||
                    "High-quality product with premium materials and excellent craftsmanship. Perfect for everyday wear."}
                </p>
              </div>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Size</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setSizeError("");
                        }}
                        className={`px-4 py-2 border transition ${
                          selectedSize === size
                            ? "bg-black text-white border-teal-400"
                            : "border-gray-300 bg-teal-500 text-white hover:border-teal-400 hover:bg-teal-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="min-h-[1.25rem] text-sm text-red-500">
                    {sizeError && <>{sizeError}</>}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color: any, id: number) => (
                      <button
                        key={id}
                        onClick={() => {
                          setSelectedColor(color.name);
                          setColorError("");
                        }}
                        className={`w-10 h-10 flex-shrink-0 transition ${color.value} ${
                          selectedColor === color.name
                            ? "border-4 border-black"
                            : "border-2 border-gray-300 hover:border-gray-500"
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <div className="min-h-[1.25rem] text-sm text-red-500">
                    {colorError && <>{colorError}</>}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                <p className="text-bold">
                  <FontAwesomeIcon
                    className="text-xs text-yellow-400"
                    icon={faStar}
                  />{" "}
                  <span className="font-bold">{product.rating}</span> (
                  {product.reviews})
                </p>
              </div>

              <div onClick={handleAddToCart}>
                <Button name="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Confirmation Popup */}
      {showConfirmation && (
        <AddToCartPopup product={product} selectedSize={selectedSize} />
      )}
    </>
  );
};

export default ProductDetailView;
