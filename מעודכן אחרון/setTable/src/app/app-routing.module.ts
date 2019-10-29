import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { LoginManegerComponent } from './login-maneger/login-maneger.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { AddProductComponent } from './add-product/add-product.component';
//  import { DiagrmaComponent } from './diagrama/diagrama.component';
import { ImagesPassComponent } from './images-pass/images-pass.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';
import { HomeRregisteredUserComponent } from './home-rregistered-user/home-rregistered-user.component';
import { ShowBasketComponent } from './show-basket/show-basket.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AnnualRevenueDiagramComponent } from './annual-revenue-diagram/annual-revenue-diagram.component';
import { OrderByAmountOfDinersComponent } from './order-by-amount-of-diners/order-by-amount-of-diners.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
    {
      path:'logo',
      component:LogoComponent
    },
  {
    path:'manager',
    component:LoginManegerComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LogoComponent
  },
  {
    path:'customers',
    component:CustomerComponent
  },
  {
    path:'homeManager',
    component:HomeManagerComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'diagrama',
    component:AnnualRevenueDiagramComponent
  },
  {
    path:'products',
    component:ImagesPassComponent
  },
  {
    path:'previousOrders',
    component:PreviousOrdersComponent
  },
  {
    path:'homeRegisteredUser',
    component:HomeRregisteredUserComponent
  },
  {
    path:'showBasket',
    component:ShowBasketComponent
  },
  {
    path:'addCustomer',
    component:AddCustomerComponent
  },
  {
    path:'creditCard',
    component:CreditCardComponent
  },
  {
    path:'deleteProduct',
    component:DeleteProductComponent
  },
  {
    path:'orderByAmountOfDiners',
    component:OrderByAmountOfDinersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
