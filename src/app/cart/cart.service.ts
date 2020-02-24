import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cart } from './cart';
import { Product } from '../product/product';

@Injectable()
export class CartService {

    constructor(private _httpService: Http) { }

    getAllProducts(): Observable<Cart> {
        return this._httpService.get("http://localhost:8080/cart/showCart")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    addProduct(productId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.append('productId', productId);
        let options = new RequestOptions({ headers: headers, params: params });
        return this._httpService.post("http://localhost:8080/cart/add", null, options);
    }

    decreaseProduct(productId: string, cartId: string) {
        debugger
        let headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.append('cartId', cartId);
        let options = new RequestOptions({ headers: headers, params: params });
        return this._httpService.delete("http://localhost:8080/cart/decreaseProduct/" + productId, options);
    }

    deleteProduct(productId: string) {
        return this._httpService.delete("http://localhost:8080/cart/deleteProduct/" + productId);
    }

    applyCoupon(couponCode: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.append('couponCode', couponCode);
        let options = new RequestOptions({ headers: headers, params: params });
        return this._httpService.post("http://localhost:8080/cart/applyCoupon", null, options);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}