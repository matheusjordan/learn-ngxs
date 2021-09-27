import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddProduct } from "./cart.action";
import { CartStateModel } from "./cart.model";

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        products: []
    }
})
@Injectable({
    providedIn: 'root'
})
export class CartState {

    @Action(AddProduct)
    addProduct(ctx: StateContext<CartStateModel>, { productId }) {
        const state = ctx.getState();
        const products = [...state.products, productId];

        ctx.setState({
            ...state,
            products
        });
    }
}