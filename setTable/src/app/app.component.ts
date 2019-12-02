import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public route:Router) {
    var arr = [];
    localStorage.setItem("cart", JSON.stringify(arr));
  }
  ngOnInit() {
   if(localStorage.getItem("user")){
     this.route.navigate(['homeRegisteredUser']);
   }
  }
  title = 'setTable';
}
