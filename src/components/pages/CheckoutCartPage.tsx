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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ShippingCard />
          <PaymentCard />
        </div>

        <OrderSummary
          promoCode={formData.promoCode}
          onPromoChange={handleInputChange}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default CheckoutCartPage;