import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Product[];
    teamId: string;
    statusMessage: string;
    product = new Product();

    constructor(private _productService: ProductService, private _cartService: CartService, private _router: Router) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this._productService.getAllProducts()
            .subscribe((productData) => this.products = productData,
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );

    }

    addProduct(): void {
        this._productService.addProduct(this.product)
            .subscribe((response) => { console.log(response); this.getProducts(); this.reset(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
    }

    private reset() {
        this.product.id = null;
        this.product.description = null;
        this.product.unitValue = null;
    }

    deleteProduct(productId: string) {
        this._productService.deleteProduct(productId)
            .subscribe((response) => { console.log(response); this.getProducts(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço";
                });
        this.reset();
    }

    addToCart(productId: string) {
        this._cartService.addProduct(productId)
            .subscribe((response) => { console.log(response); this.getProducts(); this.reset(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
        alert("Produto adicionado ao carrinho");
    }
}