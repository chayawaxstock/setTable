import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../SHerd/products.service';
import { Product } from '../SHerd/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct = new Product();
  file: any;
  fileShow: any;
  constructor(private productServise: ProductsService, private router:Router) { }
  ngOnInit() {
  }
  filesPicked(files) {
    debugger;
     this.file = files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (e: any) => {
      debugger;
      this.fileShow = e.target.result;
    };
  }
  onSubmit() {
    this.productServise.addProduct(this.newProduct, this.file).subscribe(
      data => {
        alert("הפריט נוסף בהצלחה");
        // this.router.navigateByUrl('/home');
      }
      
    )
  }

}
