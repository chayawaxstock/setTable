import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { groupBy as _groupBy, keys as _keys } from 'lodash';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  ngOnInit() {
  }
  allproduct: any = [];
  selectproduct: any = [];
  typeGroups: string[];
  colorGroups: string[];

  colorChange: string;
  ModelChange: string;
  // arrproduct:Product[]=[];

  constructor(public p: ProductsService, private sanitizer: DomSanitizer) {
    this.p.getallproduct().subscribe((res: any) => {

      res.forEach(element => {
        if (!element.imgBase64.startsWith("data:")) {
          let blob = this.dataURItoBlob(element.imgBase64);
          let url = window.URL.createObjectURL(blob);
          element.imgShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        } else {
          element.imgShow = element.imgBase64;
        }

        // debugger;
        //  let img='data:image/png;base64,' + element.imgBase64;
        //  element['imgShow']= sanitizer.bypassSecurityTrustUrl(img);
      });
      this.allproduct = res;
      this.selectproduct = res;
      this.typeGroups = _keys(_groupBy(res, 'type'));
      this.colorGroups = _keys(_groupBy(res, 'color'));
      console.log('group type', this.typeGroups);
    });

  }
  functionToCall(): void {

    debugger;
    this.selectproduct = this.allproduct.filter(p => {
      return p.color == this.colorChange && (!this.ModelChange || p.type == this.ModelChange);
    });
    // this.allproduct=this.p.getallproduct();
  }
  functionToModel(): void {

    debugger;
    this.selectproduct = this.allproduct.filter(p => p.type == this.ModelChange && (!this.colorChange || p.color == this.colorChange))
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
