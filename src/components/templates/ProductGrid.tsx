import type { Product } from "@/types";
import ProductCard from "../molecules/ProductCard";

interface Props {
  products: Product[];
   onProductClick: (product: Product) => void;
}

const ProductsGrid: React.FC<Props> = ({ products, onProductClick }) => {
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)}/>
      ))}
    </div>
  );
};

export default ProductsGrid;
