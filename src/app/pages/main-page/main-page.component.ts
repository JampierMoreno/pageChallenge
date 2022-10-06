import { Component, OnInit } from '@angular/core';
import { Product } from '../services/interfaces';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public products: Product[];
  public seeToast: boolean;

  public addProduct(product: Product) {
    this.shoppingService.addNewProduct(product);
    this.seeToast = true;

    setTimeout(() => {
      this.seeToast = false;
    }, 2000);
  }

  constructor(private shoppingService: ShoppingService) {
    this.products = [];
    this.seeToast = false;
  }

  ngOnInit(): void {
    this.products = [
      {
        discount: 2000,
        id: 1,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 1',
        price: 5000,
      },
      {
        discount: 2000,
        id: 2,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 2',
        price: 5000,
      },
      {
        discount: 2000,
        id: 3,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 3',
        price: 5000,
      },
      {
        discount: 2000,
        id: 4,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 4',
        price: 5000,
      },
      {
        discount: 2000,
        id: 5,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 5',
        price: 5000,
      },
      {
        discount: 2000,
        id: 6,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 6',
        price: 5000,
      },
      {
        discount: 2000,
        id: 7,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 7',
        price: 5000,
      },
      {
        discount: 2000,
        id: 8,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 8',
        price: 5000,
      },
      {
        discount: 2000,
        id: 9,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 9',
        price: 5000,
      },
      {
        discount: 2000,
        id: 10,
        image: '../../../assets/images/shoes.jpg',
        name: 'Prueba 10',
        price: 5000,
      },
    ];
  }
}
