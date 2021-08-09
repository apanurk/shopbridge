import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewDetailsComponent } from './component/view-details/view-details.component';
import { CustomerComponent } from './component/customer/customer.component';
import { StockComponent } from './component/stock/stock.component';
import { PaymentComponent } from './component/payment/payment.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  // {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',  component: LoginComponent},

  {path:'register', component: RegisterComponent,pathMatch:'full'},
  {path:'products', component: ProductsComponent,pathMatch:'full'},
  {path:'products/cart', component: CartComponent,pathMatch:'full'},
  {path:'viewDetails/:id',  component: ViewDetailsComponent,pathMatch:'full'},
  {path:'viewDetails/:id/cart', component: CartComponent,pathMatch:'full'},
  {path:'customers', component: CustomerComponent},
  {path:'stocks', component: StockComponent,pathMatch:'full'},
  {path:'payment', component: PaymentComponent},
  {path:'order', component: OrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
