import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { LoginManegerComponent } from './login-maneger/login-maneger.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgModule, enableProdMode } from '@angular/core'
import { NgxPayPalModule } from 'ngx-paypal';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ImagesPassComponent } from './images-pass/images-pass.component';
import { CaruselaComponent } from './carusela/carusela.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HomeRregisteredUserComponent } from './home-rregistered-user/home-rregistered-user.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';
import { ShowBasketComponent } from './show-basket/show-basket.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AnnualRevenueDiagramComponent } from './annual-revenue-diagram/annual-revenue-diagram.component';
import { FiltersComponent } from './filters/filters.component';
import { OrderByAmountOfDinersComponent } from './order-by-amount-of-diners/order-by-amount-of-diners.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { EditTablePlateComponent } from './edit-table-plate/edit-table-plate.component';
import { EditTableBigPlateComponent } from './edit-table-big-plate/edit-table-big-plate.component';
import { EditTableGlassComponent } from './edit-table-glass/edit-table-glass.component';
import { EditTableShowComponent } from './edit-table-show/edit-table-show.component';
import { VideoComponent } from './video/video.component';
import { SetTableEndComponent } from './set-table-end/set-table-end.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditProductComponent } from './edit-product/edit-product.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    CategoryComponent,
    LoginManegerComponent,
    CustomerComponent,
    HeaderComponent,
    HomeManagerComponent,
    AddProductComponent,
    ImagesPassComponent,
    CaruselaComponent,
    AddCustomerComponent,
    HomeRregisteredUserComponent,
    PreviousOrdersComponent,
    ShowBasketComponent,
    CreditCardComponent,
    DeleteProductComponent,
    AnnualRevenueDiagramComponent,
    FiltersComponent,
    OrderByAmountOfDinersComponent,
    EditTableComponent,
    EditTablePlateComponent,
    EditTableBigPlateComponent,
    EditTableGlassComponent,
    EditTableShowComponent,
    VideoComponent,
    SetTableEndComponent,
    EditProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    NgxPayPalModule,
    // MDBBootstrapModule.forRoot()
   // NgbModal
    
  ],
  entryComponents:[
    EditProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
