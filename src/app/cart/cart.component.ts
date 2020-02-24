import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { Cart } from './cart';
import { Product } from '../product/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products: Product[];
    statusMessage: string;
    cart = new Cart();
    couponCode: string;

    constructor(private _cartService: CartService,
        private _router: Router) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this._cartService.getAllProducts()
            .subscribe((cartData) => this.cart = cartData,
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
                console.log(this.cart);
                debugger;
    }

    increaseProduct(productId: string) {
        this._cartService.addProduct(productId)
            .subscribe((response) => { console.log(response); this.getProducts(); this.getProducts(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
        alert("Quantidade aumentada com sucesso");
    }

    decreaseProduct(productId: string, cartId: string) {
        this._cartService.decreaseProduct(productId, cartId)
            .subscribe((response) => { console.log(response); this.getProducts(); this.getProducts(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
        alert("Quantidade diminuida com sucesso");
    }

    deleteProduct(productId: string) {
        this._cartService.deleteProduct(productId)
            .subscribe((response) => { console.log(response); this.getProducts(); this.getProducts(); },
                (error) => {
                    console.log(error);
                    this.statusMessage = "Problema com o serviço.";
                }
            );
        alert("Produto removido com sucesso");
    }

    applyCoupon() {
        this._cartService.applyCoupon(this.couponCode)
        .subscribe((response) => { console.log(response); this.getProducts(); this.getProducts(); },
            (error) => {
                console.log(error);
                this.statusMessage = "Problema com o serviço.";
            }
        );
        alert("Cupom aplicado com sucesso");
    }
}