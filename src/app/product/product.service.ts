import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';

@Injectable()
export class ProductService {

    constructor(private _httpService: Http) { }

    getAllProducts(): Observable<Product[]> {
        return this._httpService.get("http://localhost:8080/product/all")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    addProduct(product: Product) {
        let body = JSON.parse(JSON.stringify(product));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/product/add", body, options);
    }

    deleteProduct(productId: string) {
        return this._httpService.delete("http://localhost:8080/product/delete/" + productId);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}