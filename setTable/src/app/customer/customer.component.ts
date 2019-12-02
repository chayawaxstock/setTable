import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../SHerd/customer.service';
import { Customer } from '../SHerd/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
newCustomer=new Customer();
  constructor(private customerServise:CustomerService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    debugger;
    this.customerServise.addCustomer(this.newCustomer).subscribe(
      data=>{
        alert("הלקוח נוסף בהצלחה");
      }
    )
    
  }
  // sendMail()
  // {
  //   debugger;
  //   this.customerServise.sendMail().subscribe(
  //     data=>{
  //       alert("המייל נשלח בהצלחה");
  //     }
  //   );
  // }
}
