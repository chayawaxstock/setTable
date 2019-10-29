import { Component, OnInit } from '@angular/core';
import { Customer } from '../SHerd/models/customer';
import { CustomerService } from '../SHerd/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  newCustomer = new Customer();
  constructor(private customerServise: CustomerService,public route:Router) { }

  ngOnInit() {
   
  }
  onSubmit()
  {
    debugger;
    this.customerServise.addCustomer(this.newCustomer).subscribe(
      data => {
        alert("הלקוח נוסף בהצלחה");
        this.route.navigate(['creditCard']);
      })
  }
}

