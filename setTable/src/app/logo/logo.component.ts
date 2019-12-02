import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
login()
{
  this.route.navigate(['login']);
}
loginManeger()
{
  this.route.navigate(['manager']);
}
home()
{
  this.route.navigate(['products'])
}
}
