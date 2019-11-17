import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../SHerd/customer.service';
import { Customer } from '../SHerd/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.scss']
})
export class PreviousOrdersComponent implements OnInit {
  allOrdersPrevious:any=[];
  constructor(private customerServise:CustomerService,public route:Router) {
    var idCustomer=JSON.parse(localStorage.getItem('user'))['idCustomer'];
    debugger;
      this.customerServise.getAllPreviousOrders(idCustomer).subscribe(p=>{
        this.allOrdersPrevious=p;
      });
   }

  ngOnInit() {
  }
  continue()
  {
    this.route.navigate(['products']);
  }
  products()
  {
    this.route.navigate(['products']);
  }
}
