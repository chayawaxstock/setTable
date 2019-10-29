import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../SHerd/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  result: boolean;
  myFormGroup: FormGroup;
  allproduct: any[];
  constructor(public p: ProductsService, private route: Router) {
    this.myFormGroup=this.createFromGroup();
   

  }
  ngOnInit() {
    this.p.getallproduct().subscribe((res: any) => {
      this.allproduct = res;
    });
  }
  public createFromGroup(): FormGroup {
    return new FormGroup(
      {
        num: new FormControl('', [Validators.required]),
      })
  }
  onSubmit() {
    debugger;
    let form = this.myFormGroup.value;
    this.p.deleteproduct(form.num).subscribe(
      data => {
        this.result = data;
        alert("הפריט הוסר בהצלחה");
      }

    );
  }

}
