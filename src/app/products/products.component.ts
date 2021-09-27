import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from '../redux/cart.action';

@Component({
  selector: 'app-products',
  template: `
    <h1>
      Produtos
    </h1>

    <div class="container">
      <div class="product-card" *ngFor="let p of [].constructor(10); index as i">
        <h3>Produto {{ i + 1}}</h3>
        <img [src]="'' | productPicture">
        <button (click)="addToCart(i)"> Adicionar ao Carrinho </button>
      </div>
    </div>
  `,
  styleUrls: [
    './products.styles.scss'
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  randomGravatar(): string {
    return `https://www.gravatar.com/avatar/${Math.random() * 1024 + 1}?s=64&d=identicon&r=PG`
  }

  addToCart(id: number) {
    this.store.dispatch(new AddProduct(id));
  }
}
