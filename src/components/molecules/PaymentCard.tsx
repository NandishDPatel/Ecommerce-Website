import { Banknote, CreditCard, Lock } from "lucide-react";
import React, { useState } from "react";

const PaymentCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    promoCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "cod">(
    "card",
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-teal-400" />
          <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
        </div>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
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
    </>
  );
};

export default PaymentCard;
