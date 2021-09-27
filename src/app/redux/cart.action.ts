export class AddProduct {
    static readonly type = '[Cart] Add Product';
    constructor(public productId: number) { }
}