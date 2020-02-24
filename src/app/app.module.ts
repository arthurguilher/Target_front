import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CouponService } from './coupon/coupon.service';
import { ProductService } from './product/product.service';
import { CouponComponent } from './coupon/coupon.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AppChildComponent } from './appchild.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { HomeComponent } from './coupon/home.component';
import { CartService } from './cart/cart.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addCoupon', component: CouponComponent },
  { path: 'addProduct', component: ProductComponent },
  { path: 'addCart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, CouponComponent, ProductComponent, CartComponent, AppChildComponent, HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [CouponService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
