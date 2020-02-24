import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CouponService} from './coupon.service';
import {Coupon} from './coupon';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit{

    coupons: Coupon[];
    statusMessage: string;
    coupon = new Coupon();
    
    constructor(private _couponService: CouponService,
                private _router: Router){}

    ngOnInit(): void {
        this.getCoupons();
    }

    getCoupons(): void{
        debugger
        this._couponService.getAllCoupons()
            .subscribe((couponData) => this.coupons = couponData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço.";
            }
        );
        
    }

    addCoupon(): void{
        this._couponService.addCoupon(this.coupon)
            .subscribe((response) => {console.log(response); this.getCoupons();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço.";
            }
        );   
    }

    private reset(){
        this.coupon.id = null;
        this.coupon.code = null;
        this.coupon.discountPercentage = null;
    }

    deleteCoupon(couponId: string){
        this._couponService.deleteCoupon(couponId)
            .subscribe((response) => {console.log(response); this.getCoupons();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço.";
            });
            this.reset();
    }
}