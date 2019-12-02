import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { VideoComponent } from './video/video.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { EditTablePlateComponent } from './edit-table-plate/edit-table-plate.component';
import { EditTableGlassComponent } from './edit-table-glass/edit-table-glass.component';
import { EditTableBigPlateComponent } from './edit-table-big-plate/edit-table-big-plate.component';
import { EditTableShowComponent } from './edit-table-show/edit-table-show.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [

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
    path:'edit-product',
    component:EditProductComponent
  },
  {
    path:'orderByAmountOfDiners',
    component:OrderByAmountOfDinersComponent
  },
  {
    path:'videos',
    component:VideoComponent
  },
  {
    path:'editTableAll',
    component:EditTableComponent
  },
  {
    path:'editTablePlate',
    component:EditTablePlateComponent
  },
  {
    path:'editTableGlass',
    component:EditTableGlassComponent
  },
  {
    path:'editTableBigPlate',
    component:EditTableBigPlateComponent
  },
  {
    path:'editTableEnd',
    component:EditTableShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
