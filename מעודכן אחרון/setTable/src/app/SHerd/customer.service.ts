import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  //הוספת לקוח
  addCustomer(c: Customer): Observable<any> {
    debugger;
    let AddCustomer = {
      "nameCustomer": c.nameCustomer,
      "password": c.password,
      "street": c.street,
      "phone": c.phone,
      "email":c.email,
    }
    return this.http.post("http://localhost:50596/api/customer/addCustomer", AddCustomer);
  }

  sendMail(products,id)
  {
    return this.http.post("http://localhost:50596/api/customer/sendEmail/"+id,products);
  }


  getAllPreviousOrders(idCustomer)
  {
    debugger;
    return this.http.get(`http://localhost:50596/api/customer/getAllPreviousOrders/${idCustomer}`);
  }
}

