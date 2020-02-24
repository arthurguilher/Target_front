import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Coupon } from './coupon';

@Injectable()
export class CouponService {

    constructor(private _httpService: Http) { }

    getAllCoupons(): Observable<Coupon[]> {
        return this._httpService.get("http://localhost:8080/coupon/all")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    addCoupon(coupon: Coupon) {
        let body = JSON.parse(JSON.stringify(coupon));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/coupon/add", body, options);
    }

    deleteCoupon(couponId: string) {
        return this._httpService.delete("http://localhost:8080/coupon/delete/" + couponId);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}