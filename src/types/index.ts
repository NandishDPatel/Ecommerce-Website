export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  mainImage: string;
  thumbnails : string[],
  category: string;
  sizes: string[];
  colors: Color[];
  description: string;
  material: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}


export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Collection {
  name: string,
  count ?: number
}

export interface Color {
  name: string,
  value: string
}