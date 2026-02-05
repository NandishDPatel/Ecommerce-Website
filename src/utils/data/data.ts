import type { Collection } from "@/types";

export const sortingOptions: string[] = [
  "All",
  "Price: Low to High",
  "Price: High to Low",
  "Popularity"]

export const sizes: string[] = ['Small', 'Medium', 'Large', 'XL', 'XXL'];


export const collections: Collection[] = [
  { name: 'Business Suits', count: 12 },
  { name: 'Casual Shirts', count: 45 },
  { name: 'Denim Jeans', count: 32 },
  { name: 'Outerwear', count: 18 },
  { name: 'Footwear', count: 24 },
];