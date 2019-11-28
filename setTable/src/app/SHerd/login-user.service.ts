import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from './models/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private httpClient:HttpClient) { }

  //פונקציה שבודקת את תקינות הפרטים של משתמש
  CheckUserDataIntegrity(nameCustomer:string,password:string):Observable<LoginUser[]>
  {
    debugger;
    return this.httpClient.get<LoginUser[]>
    (`http://localhost:50596/api/customer/CheckUserDataIntegrity/${nameCustomer}/${password}`);
  }

//פונקציה שבודקת את תקינות הפרטים של  מנהל
  CheckManegerDataIntegrity(nameCustomer:string,password:string):Observable<LoginUser[]>
  {
    debugger;
    return this.httpClient.get<LoginUser[]>
    (`http://localhost:50596/api/Managmen/validationManeger/${nameCustomer}/${password}`);
  }

}
