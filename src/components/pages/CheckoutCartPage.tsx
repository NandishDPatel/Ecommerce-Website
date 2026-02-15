import React, { useState } from "react";
import ShippingCard from "../molecules/ShippingCard";
import PaymentCard from "../molecules/PaymentCard";
import OrderSummary from "../organisms/OrderSummary";

const CheckoutCartPage = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, promoCode: value }));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-4 md:space-y-6 order-2 lg:order-1">
          <ShippingCard />
          <PaymentCard />
        </div>

        <div className="order-1 lg:order-2">
        <OrderSummary
          promoCode={formData.promoCode}
          onPromoChange={handleInputChange}
          onPlaceOrder={handlePlaceOrder}
        />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartPage;