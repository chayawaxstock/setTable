import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { groupBy as _groupBy, keys as _keys } from 'lodash';
import { Router } from '@angular/router';
import { Product } from '../SHerd/models/product';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-order-by-amount-of-diners',
  templateUrl: './order-by-amount-of-diners.component.html',
  styleUrls: ['./order-by-amount-of-diners.component.scss']
})

export class OrderByAmountOfDinersComponent implements OnInit {

  allPlats:Product[]=[];
  allGlasses:Product[]=[];
  plate:number;
  glass:number;
  numDinners:number;
  constructor(public productServise: ProductsService, private route: Router,
    private sanitizer: DomSanitizer) {
  
  }

  ngOnInit() {
    this.productServise.getProductsByCategorId(1).subscribe(res=>{
      this.allPlats=res;
    })
    this.productServise.getProductsByCategorId(2).subscribe(res=>{
      this.allGlasses=res;
    })
  }

  orderByAmountOfDiners()
  {
    debugger;
    this.productServise.orderByAmountOfDiners(this.plate,this.glass,this.numDinners).subscribe(res=>{
      Swal.fire({
        position: 'center',
        title: 'מספר החבילות שהינך צריך מהצלחות הוא:'+res[0]+" "+"מספר החבילות שהינך צריך מהכוסות הוא:"+res[1],
        showConfirmButton: false,
        timer: 7000
      });
    });
  }
}