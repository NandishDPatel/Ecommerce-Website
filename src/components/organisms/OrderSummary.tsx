import React from "react";
import { Banknote } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/atoms/Button";

type OrderSummaryProps = {
  promoCode: string;
  onPromoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPlaceOrder: () => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  promoCode,
  onPromoChange,
  onPlaceOrder,
}) => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = 0;
  const taxRate = 0.08;
  const estimatedTax = subtotal * taxRate;
  const total = subtotal + shipping + estimatedTax;

  return (
    <div className="bg-white p-4 sm:p-6 shadow-sm lg:sticky lg:top-4">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 md:mb-6">
        Order Summary
      </h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4"
            >
              <img
                src={item.product.mainImage}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {item.product.name}
                </h3>
                <p className="text-xs text-gray-500">
                  Size: {item.size} | {item.product.category}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="font-bold text-gray-900">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          {/* Price Breakdown */}
          <div className="border-t pt-4 space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="text-teal-400 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Estimated Tax</span>
              <span className="font-medium">
                ${estimatedTax.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="border-t pt-4 mb-6 flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Promo Code */}
          <div className="mb-6 flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={onPromoChange}
              placeholder="Promo code"
              className="flex-1 px-4 py-2 bg-gray-50 border text-sm focus:ring-2 focus:ring-teal-400"
            />
            <button className="px-6 py-2 bg-teal-400 text-white font-semibold hover:bg-teal-500">
              Apply
            </button>
          </div>

          {/* Security */}
          <div className="flex items-center justify-center gap-3 mb-6 text-xs text-gray-500">
            <span>VISA</span>
            <span>MC</span>
            <span>PP</span>
            <div className="flex items-center gap-1">
              <Banknote className="w-3 h-3" />
              SECURE
            </div>
          </div>

          <Button name="Place Order" onClick={onPlaceOrder} />
        </>
      )}
    </div>
  );
};

export default OrderSummary;