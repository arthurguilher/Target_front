import { logging } from "protractor";
import { CartProduct } from "./cartProduct";

export class Cart{
    totalValue: number;
    totalValueWithDiscount: number;
    totalDiscountByItems: number;
    totalProgressiveDiscount: number;
    totalCouponDiscount: number;
    couponCode: string;
    items: CartProduct[];
    constructor(){
    
    }
}