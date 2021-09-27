import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-cart',
  template: `
    <h1>
      Carrinho de Compras
    </h1>

    <div class="container">
      <div class="product-card" *ngFor="let product of cart; index as i">
        <h3>Produto {{ i + 1}}</h3>
        <img [src]="'' | productPicture">
        <button (click)="addToCart(i)"> Adicionar ao Carrinho </button>
      </div>
    </div>
  `,
  styleUrls: [
    './cart.styles.scss'
  ]
})
export class CartComponent implements OnInit {
  cart: number[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe(({ cart }) => {
      this.cart = cart.products;
    })
  }

}
