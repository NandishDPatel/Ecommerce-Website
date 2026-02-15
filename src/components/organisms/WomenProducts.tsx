import { womenProducts } from "@/utils/data/womenProducts";
import ProductsGrid from "../templates/ProductGrid";
import { sortingOptions } from "@/utils/data/data";
import FilterColumn from "../molecules/FilterColumn";
import { useState, useEffect } from "react";
import ProductDetailView from "../molecules/ProductDetailsView";
import type { Product } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faTimes } from "@fortawesome/free-solid-svg-icons";

const WomenProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const handleFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDrawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [filterDrawerOpen]);

  const sortedProducts = [...womenProducts].sort((a, b) => {
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
      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 p-4 sm:p-6 md:p-8 mx-auto max-w-7xl">
          <aside className="hidden md:block md:flex-shrink-0 mt-8">
            <FilterColumn />
          </aside>

          {filterDrawerOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setFilterDrawerOpen(false)}
                aria-hidden="true"
              />
              <div className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto md:hidden">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button
                    type="button"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    onClick={() => setFilterDrawerOpen(false)}
                    aria-label="Close filters"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className="p-4">
                  <FilterColumn />
                </div>
              </div>
            </>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 py-4 md:py-5">
              <button
                type="button"
                className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 w-fit"
                onClick={() => setFilterDrawerOpen(true)}
              >
                <FontAwesomeIcon icon={faSliders} /> Filters
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  className="px-3 py-2 text-sm border border-gray-300 bg-white rounded focus:outline-none focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
                  onChange={(e) => handleFilterSelect(e)}
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

      {selectedProduct && (
        <ProductDetailView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default WomenProducts;
