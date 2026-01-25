import type { Product } from "@/types";

export const menProducts: Product[] = [
  {
    id: "M001",
    name: "Premium Oxford Suit",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
    category: "Business Suits",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black"],
    description: "Premium cotton formal suit.",
    material: "Cotton",
    rating: 4.5,
    reviews: 128,
    inStock: true
  }
];
