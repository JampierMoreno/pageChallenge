export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
}

export interface ProductCount extends Product {
  quantity: number;
}
