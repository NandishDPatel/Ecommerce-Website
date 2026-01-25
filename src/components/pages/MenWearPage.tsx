import { menProducts } from "@/utils/data/data";
import ProductsGrid from "../molecules/ProductGrid";
import { sortingOptions } from "@/utils/data/data";
import FilterColumn from "../molecules/FilterColumn";
import { useState } from "react";
import ProductDetailView from "../molecules/ProductDetailsView";
import type { Product } from "@/types";

const MenWearPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter,setFilter] = useState<string>('All');

  const handleFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
  }

  const sortedProducts = [...menProducts].sort((a, b) => {
  switch (filter) {
    case "Price: Low to High":
      return a.price - b.price;

    case "Price: High to Low":
      return b.price - a.price;

    case "Popularity":
      return b.rating - a.rating;

    case "All":
    default:
      return 0;
  }
});



  return (
    <>
      <div>
        <div className="flex gap-2 p-8 mx-auto">
          <div className="mt-8">
            <FilterColumn />
          </div>
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-6">
                Men's <span className="text-teal-400">Wear</span>
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  className="px-3 py-1 text-sm border border-gray-300 bg-white
           focus:outline-none focus:ring-teal-500 focus:border-teal-500
           hover:cursor-pointer"
           onChange={(e) => handleFilterSelect(e) }
                >
                  {sortingOptions.map((item, id) => (
                    <option key={id}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <ProductsGrid
                products={sortedProducts}
                onProductClick={setSelectedProduct}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <ProductDetailView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default MenWearPage;
