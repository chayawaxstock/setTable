import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Customer } from '../SHerd/models/customer';
import { CustomerService } from '../SHerd/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-basket',
  templateUrl: './show-basket.component.html',
  styleUrls: ['./show-basket.component.scss']
})
export class ShowBasketComponent implements OnInit {
 products=[];
  constructor( private sanitizer: DomSanitizer,public customersService:CustomerService,
  public route:Router) { }

  ngOnInit() {
     this.products = JSON.parse(localStorage.getItem("cart"));
     this.products .forEach(element => {
      let blob = this.dataURItoBlob(element.imgBase64);
      let url = window.URL.createObjectURL(blob);
      element.imgShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    });
  }

  confirm()
  {   
    if(JSON.parse(localStorage.getItem('user')))
    {
      var id=(JSON.parse(localStorage.getItem('user'))as Customer).idCustomer;
      this.customersService.sendMail(this.products,id).subscribe(res=>{
        alert('ההזמנה נוצרה בהצלחה');
      });
    }
    else {
      this.route.navigate(['addCustomer']);
      
    }  
  }

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png'
    });
  }

}
