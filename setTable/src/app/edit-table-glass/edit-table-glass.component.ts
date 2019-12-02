import { Component, OnInit } from '@angular/core';
import { Product } from '../SHerd/models/product';
import { EditTableService } from '../SHerd/edit-table.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-edit-table-glass',
  templateUrl: './edit-table-glass.component.html',
  styleUrls: ['./edit-table-glass.component.scss']
})
export class EditTableGlassComponent implements OnInit {

  plates: Product[]=[];
  chooseId:boolean=false;
    constructor(public setTable:EditTableService,
      private sanitizer: DomSanitizer,public route:Router) { }
  
    ngOnInit() {
      this.setTable.GetGlass().subscribe((res:Product[])=>{
        res.forEach(element => {
          let blob = this.dataURItoBlob(element['imgBase64']);
          let url = window.URL.createObjectURL(blob);
          element['imgShow'] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.plates = res;       
      })
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
  shooseImage(id)
  {
    debugger;
    this.setTable.glass=id;
    this.chooseId=true;
  }
  
  next()
  {
    // this.spinner.show();
 
    // setTimeout(() => {

    //   this.spinner.hide();
    // }, 5000);
    this.route.navigate(['editTableEnd']);
  }


}
