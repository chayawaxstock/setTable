import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-rregistered-user',
  templateUrl: './home-rregistered-user.component.html',
  styleUrls: ['./home-rregistered-user.component.scss']
})
export class HomeRregisteredUserComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit() {
  }
  ViewingPreviousOrders()
    {
      this.route.navigate(['previousOrders']);
    }
    products()
    {
      this.route.navigate(['products']);
    }
}
