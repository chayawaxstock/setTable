import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../SHerd/models/login-user';
import { LoginUserService } from '../SHerd/login-user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser = new LoginUser();
  constructor(private loginService: LoginUserService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    debugger;
    this.loginService.CheckUserDataIntegrity
      (this.loginUser.nameCustomer, this.loginUser.passwordCustomer).
      subscribe(data => {
        debugger;
        if (data) {
          localStorage.setItem('user',JSON.stringify(data))
  
          this.route.navigate(['homeRegisteredUser'])
        }
        else
        Swal.fire({
          type: 'error',
          text: 'לקוח לא נמצא',
        })
      })
  }
}

