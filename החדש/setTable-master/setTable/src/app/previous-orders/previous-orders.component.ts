import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from '../SHerd/customer.service';
import { Customer } from '../SHerd/models/customer';
import { Router } from '@angular/router';
import { ProductsService } from '../SHerd/products.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.scss']
})

export class PreviousOrdersComponent implements OnInit {
  allOrdersPrevious:any=[];
  allproduct: any = [];
  qtyCart: number = 0;
  constructor(private customerServise:CustomerService, public productServise: ProductsService, public route:Router,private cdRef: ChangeDetectorRef) {
    var idCustomer=JSON.parse(localStorage.getItem('user'))['idCustomer'];
    // debugger;
      this.customerServise.getAllPreviousOrders(idCustomer).subscribe(p=>{
        this.allOrdersPrevious=p;
      });
   }

  ngOnInit() {
  }
  addOfBasket() {

    this.route.navigate(['showBasket'])
  }
  addToCart(item) {
     debugger;
    this.productServise.getProductByIdOrder(item.idOrder).subscribe(data => {
      debugger;
  
        var products = JSON.parse(localStorage.getItem("cart"));
        this.qtyCart++;
        data.forEach(e=>{
          products.push(e);
        })
        localStorage.setItem('cart', JSON.stringify(products))
        Swal.fire({
          position: 'center',
          title: 'המוצרים נוספו לסל',
          showConfirmButton: false,
          timer: 1000

        })
          this.route.navigate(['showBasket'])
    }
    )
  }
  less(item, i) {
    // debugger;
    this.allproduct[i].qty && this.allproduct[i].qty > 0 ? this.allproduct[i].qty-- : this.allproduct[i].qty = 0
    this.cdRef.detectChanges();
  }
  continue()
  {
    this.route.navigate(['products']);
  }
}
