// --- Dependencies ---
import { Component, OnInit } from '@angular/core';

// --- Interfaces ---
import { Product } from 'src/app/pages/services/interfaces';
import { ShoppingService } from '../../pages/services/shopping.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {
  public shipping: number = 19;
  public totalPrice: number;

  public get products() {
    let temporaryPrice: number = 0;
    this.shoppingService.getProducts.forEach((product) => {
      temporaryPrice += (product.discount || product.price) * product.quantity;
    });

    this.totalPrice = temporaryPrice + this.shipping;

    return this.shoppingService.getProducts;
  }

  public updateValueCounter(name: string, action: 'remove' | 'add') {
    this.shoppingService.handleCounter(name, action);
  }

  constructor(public shoppingService: ShoppingService) {
    this.totalPrice = 0;
  }

  ngOnInit(): void {}
}
