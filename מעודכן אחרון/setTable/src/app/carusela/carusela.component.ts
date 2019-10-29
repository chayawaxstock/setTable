import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carusela',
  templateUrl: './carusela.component.html',
  styleUrls: ['./carusela.component.scss']
})
export class CaruselaComponent implements OnInit {
  ngOnInit() {
  }
  allproduct:any=[];
  constructor(public p:ProductsService, private sanitizer: DomSanitizer) {
    this.p.getallproduct().subscribe((res:any)=>{
   
      res.forEach(element => {
    
        let blob = this.dataURItoBlob(element.imgBase64);
        let url = window.URL.createObjectURL(blob);
        element.imgShow=this.sanitizer.bypassSecurityTrustResourceUrl(url);
       
        // debugger;
      //  let img='data:image/png;base64,' + element.imgBase64;
      //  element['imgShow']= sanitizer.bypassSecurityTrustUrl(img);
      });
      this.allproduct=res;
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


}
