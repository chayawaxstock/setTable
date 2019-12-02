import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../SHerd/models/product';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  result: boolean;
  myFormGroup: FormGroup;
  allproduct: any[];
  constructor(public p: ProductsService, private route: Router, private sanitizer: DomSanitizer) {
    this.myFormGroup=this.createFromGroup();
   

  }
  ngOnInit() {
    this.p.getallproduct().subscribe((res: any) => {
      res.forEach(element => {
        let blob = this.dataURItoBlob(element['imgBase64']);
        let url = window.URL.createObjectURL(blob);
        element['imgShow'] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      
    });
    this.allproduct = res;
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
  
  public createFromGroup(): FormGroup {
    return new FormGroup(
      {
        num: new FormControl('', [Validators.required]),
      })
  }
  onDelete(idProduct) {
    // debugger;
    this.p.deleteproduct(idProduct).subscribe(
      data => {
        this.result = data;
        alert("הפריט הוסר בהצלחה");
      }
    );
  }

  edit(product)
  {
    this.p.productEdit=product;
    this.route.navigate(['edit-product'])
  //  const modalRef = this.modalService.open(EditProductComponent);
  } 
}
