import React, { useState } from "react";
import { CreditCard, Truck, Lock,  Banknote  } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/atoms/Button";

const CheckoutCart = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "cod">("card");
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    promoCode: ""
  });

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const taxRate = 0.08; // 8% tax
  const estimatedTax = subtotal * taxRate;
  const total = subtotal + shipping + estimatedTax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    console.log("Order placed:", { formData, cart, total });
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-5 h-5 text-teal-400" />
                <h2 className="text-xl font-bold text-gray-900">
                  Shipping Address
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Alex Johnson"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Eco Stream Way"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="San Francisco"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="94103"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-teal-400" />
                <h2 className="text-xl font-bold text-gray-900">
                  Payment Method
                </h2>
              </div>

              {/* Payment Method Selection */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center justify-center py-4 border-2 transition ${
                    paymentMethod === "card"
                      ? "border-teal-400 bg-teal-50"
                      : "border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <CreditCard className="w-6 h-6 mb-2 text-gray-700" />
                  <span className="text-sm font-medium text-gray-900">Card</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex flex-col items-center justify-center py-4 border-2 transition ${
                    paymentMethod === "paypal"
                      ? "border-teal-400 bg-teal-50"
                      : "border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <div className="w-6 h-6 mb-2 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">P</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">PayPal</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-col items-center justify-center py-4 border-2 transition ${
                    paymentMethod === "cod"
                      ? "border-teal-400 bg-teal-50"
                      : "border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <Banknote className="w-6 h-6 mb-2 text-gray-700" />
                  <span className="text-sm font-medium text-gray-900">COD</span>
                </button>
              </div>

              {/* Card Details (only show if card is selected) */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent pr-12"
                      />
                      <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
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
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Price Breakdown */}
              {cart.length > 0 && (
                <>
                  <div className="border-t pt-4 space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900 font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-teal-400 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Estimated Tax</span>
                      <span className="text-gray-900 font-medium">
                        ${estimatedTax.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="promoCode"
                        value={formData.promoCode}
                        onChange={handleInputChange}
                        placeholder="Promo code"
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                      />
                      <button className="px-6 py-2 bg-teal-400 text-white font-semibold hover:bg-teal-500 transition">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Security Icons */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-10 h-7 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">VISA</span>
                    </div>
                    <div className="w-10 h-7 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">MC</span>
                    </div>
                    <div className="w-10 h-7 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">PP</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Banknote className="w-3 h-3" />
                      <span>SECURE</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button className="text-center mx-auto w-full"
                    onClick={handlePlaceOrder}
                   >
                    <Button name="Place Order"/>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;