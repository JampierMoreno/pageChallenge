// --- Dependencies ---
import { Injectable } from '@angular/core';

// --- Interfaces ---
import { ProductCount, Product } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  public products: ProductCount[];

  public get getProducts() {
    return [...this.products];
  }

  public addNewProduct(product: Product) {
    const dataCurrentProducts = [...this.products];
    dataCurrentProducts.push({ ...product, quantity: 1 });
    this.products = dataCurrentProducts;
  }

  public handleCounter(name: string, action: 'remove' | 'add') {
    this.products.forEach((product, index) => {
      if (product.name === name) {
        const dataProduct = { ...product };

        if (action === 'add') {
          dataProduct.quantity += 1;
          this.products[index] = dataProduct;
        } else {
          if (dataProduct.quantity >= 2) {
            dataProduct.quantity -= 1;
            this.products[index] = dataProduct;
          } else {
            this.products.splice(index, 1);
          }
        }
      }
    });
  }

  constructor() {
    this.products = [];
  }
}
