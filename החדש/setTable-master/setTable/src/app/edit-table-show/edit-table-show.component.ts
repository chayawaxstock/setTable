import { Component, OnInit } from '@angular/core';
import { EditTableService } from '../SHerd/edit-table.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from '../SHerd/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-table-show',
  templateUrl: './edit-table-show.component.html',
  styleUrls: ['./edit-table-show.component.scss']
})
export class EditTableShowComponent implements OnInit {
  imgShow: any;
num=0;
images:any[]=[];
  constructor(public setTable:EditTableService,
    private sanitizer: DomSanitizer,private productServise:ProductsService,
    private route:Router) { }

  ngOnInit() {
    this.setTable.getTable(this.setTable.plate,this.setTable.plateBig,this.setTable.glass)
    .subscribe(res=>{
      let blob = this.dataURItoBlob(res);
      let url = window.URL.createObjectURL(blob);
      this.imgShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
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

  click()
  {
    this.productServise.GetToCart(this.setTable.plate,this.setTable.glass,this.num)
    .subscribe(massage=>{
       this.route.navigate(['showBasket'])
      }

    )
    this.images=[];
    for (let index = 0; index < this.num; index++) {
      this.images.push(this.imgShow);
     
    }
  }

}