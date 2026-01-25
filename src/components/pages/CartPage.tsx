import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="p-8 text-center">Your cart is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="flex gap-4 border-b py-4">
          <img src={item.image} className="w-24 h-32 object-cover" />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
