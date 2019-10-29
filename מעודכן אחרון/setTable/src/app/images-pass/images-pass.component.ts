import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from '../SHerd/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Product } from '../SHerd/models/product';
import { groupBy as _groupBy, keys as _keys } from 'lodash';
@Component({
  selector: 'app-images-pass',
  templateUrl: './images-pass.component.html',
  styleUrls: ['./images-pass.component.scss']
})
export class ImagesPassComponent implements OnInit {
  allproduct: any = [];
  qtyCart: number = 0;
  arrproduct: Product[] = [];
  colorChange: string;
  selectproduct: any = [];
  typeGroups: string[];
  colorGroups: string[];
  ModelChange: string;
  ngOnInit() {
  }
  constructor(public productServise: ProductsService, private route: Router,
    private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {
    this.productServise.getallproduct().subscribe((res: any) => {

      res.forEach(element => {
        let blob = this.dataURItoBlob(element.imgBase64);
        let url = window.URL.createObjectURL(blob);
        element.imgShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.allproduct = res;
        this.selectproduct = res;
        this.typeGroups = _keys(_groupBy(res, 'type'));
        this.colorGroups = _keys(_groupBy(res, 'color'));
        console.log('group type', this.typeGroups);
      });
    });
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

  addToCart(item) {
    debugger;
    this.productServise.validQty(item).subscribe(data => {
      debugger;
      if (data == true) {
        var products = JSON.parse(localStorage.getItem("cart"));
        this.qtyCart++;
        products.push(item);
        localStorage.setItem('cart', JSON.stringify(products))
        Swal.fire({
          position: 'center',
          title: 'המוצר נוסף לסל',
          showConfirmButton: false,
          timer: 1000
        })
      }
      else {
        Swal.fire({
          type: 'error',
          text: 'מוצר חסר במלאי',
        })
      }
    }
    )
  }

  addOfBasket() {
    this.route.navigate(['showBasket'])
  }
  less(item, i) {
    debugger;
    this.allproduct[i].qty && this.allproduct[i].qty > 0 ? this.allproduct[i].qty-- : this.allproduct[i].qty = 0
    this.cdRef.detectChanges();
  }

  add(item, i) {
    debugger;
    this.allproduct[i].qty ? this.allproduct[i].qty++ : this.allproduct[i].qty = 1;
    var p = this.allproduct;
    this.allproduct = [];
    // this.allproduct = p;
    //this.cdRef.detectChanges();
  }

  functionToCall(): void {
    debugger;
    this.selectproduct = this.allproduct.filter(p => {
      return p.color == this.colorChange && (!this.ModelChange || p.type == this.ModelChange);
    });
  }

  functionToModel(): void {
    debugger;
    this.selectproduct = this.allproduct.filter(p => {
      return p.type == this.ModelChange && (!this.colorChange || p.color == this.colorChange);
    });
  }
  orderByAmountOfDiners() {
    this.route.navigate(['orderByAmountOfDiners']);
  }
}