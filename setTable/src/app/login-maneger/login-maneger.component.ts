import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../SHerd/login-user.service';
import { LoginUser } from '../SHerd/models/login-user';
import { Router } from '@angular/router';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-maneger',
  templateUrl: './login-maneger.component.html',
  styleUrls: ['./login-maneger.component.scss']
})
export class LoginManegerComponent implements OnInit {
  loginManeger = new LoginUser();
  constructor(private loginServise: LoginUserService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    debugger;
    this.loginServise.CheckManegerDataIntegrity
      (this.loginManeger.nameCustomer, this.loginManeger.passwordCustomer)
      .subscribe(data => {
        if (data) {
          debugger;
          this.route.navigate(['homeManager'])
        }
        else {
          Swal.fire({
            type: 'error',
            text: 'מנהל לא נמצא',
          })
        }
      }
      )
  }
}

