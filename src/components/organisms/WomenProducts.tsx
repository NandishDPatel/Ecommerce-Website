// import { useCart } from "@/hooks/useCart";
// import type { Product } from "@/types";
// import { useState } from "react";
// import { ProductCard } from "../atoms/ProductCard";
// import { ProductView } from "../molecules/ProductView";
// import { womenProducts } from "@/utils/data";

// export default function WomenProducts() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const { addToCart, totalItems } = useCart();

//   return (
//     <div className="max-w-7xl mx-auto py-12">
//       <div className="grid md:grid-cols-4 gap-6">
//         {womenProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onQuickView={(p) => {
//               setSelectedProduct(p);
//               setSelectedSize(p.sizes[0]);
//             }}
//           />
//         ))}
//       </div>

//       {selectedProduct && (
//         <ProductView
//           product={selectedProduct}
//           selectedSize={selectedSize}
//           onSizeChange={setSelectedSize}
//           onClose={() => setSelectedProduct(null)}
//           onAddToCart={() => {
//             addToCart(selectedProduct, selectedSize);
//             setSelectedProduct(null);
//           }}
//         />
//       )}

//       {totalItems > 0 && (
//         <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
//           Cart: {totalItems} items
//         </div>
//       )}
//     </div>
//   );
// }
