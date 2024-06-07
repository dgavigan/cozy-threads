export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes?: string[];
  colors?: string[];
}
